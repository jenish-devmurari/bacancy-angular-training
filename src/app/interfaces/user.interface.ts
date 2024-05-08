import { Member } from "./member.interface";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    hobbies: string;
    role: string;
    isActive: boolean;
    members: Member[]
}