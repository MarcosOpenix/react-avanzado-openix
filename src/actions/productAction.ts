'use server';

import { getProduct, getProducts, getProductsByCategory } from "@/services/apiService";
import { Product } from "@/types/types";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts(): Promise<Product[]> {
    noStore()
    try {
        const products = await getProducts();
        return products;
    } catch (error) {
        return [];
    }
}

export async function fetchProduct(productId: string): Promise<Product | undefined> {
    noStore()
    try {
        const product = await getProduct();
        return product;
    } catch (error) {
        return undefined;
    }
}

export async function fetchProductsByCategory(categoryId: string): Promise<Product[]> {
    noStore()
    try {
        const products = await getProductsByCategory();
        return products;
    } catch (error) {
        return [];
    }
}