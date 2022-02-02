import pandas as pd
import numpy as np
import os
import sqlite3
import psycopg2
import psycopg2.extras


def execute_values(conn, df, table):
    if len(df) > 0:
        df_columns = list(df)
        # create (col1,col2,...)
        columns = ",".join(df_columns)

        # create VALUES('%s', '%s",...) one '%s' per column
        values = "VALUES({})".format(",".join(["%s" for _ in df_columns]))

        #create INSERT INTO table (columns) VALUES('%s',...)
        insert_stmt = "INSERT INTO {} ({}) {}".format(table, columns, values)

        cur = conn.cursor()
        psycopg2.extras.execute_batch(cur, insert_stmt, df.values)
        conn.commit()
        cur.close()


def connect_to_dev_db():
    path = os.path.join("config", "env", ".tmp", "data.db")
    connection = sqlite3.connect(path)
    df = pd.read_sql("select * from communities", connection)
    df["show_on_map"] = True
    df["next_election"] = pd.to_datetime(df["next_election"])
    df["updated_at"] = pd.to_datetime(df["updated_at"])
    df["published_at"] = pd.to_datetime(df["published_at"])
    spread_numbers = []
    for sprd in df["project_spread_number"]:
        if sprd > 0:
            spread_numbers.append(int(sprd))
        else:
            spread_numbers.append(np.nan)
    df["project_spread_number"] = spread_numbers
    df = df.where(pd.notnull(df), None)
    df = df.replace({np.nan: None})
    connection.close()
    return df


def connect_to_prod_db(df):
    # Update connection string information
    host = ""
    dbname = ""
    user = ""
    password = ""
    sslmode = ""

    # Construct connection string
    conn_string = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(host, user, dbname, password, sslmode)
    conn = psycopg2.connect(conn_string)
    print("Connection established")
    execute_values(conn, df, "communities")
    conn.close()


if __name__ == "__main__":
    df = connect_to_dev_db()
    connect_to_prod_db(df)