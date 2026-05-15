import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  tagline?: string;
  align?: 'start' | 'center';
  children?: ReactNode;
}

export default function Hero({ title, tagline, align = 'center', children }: HeroProps) {
  const alignClass = align === 'start' ? 'start' : 'center';

  return (
    <div className={`hero stack gap-4 ${alignClass}`} style={styles.container}>
      <div className="stack gap-2" style={styles.content}>
        <h1 style={styles.title}>{title}</h1>
        {tagline && <p style={styles.tagline}>{tagline}</p>}
      </div>
      {children}

      <style jsx>{`
        .hero {
          font-size: var(--text-lg);
          text-align: ${align === 'start' ? 'start' : 'center'};
        }

        .title,
        .tagline {
          max-width: 37ch;
          margin-inline: auto;
        }

        .start .title,
        .start .tagline {
          margin-inline: unset;
        }

        @media (min-width: 50em) {
          .hero {
            font-size: var(--text-xl);
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    fontSize: 'var(--text-lg)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  title: {
    fontSize: 'var(--text-3xl)',
    color: 'var(--gray-0)',
    maxWidth: '37ch',
    marginInline: 'auto',
  },
  tagline: {
    maxWidth: '37ch',
    marginInline: 'auto',
  },
};
