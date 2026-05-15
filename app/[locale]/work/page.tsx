import { useTranslations } from 'next-intl';
import ContactCTA from '@/components/ContactCTA';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import PortfolioPreview from '@/components/PortfolioPreview';
import { projects } from '@/lib/projects';

export const metadata = {
  title: 'Work - Rijaniaina ANDRIAMANDIMBY',
  description: 'View the projects of Rijaniaina ANDRIAMANDIMBY',
};

export default function Work() {
  const t = useTranslations('work');

  return (
    <div style={styles.container}>
      <main className="wrapper" style={styles.main}>
        <Hero title={t('title')} tagline={t('subtitle')} align="start" />
        <Grid variant="offset">
          {projects.map((project) => (
            <li key={project.slug}>
              <PortfolioPreview project={project} />
            </li>
          ))}
        </Grid>
      </main>
      <ContactCTA />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5rem',
  },
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
  },
};
