import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// A sick note becomes a birthday: hello, a batch of orders, one slot of cake.
// thinking_revised: the slip is clear, the wrong word surprises, keep it tight.
const ENTRY = "I texted 'I'm sick' and autocorrect sent 'I'm six.' My boss sent a cake and a balloon.";

// thinking_revised: resolve our own directory and honour the output override.
const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One batch, no extra orders: a single write with no trailing newline.
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, ENTRY, 'utf8');

// thinking_revised: report the exact byte count once, then finish cleanly.
console.log(Buffer.byteLength(ENTRY, 'utf8'));
