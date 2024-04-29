'use client'
import React, { useReducer } from "react";
import { pets } from "@/app/data";
import { petReducer } from "@/hooks/petReducer";
import { CustomTable } from "./CustomTable";
import { Button } from "@nextui-org/react";
import { v4 as uuidv4 } from 'uuid';
import PetForm from "./PetForm";
import { Pet } from "@/interfaces/pet";

export const statusOptions = [
    {
        label: "Listo",
        value: "success"
    },
    {
        label: "Pendiente",
        value: "warning"
    }
]

export const PetManagement = () => {
    const [state, dispatch] = useReducer(petReducer, { pets: pets, selectedPet: undefined, openedModal: false })

    const handleSubmit = (pet: Pet) => {
        if (pet.id) {
            dispatch({ type: "update_pet", pet })
        } else {
            dispatch({ type: "add_pet", newPet: { id: uuidv4(), name: pet.name, status: pet.status } });
        }
    }

    const handleCancel = () => {
        dispatch({ type: "open_close_modal" })
    }

    const handleEditPet = (pet: Pet) => {
        dispatch({ type: "select_pet", pet })
        dispatch({ type: "open_close_modal" })
    }

    const handleNewPet = () => {
        dispatch({ type: "select_pet" })
        dispatch({ type: "open_close_modal" })
    }

    const handleDelete = (pet: Pet) => {
        dispatch({ type: "delete_pet", pet });
    }

    return (
        <>
            <div className="flex flex-row justify-between align-middle w-full">
                <p>Lista de Mascotas</p>
                <Button color={"primary"} onClick={handleNewPet}>Agregar Mascota</Button>
            </div>
            <PetForm
                isOpen={state.openedModal}
                onClose={handleCancel}
                onConfirm={handleSubmit}
                petToUpdate={state.selectedPet}
            />
            <CustomTable pets={state.pets} editRow={handleEditPet} deleteRow={handleDelete} />
        </>
    );
}
