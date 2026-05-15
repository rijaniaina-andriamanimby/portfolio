'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

interface NavProps {
  locale: string;
}

export default function Nav({ locale }: NavProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), href: `/${locale}` },
    { label: t('nav.work'), href: `/${locale}/work` },
    { label: t('nav.about'), href: `/${locale}/about` },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/rijaniaina-andriamanimby', icon: 'github-logo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rijaniaina-andriamandimby-80905428b/', icon: 'linkedin-logo' },
    { label: 'Facebook', href: 'https://www.facebook.com/rija.andriamandimby', icon: 'facebook-logo' },
  ];

  const isCurrentPage = (href: string) => {
    return pathname === href || (href !== `/${locale}` && pathname.startsWith(href));
  };

  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const currentPath = pathname.replace(`/${locale}`, '');

  return (
    <nav className={styles.nav}>
      <div className={styles.menuHeader}>
        <Link href={`/${locale}`} className={styles.siteTitle}>
          <Icon icon="terminal-window" size="1.6em" gradient />
          Rijaniaina ANDRIAMANDIMBY
        </Link>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <Icon icon="list" />
        </button>
      </div>

      <ul className={`${styles.navItems} ${menuOpen ? styles.visible : ''}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={styles.link}
              aria-current={isCurrentPage(href) ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`${styles.menuFooter} ${menuOpen ? styles.visible : ''}`}>
        <div className={styles.socials}>
          {socialLinks.map(({ label, href, icon }) => (
            <a key={href} href={href} className={styles.social} title={label}>
              <span className="sr-only">{label}</span>
              <Icon icon={icon as any} />
            </a>
          ))}
        </div>

        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>

        <div className={styles.languageSwitch}>
          <Link
            href={`/${otherLocale}${currentPath}`}
            className={styles.langButton}
            title={`Switch to ${otherLocale === 'en' ? 'English' : 'Français'}`}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </nav>
  );
}
