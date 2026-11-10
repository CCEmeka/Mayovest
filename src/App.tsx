import { useState } from 'react';
import { WebsiteShell, StudentPortal, AdminPortal } from './website';

export type Route = 'website' | 'student' | 'admin';

export default function App() {
  const [route, setRoute] = useState<Route>('website');

  if (route === 'student') {
    return <StudentPortal onBack={() => setRoute('website')} />;
  }

  if (route === 'admin') {
    return <AdminPortal onBack={() => setRoute('website')} />;
  }

  return (
    <WebsiteShell
      onOpenStudent={() => setRoute('student')}
      onOpenAdmin={() => setRoute('admin')}
    />
  );
}
