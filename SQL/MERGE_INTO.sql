--MERGE: Merge the contents of tables: 
--   target/source/MATCHED UPDATE/NOT MATCHED INSERT VALUES
-- "Show any account in the StagingAccounts table 
--       that doesn't exist in the main Accounts table."
MERGE INTO Accounts AS target
USING StagingAccounts AS source
ON target.account_id = source.account_id
WHEN MATCHED THEN
    UPDATE SET target.balance = source.balance
WHEN NOT MATCHED THEN
    INSERT(account_id, client_id, balance)
    VALUES(source.account_id, 3, source.balance)

