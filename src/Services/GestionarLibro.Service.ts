/**
 * Fernando Rivas <frivasm@miumg.edu.gt>
 */

import { GestorLibros } from '../Entitites/Interfaces/GestroLibro.Interface';
import { Libro } from '../Entitites/Libro.Entity';
import { Autor } from '../Entitites/AutorEntity';

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

  obtenerLibrosPorAutor(autorId: number): Libro[] {
    return Array.from(this.libros.values()).filter(libro => libro.autor.id === autorId);
  }

  crearLibro(id: number, titulo: string, autor: Autor): Libro {
    return new Libro(id, titulo, autor);
  }
}
