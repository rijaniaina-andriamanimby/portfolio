import CallToAction from './CallToAction';
import Icon from './Icon';

export default function ContactCTA() {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <h3 style={styles.title}>Let&apos;s work together.</h3>
        <p style={styles.description}>
          I&apos;m always interested in hearing about new projects and opportunities.
        </p>
      </div>
      <CallToAction href="mailto:rijaniaina.andriamandimby@gmail.com">
        Send me an email
        <Icon icon="arrow-right" size="1.2em" />
      </CallToAction>

      <style jsx>{`
        section {
          display: grid;
          gap: 2rem;
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid var(--gray-800);
          background-color: var(--gray-999_40);
          box-shadow: var(--shadow-md);
        }

        @media (min-width: 50em) {
          section {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 3rem;
            padding: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    display: 'grid',
    gap: '2rem',
    padding: '2rem',
    borderRadius: '1.5rem',
    border: '1px solid var(--gray-800)',
    backgroundColor: 'var(--gray-999_40)',
    boxShadow: 'var(--shadow-md)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  title: {
    fontSize: 'var(--text-2xl)',
    color: 'var(--gray-0)',
  },
  description: {
    color: 'var(--gray-300)',
  },
};
