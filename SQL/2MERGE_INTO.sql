--MERGE: Merge the contents of tables: 
--   target/source/MATCHED UPDATE/NOT MATCHED INSERT VALUES
-- "Show any account in the StagingAccounts table 
--       that doesn't exist in the main Accounts table."
--If the record exists, it gets updated(unless the source is the 'source of truth' and only new rows are allowed)
--This 'fills in' missing account data if it does NOT exist.

--==========================================================
--REWRITE MERGE INTO query from Memory here--