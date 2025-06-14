--“Show the most recent transaction for each account 
-- including amount, type, and date.” --same question as 1aCTE.sql file
-- You are looking for a SINGLE result('most recent transaction').
-- For this you can either use a  CTE or a SUBQUERY

--using a JOIN derived query(subQuery)
--used when you need aggregated values, like MAX(most recent tranaction)
--...and you want only one row per group(GROUP BY)

--==========================================================
--REWRITE DERIVED query from Memory here--
























--using a derived query(subQuery)
SELECT
	t.account_id,
	t.amount,
	t.txn_type AS Type,
	t.txn_date AS Latest_date
FROM Transactions t
JOIN(--innerQuery/subquery: JOIN using a derived table to return the MAX(Latest Transaction Date)
	SELECT account_id, MAX(txn_date) AS max_date
	FROM Transactions
	GROUP BY account_id
) latest ON t.account_id = latest.account_id AND t.txn_date = latest.max_date;