import { useTranslations } from 'next-intl';
import Icon from './Icon';

export default function Skills() {
  const t = useTranslations('about');

  const skills = [
    {
      icon: 'terminal-window',
      title: t('web_dev'),
      description: t('web_dev_desc'),
    },
    {
      icon: 'mobile',
      title: t('mobile_dev'),
      description: t('mobile_dev_desc'),
    },
    {
      icon: 'database',
      title: t('backend_db'),
      description: t('backend_db_desc'),
    },
    {
      icon: 'cog',
      title: t('other'),
      description: t('other_desc'),
    },
  ];

  return (
    <section style={styles.box}>
      {skills.map((skill) => (
        <div key={skill.title} style={styles.skillBox}>
          <Icon icon={skill.icon} color="var(--accent-regular)" size="2.5rem" gradient />
          <h2 style={styles.skillTitle}>{skill.title}</h2>
          <p style={styles.skillDesc}>{skill.description}</p>
        </div>
      ))}

      <style jsx>{`
        @media (min-width: 50em) {
          section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }

          h2 {
            font-size: var(--text-2xl);
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '3rem',
  },
  skillBox: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    padding: '1.5rem',
    border: '1px solid var(--gray-800)',
    borderRadius: '0.75rem',
    backgroundColor: 'var(--gray-999_40)',
    boxShadow: 'var(--shadow-sm)',
  },
  skillTitle: {
    fontSize: 'var(--text-lg)',
  },
  skillDesc: {
    color: 'var(--gray-400)',
  },
};
