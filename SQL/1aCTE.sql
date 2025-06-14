--“Show the most recent transaction for each account 
-- including amount, type, and date.”
-- You are looking for a SINGLE result('most recent transaction').
-- For this you can either use a  CTE or a SUBQUERY

--==========================================================
--REWRITE CTE(Common Table Transaction) from Memory here--

































--CTE
WITH LastestTransaction AS (
    SELECT 
        t.account_id,
        t.amount,
        t.txn_type,
        t.txn_date,
        ROW_NUMBER() OVER (
            PARTITION BY t.account_id
            ORDER BY t.txn_date DESC
        ) AS rn
    FROM Transactions t
)
SELECT
    lt.account_id,
    lt.amount,
    lt.txn_type AS Type,
    lt.txn_date AS Latest_Date
FROM LastestTransaction lt
WHERE rn = 1;

SELECT 
    TABLE_NAME,
    COLUMN_NAME,
    DATA_TYPE,
    IS_NULLABLE
FROM INFORMATION_SCHEMA.COLUMNS
ORDER BY TABLE_NAME, ORDINAL_POSITION;

SELECT * FROM Accounts;