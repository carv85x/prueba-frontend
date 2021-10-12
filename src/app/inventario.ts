import { Area } from "./area";
import { Empleado } from "./empleado";

export class Inventario {
    id!: number;
    noInventario!: string;
    area!: Area;
    empleado!: Empleado;
    asignacionTipo!: string;
}