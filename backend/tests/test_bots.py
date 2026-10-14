"""Bot endpoint tests."""

from __future__ import annotations

import pytest
from fastapi import status

from app.models import Bot


class TestBots:
    def test_create_bot(self, client, test_user: User, db):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.post(
            "/bots",
            json={"name": "My Bot"},
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_201_CREATED
        data = response.json()
        assert data["name"] == "My Bot"
        assert data["user_id"] == str(test_user.id)
        assert data["document_count"] == 0

    def test_list_bots(self, client, test_user: User, test_bot: Bot, db):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.get(
            "/bots",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert len(data) == 1
        assert data[0]["id"] == str(test_bot.id)
        assert data[0]["document_count"] == 0

    def test_get_bot(self, client, test_user: User, test_bot: Bot):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.get(
            f"/bots/{test_bot.id}",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert data["id"] == str(test_bot.id)
        assert data["name"] == "Test Bot"

    def test_get_bot_not_found(self, client, test_user: User):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.get(
            f"/bots/{__import__('uuid').uuid4()}",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_404_NOT_FOUND

    def test_update_bot(self, client, test_user: User, test_bot: Bot):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.patch(
            f"/bots/{test_bot.id}",
            json={"name": "Updated Bot", "widget_color": "#ff0000"},
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert data["name"] == "Updated Bot"
        assert data["widget_color"] == "#ff0000"

    def test_update_bot_show_sources_flows_to_public_config(
        self, client, test_user: User, test_bot: Bot
    ):
        """Toggling "show sources" in the bot settings must persist, read back
        for the dashboard and be exposed on the public /config the widget uses."""
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.patch(
            f"/bots/{test_bot.id}",
            json={"show_sources": False},
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["show_sources"] is False

        response = client.get(
            f"/bots/{test_bot.id}",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["show_sources"] is False

        response = client.get(f"/bots/{test_bot.id}/config")
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["show_sources"] is False

        # ...and switching it back on is honoured too.
        response = client.patch(
            f"/bots/{test_bot.id}",
            json={"show_sources": True},
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["show_sources"] is True

    def test_legacy_bot_without_show_sources_defaults_to_enabled(self):
        """Bots written before the setting existed (NULL column) keep the
        historical behaviour: citations shown."""
        from app.models.bot import show_sources_enabled

        legacy_bot = Bot(name="legacy")
        legacy_bot.show_sources = None
        assert show_sources_enabled(legacy_bot) is True

        legacy_bot.show_sources = False
        assert show_sources_enabled(legacy_bot) is False

    def test_update_bot_widget_theme(self, client, test_user: User, test_bot: Bot):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.patch(
            f"/bots/{test_bot.id}",
            json={"widget_theme": "cyber"},
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["widget_theme"] == "cyber"

    def test_update_bot_rejects_unknown_widget_theme(
        self, client, test_user: User, test_bot: Bot
    ):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.patch(
            f"/bots/{test_bot.id}",
            json={"widget_theme": "not-a-theme"},
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_legacy_bot_without_theme_reports_classic(
        self, client, test_user: User, test_bot: Bot, db
    ):
        """Bots created before themes existed (widget_theme IS NULL) must
        report 'classic' so the widget and dashboard render as before."""
        from app.utils.security import create_access_token

        test_bot.widget_theme = None
        db.commit()

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.get(
            f"/bots/{test_bot.id}/config",
        )
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["widget_theme"] == "classic"

        response = client.get(
            f"/bots/{test_bot.id}",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["widget_theme"] == "classic"

    def test_delete_bot(self, client, test_user: User, test_bot: Bot, db):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.delete(
            f"/bots/{test_bot.id}",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_204_NO_CONTENT
        assert db.get(Bot, str(test_bot.id)) is None

    def test_user_cannot_access_other_users_bot(
        self, client, test_user: User, test_user2: User, test_bot_user2: Bot
    ):
        from app.utils.security import create_access_token

        token = create_access_token(data={"sub": str(test_user.id)})
        response = client.get(
            f"/bots/{test_bot_user2.id}",
            headers={"Authorization": f"Bearer {token}"},
        )
        assert response.status_code == status.HTTP_404_NOT_FOUND
