--The FOREIGN KEY in      Accounts(client_id) is referencing the PRIMARY KEY in Clients
--So...Accounts     references Clients
--An   ACCOUNT(FK)  must be tied to a valid  CLIENT → enforced by FOREIGN KEY

--The FOREIGN KEY in Transactions(account_id) is referencing the PRIMARY KEY in Accounts
--So...Transactions references Accounts
--A TRANSACTION(FK) must be tied to a valid ACCOUNT → enforced by FOREIGN KEY

--Clients have many → Accounts, Accounts have many → Transactions