import type { ReactNode } from 'react';

export function SectionHeader({ eyebrow, title, align = 'left' }: { eyebrow: string; title: string; align?: 'left' | 'center' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'centered' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-box">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function Panel({ title, badge, children }: { title: string; badge?: string; children: ReactNode }) {
  return (
    <div className="card-panel">
      <div className="panel-header-row">
        <h3>{title}</h3>
        {badge ? <span className="mini-tag">{badge}</span> : null}
      </div>
      {children}
    </div>
  );
}
