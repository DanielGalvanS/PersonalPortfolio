import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { socialLinks, personalInfo } from "@/constants/data";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: Github,
    twitter: Twitter,
  };

  return (
    <footer className="w-full border-t border-border bg-background py-4 lg:py-6 relative z-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center">
            <p className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-widest">
              © {currentYear} Daniel Galvan. {t('footer.rights', { defaultValue: 'All rights reserved.' })}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-8">
            {Object.entries(socialLinks).map(([key, url]) => {
              const Icon = socialIcons[key];
              if (!Icon) return null;

              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:-translate-y-1 transition-all duration-300"
                  aria-label={key}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-foreground hover:-translate-y-1 transition-all duration-300"
              aria-label="email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
