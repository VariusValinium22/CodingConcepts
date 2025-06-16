--HAVING: 
-- "find the "









SELECT *
FROM Transactions

SELECT account_id, count(txn_type) AS total_txn_type
FROM Transactions 
WHERE txn_type = 'Deposit'
GROUP BY account_id
HAVING COUNT(txn_type) >= 2;

SELECT * FROM Advisors;