CREATE TABLE Users
(
	Id int NOT NULL AUTO_INCREMENT,
	Email varchar(128),
	Name varchar(64),
	PasswordHash int,
	PasswordSalt int,
    PRIMARY KEY (Id)
)	

#insert into Users VALUES (444, 'john@email.com', 'John', 1, 1)