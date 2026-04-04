import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "brand": {
        "name": "Minas Studio",
        "tagline": "Bridging Engineering Logic and Creative Vision."
      },
      "nav": {
        "about": "About",
        "impact": "Impact",
        "work": "Work",
        "services": "Services",
        "process": "Process",
        "contact": "Contact"
      },
      "hero": {
        "badge": "Available for new projects.",
        "title": "Menelik Michael",
        "tagline": "Bridging the Gap Between Engineering Logic and Creative Vision",
        "description": "A freelance Graphic Designer and Web Developer with a background in Electrical Engineering.",
        "cta_view": "View Projects",
        "cta_contact": "Contact Us"
      },
      "about": {
        "title": "About Me",
        "name": "Menelik Michael",
        "intro": "I am a freelance Graphic Designer and Web Developer with a background in Electrical Engineering. I specialize in building high-performance web applications and industrial visual identities. My portfolio includes strategic work for Pathfinder International Ethiopia and the Amare Tiruneh Business Group (ATBG).",
        "engineering_p": "I apply an engineering-led approach to every digital product, ensuring that every line of code serves a specific functional purpose. My technical background allows me to build robust architectures that prioritize performance and long-term scalability.",
        "design_p": "My design philosophy is deeply rooted in Industrial aesthetics and Dark Mode First principles. I focus on creating high-contrast, functional interfaces that prioritize clarity and user experience over unnecessary decoration.",
        "vision_p": "The goal is to build scalable digital solutions that empower businesses in Addis Ababa and beyond. By combining technical precision with creative vision, I help brands establish a powerful and modern digital presence.",
        "exp_title": "Professional Experience",
        "exp_pathfinder": "Collaborated on digital communications and branding strategies for international developmental impact with Pathfinder International Ethiopia.",
        "exp_atbg": "Developed a comprehensive multi-subsidiary web portal using Next.js for Amare Tiruneh Business Group (ATBG), focusing on industrial-grade performance.",
        "logic": "Engineering Logic",
        "creative": "+ Creative Design",
        "precision": "Precision & Vision"
      },
      "impact": {
        "title": "Collaborations",
        "subtitle": "Proven Impact",
        "case_study": "CASE STUDY COMING SOON"
      },
      "tech": {
        "title": "Development",
        "subtitle": "The Arsenal",
        "description": "Building robust digital infrastructure using a high-contrast tech stack focused on speed, reliability, and precision.",
        "design_title": "Design",
        "design_tools": "Design Tools"
      },
      "works": {
        "title": "Portfolio",
        "subtitle_line1": "SELECTED",
        "subtitle_line2": "WORKS",
        "description": "A COLLECTION OF HIGH-PERFORMANCE WEB APPLICATIONS AND ARCHITECTURES.",
        "case_study_cta": "VIEW CASE STUDY"
      },
      "process": {
        "title": "Execution",
        "subtitle_line1": "HOW WE",
        "subtitle_line2": "BUILD.",
        "discovery": "Discovery",
        "design": "Design",
        "dev": "Development",
        "deploy": "Deployment"
      },
      "gallery": {
        "title": "Visual Portfolio",
        "subtitle": "Graphic Design Showcase"
      },
      "services": {
        "title": "Services",
        "subtitle": "Core Competencies"
      },
      "testimonials": {
        "title": "Validation",
        "subtitle_line1": "CLIENT",
        "subtitle_line2": "VOICES.",
        "description": "Verified feedback from partners across various industry sectors."
      },
      "contact": {
        "title": "Get In Touch",
        "subtitle": "Start a Project",
        "name": "Full Name",
        "email": "Email Address",
        "subject": "Subject",
        "projectType": "Project Type",
        "message": "Project Details",
        "submit": "Send Message",
        "sending": "Sending...",
        "success": "Message sent successfully!",
        "error": "Failed to send message. Please try again."
      },
      "footer": {
        "description": "Engineering high-performance digital architectures with a relentless focus on precision and creative vision. Building the future of industrial design.",
        "nav_title": "Navigation",
        "rights": "ALL RIGHTS RESERVED.",
        "available": "Available for new projects",
        "location": "Currently based in",
        "city": "Addis Ababa, Ethiopia"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;