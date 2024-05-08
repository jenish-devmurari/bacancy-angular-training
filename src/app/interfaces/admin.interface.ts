import { User } from "./user.interface";

export interface Admin {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    hobbies: string;
    role: string;
    isActive: boolean;
    users: User[]
}