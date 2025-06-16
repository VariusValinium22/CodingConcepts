-- Regular Tables

-- Show all clients with no accounts.
-- Show all clients who have accounts but no transactions.
-- Show clients who have at least one transaction.
-- Show total number of transactions per client
-- Show total amount tranacted per client

--===================================================================================
--Show all clients with no accounts.
SELECT *
FROM Clients c
LEFT JOIN Accounts a ON c.client_id = a.client_id
WHERE a.account_id IS NULL;

--Show all clients who have accounts but no transactions.
SELECT 
	c.name, 
	a.account_id, 
	t.txn_type, 
	t.txn_date
FROM Clients c
LEFT JOIN Accounts a ON c.client_id = a.client_id
LEFT JOIN Transactions t ON t.account_id = a.account_id
WHERE 
	a.account_id IS NOT NULL
	AND t.txn_type IS NULL

-- Show clients who have at least one transaction.
SELECT 
	c.name AS client_name, 
	a.account_id, 
	--t.txn_type, 
	--t.txn_date, 
	COUNT(t.txn_type) AS txnCount --added
FROM Clients c
LEFT JOIN Accounts a ON c.client_id = a.client_id
LEFT JOIN Transactions t ON t.account_id = a.account_id
--WHERE 
--	a.account_id IS NOT NULL
--	AND t.txn_type IS NULL
GROUP BY c.name, a.account_id	 --added
HAVING COUNT(t.txn_type) > 1	 --added

--Show total number of transactions per client
SELECT c.client_id, c.name, COUNT(t.txn_id) AS count_of_transactions
FROM Clients c
LEFT JOIN Accounts a ON c.client_id = a.client_id
LEFT JOIN Transactions t ON a.account_id = t.account_id
GROUP BY c.client_id, c.name;

--Show total amount tranacted per client
SELECT c.client_id, c.name, SUM(t.amount) AS total_amount
FROM Clients c
LEFT JOIN Accounts a ON c.client_id = a.client_id
LEFT JOIN Transactions t ON a.account_id = t.account_id
GROUP BY c.client_id, c.name;

