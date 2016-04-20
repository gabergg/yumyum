"""empty message

Revision ID: 2e4bf77b2c78
Revises: cc4b546c3fbb
Create Date: 2016-04-19 21:47:28.607221

"""

# revision identifiers, used by Alembic.
revision = '2e4bf77b2c78'
down_revision = 'cc4b546c3fbb'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('ratings', sa.Column('spot_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'ratings', 'spots', ['spot_id'], ['id'])
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'ratings', type_='foreignkey')
    op.drop_column('ratings', 'spot_id')
    ### end Alembic commands ###