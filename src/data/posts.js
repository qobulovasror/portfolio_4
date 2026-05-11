const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const yaml = match[1];
  const content = match[2];
  const data = {};
  yaml.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      // Keep as-is, will be parsed in display
    }
    data[key] = value;
  });
  return { data, content };
}

function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const { data, content } = parseFrontmatter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || '',
      cover: data.cover || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      content,
      readingTime: readingTime(content),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug) => posts.find((p) => p.slug === slug);
