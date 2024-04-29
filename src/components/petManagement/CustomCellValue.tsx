import { Pet } from "@/interfaces/pet";
import { Button, Chip, Tooltip } from "@nextui-org/react";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";

interface Props {
    pet: Pet,
    columnKey: keyof Pet;
    editValues: (pet: Pet) => void;
    deleteValues: (pet: Pet) => void;
}
export const CustomCellValue = ({ pet, columnKey, editValues, deleteValues }: Props) => {
    const cellValue = pet[columnKey];

    switch (columnKey) {
        case "name":
            return (
                <div className="text-black">{pet.name}</div>
            );
        case "status":
            return (
                <Chip color={pet.status === "success" ? "success" : "warning"} size="sm" variant="flat">
                    {pet.status === "success" ? "Listo" : "Pendiente"}
                </Chip>
            );
        case "actions":
            return (
                <div className="relative flex items-center gap-2">
                    <Tooltip content="Editar" className="text-black">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Button onClick={()=>editValues(pet)}><FaPenToSquare/></Button>
                        </span>
                    </Tooltip>
                    <Tooltip content="Eliminar" className="text-black">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Button onClick={()=>deleteValues(pet)}><FaTrashCan/></Button>
                        </span>
                    </Tooltip>
                </div>
            );
        default:
            return cellValue;
    }
}