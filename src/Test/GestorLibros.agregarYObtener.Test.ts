/**
 * Fernando Rivas <frivasm@miumg.edu.gt>
 */

import { GestorLibrosServicio } from '../Services/GestionarLibro.Service';
import { Libro } from '../Entitites/Libro.Entity';
import { Autor } from '../Entitites/AutorEntity';

describe('GestorLibrosServicio - agregar y obtener', () => {
  it('agrega y obtiene un libro', () => {
    const svc = new GestorLibrosServicio();
    const autor = new Autor(1, 'Cervantes');
    const libro = new Libro(1, 'El Quijote', autor);

    svc.agregarLibro(libro);

    expect(svc.obtenerLibroPorId(1)).toBe(libro);
  });
});
