--“Show the MOST RECENT TRANSACTION for EACH ACCOUNT
--  including amount, type, and date.”
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
        ROW_NUMBER()                        --window function, give each row a ROW_NUMBER
        OVER (                              --apply that numbering OVER the rows
            PARTITION BY t.account_id       --PARTITIONs the data into groups BY account_ids NOTE: Remove PARTITION line for the Latest for ALL accounts
            ORDER BY t.txn_date DESC        --ORDERs BY(sorts) the rows by the date DESC 
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
