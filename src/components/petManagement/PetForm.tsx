import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from '@nextui-org/react'
import React, { useLayoutEffect, useState } from 'react'
import { statusOptions } from './PetManagement';
import { Pet } from '@/interfaces/pet';
const initialValue = {
    name: "",
    status: ""
}
interface Props {
    isOpen: boolean;
    petToUpdate?: Pet;
    onClose: () => void;
    onConfirm: (newPet: Pet) => void;
}
const PetForm = ({ isOpen, onClose, onConfirm, petToUpdate }: Props) => {
    const [newPet, setNewPet] = useState(initialValue);

    useLayoutEffect(() => {
        setNewPet(petToUpdate ?? initialValue)
    }, [petToUpdate])
    
    const handleChangePetValue = (field: string, value: string) => {
        if (field === "name") {
            setNewPet({ ...newPet, name: value })
        } else {
            setNewPet({ ...newPet, status: value })
        }
    }

    const validForm = () => {
        if (newPet.name != "" && newPet.status != "") {
            return true
        }
        return false
    }

    const handleConfirm = () => {
        if(petToUpdate?.id){
            onConfirm({...newPet, id: petToUpdate.id});
        }else{
            onConfirm(newPet)
        }
        setNewPet(initialValue);
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-black">{petToUpdate ? "Editar Mascota" : "Agregar Nueva Mascota"}</ModalHeader>
                        <ModalBody>
                            <div className="flex flex-row space-x-5">
                                <Input
                                    label={"Nombre de la mascota"}
                                    className="min-w-48"
                                    color="primary"
                                    value={newPet.name}
                                    onChange={(e) => handleChangePetValue("name", e.target.value)}
                                />
                                <Select
                                    label="Estado"
                                    className="min-w-48"
                                    color="primary"
                                    selectedKeys={[newPet.status]}

                                    onChange={(e) => handleChangePetValue("status", e.target.value)}
                                >
                                    {statusOptions.map((opt) => (
                                        <SelectItem key={opt.value} value={opt.value} className="text-black">
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cancelar
                            </Button>
                            <Button
                                disabled={!validForm()}
                                color="primary"
                                onClick={() => handleConfirm()}
                            >
                                {petToUpdate?.id ? "Modificar" : "Agregar"}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default PetForm