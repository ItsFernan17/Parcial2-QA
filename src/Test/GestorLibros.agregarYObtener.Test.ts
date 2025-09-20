import { GestorLibrosServicio } from '../Services/GestionarLibro.Service';
import { Libro } from '../Entitites/Libro.Entity';

describe('GestorLibrosServicio - agregar y obtener', () => {
  it('agrega y obtiene un libro', () => {
    const svc = new GestorLibrosServicio();
    const libro = new Libro(1, 'El Quijote', 'Cervantes');

    svc.agregarLibro(libro);

    expect(svc.obtenerLibroPorId(1)).toBe(libro);
  });
});
