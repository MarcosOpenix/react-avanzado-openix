import { Pet } from "@/interfaces/pet";

export const columns = [
  { name: "Nombre de mascota", uid: "name" },
  { name: "Estado", uid: "status" },
  { name: "Acciones", uid: "actions" },
];

export const pets: Pet[] = [
  { id: "0", name: "Betoven", status: "success" }
]