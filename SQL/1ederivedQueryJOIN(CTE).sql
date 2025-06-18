--“Show the MOST RECENT TRANSACTION for EACH ACCOUNT
--  including amount, type, and date.” --same question as 1aCTE.sql file
-- You are looking for a SINGLE result per account('most recent transaction').
-- For this you can either use a CTE or a SUBQUERY

--using a JOIN derived query(subQuery)
--used when you need aggregated values, like MAX(most recent tranaction)
--...and you want only one row per group(GROUP BY)

--==========================================================
--REWRITE DERIVED query from Memory here--
-- 1. "what defines 'one per account?" = Identify the GROUPing value...MAX(txn_date) and account_id
-- 2. "Then JOIN the 'amount', 'txn_type' back to the FULL Transaction table to get the FULL row of columns"
-- 3. "What if more than one transaction happened on the same date? I only want one" tie-breaker...MIN(txn_id)
-- 		filter using a CORRELATED SUBQUERY to compare the 'latest' results against the original MIN(txn_id) results

SELECT
	t.txn_id,
	t.account_id,
	t.amount,
	t.txn_type AS Type,
	t.txn_date AS Latest_Date
FROM Transactions t
JOIN (
	SELECT
		account_id,
		MAX(txn_date) AS max_date
	FROM Transactions
	GROUP BY account_id
) latest
	ON t.account_id = latest.account_id AND t.txn_date = latest.max_date
WHERE t.txn_id = (
	SELECT
		MIN(txn_id)
	FROM Transactions
	WHERE account_id = t.account_id AND txn_date = t.txn_date
);



--===========================================================
--using a derived query(subQuery)
SELECT
	t.account_id,
	t.amount,
	t.txn_type AS Type,
	t.txn_date AS Latest_date
FROM Transactions t
JOIN(--innerQuery/subquery: JOIN using a derived table to return the MAX(Latest Transaction Date)
	SELECT 
		account_id, 
		MAX(txn_date) AS max_date
	FROM Transactions
	GROUP BY account_id
) latest ON 
	t.account_id = latest.account_id 
	AND t.txn_date = latest.max_date;
-- PROBLEM: if two transactions have the same txn_date, they both match — so you'll get duplicates.

--  A valid PURE subquery JOIN approach
-- 		Gets the latest txn_date per account
-- 		Applies a MIN(txn_id) as a tiebreaker only when multiple rows share that date
-- 		Still includes accounts that only have ONE transaction (no tie to break)
SELECT 
    t.account_id,
    t.amount,
    t.txn_type AS Type,
    t.txn_date AS Latest_Date
FROM Transactions t
JOIN (
    SELECT account_id, MAX(txn_date) AS max_date
    FROM Transactions
    GROUP BY account_id
) latest ON 
    t.account_id = latest.account_id AND t.txn_date = latest.max_date
WHERE t.txn_id = (											  --a correlated subquery used as a filter to compare t.txn_id vs txn_id
    SELECT MIN(txn_id)							  			  --subquery finds the MIN txn_id from the MAIN Query
    FROM Transactions
    WHERE account_id = t.account_id AND txn_date = t.txn_date --Where account_id and txn_date match
);

