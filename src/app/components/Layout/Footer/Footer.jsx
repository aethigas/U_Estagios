'use client'
import './footer.css';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="footer"
    >
      <p>© 2025 Sua Empresa. Todos os direitos reservados.</p>
    </motion.footer>
  );
}
