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
    return entry.name.endsWith('.html') ? [join(dir, entry.name)] : [];
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
}

if (failures.length) {
  console.error('Publish-safety QA failed:\n' + failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Publish-safety QA passed: no resume contact data or date-of-birth markers in HTML.');
}
