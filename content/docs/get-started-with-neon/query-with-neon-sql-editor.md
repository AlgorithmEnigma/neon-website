---
title: Query with Neon's SQL Editor
enableTableOfContents: true
redirectFrom:
  - /docs/get-started-with-neon/tutorials
---

<a id="query-via-ui/"></a>

To use the SQL Editor:

1. Navigate to the [Neon console](https://console.neon.tech/).
2. Select your project.
3. Select the **SQL Editor**.
4. Select a branch and database.
5. Enter a query into the editor and click **Run** to view the results.

You can use the following queries to try the SQL Editor:

```sql
CREATE TABLE t (c int);
INSERT INTO t SELECT generate_series(1,100);
SELECT count(*) FROM t;
```

Running multiple query statements at once returns a separate result set for each statement. The result sets are displayed in separate tabs, numbered in order of execution.

<Admonition type="tip">
When querying objects such as tables and columns with upper case letters in their name, remember to enclose the identifier name in quotes. For example: `SELECT * FROM "Company"`. PostgreSQL folds identifier names to lower case unless they are quoted. The same applies when creating objects in PostgreSQL. For example, `CREATE TABLE DEPARTMENT(id INT)` creates a table named `department` in PostgreSQL. For more information about how quoted and unquoted identifiers are treated by PostgreSQL, see [Identifiers and Key Words](https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS), in the _PostgreSQL documentation_.
</Admonition>

To clear the editor, click **New Query**.

## Saving queries

The SQL Editor allows you to save your queries.

To save a query:

1. Enter the query into the editor.
2. Click **Save** to open the **SAVE QUERY** dialog.
3. Enter a name for the query and click **Save**.

The query is added to the **Saved** list in the left pane of the SQL Editor. You can rerun a query by selecting it from the **Saved** list.

You can rename or delete a saved query by selecting **Rename** or **Delete** from the the kebab menu associated with the saved query.

## Viewing the query history

The SQL Editor maintains a query history for the project. To view your query history, select **History** in the left pane of the SQL Editor. You can click an item in the **History** list to view the query that was run.

## Explain and Analyze

The Neon SQL Editor provides **Explain** and **Analyze** features.

- The **Explain** feature runs the specified query with the PostgreSQL [EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html) command, which returns the execution plan for the query. The **Explain** feature only returns a plan with estimates. It does not execute the query.
- The **Analyze** feature runs the specified query with [EXPLAIN ANALYZE](https://www.postgresql.org/docs/current/using-explain.html#USING-EXPLAIN-ANALYZE). The `ANALYZE` parameter causes the query to be executed and returns actual row counts and run times for plan nodes along with the `EXPLAIN` estimates.

Understanding the information provided by the **Explain** and **Analyze** features requires familiarity with PostgreSQL's [EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html) command and its `ANALYZE` parameter. Refer to the [EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html) documentation and the [Using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html) topic in the _PostgreSQL documentation_.

## Need help?

Send a request to [support@neon.tech](mailto:support@neon.tech), or join the [Neon community forum](https://community.neon.tech/).
