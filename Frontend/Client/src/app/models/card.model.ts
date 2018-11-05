export interface Offering {
    ID: number;
    Title: string;
    Description: string;
    PostDate: Date;
    ImageURL: string;
    Location: string;
    UserID: number;
}

export interface CreateOffering {
    Title: string;
    Description: string;
    PostDate: Date;
    Location: string;
    UserID: number;
    ImageURL: string;
}
