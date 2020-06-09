const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function lesson2Turno(obj, key, value) {
  let objeto = obj;
  obj[key] = value;

  return objeto;
}

console.log(lesson2Turno( lesson2, 'turno', 'Manhã'));
