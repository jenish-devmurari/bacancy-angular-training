import { IUser } from "./user.model";

export interface IAdmin {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    hobbies: string;
    role: string;
    isActive: boolean;
    users: IUser[];
}