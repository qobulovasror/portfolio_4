import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { posts } from '../data/posts';

function formatDate(d, lang) {
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString(lang, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return d;
  }
}

export default function Blog() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-page py-12">
      <PageHeader subtitle={t('blog.subtitle')} title={t('blog.title')} />

      {posts.length === 0 ? (
        <div className="card p-12 text-center text-zinc-500">{t('blog.no_posts')}</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="card overflow-hidden group hover:border-brand-500/50 transition-colors"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {post.cover && (
                  <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                    <img
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="chip text-[10px]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {formatDate(post.date, i18n.language)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readingTime} {t('blog.min_read')}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-500">
                    {t('blog.read_more')}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
