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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories` ?? "");
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categories = await response.json();
  return categories;
}