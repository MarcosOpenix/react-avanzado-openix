import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'

interface Props {
    isOpen: boolean
    onClose: () => void;
    onConfirm: (post: Partial<Post>) => void;
}

const initialValues: Partial<Post> = {
    title: "",
    body: ""
}

const ModalPost = ({ isOpen, onClose, onConfirm }: Props) => {
    const [newPost, setNewPost] = useState<Partial<Post>>(initialValues)

    const handleConfirm = () => {
        onConfirm(newPost)
    }

    const validForm = () => {
        if (newPost.title === "" || newPost.body === "") {
            return false;
        }
        return true
    }

    const handleChangeField = (field: string, value: string) => {
        if (field === "title") {
            setNewPost({
                ...newPost,
                title: value
            })
        } else {
            setNewPost({
                ...newPost,
                body: value
            })
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent className="text-black">
                <ModalHeader className="flex flex-col gap-1">Nuevo Post</ModalHeader>
                <ModalBody>
                    <Input
                        title={"Titulo del post"}
                        color='primary'
                        label='Ingrese titulo del post'
                        value={newPost.title}
                        onChange={(e) => handleChangeField("title", e.target.value)} />
                    <Input
                        color='primary'
                        value={newPost.body}
                        label='Ingrese detalles'
                        onChange={(e) => handleChangeField("body", e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Cancelar
                    </Button>
                    <Button color="primary" onPress={handleConfirm} disabled={!validForm()}>
                        Confirmar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalPost