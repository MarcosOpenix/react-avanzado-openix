'use server';

import { getCategories } from "@/services/apiService";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCategories() {
    noStore()
    try {
        const categories = await getCategories();
        return categories;
    } catch (error) {
        return [];
    }
}