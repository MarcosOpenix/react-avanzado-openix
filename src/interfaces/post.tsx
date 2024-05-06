interface Post {
    id: number;
    title: string;
    userId: number
    body: string;
}

interface PostComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}