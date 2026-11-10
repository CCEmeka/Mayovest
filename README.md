import { useState } from 'react';
import { WebsiteShell } from './website';
import { StudentPortal, AdminPortal } from './website';
import './index.css';

export default function App() {
  const [route, setRoute] = useState<'website' | 'student' | 'admin'>('website');

  if (route === 'student') {
    return <StudentPortal onBack={() => setRoute('website')} />;
  }

  if (route === 'admin') {
    return <AdminPortal onBack={() => setRoute('website')} />;
  }

  return <WebsiteShell onOpenStudent={() => setRoute('student')} onOpenAdmin={() => setRoute('admin')} />;
}
