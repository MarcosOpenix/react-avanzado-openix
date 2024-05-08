import { VehicleResponse } from "@/interfaces/busManager";
import { CheckPoint } from '../interfaces/busManager';

export const busesData: VehicleResponse[] = [
    {
        id: 0,
        dominio: "AR233ED",
        marca: "Mercedez Benz",
        modelo: "Streamline",
        motor: "45GF32668RE2OP",
        chasis: "SMJ-998234E",
        checkPoints: []
    },
    {
        id: 2,
        dominio: "AR244SF",
        marca: "Mercedez Benz",
        modelo: "Topline",
        motor: "88AWF32668RE7AG",
        chasis: "RTY-658233Z",
        checkPoints: []
    },
    {
        id: 2,
        dominio: "BR498ZX",
        marca: "Volkswague",
        modelo: "Bus-4000Z",
        motor: "65AK76558RE2VP",
        chasis: "SMJ-998234E",
        checkPoints: [{
            checkPointId: 46,
            dateDone: "2024-04-24",
            done: false
        },
        {
            checkPointId: 47,
            dateDone: "2024-04-24",
            done: false
        },
        {
            checkPointId: 48,
            dateDone: "2024-04-24",
            done: false
        },
        {
            checkPointId: 49,
            dateDone: "2024-04-24",
            done: false
        },
        {
            checkPointId: 50,
            dateDone: "2024-04-24",
            done: false
        }]
    }
]

export const checkPointsData: CheckPoint[] = [
    {
        IdPunto: 46,
        Orden: 1,
        Punto: "PARABRISAS",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 47,
        Orden: 2,
        Punto: "NEUMATICOS",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 48,
        Orden: 3,
        Punto: "LUCES BAJAS",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 49,
        Orden: 4,
        Punto: "LUCES ALTAS",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 50,
        Orden: 5,
        Punto: "BALIZAS",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 51,
        Orden: 6,
        Punto: "LUCES DE GIRO",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 52,
        Orden: 7,
        Punto: "LUZ Y ALARMA MARCHA ATRAS",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 53,
        Orden: 8,
        Punto: "CARTEL DE DESTINO",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 54,
        Orden: 9,
        Punto: "BOCINA",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 55,
        Orden: 10,
        Punto: "LIMPIEZA GENERAL EXTERIOR",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 56,
        Orden: 11,
        Punto: "CARROCERIA *Golpes, Abolladuras, Marcas de pintura(",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 57,
        Orden: 12,
        Punto: "MATAFUEGOS (Existencia,fijacion,vencimiento)",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 58,
        Orden: 13,
        Punto: "MARTILLOS DE  SEGURIDAD",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 59,
        Orden: 14,
        Punto: "COMBUSTIBLE (Verificar ultima carga, KM Recorridos)",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 60,
        Orden: 15,
        Punto: "LIMPIEZA INTERIOR",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 61,
        Orden: 16,
        Punto: "CINTURON DE SEGURIDAD CONDUCTOR",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 62,
        Orden: 17,
        Punto: "FUNCIONAMIENTO MICRONAUTA/SUBE",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 63,
        Orden: 18,
        Punto: "FUNCIONAMIENTO RAMPA",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    },
    {
        IdPunto: 64,
        Orden: 19,
        Punto: "FUNCIONAMENTO AVISO DE PARADA",
        Accion: "A",
        IdGrupo: "U",
        Grupo: "URBANO"
    }
]