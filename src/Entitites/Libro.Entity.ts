/**
 * Fernando Rivas <frivasm@miumg.edu.gt>
 */

import { Autor } from './AutorEntity';

export class Libro {
  constructor(
    public readonly id: number,
    public readonly titulo: string,
    public readonly autor: Autor
  ) {
    if (!Number.isInteger(id) || id <= 0) throw new Error('ID de libro inválido');
    if (!titulo || titulo.trim() === '') throw new Error('Título inválido');
    if (!autor) throw new Error('Autor inválido');
  }
}
