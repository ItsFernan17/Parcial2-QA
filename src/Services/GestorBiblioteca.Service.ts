/**
 * Fernando Rivas y Erick Alcon <Grupo 404>
 */

import { GestorBiblioteca } from '../Entitites/Interfaces/GestorBiblioteca.Interface';
import { GestorLibrosServicio } from './GestionarLibro.Service';
import { GestorAutoresServicio } from './GestorAutores.Services';
import { Libro } from '../Entitites/Libro.Entity';
import { Autor } from '../Entitites/AutorEntity';

export class GestorBibliotecaServicio implements GestorBiblioteca {
  private gestorLibros: GestorLibrosServicio;
  private gestorAutores: GestorAutoresServicio;

  constructor() {
    this.gestorLibros = new GestorLibrosServicio();
    this.gestorAutores = new GestorAutoresServicio();
  }

  // Gestión de autores
  agregarAutor(autor: Autor): void {
    this.gestorAutores.agregarAutor(autor);
  }

  obtenerAutorPorId(id: number): Autor | undefined {
    return this.gestorAutores.obtenerAutorPorId(id);
  }

  listarAutores(): Autor[] {
    return this.gestorAutores.listarAutores();
  }

  // Gestión de libros
  agregarLibro(libro: Libro): void {
    this.gestorLibros.agregarLibro(libro);
  }

  obtenerLibroPorId(id: number): Libro | undefined {
    return this.gestorLibros.obtenerLibroPorId(id);
  }

  listarLibros(): Libro[] {
    return this.gestorLibros.listarLibros();
  }

  obtenerLibrosPorAutor(autorId: number): Libro[] {
    return this.gestorLibros.obtenerLibrosPorAutor(autorId);
  }

  // Operaciones combinadas
  crearLibroConAutor(libroId: number, titulo: string, autorNombre: string): Libro {
    // Buscar si el autor ya existe
    let autor = this.gestorAutores.listarAutores().find(a => a.nombre === autorNombre);

    // Si no existe, crear uno nuevo
    if (!autor) {
      const nuevoAutorId = this.gestorAutores.listarAutores().length + 1;
      autor = new Autor(nuevoAutorId, autorNombre);
      this.gestorAutores.agregarAutor(autor);
    }

    // Crear el libro con el autor
    const libro = this.gestorLibros.crearLibro(libroId, titulo, autor);
    this.gestorLibros.agregarLibro(libro);

    return libro;
  }

  obtenerLibrosConAutores(): { libro: Libro; autor: Autor }[] {
    const libros = this.gestorLibros.listarLibros();
    return libros.map(libro => ({
      libro,
      autor: libro.autor
    }));
  }
}