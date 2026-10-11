"""add widget_theme column to bots

Revision ID: f3a9c1d2e4b5
Revises: 86fb2a4bd24a
Create Date: 2026-11-10 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = 'f3a9c1d2e4b5'
down_revision: Union[str, None] = '86fb2a4bd24a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        'bots',
        sa.Column('widget_theme', sa.String(), server_default='classic', nullable=True),
    )
    # Bots created before themes existed must keep rendering exactly as they
    # do today, so backfill them with the 'classic' theme explicitly instead of
    # relying on the server default (which only applies to new rows).
    op.execute("UPDATE bots SET widget_theme = 'classic' WHERE widget_theme IS NULL")


def downgrade() -> None:
    op.drop_column('bots', 'widget_theme')
