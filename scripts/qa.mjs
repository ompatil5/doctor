import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const ignored = new Set(['.git', 'assets', 'node_modules']);
const prohibited = [
  [/\+?91[-\s]?98332[-\s]?93515/g, 'resume phone number'],
  [/drfirdousshaikh@gmail\.com/gi, 'resume email address'],
  [/\bdate of birth\b/gi, 'date-of-birth label'],
  [/\bDOB\b/g, 'date-of-birth abbreviation']
];

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async entry => {
    if (entry.isDirectory()) return ignored.has(entry.name) ? [] : files(join(dir, entry.name));
    const isCanonicalPage = entry.name === 'index.html' ||
      (dir === root && (entry.name === '404.html' || entry.name === 'index.html'));
    return isCanonicalPage ? [join(dir, entry.name)] : [];
  }));
  return nested.flat();
}

const failures = [];
for (const file of await files(root)) {
  const text = await readFile(file, 'utf8');
  for (const [pattern, label] of prohibited) {
    if (pattern.test(text)) failures.push(`${file}: ${label}`);
    pattern.lastIndex = 0;
  }
  if (!text.includes('<title>')) failures.push(`${file}: missing title`);
  const title = text.match(/<title>([^<]+)<\/title>/i)?.[1] ?? '';
  if (title.length > 60) failures.push(`${file}: title exceeds 60 characters`);
  const description = text.match(/<meta name="description" content="([^"]*)"/i)?.[1];
  if (!description) failures.push(`${file}: missing meta description`);
  else if (description.length > 155) failures.push(`${file}: description exceeds 155 characters`);
  const h1s = text.match(/<h1\b/gi)?.length ?? 0;
  if (h1s !== 1) failures.push(`${file}: expected one H1, found ${h1s}`);
  if (!text.includes('rel="canonical"')) failures.push(`${file}: missing canonical URL`);
}

if (failures.length) {
  console.error('Publish-safety QA failed:\n' + failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Publish-safety QA passed: no resume contact data or date-of-birth markers in HTML.');
}
