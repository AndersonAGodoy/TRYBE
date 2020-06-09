const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const allLessons = Object.assign({ lesson1 }, { lesson2 }, { lesson3 });

function totalStudents() {
  let total = 0;
  for (lesson of Object.values(allLessons)) {
    total += Number(lesson.numeroEstudantes);
  }
  return total;
}

console.log(totalStudents());

function getValueByNumber(target, index) {
  return Object.values(target)[index];
}

console.log(getValueByNumber(lesson1, 0));

function verifyPair(obj, key, value) {
  const entries = Object.entries(obj);
  for (entry of entries) {
    if (entry[0] === key && entry[1] === value) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, "turno", "noite"));

function totalStudentsMathClass() {
  let total = 0;
  for (lesson of Object.values(allLessons)) {
    if (lesson.materia === "Matemática") {
      total += Number(lesson.numeroEstudantes);
    }
  }
  return total;
}

console.log(totalStudentsMathClass());

function createReport(obj, teacher) {
  const lessons = obj;
  let report = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  };

  for (l in lessons) {
    const lesson = lessons[l];
    if (lesson.professor === teacher) {
      report.aulas.push(lesson.materia);
      report.estudantes += lesson.numeroEstudantes;
    }
  }
  return report;
}

console.log(createReport(allLessons, "Maria Clara"));
