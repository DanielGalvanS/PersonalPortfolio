import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/constants/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send via WhatsApp
    const message = `Hola! Soy ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/${
      personalInfo.whatsapp
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      "Hola! Me gustaría hablar contigo sobre un proyecto."
    );
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${message}`, "_blank");
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialMedia = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding bg-accent/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para
            proyectos freelance y colaboraciones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Envíame un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Enviar por WhatsApp
                  </Button>
                </form>

                {/* WhatsApp Direct Button */}
                <div className="mt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full gap-2 bg-green-500 text-white hover:bg-green-600 border-green-500"
                    onClick={handleWhatsAppDirect}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar directamente por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <div key={method.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{method.label}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {method.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Redes Sociales</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Disponibilidad
                </h3>
                <p className="text-muted-foreground mb-4">
                  Actualmente disponible para proyectos freelance. Respondo
                  típicamente en 24 horas.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Disponible para nuevos proyectos
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
