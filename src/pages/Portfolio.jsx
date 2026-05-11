import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { projects } from '../data/profile';

export default function Portfolio() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="container-page py-12">
      <PageHeader subtitle={t('portfolio.subtitle')} title={t('portfolio.title')} />

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === c
                ? 'text-white'
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            {filter === c && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative">
              {c === 'all' ? t('portfolio.all') : t(`portfolio.categories.${c}`)}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(p)}
              className="group cursor-pointer card overflow-hidden hover:border-brand-500/50 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-3 left-3 chip !bg-black/50 !text-white !border-white/10 backdrop-blur-sm">
                  {t(`portfolio.categories.${p.category}`)}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-1.5 group-hover:text-brand-500 transition-colors">
                  {p.name}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech?.slice(0, 3).map((tech) => (
                    <span key={tech} className="chip text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center justify-center"
                aria-label={t('common.close')}
              >
                <X size={16} />
              </button>
              <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <span className="chip mb-3">{t(`portfolio.categories.${active.category}`)}</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display mb-3">
                  {active.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {active.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {active.tech?.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {active.link && (
                    <a href={active.link} target="_blank" rel="noreferrer" className="btn-primary">
                      <ExternalLink size={14} /> {t('portfolio.live_demo')}
                    </a>
                  )}
                  {active.source && (
                    <a href={active.source} target="_blank" rel="noreferrer" className="btn-secondary">
                      <Github size={14} /> {t('portfolio.source_code')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
