import { useTranslations } from 'next-intl';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.group}>
        <p style={styles.copyright}>
          © {currentYear} Rijaniaina ANDRIAMANDIMBY
        </p>
      </div>
      <p style={styles.socials}>
        <a href="https://github.com/rijaniaina-andriamanimby">GitHub</a>
        <a href="https://www.linkedin.com/in/rijaniaina-andriamandimby-80905428b/">LinkedIn</a>
        <a href="https://www.facebook.com/rija.andriamandimby">Facebook</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '3rem',
    marginTop: 'auto',
    padding: '3rem 2rem',
    textAlign: 'center' as const,
    color: 'var(--gray-400)',
    fontSize: 'var(--text-sm)',
  },
  group: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  copyright: {
    margin: 0,
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap' as const,
    margin: 0,
  },
};
