import { ContextBusType, MyBusContext } from "@/context/BusContext";
import { useContext } from "react";

export const useBusContext = (): ContextBusType => {
    const context = useContext(MyBusContext);
    if (!context) {
      throw new Error('useMyContext debe ser utilizado dentro de un MyProvider');
    }
    return context;
  };