'use client'
import { useEffect, useState } from "react"
import useApiService from '../../hooks/useApiService';
import PostDetail from "./PostDetail";
import { Avatar, Button } from "@nextui-org/react";
import ModalPost from "./ModalPost";

const Posts = () => {
    const { getPosts, createUserPost } = useApiService();
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getPosts(1, onSuccess)
    }, [])

    const onSuccess = (response: Post[]) => {
        setUserPosts(response)
    }

    const handleCreate = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleConfirm = (post: Partial<Post>) => {
        createUserPost(1, post, onSuccesCreate)
    }

    const onSuccesCreate = (response: any) => {
        console.log(response)
    }

    return (
        <div className="w-full flex flex-col space-y-4">
            <div className="flex flex-row justify-between">
                <Button onClick={handleCreate} color="primary">
                    Crear Post
                </Button>
                <div className="flex flex-row space-x-2 items-center">
                    <Avatar isBordered radius="full" size="md" src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
                    <h4 className="text-lg font-semibold leading-none text-white">Usuario 1</h4>
                </div>
            </div>
            {
                userPosts.map((value) => (
                    <PostDetail key={value.id} post={value} />
                ))
            }
            <ModalPost isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} />
        </div>
    )
}

export default Posts