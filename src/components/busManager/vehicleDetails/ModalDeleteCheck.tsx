import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

const ModalDeleteCheck = ({ isOpen, onClose, onConfirm, message }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent className='text-black'>
                <ModalHeader className="flex flex-col gap-1">Confirmar Accion</ModalHeader>
                <ModalBody>
                    <div className='flex flex-col w-full'>
                        {message}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onPress={onClose}>
                        Cancelar
                    </Button>
                    <Button color="danger" onPress={onConfirm}>
                        Confirmar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalDeleteCheck
