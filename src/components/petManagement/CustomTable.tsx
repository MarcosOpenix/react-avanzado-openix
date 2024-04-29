'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { columns } from "@/app/data";
import { Pet } from "@/interfaces/pet";
import { CustomCellValue } from "./CustomCellValue";

interface Props {
  pets: Pet[];
  editRow: (pet:Pet) => void;
  deleteRow: (pet: Pet) => void;
}

export const CustomTable = ({pets, deleteRow, editRow}:Props) => {

    return (
        <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={pets}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell><CustomCellValue columnKey={columnKey} pet={item} editValues={editRow} deleteValues={deleteRow}/></TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
