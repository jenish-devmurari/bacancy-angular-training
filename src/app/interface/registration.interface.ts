export interface Registration {
    firstName: string;
    lastName: string;
    totalMatchesPlayed?: number;
    phoneNumber: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    height?: number;
    weight?: number;
}