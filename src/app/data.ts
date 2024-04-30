import { Pet } from "@/interfaces/pet";

export const columns = [
  { name: "Nombre de mascota", uid: "name" },
  { name: "Estado", uid: "status" },
  { name: "Acciones", uid: "actions" },
];

export const pets: Pet[] = [
  { id: "0", name: "Betoven", status: "success" }
]

export const storeColumns = [
  { name: "Producto", key: "productName" },
  { name: "Categoria", key: "category" },
  { name: "Precio", key: "price" },
];

export const storeProducts = [
  { key: "0", productName: "Genius Mouse", category: "Hardware", price: "11000" },
  { key: "1", productName: "Genius Teclado", category: "Hardware", price: "10000" },
  { key: "2", productName: "Windows 11", category: "Software", price: "80000" },
  { key: "3", productName: "MS Office", category: "Software", price: "45" },
  { key: "4", productName: "Lexar SSD 512GB", category: "Hardware", price: "45" },
  { key: "5", productName: "Lexar SSD 512GB", category: "Hardware", price: "45" },
  { key: "6", productName: "MS Office", category: "Software", price: "45" },
  { key: "7", productName: "Lexar SSD 512GB", category: "Hardware", price: "45" },
  { key: "8", productName: "Lexar SSD 512GB", category: "Hardware", price: "45" }
];

export const categoryProducts = ["Todos", "Hardware", "Software"]