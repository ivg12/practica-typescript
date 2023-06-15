import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

// Crear datos persona
const persona1 = new Persona(
  'Laura',
  'Rodríguez',
  28,
  '98765432B',
  new Date(1993, 5, 15),
  'violeta',
  'mujer',
  [
    new Direccion('Calle Sol', 10, 4, 'A', 28002, 'Madrid', 'Madrid')
  ],
  [
    new Mail('personal', 'laura@gmail.com')
  ],
  [
    new Telefono('casa', 911234567),
    new Telefono('trabajo', 922345678)
  ],
  ''
);

// Crear datos persona
const persona2 = new Persona(
  'Pablo',
  'García',
  35,
  '11111111C',
  new Date(1988, 8, 20),
  'amarillo',
  'hombre',
  [
    new Direccion('Avenida Principal', 25, 1, 'B', 28003, 'Madrid', 'Madrid')
  ],
  [
    new Mail('trabajo', 'pablo@empresa.com')
  ],
  [
    new Telefono('móvil', 666777888),
    new Telefono('trabajo', 912345678)
  ],
  ''
);

// Crear datos persona
const persona3 = new Persona(
  'Ana',
  'Martínez',
  42,
  '22222222D',
  new Date(1979, 3, 10),
  'verde',
  'mujer',
  [
    new Direccion('Calle Mayor', 5, 2, 'C', 28004, 'Madrid', 'Madrid')
  ],
  [
    new Mail('personal', 'ana@gmail.com'),
    new Mail('trabajo', 'ana@empresa.com')
  ],
  [
    new Telefono('móvil', 677888999),
    new Telefono('trabajo', 912345678)
  ],
  ''
);

// Mostrar los 3 registros
console.log(persona1.getDatos());
console.log(persona2.getDatos());
console.log(persona3.getDatos());

// Modificar uno de los registros de persona
function modificarDatos(
  dni: string,
  nuevaDireccion: Direccion,
  nuevoMail: Mail,
  nuevoTelefono: Telefono
) {
  const personas = [persona1, persona2, persona3];
  const persona = personas.find((persona) => persona.dni === dni);
  if (persona) {
    persona.agregarDireccion(nuevaDireccion);
    persona.agregarMail(nuevoMail);
    persona.agregarTelefono(nuevoTelefono);
    // Mostrar los registros de persona con los cambios realizados
    console.log(`Se modificaron los datos de la persona con DNI ${dni}`);
    console.log(persona.getDatos());
  } else {
    console.log
