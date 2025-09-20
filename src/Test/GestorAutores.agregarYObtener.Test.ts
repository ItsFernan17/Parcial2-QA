/**
 * Autor Erick Alcon <ealconv@miumg.edu.gt>
 */

import { GestorAutoresServicio } from '../Services/GestorAutores.Services';
import { Autor } from '../Entitites/AutorEntity';

describe('GestorAutoresServicio - agregar y obtener', () => {
  it('agrega un autor y lo obtiene por ID', () => {
    const svc = new GestorAutoresServicio();
    const autor = new Autor(1, 'Gabriel García Márquez');

    svc.agregarAutor(autor);
    const autorObtenido = svc.obtenerAutorPorId(1);

    expect(autorObtenido).toBe(autor);
    expect(autorObtenido?.nombre).toBe('Gabriel García Márquez');
  });

  it('retorna undefined si el autor no existe', () => {
    const svc = new GestorAutoresServicio();

    const autorObtenido = svc.obtenerAutorPorId(999);

    expect(autorObtenido).toBeUndefined();
  });
});