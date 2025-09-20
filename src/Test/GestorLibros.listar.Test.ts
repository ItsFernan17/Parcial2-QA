import { GestorLibrosServicio } from '../Services/GestionarLibro.Service';
import { Libro } from '../Entitites/Libro.Entity';

describe('GestorLibrosServicio - listar', () => {
  it('lista todos los libros agregados', () => {
    const svc = new GestorLibrosServicio();
    svc.agregarLibro(new Libro(1, '1984', 'George Orwell'));
    svc.agregarLibro(new Libro(2, 'Fahrenheit 451', 'Ray Bradbury'));

    const libros = svc.listarLibros();
    expect(libros).toHaveLength(2);
    expect(libros[0].titulo).toBe('1984');
    expect(libros[1].titulo).toBe('Fahrenheit 451');
  });
});
