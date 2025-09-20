/**
 * Fernando Rivas y Erick Alcon <Grupo 404>
 */

import { GestorBibliotecaServicio } from '../Services/GestorBiblioteca.Service';

describe('Integración - Biblioteca Completa', () => {
  let biblioteca: GestorBibliotecaServicio;

  beforeEach(() => {
    biblioteca = new GestorBibliotecaServicio();
  });

  it('debe gestionar un flujo completo de biblioteca: autores y libros', () => {
    // 1. Agregar autores
    biblioteca.agregarAutor({ id: 1, nombre: 'Gabriel García Márquez' } as any);
    biblioteca.agregarAutor({ id: 2, nombre: 'Isabel Allende' } as any);

    // 2. Crear libros con autores existentes
    const libro1 = biblioteca.crearLibroConAutor(1, 'Cien años de soledad', 'Gabriel García Márquez');
    const libro2 = biblioteca.crearLibroConAutor(2, 'La casa de los espíritus', 'Isabel Allende');

    // 3. Verificar que los libros se crearon correctamente
    expect(libro1.titulo).toBe('Cien años de soledad');
    expect(libro1.autor.nombre).toBe('Gabriel García Márquez');
    expect(libro2.titulo).toBe('La casa de los espíritus');
    expect(libro2.autor.nombre).toBe('Isabel Allende');

    // 4. Listar todos los libros y autores
    const libros = biblioteca.listarLibros();
    const autores = biblioteca.listarAutores();

    expect(libros).toHaveLength(2);
    expect(autores).toHaveLength(2);

    // 5. Obtener libros con autores
    const librosConAutores = biblioteca.obtenerLibrosConAutores();
    expect(librosConAutores).toHaveLength(2);

    // 6. Verificar integridad referencial
    librosConAutores.forEach(item => {
      expect(item.libro.autor).toBe(item.autor);
    });
  });

  it('debe crear autores automáticamente al crear libros con autores nuevos', () => {
    // Crear libros con autores que no existen
    const libro1 = biblioteca.crearLibroConAutor(1, '1984', 'George Orwell');
    const libro2 = biblioteca.crearLibroConAutor(2, 'Fahrenheit 451', 'Ray Bradbury');
    const libro3 = biblioteca.crearLibroConAutor(3, 'Animal Farm', 'George Orwell'); // Mismo autor

    // Verificar libros
    expect(libro1.autor.nombre).toBe('George Orwell');
    expect(libro2.autor.nombre).toBe('Ray Bradbury');
    expect(libro3.autor.nombre).toBe('George Orwell');

    // Verificar que el autor de libro1 y libro3 es el mismo objeto
    expect(libro1.autor).toBe(libro3.autor);

    // Verificar autores creados
    const autores = biblioteca.listarAutores();
    expect(autores).toHaveLength(2);

    // Verificar libros por autor
    const librosOrwell = biblioteca.obtenerLibrosPorAutor(libro1.autor.id);
    expect(librosOrwell).toHaveLength(2);
    expect(librosOrwell[0].titulo).toBe('1984');
    expect(librosOrwell[1].titulo).toBe('Animal Farm');
  });

  it('debe mantener consistencia en operaciones CRUD completas', () => {
    // Crear escenario inicial
    biblioteca.crearLibroConAutor(1, 'Don Quijote', 'Miguel de Cervantes');
    biblioteca.crearLibroConAutor(2, 'La Galatea', 'Miguel de Cervantes');
    biblioteca.crearLibroConAutor(3, 'Novelas Ejemplares', 'Miguel de Cervantes');

    // Verificar estado inicial
    expect(biblioteca.listarLibros()).toHaveLength(3);
    expect(biblioteca.listarAutores()).toHaveLength(1);

    // Obtener autor
    const autor = biblioteca.obtenerAutorPorId(1);
    expect(autor?.nombre).toBe('Miguel de Cervantes');

    // Obtener libros del autor
    const librosAutor = biblioteca.obtenerLibrosPorAutor(1);
    expect(librosAutor).toHaveLength(3);

    // Verificar que todos los libros tienen el mismo autor
    librosAutor.forEach(libro => {
      expect(libro.autor).toBe(autor);
    });

    // Obtener vista completa
    const vistaCompleta = biblioteca.obtenerLibrosConAutores();
    expect(vistaCompleta).toHaveLength(3);

    vistaCompleta.forEach(item => {
      expect(item.libro.autor).toBe(item.autor);
      expect(item.autor.nombre).toBe('Miguel de Cervantes');
    });
  });
});