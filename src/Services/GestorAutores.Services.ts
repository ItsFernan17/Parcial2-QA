/**
 * Autor Erick Alcon <ealconv@miumg.edu.gt>
 */

import { Autor } from '../Entitites/AutorEntity';
import { GestorAutores } from '../Entitites/Interfaces/GestorAutores.Interface';

export class GestorAutoresServicio implements GestorAutores {
  private autores: Autor[] = [];

  agregarAutor(autor: Autor): void {
    this.autores.push(autor);
  }

  listarAutores(): Autor[] {
    return [...this.autores];
  }

  obtenerAutorPorId(id: number): Autor | undefined {
    return this.autores.find(autor => autor.id === id);
  }
}