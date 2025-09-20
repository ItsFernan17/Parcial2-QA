/**
 * Fernando Rivas y Erick Alcon <Grupo 404>
 */

import { Libro } from '../Libro.Entity';
import { Autor } from '../AutorEntity';

export interface GestorBiblioteca {
  // Gestión de autores
  agregarAutor(autor: Autor): void;
  obtenerAutorPorId(id: number): Autor | undefined;
  listarAutores(): Autor[];

  // Gestión de libros
  agregarLibro(libro: Libro): void;
  obtenerLibroPorId(id: number): Libro | undefined;
  listarLibros(): Libro[];
  obtenerLibrosPorAutor(autorId: number): Libro[];

  // Operaciones combinadas
  crearLibroConAutor(libroId: number, titulo: string, autorNombre: string): Libro;
  obtenerLibrosConAutores(): { libro: Libro; autor: Autor }[];
}