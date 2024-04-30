'use client'
import React, { ChangeEvent, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Input, Select, SelectItem } from "@nextui-org/react";
import { categoryProducts, storeColumns, storeProducts } from "@/app/data";

interface Product {
    key: string;
    productName: string;
    category: string;
    price: string;
}

export default function OnlineStore() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [price, setPrice] = useState<string>("")
    const filteredData: Product[] = useMemo(() => {
        let filteredItems: Product[] = storeProducts
        if (selectedCategory != "Todos") {
            filteredItems = storeProducts.filter((value) => (value.category === selectedCategory))
        }
        if (price != "") {
            filteredItems = filteredItems.filter((value) => (value.price === price))
        }
        return filteredItems
    }, [price, selectedCategory])

    const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    }

    const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value)
    }

    return (
        <div className="w-full space-y-5">
            <p className="w-full text-2xl text-center">Tienda Online</p>
            <div className="flex flex-row w-full justify-between">
                <Input
                    label="Ingrese Precio"
                    type="number"
                    className="w-80 max-w-xs"
                    value={price}
                    onChange={handleChangePrice}
                    color="primary"
                />
                <Select
                    label="Categoria"
                    className="max-w-xs"
                    onChange={handleChangeCategory}
                    defaultSelectedKeys={["Todos"]}
                    disallowEmptySelection
                    color="primary"
                >
                    {categoryProducts.map((category) => (
                        <SelectItem key={category} value={category} className="text-black">
                            {category}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <Table aria-label="Example table with dynamic content" className="text-black">
                <TableHeader columns={storeColumns}>
                    {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
                </TableHeader>
                <TableBody items={filteredData}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
