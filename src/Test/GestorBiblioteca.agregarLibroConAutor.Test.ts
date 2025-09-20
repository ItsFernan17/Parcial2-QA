/**
 * Fernando Rivas y Erick Alcon <Grupo 404>
 */

import { GestorBibliotecaServicio } from '../Services/GestorBiblioteca.Service';
import { Autor } from '../Entitites/AutorEntity';

describe('GestorBibliotecaServicio - crearLibroConAutor', () => {
  let servicio: GestorBibliotecaServicio;

  beforeEach(() => {
    servicio = new GestorBibliotecaServicio();
  });

  it('debe crear un libro con un autor existente', () => {
    // Agregar autor primero
    const autor = new Autor(1, 'Gabriel García Márquez');
    servicio.agregarAutor(autor);

    // Crear libro con autor existente
    const libro = servicio.crearLibroConAutor(1, 'Cien años de soledad', 'Gabriel García Márquez');

    expect(libro.id).toBe(1);
    expect(libro.titulo).toBe('Cien años de soledad');
    expect(libro.autor).toBe(autor);
    expect(libro.autor.nombre).toBe('Gabriel García Márquez');
  });

  it('debe crear un libro y un autor nuevo si el autor no existe', () => {
    // Crear libro con autor que no existe
    const libro = servicio.crearLibroConAutor(1, 'Rayuela', 'Julio Cortázar');

    expect(libro.id).toBe(1);
    expect(libro.titulo).toBe('Rayuela');
    expect(libro.autor.nombre).toBe('Julio Cortázar');

    // Verificar que el autor fue creado
    const autores = servicio.listarAutores();
    expect(autores).toHaveLength(1);
    expect(autores[0].nombre).toBe('Julio Cortázar');
  });

  it('debe asignar IDs únicos a autores nuevos', () => {
    // Crear varios libros con autores nuevos
    servicio.crearLibroConAutor(1, 'Libro 1', 'Autor 1');
    servicio.crearLibroConAutor(2, 'Libro 2', 'Autor 2');
    servicio.crearLibroConAutor(3, 'Libro 3', 'Autor 3');

    const autores = servicio.listarAutores();
    expect(autores).toHaveLength(3);
    expect(autores[0].id).toBe(1);
    expect(autores[1].id).toBe(2);
    expect(autores[2].id).toBe(3);
  });
});