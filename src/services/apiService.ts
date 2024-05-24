export async function login(email: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login` ?? "", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Invalid username or password');
    }

    const data = await response.json();
    return data;
}

export async function getCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories` ?? "",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    const categories = await response.json();
    return categories;
}

export async function getProducts() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products` ?? "",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    const products = await response.json();
    return products;
}

export async function getProduct() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product` ?? "",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    const product = await response.json();
    return product;
}

export async function getProductsByCategory(categoryId?: number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category` ?? "",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    const products = await response.json();
    console.log(products)
    return products;
}