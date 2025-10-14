import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { socialLinks, personalInfo } from "@/constants/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <footer className="border-t border-border">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} DG
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {Object.entries(socialLinks).map(([key, url]) => {
              const Icon = socialIcons[key];
              if (!Icon) return null;

              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={key}
                >
                  <Icon size={18} />
                </a>
              );
            })}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
