:root {
  --primary: #174a83;
  --primary-deep: #10365f;
  --background: #f8f7f2;
  --surface: #ffffff;
  --muted: #6f7785;
  --border: rgba(23, 74, 131, 0.12);
  --shadow: 0 18px 40px rgba(16, 54, 95, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, rgba(23, 74, 131, 0.06), transparent 40%), var(--background);
  color: #1d2a39;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.app-shell {
  min-height: 100vh;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(248, 247, 242, 0.84);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  gap: 20px;
}

.brand-inline {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-inline strong {
  display: block;
  font-size: 0.95rem;
}

.brand-inline small {
  display: block;
  color: var(--muted);
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-deep));
  color: white;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.brand-mark.small {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  font-size: 0.7rem;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  color: #334155;
  font-size: 0.92rem;
  padding: 8px 0;
  transition: color 0.2s ease;
  border: none;
  background: transparent;
}

.nav-link:hover {
  color: var(--primary);
}

.header-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.primary-button,
.secondary-button {
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), var(--primary-deep));
  color: white;
  box-shadow: 0 12px 22px rgba(23, 74, 131, 0.2);
}

.secondary-button {
  background: white;
  color: var(--primary);
  border: 1px solid rgba(23, 74, 131, 0.22);
}

.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.hero-section {
  padding: 72px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--primary);
}

.hero-copy h1,
.section-header h2,
.text-panel h2,
.radio-copy h2,
.welcome-panel h1,
.admin-hero h1 {
  margin: 0;
  line-height: 1.12;
  letter-spacing: -0.04em;
  color: #102236;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 4.2rem);
  max-width: 650px;
}

.lead {
  max-width: 620px;
  margin: 24px 0 0;
  color: #415267;
  font-size: 1.08rem;
  line-height: 1.8;
}

.cta-row {
  display: flex;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.hero-panel {
  position: relative;
}

.hero-card {
  position: relative;
  min-height: 540px;
  border-radius: 32px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(16, 54, 95, 0.14), rgba(23, 74, 131, 0.2)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
  box-shadow: var(--shadow);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 25, 41, 0.08), rgba(9, 25, 41, 0.26));
}

.card-floating {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  padding: 18px 20px;
  border-radius: 20px;
  background: rgba(248, 247, 242, 0.94);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-floating strong {
  font-size: 1.1rem;
}

.card-floating span {
  color: var(--muted);
}

.metrics-container {
  padding: 14px 0 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-box {
  background: white;
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 8px 22px rgba(16, 54, 95, 0.04);
}

.stat-box strong {
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  color: var(--primary);
}

.stat-box span {
  color: var(--muted);
}

.section-block {
  padding: 90px 0 0;
}

.section-header {
  margin-bottom: 28px;
}

.section-header.centered {
  text-align: center;
}

.section-header h2,
.text-panel h2,
.radio-copy h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.intro-section {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 40px;
  align-items: center;
}

.image-panel {
  min-height: 430px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(16, 54, 95, 0.12), rgba(16, 54, 95, 0.3)),
    url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
  box-shadow: var(--shadow);
}

.text-panel p {
  color: #4b5d76;
  line-height: 1.8;
  font-size: 1.01rem;
}

.mission-grid,
.feature-grid,
.programme-grid,
.announcement-grid,
.footer-grid,
.admissions-grid {
  display: grid;
  gap: 22px;
}

.mission-grid,
.admissions-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-card,
.feature-card,
.programme-card,
.announcement-card,
.auth-card,
.card-panel,
.metric-card,
.contact-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(16, 54, 95, 0.04);
}

.info-card {
  padding: 28px;
}

.info-card.highlight {
  background: linear-gradient(180deg, rgba(23, 74, 131, 0.96), rgba(16, 54, 95, 1));
  color: white;
}

.small-highlight {
  transform: translateY(10px);
}

.info-card.highlight .eyebrow,
.info-card.highlight h3,
.info-card.highlight p {
  color: white;
}

.info-card h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
}

.info-card p {
  margin: 0;
  line-height: 1.75;
}

.feature-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.feature-card {
  padding: 22px 18px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover,
.programme-card:hover,
.announcement-card:hover,
.info-card:hover,
.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(16, 54, 95, 0.08);
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.02rem;
}

.bullet-mark {
  width: 10px;
  height: 10px;
  margin-top: 8px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 6px rgba(23, 74, 131, 0.1);
}

.feature-card p {
  margin: 0;
  color: #334155;
  line-height: 1.6;
}

.alt-section {
  background: rgba(23, 74, 131, 0.02);
  border-top: 1px solid rgba(23, 74, 131, 0.08);
  border-bottom: 1px solid rgba(23, 74, 131, 0.08);
  padding-bottom: 90px;
}

.programme-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.programme-card {
  padding: 24px 20px;
}

.year-pill {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(23, 74, 131, 0.08);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.78rem;
  margin-bottom: 18px;
}

.programme-card h3 {
  margin: 0 0 12px;
}

.programme-card p,
.announcement-card p,
.radio-copy p,
.radio-copy li,
.site-footer p,
.site-footer li,
.contact-grid span {
  color: #415267;
  line-height: 1.7;
}

.announcement-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.announcement-card {
  padding: 22px 20px;
}

.announcement-date {
  display: inline-block;
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.announcement-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.radio-section {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 32px;
  align-items: center;
  padding-bottom: 90px;
}

.radio-copy ul {
  padding-left: 20px;
  margin: 24px 0 28px;
}

.radio-player {
  background: linear-gradient(180deg, #143d6e, #0d2d4c);
  border-radius: 28px;
  padding: 28px;
  min-height: 330px;
  color: white;
  box-shadow: var(--shadow);
}

.player-header,
.player-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.player-header {
  justify-content: flex-start;
  margin-bottom: 26px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #49d28d;
  box-shadow: 0 0 14px rgba(73, 210, 141, 0.8);
}

.player-body {
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 40px;
}

.wave-lines {
  display: flex;
  gap: 6px;
  align-items: end;
  height: 80px;
}

.wave-lines span {
  display: block;
  width: 8px;
  border-radius: 999px;
  background: rgba(255,255,255,0.9);
  animation: pulse 1.2s ease-in-out infinite alternate;
}

.wave-lines span:nth-child(1) { height: 22%; }
.wave-lines span:nth-child(2) { height: 40%; animation-delay: 0.1s; }
.wave-lines span:nth-child(3) { height: 75%; animation-delay: 0.2s; }
.wave-lines span:nth-child(4) { height: 60%; animation-delay: 0.3s; }
.wave-lines span:nth-child(5) { height: 30%; animation-delay: 0.4s; }

@keyframes pulse {
  from { transform: scaleY(0.75); opacity: 0.7; }
  to { transform: scaleY(1.1); opacity: 1; }
}

.contact-section {
  padding-bottom: 90px;
}

.contact-card {
  padding: 30px;
}

.contact-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.contact-grid div {
  display: grid;
  gap: 8px;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(23, 74, 131, 0.02);
}

.contact-grid strong {
  color: #102236;
}

.site-footer {
  padding: 36px 0 80px;
  background: #0f2037;
  color: white;
}

.footer-grid {
  grid-template-columns: 1.3fr 0.8fr 0.9fr;
}

.footer-grid h4 {
  margin-top: 0;
  margin-bottom: 14px;
  color: white;
}

.footer-grid ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.footer-grid li,
.footer-grid p {
  color: rgba(255,255,255,0.78);
}

.footer-brand {
  margin-bottom: 18px;
}

.portal-shell {
  background: linear-gradient(180deg, rgba(23, 74, 131, 0.08), rgba(248, 247, 242, 0.96));
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 32px;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 12;
}

.portal-nav {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.portal-nav .nav-link {
  border: 1px solid transparent;
  background: transparent;
  padding: 10px 12px;
  border-radius: 10px;
}

.portal-nav .nav-link.active {
  background: rgba(23, 74, 131, 0.08);
  color: var(--primary);
  border-color: rgba(23, 74, 131, 0.1);
}

.user-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(23, 74, 131, 0.06);
  color: #20364d;
  font-weight: 600;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #41c78c;
  box-shadow: 0 0 0 5px rgba(65, 199, 140, 0.15);
}

.portal-content {
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.welcome-panel,
.panel-header-row,
.status-row,
.timetable-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.welcome-panel {
  background: linear-gradient(135deg, rgba(23, 74, 131, 0.96), rgba(16, 54, 95, 1));
  border-radius: 28px;
  color: white;
  padding: 28px 30px;
  margin-bottom: 22px;
}

.welcome-panel .eyebrow {
  color: rgba(255,255,255,0.75);
}

.welcome-panel h1 {
  color: white;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.metric-card {
  padding: 20px 18px;
}

.metric-card span {
  color: var(--muted);
  font-size: 0.9rem;
}

.metric-card strong {
  display: block;
  font-size: 1.8rem;
  color: #102236;
  margin-top: 10px;
}

.metric-card.blue {
  background: rgba(23, 74, 131, 0.07);
}

.metric-card.light {
  background: white;
}

.split-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 20px;
}

.card-panel {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.panel-header-row h3 {
  margin: 0;
}

.mini-tag {
  display: inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(23, 74, 131, 0.08);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
}

.timetable-list,
.status-list,
.staff-list,
.announcement-stack {
  display: grid;
  gap: 12px;
}

.timetable-item {
  padding: 14px 0;
  border-bottom: 1px solid rgba(23, 74, 131, 0.08);
}

.timetable-item:last-child {
  border-bottom: none;
}

.timetable-item strong,
.status-row strong {
  display: block;
}

.timetable-item small,
.meta-right small,
.staff-row small,
.announcement-inline small {
  color: var(--muted);
}

.meta-right {
  text-align: right;
}

.progress-wrap {
  width: 100%;
  height: 14px;
  border-radius: 999px;
  background: rgba(23, 74, 131, 0.08);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), #3c7bc0);
}

.status-row {
  padding: 8px 0;
  border-bottom: 1px solid rgba(23, 74, 131, 0.08);
}

.status-row:last-child {
  border-bottom: none;
}

.admin-shell {
  background: linear-gradient(180deg, rgba(23, 74, 131, 0.06), rgba(248, 247, 242, 0.95));
}

.admin-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.admin-body {
  padding-top: 30px;
}

.admin-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, rgba(23, 74, 131, 0.96), rgba(16, 54, 95, 1));
  color: white;
  border-radius: 28px;
  padding: 28px 30px;
  margin-bottom: 20px;
}

.admin-hero .eyebrow,
.admin-summary span {
  color: rgba(255,255,255,0.75);
}

.admin-hero h1 {
  color: white;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.admin-summary {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255,255,255,0.08);
  padding: 16px 20px;
  border-radius: 18px;
}

.admin-summary strong {
  font-size: 1.5rem;
}

.admin-grid {
  margin-bottom: 18px;
}

.staff-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(23, 74, 131, 0.08);
}

.staff-row:last-child {
  border-bottom: none;
}

.staff-row strong,
.announcement-inline strong {
  display: block;
}

.announcement-inline {
  display: grid;
  gap: 6px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(23, 74, 131, 0.08);
}

.announcement-inline:last-child {
  border-bottom: none;
}

.admin-mini {
  margin-left: 4px;
}

@media (max-width: 980px) {
  .hero-grid,
  .intro-section,
  .radio-section,
  .split-grid,
  .footer-grid,
  .contact-grid,
  .admissions-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .programme-grid,
  .announcement-grid,
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-nav {
    display: none;
  }
}

@media (max-width: 640px) {
  .nav-row,
  .topbar,
  .welcome-panel,
  .cta-row,
  .panel-header-row,
  .timetable-item,
  .status-row,
  .course-item,
  .admin-hero,
  .admin-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .feature-grid,
  .programme-grid,
  .announcement-grid,
  .stats-grid,
  .quick-grid,
  .mission-grid,
  .admissions-grid {
    grid-template-columns: 1fr;
  }

  .hero-card {
    min-height: 420px;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
    justify-content: center;
  }
}
