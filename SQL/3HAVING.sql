--HAVING: 
-- "find the amount of Transactions per account"

 --================================================================================
--REWRITE the queries from Memory here--














--===================================================================================
SELECT * FROM Transactions;

SELECT * FROM Advisors;

SELECT account_id, count(txn_id) AS total_transactions
FROM Transactions 
GROUP BY account_id
HAVING COUNT(txn_id) >= 2;

