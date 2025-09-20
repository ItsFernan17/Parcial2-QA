/**
 * Fernando Rivas y Erick Alcon <Grupo 404>
 */

import { GestorBibliotecaServicio } from '../Services/GestorBiblioteca.Service';
import { Autor } from '../Entitites/AutorEntity';

describe('GestorBibliotecaServicio - obtenerLibrosConAutores', () => {
  let servicio: GestorBibliotecaServicio;

  beforeEach(() => {
    servicio = new GestorBibliotecaServicio();
  });

  it('debe retornar lista vacía cuando no hay libros', () => {
    const resultado = servicio.obtenerLibrosConAutores();

    expect(resultado).toHaveLength(0);
  });

  it('debe retornar libros con sus autores correspondientes', () => {
    // Crear autores
    const autor1 = new Autor(1, 'Isabel Allende');
    const autor2 = new Autor(2, 'Mario Vargas Llosa');
    servicio.agregarAutor(autor1);
    servicio.agregarAutor(autor2);

    // Crear libros usando el servicio combinado
    servicio.crearLibroConAutor(1, 'La casa de los espíritus', 'Isabel Allende');
    servicio.crearLibroConAutor(2, 'Eva Luna', 'Isabel Allende');
    servicio.crearLibroConAutor(3, 'La ciudad y los perros', 'Mario Vargas Llosa');

    const resultado = servicio.obtenerLibrosConAutores();

    expect(resultado).toHaveLength(3);

    // Verificar primer libro
    expect(resultado[0].libro.titulo).toBe('La casa de los espíritus');
    expect(resultado[0].autor.nombre).toBe('Isabel Allende');
    expect(resultado[0].libro.autor).toBe(resultado[0].autor);

    // Verificar segundo libro
    expect(resultado[1].libro.titulo).toBe('Eva Luna');
    expect(resultado[1].autor.nombre).toBe('Isabel Allende');

    // Verificar tercer libro
    expect(resultado[2].libro.titulo).toBe('La ciudad y los perros');
    expect(resultado[2].autor.nombre).toBe('Mario Vargas Llosa');
  });

  it('debe mantener la referencia correcta entre libro y autor', () => {
    const autor = new Autor(1, 'Julio Cortázar');
    servicio.agregarAutor(autor);

    servicio.crearLibroConAutor(1, 'Rayuela', 'Julio Cortázar');

    const resultado = servicio.obtenerLibrosConAutores();

    expect(resultado).toHaveLength(1);
    expect(resultado[0].libro.autor).toBe(autor);
    expect(resultado[0].autor).toBe(autor);
  });
});