"""add show_sources column to bots

Revision ID: b7e2f4a6c8d1
Revises: f3a9c1d2e4b5
Create Date: 2026-11-11 00:00:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = 'b7e2f4a6c8d1'
down_revision: Union[str, None] = 'f3a9c1d2e4b5'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        'bots',
        sa.Column(
            'show_sources',
            sa.Boolean(),
            server_default=sa.text('true'),
            nullable=False,
        ),
    )


def downgrade() -> None:
    op.drop_column('bots', 'show_sources')