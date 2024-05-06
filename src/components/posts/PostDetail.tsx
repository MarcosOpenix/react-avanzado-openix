import useApiService from '@/hooks/useApiService'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

interface Props {
    post: Post
}

const PostDetail = ({ post }: Props) => {
    const { getComments } = useApiService();
    const [comments, setComments] = useState<PostComment[]>([]);

    useEffect(() => {
        getComments(post.id, onSuccess);
    }, [])

    const onSuccess = (response: PostComment[]) => {
        setComments(response);
    }

    return (
        <Card className="w-full">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{post.title}</h4>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    {post.body}
                </p>
            </CardBody>
            <CardFooter className="flex flex-col gap-3 w-full items-start">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">Commentarios</p>
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    {
                        comments.map((comment) => (
                            <div className="bg-zinc-100 text-white rounded-lg p-3">
                                <h4 className="text-small font-semibold leading-none text-default-600">{comment.name}</h4>
                                <h5 className="text-small tracking-tight text-default-400">{comment.email}</h5>
                                <p className="text-black">
                                    {comment.body}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </CardFooter>
        </Card>
    )
}

export default PostDetail