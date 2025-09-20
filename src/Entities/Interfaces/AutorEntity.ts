export class Autor {
  constructor(
    public readonly id: number,
    public readonly nombre: string
  ) {
    if (!Number.isInteger(id) || id <= 0) throw new Error('ID de autor inválido');
    if (!nombre || nombre.trim() === '') throw new Error('Nombre inválido');
  }
}