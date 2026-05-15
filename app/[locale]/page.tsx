import { useTranslations } from 'next-intl';
import CallToAction from '@/components/CallToAction';
import ContactCTA from '@/components/ContactCTA';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import Pill from '@/components/Pill';
import PortfolioPreview from '@/components/PortfolioPreview';
import Skills from '@/components/Skills';
import { projects } from '@/lib/projects';

export const metadata = {
  title: 'Rijaniaina ANDRIAMANDIMBY - Portfolio',
  description: 'Full-Stack Developer & Database Designer',
};

export default function Home() {
  const t = useTranslations('home');

  const latestProjects = projects.slice(0, 4);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={styles.stack}>
        <div className="wrapper" style={styles.sectionWrapper}>
          <header style={styles.hero}>
            <Hero title={t('title')} tagline={t('subtitle')} align="start">
              <div style={styles.roles}>
                <Pill>
                  <Icon icon="code" size="1.33em" />
                  {t('role_developer')}
                </Pill>
                <Pill>
                  <Icon icon="database" size="1.33em" />
                  {t('role_database')}
                </Pill>
              </div>
            </Hero>

            <img
              alt="Rijaniaina portrait"
              width="380"
              height="520"
              src="/assets/portrait.jpg"
              style={styles.portrait}
            />
          </header>

          <Skills />
        </div>

        <main className="wrapper" style={styles.sectionWrapper}>
          <section style={styles.section}>
            <header style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>{t('latest_projects')}</h3>
              <p style={styles.sectionDesc}>{t('latest_projects_desc')}</p>
            </header>

            <div style={styles.gallery}>
              <Grid variant="offset">
                {latestProjects.map((project) => (
                  <li key={project.slug}>
                    <PortfolioPreview project={project} />
                  </li>
                ))}
              </Grid>
            </div>

            <div style={styles.cta}>
              <CallToAction href="/work">
                {t('all_projects')}
                <Icon icon="arrow-right" size="1.2em" />
              </CallToAction>
            </div>
          </section>
        </main>

        <ContactCTA />
      </div>
    </div>
  );
}

const styles = {
  stack: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5rem',
  },
  sectionWrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5rem',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
  },
  roles: {
    display: 'none' as const,
  },
  portrait: {
    aspectRatio: '5 / 4',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '1.5rem',
    boxShadow: 'var(--shadow-md)',
    maxWidth: '100%',
    height: 'auto',
  },
  section: {
    display: 'grid',
    gap: '2rem',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    maxWidth: '50ch',
    margin: '0 auto',
    fontSize: 'var(--text-md)',
    color: 'var(--gray-300)',
  },
  sectionTitle: {
    fontSize: 'var(--text-2xl)',
  },
  sectionDesc: {
    margin: '0.5rem 0 0 0',
  },
  gallery: {
    width: '100%',
  },
  cta: {
    textAlign: 'center' as const,
  },
};
