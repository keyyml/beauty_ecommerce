"""updated repr

Revision ID: 9c9b87386256
Revises: fc154a4fbd68
Create Date: 2023-11-15 22:00:23.130092

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9c9b87386256'
down_revision = 'fc154a4fbd68'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column('color', sa.String(), nullable=True))
        batch_op.drop_column('description')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('color')

    # ### end Alembic commands ###