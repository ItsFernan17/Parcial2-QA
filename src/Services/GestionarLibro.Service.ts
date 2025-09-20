import { GestorLibros } from '../Entitites/Interfaces/GestroLibro.Interface';
import { Libro } from '../Entitites/Libro.Entity';

export class GestorLibrosServicio implements GestorLibros {
  private readonly libros = new Map<number, Libro>();

  agregarLibro(libro: Libro): void {
    this.libros.set(libro.id, libro);
  }

  obtenerLibroPorId(id: number): Libro | undefined {
    return this.libros.get(id);
  }

  listarLibros(): Libro[] {
    return Array.from(this.libros.values());
  }
}
