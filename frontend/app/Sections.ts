export interface AcademicHistory {
  tittle: string;
  date: string;
}

const AcademicHistory: AcademicHistory[] = [
  {
    tittle: "Ingeniería de sistemas y computación",
    date: "Universidad de Cundinamarca 2020 – en curso",
  },
  {
    tittle: "Tecnólogo en análisis y desarrollo de software",
    date: "Sena 2023 – en curso",
  },
  {
    tittle: "Técnico en programación",
    date: "Sena 2017 – 2019",
  },
];

export interface SectionInfo {
  id: number;
  title: string;
  text: string | AcademicHistory[];
}

const Sections: SectionInfo[] = [
  {
    id: 1,
    title: "Academic history",
    text: AcademicHistory,
  },
  {
    id: 2,
    title: "Professional Profile",
    text: `Estudiante de ingeniería de sistemas de séptimo semestre,
      dispuesto a aprender todos los días algo nuevo, y sobre todo en la programación, soy una persona responsable, adaptable al cambio, honesta, comprometido, con mucha facilidad para aprender y afrontar retos.`,
  },
  {
    id: 3,
    title: "Skills & Aptitudes",
    text: `Soy una persona, que se desenvuelve muy fácil con la tecnología y herramientas digitales, ya que logro entender las cosas con facilidad.
      Cuento con los conocimientos en lenguajes de programación como JavaScript, al lado de node y frameworks como react,
      en lenguaje SQL y manejo herramientas como React y Node.js. También tengo conocimiento en el manejo de CSS3 y HTML5.`,
  },
];

export default Sections;
