export interface CompanyFormData {
    name: string;
    email: string;
    phone: string;
    website: string;
    projects: { name: string, description: string, startDate: string, endDate: string }[];
}