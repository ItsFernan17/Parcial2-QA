/**
 * Fernando Rivas y Erick Alcon <Grupo 404>
 */

import { GestorLibrosServicio } from '../Services/GestionarLibro.Service';
import { GestorAutoresServicio } from '../Services/GestorAutores.Services';
import { Libro } from '../Entitites/Libro.Entity';
import { Autor } from '../Entitites/AutorEntity';

describe('Integración - Libros y Autores', () => {
  let gestorLibros: GestorLibrosServicio;
  let gestorAutores: GestorAutoresServicio;

  beforeEach(() => {
    gestorLibros = new GestorLibrosServicio();
    gestorAutores = new GestorAutoresServicio();
  });

  it('debe crear un autor y asignarlo a un libro', () => {
    // Crear autor
    const autor = new Autor(1, 'Gabriel García Márquez');
    gestorAutores.agregarAutor(autor);

    // Crear libro con ese autor
    const libro = new Libro(1, 'Cien años de soledad', autor);
    gestorLibros.agregarLibro(libro);

    // Verificar que el libro tiene el autor correcto
    const libroObtenido = gestorLibros.obtenerLibroPorId(1);
    expect(libroObtenido).toBeDefined();
    expect(libroObtenido?.autor).toBe(autor);
    expect(libroObtenido?.autor.nombre).toBe('Gabriel García Márquez');
  });

  it('debe obtener libros por autor', () => {
    // Crear autores
    const autor1 = new Autor(1, 'Isabel Allende');
    const autor2 = new Autor(2, 'Mario Vargas Llosa');
    gestorAutores.agregarAutor(autor1);
    gestorAutores.agregarAutor(autor2);

    // Crear libros
    const libro1 = new Libro(1, 'La casa de los espíritus', autor1);
    const libro2 = new Libro(2, 'Eva Luna', autor1);
    const libro3 = new Libro(3, 'La ciudad y los perros', autor2);
    gestorLibros.agregarLibro(libro1);
    gestorLibros.agregarLibro(libro2);
    gestorLibros.agregarLibro(libro3);

    // Obtener libros por autor
    const librosAutor1 = gestorLibros.obtenerLibrosPorAutor(1);
    const librosAutor2 = gestorLibros.obtenerLibrosPorAutor(2);

    expect(librosAutor1).toHaveLength(2);
    expect(librosAutor2).toHaveLength(1);
    expect(librosAutor1[0].titulo).toBe('La casa de los espíritus');
    expect(librosAutor1[1].titulo).toBe('Eva Luna');
    expect(librosAutor2[0].titulo).toBe('La ciudad y los perros');
  });

  it('debe mantener la integridad referencial entre libros y autores', () => {
    // Crear autor
    const autor = new Autor(1, 'Julio Cortázar');
    gestorAutores.agregarAutor(autor);

    // Crear libro
    const libro = new Libro(1, 'Rayuela', autor);
    gestorLibros.agregarLibro(libro);

    // Verificar que el autor del libro es el mismo objeto
    const libroObtenido = gestorLibros.obtenerLibroPorId(1);
    const autorObtenido = gestorAutores.obtenerAutorPorId(1);

    expect(libroObtenido?.autor).toBe(autorObtenido);
  });
});