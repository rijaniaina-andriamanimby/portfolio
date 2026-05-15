import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface PortfolioPreviewProps {
  project: ProjectData;
}

export default function PortfolioPreview({ project }: PortfolioPreviewProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <Link href={`/${locale}/work/${project.slug}`} style={{ textDecoration: 'none' }}>
      <article style={styles.article}>
        <div style={styles.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            style={styles.image}
          />
        </div>
        <div style={styles.content}>
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.description}>{project.description}</p>
          <div style={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} style={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <style jsx>{`
          a:hover article {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
          }

          article {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
            border-radius: 1.5rem;
            border: 1px solid var(--gray-800);
            background-color: var(--gray-999_40);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          @media (min-width: 50em) {
            article {
              padding: 2rem;
            }
          }
        `}</style>
      </article>
    </Link>
  );
}

const styles = {
  article: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    padding: '1.5rem',
    borderRadius: '1.5rem',
    border: '1px solid var(--gray-800)',
    backgroundColor: 'var(--gray-999_40)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '0.75rem',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    aspectRatio: '16/9',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  title: {
    fontSize: 'var(--text-lg)',
    color: 'var(--gray-0)',
    margin: 0,
  },
  description: {
    color: 'var(--gray-300)',
    fontSize: 'var(--text-sm)',
    margin: 0,
    lineHeight: 1.5,
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap' as const,
    marginTop: '0.5rem',
  },
  tag: {
    fontSize: 'var(--text-sm)',
    color: 'var(--accent-dark)',
    backgroundColor: 'var(--accent-overlay)',
    padding: '0.25rem 0.75rem',
    borderRadius: '0.25rem',
  },
};
