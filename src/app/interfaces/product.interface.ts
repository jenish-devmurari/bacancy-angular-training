import { Review } from "./review.interface";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    availability: string;
    brand: string;
    rating: number;
    reviews: Review[];
}