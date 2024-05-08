export interface VehicleResponse {
    id: number,
    dominio: string,
    marca: string,
    modelo: string,
    motor: string,
    chasis: string,
    checkPoints: CheckPointDetailsResponse[]
}

export interface CheckPointDetailsResponse {
    done: boolean;
    dateDone: string;
    checkPointId: number
}

export interface CheckPoint {
    IdPunto: number,
    Orden: number,
    Punto: string,
    Accion: string,
    IdGrupo: string,
    Grupo: string
}