import Link from 'next/link';
import { ReactNode } from 'react';

interface CallToActionProps {
  href: string;
  children: ReactNode;
}

export default function CallToAction({ href, children }: CallToActionProps) {
  return (
    <Link href={href} style={styles.link}>
      {children}
      <style jsx>{`
        a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          background: var(--gradient-accent);
          color: var(--accent-text-over);
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        a:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </Link>
  );
}

const styles = {
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    background: 'var(--gradient-accent)',
    color: 'var(--accent-text-over)',
    textDecoration: 'none',
    fontWeight: 600,
    cursor: 'pointer',
  },
};
