import { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
}

export default function Pill({ children }: PillProps) {
  return (
    <div style={styles.pill}>
      {children}
      <style jsx>{`
        div {
          display: flex;
          padding: 0.5rem 1rem;
          border-radius: 999rem;
          border: 1px solid var(--gray-800);
          background-color: var(--gray-999_40);
          font-size: var(--text-sm);
          color: var(--gray-300);
          gap: 0.5rem;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

const styles = {
  pill: {
    display: 'flex',
    padding: '0.5rem 1rem',
    borderRadius: '999rem',
    border: '1px solid var(--gray-800)',
    backgroundColor: 'var(--gray-999_40)',
    fontSize: 'var(--text-sm)',
    color: 'var(--gray-300)',
    gap: '0.5rem',
    alignItems: 'center',
  },
};
