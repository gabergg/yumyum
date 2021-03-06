"""empty message

Revision ID: e3e6f262ce25
Revises: 7b3104ddb989
Create Date: 2016-04-22 10:28:54.498881

"""

# revision identifiers, used by Alembic.
revision = 'e3e6f262ce25'
down_revision = '7b3104ddb989'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('spots', 'google_id',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=255),
               existing_nullable=True)
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('spots', 'google_id',
               existing_type=sa.String(length=255),
               type_=sa.INTEGER(),
               existing_nullable=True)
    ### end Alembic commands ###
