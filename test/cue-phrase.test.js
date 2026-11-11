// OM.cue on a phrase that narration splits into several words: Vietnamese is written a syllable per
// word, so "không biết" arrives as two cue words and must still be found.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function runtimeWith(words) {
  const node = { textContent: JSON.stringify({ words }) };
  const window = {};
  const document = { getElementById: (id) => (id === 'om-cues' ? node : null), documentElement: { getAttribute: () => null } };
  vm.runInNewContext(readFileSync(new URL('../runtime/om.js', import.meta.url), 'utf8'), { window, document });
  return window.OM;
}

const WORDS = [
  { word: 'Tôi', start: 0.1, end: 0.3 }, { word: 'không', start: 0.35, end: 0.6 }, { word: 'biết', start: 0.62, end: 0.9 },
  { word: 'code', start: 1.0, end: 1.3 }, { word: 'không', start: 2.0, end: 2.2 }, { word: 'biết', start: 2.25, end: 2.5 },
];

test('a phrase spanning consecutive words starts at its first word and ends at its last', () => {
  const OM = runtimeWith(WORDS);
  assert.equal(OM.cue('không biết'), 0.35);
  assert.equal(OM.cue('Không Biết', 1, 'end'), 0.9);
  assert.equal(OM.cue('không biết', 2), 2.0);
});

test('single-word cues behave as before, including a part of a word', () => {
  const OM = runtimeWith([{ word: '一句话', start: 1, end: 1.5 }, ...WORDS]);
  assert.equal(OM.cue('一句'), 1);
  assert.equal(OM.cue('code', 1, 'end'), 1.3);
  assert.equal(OM.cue('không'), 0.35);
});

test('a phrase whose words are not adjacent is not a cue', () => {
  const OM = runtimeWith(WORDS);
  assert.throws(() => OM.cue('Tôi biết'), /no cue "Tôi biết"/);
});

test('om voice warns about the same phrases OM.cue would throw on', async () => {
  const { missingCues } = await import('../cli/lib/voice.js');
  const missing = missingCues(WORDS, [{ term: 'không biết', nth: 2 }, { term: 'không biết', nth: 3 }, { term: 'Tôi biết', nth: 1 }]);
  assert.deepEqual(missing.map((m) => `${m.term}#${m.nth}`), ['không biết#3', 'Tôi biết#1']);
});

test('a decomposed (NFD) cue in the page still finds composed (NFC) narration words', async () => {
  const OM = runtimeWith(WORDS);
  assert.equal(OM.cue('không biết'.normalize('NFD')), 0.35);
  const { missingCues, cueTerms } = await import('../cli/lib/voice.js');
  assert.deepEqual(missingCues(WORDS, [{ term: 'biết'.normalize('NFD'), nth: 2 }]), []);
  assert.equal(cueTerms(`OM.cue('${'biết'.normalize('NFD')}')`)[0].term, 'biết');
});
