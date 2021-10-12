import { Inventario } from "./inventario";

export class Activo {
    id!: number;
    nombre!: string;
    descripcion!: string;
    tipo!: string;
    serial!: string
    inventario!: Inventario;
    peso!: number
    alto!: number
    ancho!: number
    valorCompra!: number
    fechaCompra!: Date
}