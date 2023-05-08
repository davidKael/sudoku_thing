from .dbconnection import conn

class TestDB():
    def getTest(self):
        cur = conn.cursor()

        cur.execute("SELECT * FROM stuff")
        rows = cur.fetchall()

        for row in rows:
            print(row)

        return rows