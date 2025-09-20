import { Libro } from '../Libro.Entity';

export interface GestorLibros {
  agregarLibro(libro: Libro): void;
  obtenerLibroPorId(id: number): Libro | undefined;
  listarLibros(): Libro[];
}
