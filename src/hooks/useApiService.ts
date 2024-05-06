import { createPost, getPostsByUser } from "@/services/apiService";
import { getCommentsByPost } from '../services/apiService';

const useApiService = () => {

    const getPosts = (id: number, onSuccess: Function) => {
        getPostsByUser(id)
            .then((response: Post[]) => {
                onSuccess(response)
            })

    };

    const getComments = (id: number, onSuccess: Function) => {
        getCommentsByPost(id)
            .then((response: Post[]) => {
                onSuccess(response)
            })
    };

    const createUserPost = (id: number,post: Partial<Post>, onSuccess: Function) => {
        createPost(id, post)
            .then((response: Post[]) => {
                onSuccess(response)
            })
    };

    return {
        getPosts,
        getComments,
        createUserPost
    }
};

export default useApiService;
