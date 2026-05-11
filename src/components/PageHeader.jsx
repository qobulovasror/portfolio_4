import { motion } from 'framer-motion';

export default function PageHeader({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <p className="section-subtitle">{subtitle}</p>
      <h1 className="section-title">
        <span className="heading-gradient">{title}</span>
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mt-3" />
    </motion.div>
  );
}
