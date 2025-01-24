import { Size } from "./size.enum";

export interface Lego {
    id: number,
    name: string, 
    color: string,
    size: Size,
    price: number,
    quantity: number,
    image?: Blob,
    sets: [string]
}