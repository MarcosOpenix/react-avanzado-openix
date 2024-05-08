import { BusReducerActions } from '@/context/BusContext'
import { useBusContext } from '@/hooks/useBusContext'
import { Selection, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const columns = [
    {
        key: "dominio",
        label: "Dominio"
    },
    {
        key: "marca",
        label: "Marca"
    },
    {
        key: "modelo",
        label: "Modelo"
    },
    {
        key: "motor",
        label: "Motor"
    },
    {
        key: "chasis",
        label: "Chasis"
    }
]

const VehiclesTable = () => {
    const router = useRouter()
    const {state, dispatch} = useBusContext();

    const onSelectionChange = (key: Selection) => {
        if(key != 'all'){
            key.forEach(value => {
                dispatch({type: BusReducerActions.SELECTVEHICLE, payload: value.toString()})
            })
        };
        router.push('/busManager/vehicleDetails');
    }

    return (
        <Table aria-label="Example table with dynamic content" selectionMode='single' onSelectionChange={(e) => onSelectionChange(e)}>
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={state.vehicles}>
                {(item) => (
                    <TableRow key={item.dominio}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default VehiclesTable