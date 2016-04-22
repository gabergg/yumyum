"""empty message

Revision ID: 7b3104ddb989
Revises: 2e4bf77b2c78
Create Date: 2016-04-21 00:01:16.416776

"""

# revision identifiers, used by Alembic.
revision = '7b3104ddb989'
down_revision = '2e4bf77b2c78'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('spots', sa.Column('google_id', sa.Integer(), nullable=True))
    op.create_unique_constraint(None, 'spots', ['google_id'])
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'spots', type_='unique')
    op.drop_column('spots', 'google_id')
    ### end Alembic commands ###
