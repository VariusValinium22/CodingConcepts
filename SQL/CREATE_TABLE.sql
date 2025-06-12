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
