export const GENDERS: string[] = ['Male', 'Female', 'Third gender'];
export const HOBBIES: string[] = ['Cricket', 'Chess', 'Badminton', 'Coding'];
export const ROLES: string[] = ['Admin', 'User'];
export const ROLESOFMEMBERS: string[] = [
    'Production Worker',
    'Quality Control Inspector',
    'Machine Operator',
    'Team Leader',
    'Safety Officer',
    'Supply Chain Manager'
];
export const maleImageUrl: string = "assets/male.png";
export const femaleImageUrl: string = "assets/female.png";
export const thirdGenderImageUrl: string = "assets/default.png";
export function getGenderImageUrl(gender: string): string {
    switch (gender.toLowerCase()) {
        case 'male':
            return maleImageUrl;
        case 'female':
            return femaleImageUrl;
        case 'third gender':
            return thirdGenderImageUrl;
        default:
            return thirdGenderImageUrl;
    }
}
export const key: string = 'Users';
export const keyOfLoggedUser: string = 'loggedIn';
export const emailRegex: string = "^[a-z]{1}[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,6}$"
export const passwordRegex: string = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$'
