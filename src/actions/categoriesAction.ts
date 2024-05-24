'use server';

import { getCategories } from "@/services/apiService";

export async function fetchCategories() {
    const data = await getCategories();
    return data;
}