import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getPost } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const post = getPost(slug);

  useEffect(() => {
    if (!post) navigate('/blog', { replace: true });
  }, [post, navigate]);

  if (!post) return null;

  const date = post.date
    ? new Date(post.date).toLocaleDateString(i18n.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <article className="container-page py-12 max-w-3xl">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-brand-500 mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> {t('blog.back')}
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="chip text-[10px]">#{tag}</span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">{post.description}</p>
        <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {post.readingTime} {t('blog.min_read')}
          </span>
        </div>
      </motion.header>

      {post.cover && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          src={post.cover}
          alt={post.title}
          className="w-full aspect-video object-cover rounded-2xl mb-10"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="markdown-body"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </motion.div>
    </article>
  );
}
