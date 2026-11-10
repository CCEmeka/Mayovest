export type Programme = {
  year: string;
  title: string;
  description: string;
};

export type Announcement = {
  date: string;
  title: string;
  text: string;
};

export type Feature = {
  title: string;
  text: string;
};

export type StaffMember = {
  name: string;
  role: string;
  email: string;
};

export type StudentCourse = {
  code: string;
  title: string;
  lecturer: string;
  time: string;
  venue: string;
  attendance: number;
};

export type AttendanceRow = {
  course: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
};

const navItems = ['Home', 'About', 'Academics', 'Admissions', 'Campus Radio', 'News & Events', 'Contact'];

const stats = [
  { label: 'Students', value: '2,400+' },
  { label: 'Faculties', value: '8' },
  { label: 'Programmes', value: '4-Year' },
  { label: 'Support', value: '24/7' },
];

const programmes: Programme[] = [
  {
    year: 'Year 1',
    title: 'Foundation',
    description: 'Build the foundations of teacher education through learning skills, communication and educational theory.',
  },
  {
    year: 'Year 2',
    title: 'Development',
    description: 'Expand subject knowledge, classroom methods and collaborative learning strategies for teaching practice.',
  },
  {
    year: 'Year 3',
    title: 'Professional Preparation',
    description: 'Prepare students for strong classroom management, lesson design, assessment and practicum exposure.',
  },
  {
    year: 'Year 4',
    title: 'Professional Competence',
    description: 'Advance final teaching readiness through assessment, supervised practice and professional reflection.',
  },
];

const features: Feature[] = [
  {
    title: 'Structured four-year training',
    text: 'A guided academic journey designed to grow students from foundation learning into confident educators.',
  },
  {
    title: 'Practical teaching experience',
    text: 'Students develop real classroom communication, lesson planning and instructional confidence in practice.',
  },
  {
    title: 'Professional development',
    text: 'A disciplined environment that promotes leadership, responsibility and ethical professional growth.',
  },
  {
    title: 'Supportive community',
    text: 'Students, lecturers and administrators work together in a collaborative academic atmosphere.',
  },
  {
    title: 'Technology-enabled learning',
    text: 'Digital systems support access to information, course activity, attendance and academic communication.',
  },
];

const announcements: Announcement[] = [
  {
    date: '12 Nov 2026',
    title: 'Admission intake opens for the 2026/2027 session',
    text: 'Prospective students can begin the application process and obtain admission guidance for the new session.',
  },
  {
    date: '08 Nov 2026',
    title: 'Academic calendar updated',
    text: 'Check the revised dates for resumption, assessments and teaching practice milestones.',
  },
  {
    date: '02 Nov 2026',
    title: 'Campus radio programme schedule released',
    text: 'Students can tune in to educational conversations, updates and student-centred programmes.',
  },
];

const radioShows = [
  'The Educator\'s Voice',
  'Campus Conversations',
  'The Learning Hour',
  'Ask the Lecturer',
  'Voice of Inspiration',
  'Student Spotlight',
];

const staff: StaffMember[] = [
  { name: 'Dr. Grace Ajayi', role: 'Academic Coordinator', email: 'grace.ajayi@aishateacherscollege.edu.ng' },
  { name: 'Mrs. Hajara Ibrahim', role: 'Head of Department', email: 'hajara.ibrahim@aishateacherscollege.edu.ng' },
  { name: 'Mr. Kola Bello', role: 'Lecturer', email: 'kola.bello@aishateacherscollege.edu.ng' },
  { name: 'Mrs. Maryam Musa', role: 'Student Affairs Officer', email: 'maryam.musa@aishateacherscollege.edu.ng' },
];

const studentCourses: StudentCourse[] = [
  { code: 'EDU 101', title: 'Educational Psychology', lecturer: 'Dr. Ajayi', time: '08:00 - 09:00', venue: 'Room A5', attendance: 86 },
  { code: 'ENG 112', title: 'English Methods', lecturer: 'Mrs. Ibrahim', time: '09:30 - 10:30', venue: 'Room B2', attendance: 91 },
  { code: 'EDU 126', title: 'Classroom Practice', lecturer: 'Mr. Bello', time: '11:00 - 12:00', venue: 'Teaching Lab', attendance: 83 },
  { code: 'GST 104', title: 'General Studies', lecturer: 'Mrs. Musa', time: '13:00 - 14:00', venue: 'Room C1', attendance: 90 },
];

const attendanceRows: AttendanceRow[] = [
  { course: 'Educational Psychology', date: '2026-11-05', status: 'Present' },
  { course: 'English Methods', date: '2026-11-05', status: 'Late' },
  { course: 'Classroom Practice', date: '2026-11-06', status: 'Present' },
  { course: 'General Studies', date: '2026-11-07', status: 'Excused' },
  { course: 'Educational Psychology', date: '2026-11-08', status: 'Present' },
  { course: 'English Methods', date: '2026-11-08', status: 'Absent' },
];

const quickStats = [
  { label: 'Attendance', value: '88%', tone: 'blue' },
  { label: 'Current Level', value: 'Year 2', tone: 'light' },
  { label: 'Classes Today', value: '4', tone: 'blue' },
  { label: 'Unread Notices', value: '6', tone: 'light' },
];

export default {
  navItems,
  stats,
  programmes,
  features,
  announcements,
  radioShows,
  staff,
  studentCourses,
  attendanceRows,
  quickStats,
};
