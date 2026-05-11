import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Server, Wrench, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/PageHeader';
import { skills, experience, education } from '../data/profile';

function TimelineItem({ period, title, place, desc, last }) {
  return (
    <li className="relative pl-8 pb-8">
      {/* Dot */}
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 ring-4 ring-white dark:ring-zinc-950" />
      {/* Line */}
      {!last && <span className="absolute left-[5px] top-4 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />}
      <span className="inline-block chip mb-2">{period}</span>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-brand-500 text-sm font-medium mb-1">{place}</p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
    </li>
  );
}

function SkillItem({ name, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center justify-between gap-3 py-2 border-b border-zinc-100 dark:border-zinc-800/60 last:border-0"
    >
      <span className="text-sm font-medium">{name}</span>
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white">
        <Check size={14} strokeWidth={3} />
      </span>
    </motion.li>
  );
}

export default function Resume() {
  const { t } = useTranslation();

  return (
    <div className="container-page py-12">
      <PageHeader subtitle={t('resume.subtitle')} title={t('resume.title')} />

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="card p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Briefcase className="text-brand-500" size={20} />
            </div>
            <h3 className="text-xl font-bold font-display">{t('resume.experience')}</h3>
          </div>
          <ul>
            {experience.map((e, idx) => (
              <TimelineItem
                key={e.key}
                period={e.endNow ? e.period.replace('present', t('resume.present')) : e.period}
                title={t(`resume.exp.${e.key}.title`)}
                place={t(`resume.exp.${e.key}.company`)}
                desc={t(`resume.exp.${e.key}.desc`)}
                last={idx === experience.length - 1}
              />
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="card p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
              <GraduationCap className="text-accent-500" size={20} />
            </div>
            <h3 className="text-xl font-bold font-display">{t('resume.education')}</h3>
          </div>
          <ul>
            {education.map((e, idx) => (
              <TimelineItem
                key={e.key}
                period={e.period}
                title={t(`resume.edu.${e.key}.title`)}
                place={t(`resume.edu.${e.key}.school`)}
                desc={t(`resume.edu.${e.key}.desc`)}
                last={idx === education.length - 1}
              />
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold font-display mb-6 text-center">{t('resume.skills')}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { key: 'frontend', Icon: Code2, list: skills.frontend },
            { key: 'backend', Icon: Server, list: skills.backend },
            { key: 'tools', Icon: Wrench, list: skills.tools },
          ].map(({ key, Icon, list }, gi) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="text-brand-500" size={20} />
                <h4 className="font-semibold">{t(`resume.${key}`)}</h4>
              </div>
              <ul>
                {list.map((s, i) => (
                  <SkillItem key={s.name} name={s.name} delay={i * 0.05} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
