/* 
CREATE TABLE Clients (
    client_id INT PRIMARY KEY,
    name VARCHAR(100),
    status VARCHAR(50),
    advisor_id INT
);

CREATE TABLE Accounts (
    account_id INT PRIMARY KEY,
    client_id INT,
    balance DECIMAL(18, 2),
    FOREIGN KEY (client_id) REFERENCES Clients(client_id)
);

CREATE TABLE Advisors (
    advisor_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Transactions (
    txn_id INT PRIMARY KEY,
    account_id INT,
    txn_type VARCHAR(50),
    amount DECIMAL(18, 2),
    txn_date DATE,
    FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);

CREATE TABLE SystemErrors (
    error_id INT IDENTITY(1,1) PRIMARY KEY,
    source VARCHAR(100),
    severity VARCHAR(50),
    message TEXT,
    occurred_at DATETIME
);

CREATE TABLE StagingAccounts (
    account_id INT PRIMARY KEY,
    balance DECIMAL(18, 2)
);
 */

--populate ALL the data for these three RELATED tables:

SELECT * FROM Clients;
SELECT * FROM Accounts;
SELECT * FROM Transactions;

SELECT
    c.client_id,
    c.name, 
    c.status,
    a.account_id,
    a.balance,
    t.amount,
    t.txn_date,
    t.txn_id,
    t.txn_type,
    c.advisor_id 
FROM Clients c
LEFT OUTER JOIN Accounts a ON c.client_id = a.client_id
LEFT OUTER JOIN Transactions t ON a.account_id = t.account_id;

--Inserting NEW DATA in this order:
--1. Insert into Clients, Because Accounts references client_id
--2. Insert into Accounts, Now that client_id exists, you can insert into Accounts
--3. Insert into Transactions, Now that account_id exists, you can insert into Transactions
--4. Advisors has no dependencies. Just use 1 or 2.
--5. SystemErrors has no dependencies.
--6. StagingAccounts has no dependencies.

SELECT * FROM Clients;
SELECT TOP 1 * FROM Clients
ORDER BY client_id DESC;

SELECT * FROM Advisors;

SELECT TOP 3 * FROM Accounts
ORDER BY account_id DESC;

SELECT TOP 5 * FROM Transactions
ORDER BY account_id DESC;

INSERT INTO Clients (client_id, name, status, advisor_id)
VALUES
(4, 'Martin', 'Active', 2),
(5, 'Lena', 'Active', 2),
(6, 'Drew', 'Inactive', 1),
(7, 'Chaz', 'Pending', 2);


INSERT INTO Accounts (account_id, client_id, balance)
VALUES
(103, 4, 77000),
(104, 5, 125000),
(105, 6, 89000);

INSERT INTO Transactions (txn_id, account_id, txn_type, amount, txn_date)
VALUES
(4, 103, 'Deposit', 23300, '2025-06-14'),
(5, 103, 'Deposit', 99000, '2025-06-14'),
(6, 104, 'Deposit', 5000, '2025-06-14'),
(7, 104, 'Withdraw', 1000, '2025-06-15'),
(8, 105, 'Deposit', 30000, '2025-06-14'),
(9, 105, 'Withdraw', 12000, '2025-06-16');



