CREATE TABLE Customer (
	CustomerId int IDENTITY(1,1) PRIMARY KEY,
	LastName nvarchar(255),
    FirstName nvarchar(255),
	DateOfBirth datetime,
	Email nvarchar(255),
	PhoneNr nvarchar(255),
	AddressLine nvarchar(255)
)