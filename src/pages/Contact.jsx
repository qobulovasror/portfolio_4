import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const escapeHtml = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const text = [
      '📩 <b>New message from portfolio</b>',
      '',
      `👤 <b>Name:</b> ${escapeHtml(form.name)}`,
      `📧 <b>Email:</b> ${escapeHtml(form.email)}`,
      form.subject && `📌 <b>Subject:</b> ${escapeHtml(form.subject)}`,
      '',
      '💬 <b>Message:</b>',
      escapeHtml(form.message),
    ]
      .filter(Boolean)
      .join('\n');

    try {
      if (!botToken || !chatId) {
        throw new Error('Telegram bot credentials are not configured');
      }

      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.description || 'Telegram API error');
      }

      toast.success(t('contact.form_success'));
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('[Contact] send failed:', err);
      toast.error(t('contact.form_error'));
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { Icon: Mail, label: t('contact.email'), value: profile.email, href: `mailto:${profile.email}` },
    { Icon: MapPin, label: t('contact.location'), value: profile.location },
    { Icon: FaTelegram, label: t('contact.telegram'), value: '@Qobulov_Asror', href: profile.socials.telegram },
  ];

  return (
    <div className="container-page py-12">
      <PageHeader subtitle={t('contact.subtitle')} title={t('contact.title')} />

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Left: info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="lg:col-span-2 card p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold font-display mb-3">{t('contact.heading')}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">{t('contact.p')}</p>

          <ul className="space-y-4">
            {contacts.map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href || '#'}
                  className="flex items-start gap-3 group"
                  {...(href && href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                    <Icon className="text-brand-500 group-hover:text-white transition-colors" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
                    <p className="text-sm font-medium truncate group-hover:text-brand-500 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            {[
              { href: profile.socials.linkedin, Icon: FaLinkedin },
              { href: profile.socials.github, Icon: FaGithub },
              { href: profile.socials.telegram, Icon: FaTelegram },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-brand-500 hover:border-brand-500 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          onSubmit={onSubmit}
          className="lg:col-span-3 card p-6 sm:p-8"
        >
          <h3 className="text-xl font-bold font-display mb-5">{t('contact.form_title')}</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" htmlFor="name">
                {t('contact.form_name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                className="input"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" htmlFor="email">
                {t('contact.form_email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="input"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5" htmlFor="subject">
              {t('contact.form_subject')}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={onChange}
              className="input"
              placeholder="Project inquiry"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1.5" htmlFor="message">
              {t('contact.form_message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={onChange}
              className="input resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60">
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> {t('contact.form_sending')}
              </>
            ) : (
              <>
                <Send size={16} /> {t('contact.form_submit')}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
