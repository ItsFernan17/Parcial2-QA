/**
 * Fernando Rivas <frivasm@miumg.edu.gt>
 */

import { GestorLibrosServicio } from '../Services/GestionarLibro.Service';
import { Libro } from '../Entitites/Libro.Entity';
import { Autor } from '../Entitites/AutorEntity';

describe('GestorLibrosServicio - listar', () => {
  it('lista todos los libros agregados', () => {
    const svc = new GestorLibrosServicio();
    const autor1 = new Autor(1, 'George Orwell');
    const autor2 = new Autor(2, 'Ray Bradbury');
    svc.agregarLibro(new Libro(1, '1984', autor1));
    svc.agregarLibro(new Libro(2, 'Fahrenheit 451', autor2));

    const libros = svc.listarLibros();
    expect(libros).toHaveLength(2);
    expect(libros[0].titulo).toBe('1984');
    expect(libros[1].titulo).toBe('Fahrenheit 451');
  });

  it('retorna lista vacía cuando no hay libros', () => {
    const svc = new GestorLibrosServicio();

    const libros = svc.listarLibros();
    expect(libros).toHaveLength(0);
  });
});
