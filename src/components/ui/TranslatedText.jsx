import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TranslatedText({
  i18nKey,
  className = "",
  as = "span",
  children
}) {
  const { t, i18n } = useTranslation();
  const Component = motion[as] || motion.span;

  return (
    <AnimatePresence mode="wait">
      <Component
        key={`${i18nKey}-${i18n.language}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={className}
      >
        {children || t(i18nKey)}
      </Component>
    </AnimatePresence>
  );
}
