FROM postgres

ENV POSTGRES_USER rest_db_user
ENV POSTGRES_PASSWORD hello
ENV POSTGRES_DB sudoku_thing_db


COPY init_tables.sql /docker-entrypoint-initdb.d/
