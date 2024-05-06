import ModalPost from "@/components/posts/ModalPost";
import Posts from "@/components/posts/Posts";
import { createPost, getCommentsByPost, getPostsByUser } from "@/services/apiService";
import { act, fireEvent, render, screen } from '@testing-library/react';

const userId = 1;
const postId = 1;

// describe('getPostsByUser', () => {
//     it('get posts by userId', async () => {
//         const posts = await getPostsByUser(userId);
//         expect(posts).toBeDefined();
//         expect(posts.length).toBeGreaterThan(0);
//     });
// });

// describe('getCommentsByPost', () => {
//     it('get comments by postId', async () => {
//         const comments: Comment[] = await getCommentsByPost(postId);
//         expect(comments.length).toBeGreaterThan(0);
//     });
// });

// describe('createPost', () => {
//     it('create a user post', async () => {
//         const newPost: Partial<Post> = {
//             title: "Openix",
//             body: "Detalles"
//         }
//         const postCreated: Post = await createPost(userId, newPost);
//         expect(typeof postCreated.id === "number").toBe(true)
//     });
// });

global.fetch = () => Promise.resolve({
    status: 200,
    json: () => Promise.resolve([])
} as Response)

describe("Test button: Crear Post", () => {
    test('', async () => {
        await act(async () => { render(<Posts />); })
        expect(screen.queryByText("Crear Post")).toBeTruthy()
    })
})

describe("Test button action: Crear Post", () => {
    test('', async () => {
        await act(async () => { render(<Posts />); })
        const mybutton = screen.getByText("Crear Post");
        fireEvent.click(mybutton);
        expect(screen.queryByText("Confirmar")).toBeTruthy();
    })
})

test('change title and body of new post', async () => {
    await act(async () => { render(<ModalPost isOpen onClose={() => { }} onConfirm={() => { }} />); });
    const titleInput: HTMLInputElement = screen.getByLabelText('Ingrese titulo del post');
    const bodyInput: HTMLInputElement = screen.getByLabelText('Ingrese detalles');
    fireEvent.change(titleInput, {target: { value: "Openix test"}});
    fireEvent.change(bodyInput, {target: {value: "Detalles"}})
    console.log('title:', titleInput.value)
    console.log('body:', bodyInput.value)
    expect(titleInput.value).toBe("Openix test")
    expect(bodyInput.value).toBe("Detalles")
})
