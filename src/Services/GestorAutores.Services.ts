import { Autor } from '../Entities/Interfaces/AutorEntity';

export class GestorAutoresServicio {
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