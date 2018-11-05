export interface User {
    ID: number;
    Name: string;
    Email: string;
    Bio: string;
    ImageURL: string;
    PasswordHash: Blob;
    PasswordSalt: Blob;
}

export interface ApiUser {
    ID: number;
    Name: string;
    Email: string;
    Password: string;
}
