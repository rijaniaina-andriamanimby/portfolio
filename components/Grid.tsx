import { ReactNode } from 'react';

interface GridProps {
  variant?: 'offset';
  children: ReactNode;
}

export default function Grid({ variant = 'offset', children }: GridProps) {
  const isOffset = variant === 'offset';

  return (
    <ul style={isOffset ? styles.gridOffset : styles.grid}>
      {children}
      <style jsx>{`
        ul {
          display: grid;
          gap: 2rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media (min-width: 50em) {
          ul {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }
      `}</style>
    </ul>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gap: '2rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  gridOffset: {
    display: 'grid',
    gap: '2rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
};
