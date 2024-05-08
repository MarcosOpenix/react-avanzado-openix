import { BusReducerActions } from '@/context/BusContext'
import { useBusContext } from '@/hooks/useBusContext'
import { CheckPoint, CheckPointDetailsResponse } from '@/interfaces/busManager'
import { Button, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { Key, useCallback, useEffect, useState } from 'react'
import ModalCheckDetails from '../modalCheckDetails/ModalCheckDetails'
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6'
import ModalDeleteCheck from './ModalDeleteCheck'

const columns = [
  {
    key: "point",
    label: "Punto"
  },
  {
    key: "group",
    label: "Grupo"
  },
  {
    key: "controlDate",
    label: "Fecha de control"
  },
  {
    key: "status",
    label: "Estado"
  },
  {
    key: "actions",
    label: "Acciones"
  }
]

interface CheckPointDetails {
  done: boolean;
  dateDone: string;
  checkPoint?: CheckPoint
}

const CheckPointsVehicleTable = () => {
  const { state, dispatch } = useBusContext();
  const [checkPointsDetails, setCheckPointsDetails] = useState<CheckPointDetails[]>([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalCheckForm, setShowModalCheckForm] = useState(false);

  useEffect(() => {
    getData()
  }, [state.selectedVehicle, state.vehicles])

  const renderCell = useCallback((checkPoint: CheckPointDetails, columnKey: Key) => {
    switch (columnKey) {
      case "point":
        return (checkPoint.checkPoint?.Punto);
      case "group":
        return (checkPoint.checkPoint?.Grupo);
      case "controlDate":
        return (checkPoint.dateDone);
      case "status":
        return (
          <Chip className="capitalize" color={checkPoint.done ? "success" : "warning"} size="sm" variant="flat">
            {checkPoint.done ? "Realizado" : "Pendiente"}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Button
              startContent={<FaPenToSquare size={"20px"} />}
              className='text-black border-none bg-transparent min-w-0 w-fit px-0'
              onClick={() => handleShowModalForm(checkPoint.checkPoint?.IdPunto)}
            />
            <Button
              startContent={<FaTrashCan size={"20px"} />}
              className='text-black border-none bg-transparent min-w-0 w-fit px-0'
              onClick={() => handleShowModalDelete(checkPoint.checkPoint?.IdPunto)}
            />
          </div>
        );
    }
  }, []);

  const getData = () => {
    const aux = state.vehicles.find(value => value.dominio === state.selectedVehicle);
    let auxCheck: CheckPointDetails[] = [];
    aux?.checkPoints.forEach(check => {
      auxCheck?.push({
        done: check.done,
        dateDone: check.dateDone,
        checkPoint: state.checkPoints.find((value) => (value.IdPunto === check.checkPointId))
      })
    });
    setCheckPointsDetails(auxCheck)
  }

  const handleShowModalForm = (checkPointId?: number) => {
    dispatch({ type: BusReducerActions.SELECTCHECKPOINT, payload: checkPointId?.toString() });
    setShowModalCheckForm(true)
  }

  const handleShowModalDelete = (checkPointId?: number) => {
    dispatch({ type: BusReducerActions.SELECTCHECKPOINT, payload: checkPointId?.toString() });
    setShowModalDelete(true)
  }

  const handleConfirmDelete = () => {
    dispatch({ type: BusReducerActions.DELETECHECKPOINT });
    handleCloseModals();
  }

  const handleCloseModals = () => {
    dispatch({ type: BusReducerActions.SELECTCHECKPOINT, payload: undefined });
    setShowModalCheckForm(false);
    setShowModalDelete(false)
  }

  const handleSubmit = (data?: CheckPointDetailsResponse) => {
    if (state.selectedCheckPoint) {
      dispatch({ type: BusReducerActions.EDITCHECKPOINT, payload: data })
    } else {
      dispatch({ type: BusReducerActions.ADDCHECKPOINT, payload: data })
    }
    handleCloseModals()
  }

  return (
    <>
      <Button onPress={() => handleShowModalForm()} color='primary'>Agregar Punto de Inspeccion</Button>
      <Table aria-label="Example table with dynamic content" >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={checkPointsDetails}>
          {(item) => (
            <TableRow key={item.checkPoint?.IdPunto}>
              {(columnKey) => <TableCell
                className='text-black'
                style={{ width: columnKey === "actions" ? "136px" : undefined }}
              >
                {renderCell(item, columnKey)}
              </TableCell>
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalCheckDetails
        onClose={() => handleCloseModals()}
        onConfirm={handleSubmit}
        isOpen={showModalCheckForm}
      />
      <ModalDeleteCheck
        onClose={() => handleCloseModals()}
        isOpen={showModalDelete}
        onConfirm={() => handleConfirmDelete()}
        message='¿Desea eliminar el punto de inspeccion?'
      />
    </>

  )
}

export default CheckPointsVehicleTable