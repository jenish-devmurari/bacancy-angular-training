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