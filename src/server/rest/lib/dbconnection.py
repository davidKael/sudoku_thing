import psycopg2

conn = psycopg2.connect(
    host="sudoku_db",
    port=5432,
    user="rest_db_user",
    password="hello",
    database="sudoku_thing_db"
)
