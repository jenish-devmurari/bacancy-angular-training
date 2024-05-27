import { IMember } from "./member.model";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    hobbies: string;
    role: string;
    isActive: boolean;
    members: IMember[]
}