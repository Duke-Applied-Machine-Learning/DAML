export type Subsection = "PMs" | "Data Scientists" | "Operations" | "Executive";

export type TeamMember = {
  id: string;
  name: string;
  subsection: Subsection;
  projectStack?: string;
  major: string;
  year: string;
  imageUrl?: string;
};

export const teamMembers: TeamMember[] = [
  // Executive
  { id: "leader-1",  name: "Jai Kasera",        subsection: "Executive", projectStack: "Co-President",      imageUrl: "/headshots/Executive/jai.jpeg",      major: "Math, CS",              year: "2027" },
  { id: "leader-7",  name: "Renzo Larrea",     subsection: "Executive", projectStack: "Co-President",               imageUrl: "/headshots/Executive/renzo.jpeg",    major: "Math, CS",              year: "2028" },
  { id: "leader-2",  name: "Mayur Sekhar",      subsection: "Executive", projectStack: "Data Science Director",       imageUrl: "/headshots/Executive/mayur.jpg",     major: "Math, CS, AI Conc.",    year: "2027" },
  { id: "leader-3",  name: "Rithvik Neti",      subsection: "Executive", projectStack: "Data Science Director",           imageUrl: "/headshots/Executive/rithvik.jpeg",  major: "CS, Political Science", year: "2027" },
  { id: "leader-4",  name: "David Li",          subsection: "Executive", projectStack: "Head of Project Management",imageUrl: "/headshots/Executive/david.jpeg",    major: "CS, Econ",              year: "2028" },
  { id: "leader-5",  name: "Clara Bartusiak",   subsection: "Executive", projectStack: "Director of Outreach",     imageUrl: "/headshots/Executive/clara.jpg",     major: "ECE, CS",               year: "2027" },
  { id: "leader-6", name: "Ashley Park",       subsection: "Executive", projectStack: "Director of Marketing",    imageUrl: "/headshots/Executive/ashley.jpg",    major: "CS, Stats",             year: "2028" },
  // PMs
  { id: "pm-1", name: "Aashish Cheruvu", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Aashish_Cheruvu.jpg", major: "BME, ECE",        year: "2028" },
  { id: "pm-2", name: "Cheri Ho", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Cheri_Ho.jpg", major: "Econ, CS, Visual Media",  year: "2029" },
  { id: "pm-3", name: "Danielle Li", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Danielle_Li.jpg", major: "Math, CS", year: "2028" },
  { id: "pm-4", name: "Kaijing Zheng", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Kaijing_Zheng.jpg", major: "ECE, CS",        year: "2029" },
  { id: "pm-5", name: "Peakay Clifford", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Peakay_Clifford.jpg", major: "Physics, Math",     year: "2028" },
  { id: "pm-6", name: "Ruben Marcus", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Ruben_Marcus.jpg", major: "Math",     year: "2029" },
  { id: "pm-7", name: "Taylor Allen", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Taylor_Allen.png", major: "MS in Statistical Science", year: "2027" },
  { id: "pm-8", name: "Emerson Cortazar", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/PMs/Emerson_Cortazar.jpg", major: "CS, Math", year: "2028"},
  { id: "pm-8", name: "Jin Yoo", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/blank.jpg", major: "Undeclared",   year: "2029" },
  { id: "pm-9", name: "Matthew Del Preto", subsection: "PMs", projectStack: "Project Manager", imageUrl: "/headshots/blank.jpg", major: "CS, Math, Minor in Spanish",     year: "2029" },
  // Data Scientists (hidden until ready)
  // { id: "ds-1", name: "DS1", subsection: "Data Scientists", projectStack: "Python, PyTorch",        major: "CS",         year: "2026" },
  // { id: "ds-2", name: "DS2", subsection: "Data Scientists", projectStack: "scikit-learn, Pandas",   major: "Math & CS",  year: "2027" },
  // { id: "ds-3", name: "DS3", subsection: "Data Scientists", projectStack: "TensorFlow, SQL",        major: "ECE",        year: "2028" },
  // { id: "ds-4", name: "DS4", subsection: "Data Scientists", projectStack: "Hugging Face, MLflow",   major: "CS & Stats", year: "2026" },
  // { id: "ds-5", name: "DS5", subsection: "Data Scientists", projectStack: "XGBoost, NumPy",         major: "BME",        year: "2027" },
  // Operations
  { id: "ops-1", name: "Erica Zhang", subsection: "Operations", projectStack: "Operations", imageUrl: "/headshots/Operations/Erica.jpg", major: "ECE, CS",       year: "2028" },
  { id: "ops-2", name: "Rachel Yu", subsection: "Operations", projectStack: "Operations", imageUrl: "/headshots/Operations/Rachel.jpg", major: "ECE, CS",        year: "2028" },
  { id: "ops-3", name: "Aryan Garg", subsection: "Operations", projectStack: "Operations", imageUrl: "/headshots/Operations/Aryan.png", major: "CS, Neuro",      year: "2029" },
];
