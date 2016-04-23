"""empty message

Revision ID: 6b28633f9d49
Revises: e3e6f262ce25
Create Date: 2016-04-22 10:48:18.219447

"""

# revision identifiers, used by Alembic.
revision = '6b28633f9d49'
down_revision = 'e3e6f262ce25'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(u'ratings_author_key', 'ratings', type_='unique')
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(u'ratings_author_key', 'ratings', ['author'])
    ### end Alembic commands ###