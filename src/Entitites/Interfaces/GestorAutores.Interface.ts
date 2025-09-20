/**
 * Autor Erick Alcon <ealconv@miumg.edu.gt>
 */

import { Autor } from '../AutorEntity';

export interface GestorAutores {
  agregarAutor(autor: Autor): void;
  obtenerAutorPorId(id: number): Autor | undefined;
  listarAutores(): Autor[];
}