export type User = {
    name: string;
    email: string;
    token: string;
    role: string;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    sold: number;
    imgUrl: string;
    description?: string;
}

export type ProductCart = {
    product: Product;
    quantity: number
}

export type Category = {
    id: number;
    name: string;
}