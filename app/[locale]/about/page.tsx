import { useTranslations } from 'next-intl';
import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

export const metadata = {
  title: 'About - Rijaniaina ANDRIAMANDIMBY',
  description: 'About Rijaniaina ANDRIAMANDIMBY - Full Stack Developer',
};

export default function About() {
  const t = useTranslations('about');

  return (
    <div style={styles.container}>
      <main className="wrapper" style={styles.about}>
        <Hero title={t('title')} tagline={t('subtitle')}>
          <img
            width="1553"
            height="873"
            src="/assets/at-work.jpg"
            alt="Rijaniaina at work"
            style={styles.image}
          />
        </Hero>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{t('profile_title')}</h2>
          <div style={styles.content}>
            <p>{t('profile_desc')}</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{t('education_title')}</h2>
          <div style={styles.content}>
            <p>
              <strong>{t('education_desc')}</strong>
              <br />
              {t('education_school')}
              <br />
              {t('education_focus')}
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{t('skills_title')}</h2>
          <div style={styles.content}>
            <Skills />
          </div>
        </section>
      </main>

      <ContactCTA />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '3.5rem',
  },
  about: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '3.5rem',
  },
  image: {
    marginTop: '1.5rem',
    borderRadius: '1.5rem',
    boxShadow: 'var(--shadow-md)',
    maxWidth: '100%',
    height: 'auto',
  },
  section: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
    color: 'var(--gray-200)',
  },
  sectionTitle: {
    gridColumnStart: 1,
    fontSize: 'var(--text-xl)',
    color: 'var(--gray-0)',
  },
  content: {
    gridColumn: '2 / 4',
  },
};
