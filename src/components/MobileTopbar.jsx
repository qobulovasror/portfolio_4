import { Menu } from 'lucide-react';
import { profile } from '../data/profile';

export default function MobileTopbar({ onOpen }) {
  return (
    <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
      <span className="font-display font-semibold">{profile.name.split(' ')[0]}<span className="text-brand-500">.</span></span>
      <button
        onClick={onOpen}
        aria-label="Open menu"
        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
      >
        <Menu size={20} />
      </button>
    </div>
  );
}
