'use server';

import { getCategories } from "@/services/apiService";
import { unstable_noStore as noStore } from 'next/cache';
import { Category } from '../types/types';

export async function fetchCategories():Promise<Category[]> {
    noStore()
    try {
        const categories = await getCategories();
        return categories;
    } catch (error) {
        return [];
    }
}