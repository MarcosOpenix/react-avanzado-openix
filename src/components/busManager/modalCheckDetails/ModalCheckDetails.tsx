import { useBusContext } from '@/hooks/useBusContext'
import { Button, DatePicker, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import { useState, useLayoutEffect } from 'react';
import { CalendarDate, parseDate } from "@internationalized/date";
import { CheckPointDetailsResponse } from '@/interfaces/busManager';


interface FormValues {
    checkPoint: string;
    doneDate: CalendarDate | null;
    done: string;
}

interface Props {
    onClose: () => void;
    onConfirm: (data?: CheckPointDetailsResponse) => void;
    isOpen: boolean
}

const initialValue: FormValues = {
    checkPoint: "",
    doneDate: null,
    done: "0",
}

const ModalCheckDetails = ({ onClose, onConfirm, isOpen }: Props) => {
    const { state } = useBusContext();
    const [formValues, setFormValues] = useState<FormValues>(initialValue)

    useLayoutEffect(() => {
        state.selectedVehicle && getCheckPointDetail()
    }, [state.selectedCheckPoint])

    const getCheckPointDetail = () => {
        const aux = state.vehicles.find(value => value.dominio === state.selectedVehicle);
        const auxCheckStatus = aux?.checkPoints.find(check => check.checkPointId === Number(state.selectedCheckPoint));
        setFormValues({
            checkPoint: auxCheckStatus?.checkPointId.toString() ?? "",
            doneDate: auxCheckStatus?.dateDone ? parseDate(auxCheckStatus?.dateDone) : null,
            done: auxCheckStatus?.done ? "1" : "0"
        })
    }

    const handleClose = () => {
        setFormValues(initialValue);
        onClose()
    }

    const handleChange = (field: string, value: string | CalendarDate | null) => {
        switch (field) {
            case "checkPoint":
                setFormValues({ ...formValues, checkPoint: value as string })
                break;
            case "dateDone":
                setFormValues({ ...formValues, doneDate: value as CalendarDate })
                break;
            case "done":
                setFormValues({ ...formValues, done: value as string })
                break;
            default:
                break;
        }
    }

    const handleSubmit = () => {
        const data: CheckPointDetailsResponse = {
            checkPointId: Number(formValues.checkPoint),
            dateDone: formValues.doneDate?.toString() ?? "",
            done: formValues.done === "0" ? false : true
        }
        onConfirm(data)
    }

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalContent className='text-black'>
                <ModalHeader className="flex flex-col gap-1">{state.selectedCheckPoint ? "Editar Punto de Inspeccion" : "Formulario de puntos de inspeccion"}</ModalHeader>
                <ModalBody>
                    <div className='flex flex-col w-full space-y-3'>
                        <Select
                            label={"Seleccione el punto de inspeccion"}
                            className='text-black'
                            selectedKeys={[formValues.checkPoint]}
                            onChange={(e) => handleChange("checkPoint", e.target.value)}
                        >
                            {state.checkPoints.map((checkPoint) => (
                                <SelectItem className='text-black' key={checkPoint.IdPunto} value={checkPoint.IdPunto}>
                                    {checkPoint.Punto}
                                </SelectItem>
                            ))}
                        </Select>
                        <DatePicker onChange={(e) => handleChange("dateDone", e.copy())} label="Seleccione fecha de control" value={formValues.doneDate} />
                        <RadioGroup
                            label="Seleccione estado del control"
                            orientation="horizontal"
                            value={formValues.done}
                            onValueChange={(e) => handleChange("done", e)}
                        >
                            <Radio value="0">Pendiente</Radio>
                            <Radio value="1">Finalizado</Radio>
                        </RadioGroup>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={handleClose}>
                        Cancelar
                    </Button>
                    <Button color="primary" onPress={handleSubmit}>
                        Confirmar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalCheckDetails
