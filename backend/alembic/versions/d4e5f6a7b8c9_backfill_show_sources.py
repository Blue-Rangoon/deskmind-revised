"""backfill show_sources for bots created before the setting existed

Revision ID: d4e5f6a7b8c9
Revises: b7e2f4a6c8d1
Create Date: 2026-11-14 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op

revision: str = 'd4e5f6a7b8c9'
down_revision: Union[str, None] = 'b7e2f4a6c8d1'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Every bot created before the "show sources" setting existed keeps the
    # historical behaviour: citations shown under each answer. NULL can only
    # appear on rows written before the column (or its server default) was
    # in place, so normalise them to TRUE explicitly.
    op.execute("UPDATE bots SET show_sources = TRUE WHERE show_sources IS NULL")


def downgrade() -> None:
    # Data-only normalisation — nothing to undo.
    pass
