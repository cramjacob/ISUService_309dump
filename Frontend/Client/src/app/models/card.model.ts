export interface Card {
    ID: number;
    Title: string;
    Description: string;
    PostDate: Date;
    Location: string;
    UserID: number;
}

export interface CreateCard {
    Title: string;
    Description: string;
    PostDate: Date;
    Location: string;
    UserID: number;
}
