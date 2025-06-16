--“Show the MOST RECENT TRANSACTION for each account 
-- including amount, type, date AND client name.”

-- Adding JOINs to a CTE
-- simpley add the JOINs and the c.name in the correct places
--================================================================================
--REWRITE CTE(Common Table Transaction) from Memory here--































--CTE
;
WITH LatestTransaction AS (
	SELECT 
		t.account_id,
		t.amount,
		t.txn_type,
		t.txn_date,
		ROW_NUMBER() 
		OVER(
			PARTITION BY t.account_id
			ORDER BY t.txn_date
		) AS rn
	FROM Transactions t
)
SELECT 
	lt.account_id,
	c.name,                                         -- add the client names
	lt.amount,
	lt.txn_type AS Type,
	lt.txn_date AS Latest_Date
FROM LatestTransaction lt
JOIN Accounts a ON a.account_id = lt.account_id     --add the 2 JOINs
JOIN Clients c ON c.client_id = a.client_id
WHERE rn = 1;

SELECT * FROM Transactions lt
SELECT * FROM Accounts
SELECT * FROM Clients
SELECT * FROM Advisors