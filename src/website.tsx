import { SectionHeader, StatCard } from './components';
import data from './data';

export function WebsiteShell({
  onOpenStudent,
  onOpenAdmin,
}: {
  onOpenStudent: () => void;
  onOpenAdmin: () => void;
}) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-row">
          <div className="brand-inline">
            <div className="brand-mark">AT</div>
            <div>
              <strong>Aisha Teachers College</strong>
              <small>Ilorin, Nigeria</small>
            </div>
          </div>

          <nav className="site-nav" aria-label="Main navigation">
            {data.navItems.map((item) => (
              <a key={item} href="#" className="nav-link">{item}</a>
            ))}
          </nav>

          <div className="header-actions">
            <button className="secondary-button admin-mini" onClick={onOpenAdmin}>Admin</button>
            <button className="primary-button" onClick={onOpenStudent}>Student Login</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AISHA TEACHERS COLLEGE</p>
              <h1>Shaping the teachers who shape tomorrow.</h1>
              <p className="lead">
                At Aisha Teachers College, we prepare aspiring educators with the knowledge, practical skills and professional values to inspire lives and transform classrooms.
              </p>
              <div className="cta-row">
                <button className="primary-button">Explore Programmes</button>
                <button className="secondary-button" onClick={onOpenStudent}>Student Portal</button>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-card">
                <div className="image-overlay" />
                <div className="card-floating">
                  <strong>4-Year Teacher Training</strong>
                  <span>Academic excellence and professional growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-container">
          <div className="container stats-grid">
            {data.stats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </section>

        <section className="container section-block intro-section">
          <div className="image-panel" />
          <div className="text-panel">
            <p className="eyebrow">Welcome to Aisha Teachers College</p>
            <h2>Preparing capable, professional and inspiring educators.</h2>
            <p>
              Education is a powerful force for transformation. At Aisha Teachers College, we help aspiring teachers grow intellectually, practically and ethically, creating professionals who are ready to serve in classrooms and communities with confidence.
            </p>
            <button className="secondary-button">Discover Our Institution</button>
          </div>
        </section>

        <section className="container section-block">
          <SectionHeader eyebrow="Our mission and vision" title="Academic excellence with purpose." />
          <div className="mission-grid">
            <article className="info-card highlight">
              <p className="eyebrow">Vision</p>
              <h3>To be a recognised centre of teacher education.</h3>
              <p>Developing competent, innovative and responsible educators who contribute to academic advancement and community development.</p>
            </article>
            <article className="info-card">
              <p className="eyebrow">Mission</p>
              <h3>To provide quality teacher education.</h3>
              <p>Through effective instruction, practical training and professional development that prepare students for meaningful service.</p>
            </article>
          </div>
        </section>

        <section className="container section-block">
          <SectionHeader eyebrow="Why choose us" title="A learning environment built for teacher development." />
          <div className="feature-grid">
            {data.features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="bullet-mark" />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-block alt-section">
          <SectionHeader eyebrow="Academic programme" title="Your journey towards becoming an effective educator." />
          <div className="programme-grid">
            {data.programmes.map((programme) => (
              <article key={programme.year} className="programme-card">
                <span className="year-pill">{programme.year}</span>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-block">
          <SectionHeader eyebrow="Announcements" title="Important updates from the college community." />
          <div className="announcement-grid">
            {data.announcements.map((item) => (
              <article key={item.title} className="announcement-card">
                <span className="announcement-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-block radio-section">
          <div className="radio-copy">
            <p className="eyebrow">Aisha Campus Radio</p>
            <h2>Learning beyond the classroom.</h2>
            <p>
              Stay connected through educational conversations, institutional updates and student-focused programming that keeps the campus informed and inspired.
            </p>
            <ul>
              {data.radioShows.map((show) => (
                <li key={show}>{show}</li>
              ))}
            </ul>
            <button className="primary-button">Listen Live</button>
          </div>

          <div className="radio-player">
            <div className="player-header">
              <span className="status-indicator" />
              <strong>Now Broadcasting</strong>
            </div>
            <div className="player-body">
              <div className="wave-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div>
                <p>Current programme</p>
                <h3>The Educator's Voice</h3>
                <small>Hosted by Aisha Campus Media</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-inline footer-brand">
              <div className="brand-mark">AT</div>
              <div>
                <strong>Aisha Teachers College</strong>
                <small>Ilorin, Nigeria</small>
              </div>
            </div>
            <p>Preparing future teachers for academic excellence, professional service and community impact.</p>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul>
              <li>About Us</li>
              <li>Admissions</li>
              <li>Student Portal</li>
              <li>Campus Radio</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>+234 800 000 0000</li>
              <li>info@aishateacherscollege.edu.ng</li>
              <li>Ilorin, Kwara State</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
