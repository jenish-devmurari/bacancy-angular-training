export interface IRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    hobbies: string;
    role: string;
    isActive: boolean;
    adminList?: string;
}