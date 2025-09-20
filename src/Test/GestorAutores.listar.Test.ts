import { GestorAutoresServicio } from '../Services/GestorAutores.Services';
import { Autor } from '../Entities/Interfaces/AutorEntity';

describe('GestorAutoresServicio - listar', () => {
  it('lista todos los autores agregados', () => {
    const svc = new GestorAutoresServicio();
    svc.agregarAutor(new Autor(1, 'Isabel Allende'));
    svc.agregarAutor(new Autor(2, 'Mario Vargas Llosa'));

    const autores = svc.listarAutores();
    expect(autores).toHaveLength(2);
    expect(autores[0].nombre).toBe('Isabel Allende');
    expect(autores[1].nombre).toBe('Mario Vargas Llosa');
  });
});