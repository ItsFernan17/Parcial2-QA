export class Libro {
  constructor(
    public readonly id: number,
    public readonly titulo: string,
    public readonly autor: string
  ) {
    if (!Number.isInteger(id) || id <= 0) throw new Error('ID de libro inválido');
    if (!titulo || titulo.trim() === '') throw new Error('Título inválido');
    if (!autor || autor.trim() === '') throw new Error('Autor inválido');
  }
}
