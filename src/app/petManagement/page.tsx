import React from "react";
import { PetManagement } from "@/components/petManagement/PetManagement";

export default function Pets() {
    return (
        <main className="flex min-h-screen flex-col items-center space-y-3 p-24">
            <PetManagement />
        </main>
    );
}
