import data from './data';
import { Panel } from './components';

export function StudentPortal({ onBack }: { onBack: () => void }) {
  const student = {
    name: 'Aisha Bello',
    level: 'Year 2',
    attendance: 88,
    classesToday: 4,
  };

  return (
    <div className="portal-shell">
      <header className="topbar">
        <div className="brand-inline">
          <div className="brand-mark small">AT</div>
          <div>
            <strong>Aisha Teachers College</strong>
            <small>Student Portal</small>
          </div>
        </div>

        <nav className="portal-nav" aria-label="Student navigation">
          <button type="button" className="nav-link active">Dashboard</button>
          <button type="button" className="nav-link">Courses</button>
          <button type="button" className="nav-link">Attendance</button>
          <button type="button" className="nav-link">Calendar</button>
        </nav>

        <div className="user-badge">
          <span className="dot" />
          {student.name}
        </div>
      </header>

      <main className="portal-content">
        <section className="welcome-panel">
          <div>
            <p className="eyebrow">Good morning</p>
            <h1>Welcome back, {student.name.split(' ')[0]}.</h1>
          </div>
          <button className="secondary-button" onClick={onBack}>Public Site</button>
        </section>

        <section className="quick-grid">
          {data.quickStats.map((card) => (
            <article key={card.label} className={`metric-card ${card.tone}`}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </section>

        <section className="split-grid">
          <Panel title="Today’s timetable" badge={`${student.classesToday} classes`}>
            <div className="timetable-list">
              {data.studentCourses.map((item) => (
                <div key={item.code} className="timetable-item">
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.lecturer}</small>
                  </div>
                  <div className="meta-right">
                    <span>{item.time}</span>
                    <small>{item.venue}</small>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Attendance summary" badge={`${student.attendance}%`}>
            <div className="progress-wrap">
              <div className="progress-bar" style={{ width: `${student.attendance}%` }} />
            </div>
            <div className="status-list">
              {[
                { title: 'Present', count: 18 },
                { title: 'Excused', count: 3 },
                { title: 'Absent', count: 2 },
                { title: 'Late', count: 1 },
              ].map((status) => (
                <div key={status.title} className="status-row">
                  <span>{status.title}</span>
                  <strong>{status.count}</strong>
                </div>
              ))}
            </div>
          </Panel>
        </section>
      </main>
    </div>
  );
}

export function AdminPortal({ onBack }: { onBack: () => void }) {
  return (
    <div className="portal-shell admin-shell">
      <header className="topbar">
        <div className="brand-inline">
          <div className="brand-mark small">AT</div>
          <div>
            <strong>Aisha Teachers College</strong>
            <small>Admin Portal</small>
          </div>
        </div>

        <div className="admin-actions">
          <button className="secondary-button">+ New Announcement</button>
          <button className="primary-button" onClick={onBack}>Back to site</button>
        </div>
      </header>

      <main className="portal-content admin-body">
        <section className="admin-hero">
          <div>
            <p className="eyebrow">Institution overview</p>
            <h1>Campus command centre</h1>
          </div>
          <div className="admin-summary">
            <span>Current session</span>
            <strong>2026/2027</strong>
          </div>
        </section>

        <section className="quick-grid admin-grid">
          <article className="metric-card blue">
            <span>Total Students</span>
            <strong>2,400</strong>
          </article>
          <article className="metric-card light">
            <span>Active Lecturers</span>
            <strong>84</strong>
          </article>
          <article className="metric-card blue">
            <span>Attendance Rate</span>
            <strong>91%</strong>
          </article>
          <article className="metric-card light">
            <span>Pending Tasks</span>
            <strong>12</strong>
          </article>
        </section>

        <section className="split-grid admin-columns">
          <Panel title="Staff Directory" badge="4 people">
            <div className="staff-list">
              {data.staff.map((person) => (
                <div key={person.email} className="staff-row">
                  <div>
                    <strong>{person.name}</strong>
                    <small>{person.role}</small>
                  </div>
                  <span>{person.email}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Announcements" badge="Latest">
            <div className="announcement-stack">
              {data.announcements.map((item) => (
                <div key={item.title} className="announcement-inline">
                  <small>{item.date}</small>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </Panel>
        </section>
      </main>
    </div>
  );
}
