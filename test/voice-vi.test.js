// Vietnamese narration: words with diacritics stay whole, each syllable weighs one, the default voice
// is a Vietnamese one (Kokoro has none), and whisper is asked for Vietnamese.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitSentences, tokenize, weight, captionLines, placeSentence, pickVoice, isVietnamese, whisperLang } from '../cli/lib/voice.js';

const words = (s, keep = []) => tokenize(s, keep).filter((t) => t.word).map((t) => t.text);

test('isVietnamese spots Vietnamese letters, not English, French or Chinese', () => {
  assert.equal(isVietnamese('Chỉ vào khung hình để sửa.'), true);
  assert.equal(isVietnamese('Đường đi'), true);
  assert.equal(isVietnamese('Point at the frame.'), false);
  assert.equal(isVietnamese('café crème'), false);
  assert.equal(isVietnamese('Xin chào'), false); // only letters French shares: pass --voice say:Linh for such a short line
  assert.equal(isVietnamese('指着画面改'), false);
});

test('splitSentences ends a sentence at a full stop after a Vietnamese letter', () => {
  assert.deepEqual(splitSentences('Nói một câu là có phim. Sửa ở đâu, chỉ vào đó.'), ['Nói một câu là có phim.', 'Sửa ở đâu, chỉ vào đó.']);
});

test('tokenize keeps Vietnamese words with diacritics whole, also when decomposed (NFD)', () => {
  assert.deepEqual(words('Người dùng chỉ vào khung hình.'), ['Người', 'dùng', 'chỉ', 'vào', 'khung', 'hình']);
  assert.deepEqual(words('Đường'.normalize('NFD')), ['Đường'.normalize('NFD')]);
  assert.deepEqual(words('Xuất video 30 giây', ['Xuất video']), ['Xuất video', '30', 'giây']);
});

test('a Vietnamese syllable weighs one, however many vowels and marks it carries', () => {
  for (const w of ['Việt', 'người', 'khuyến', 'ạ', 'toán', 'Đường'.normalize('NFD')]) assert.equal(weight({ text: w, word: true }), 1, w);
  assert.equal(weight({ text: 'Agent', word: true }), 2);
});

test('captions measure Vietnamese letters like Latin ones, so a line holds a full phrase', () => {
  const s = 'Chỉ vào khung hình, viết điều cần sửa.';
  const lines = captionLines({ text: s, tokens: placeSentence(tokenize(s), [[0, 3]]) }, 16);
  assert.equal(lines.length, 1); // 29 letters at half width: one line (as Han-width letters it took two)
});

test('default voice for Vietnamese: say:Linh on macOS, Windows OneCore vi-VN on Windows, a clear error elsewhere', () => {
  assert.deepEqual(pickVoice(undefined, 'Xin chào các bạn', 'darwin'), { engine: 'say', id: 'Linh' });
  assert.deepEqual(pickVoice(undefined, 'Xin chào các bạn', 'win32'), { engine: 'win', id: 'vi-VN' });
  assert.throws(() => pickVoice(undefined, 'Xin chào các bạn', 'linux'), /Vietnamese/);
  assert.deepEqual(pickVoice('say', 'Xin chào các bạn', 'darwin'), { engine: 'say', id: 'Linh' });
  assert.deepEqual(pickVoice('win:Microsoft An', 'Xin chào các bạn', 'win32'), { engine: 'win', id: 'Microsoft An' });
  assert.deepEqual(pickVoice('win', 'hello', 'win32'), { engine: 'win', id: 'en-US' });
});

test('whisper language: vi for Vietnamese scripts or --lang vi, zh for Chinese, en otherwise', () => {
  assert.equal(whisperLang({ text: 'Xin chào các bạn' }), 'vi');
  assert.equal(whisperLang({ lang: 'vi' }), 'vi');
  assert.equal(whisperLang({ text: '你好' }), 'zh');
  assert.equal(whisperLang({ text: 'hello there' }), 'en');
});

test('a Vietnamese name in an English or Chinese script does not make it Vietnamese', () => {
  assert.equal(isVietnamese('Thanks to our designer Nguyễn for the logo.'), false);
  assert.deepEqual(pickVoice(undefined, 'Thanks to our designer Nguyễn for the logo.', 'linux'), { engine: 'kokoro', id: 'af_heart' });
  assert.deepEqual(pickVoice(undefined, '感谢设计师 Nguyễn Phở', 'darwin'), { engine: 'say', id: 'Tingting' });
  assert.equal(whisperLang({ text: '感谢设计师 Nguyễn Phở' }), 'zh');
});

test('an empty or dash-led Windows voice id is refused instead of picking any voice', () => {
  assert.throws(() => pickVoice('win:', 'hello', 'win32'), /voice/);
  assert.throws(() => pickVoice('win:-Rate', 'hello', 'win32'), /voice/);
});

test('captions count full-width Latin (ＡＩ) at full width, as it renders', () => {
  const s = 'ＡＩＡＩＡＩＡＩＡＩ，ＡＩＡＩＡＩＡＩＡＩ。';
  assert.equal(captionLines({ text: s, tokens: placeSentence(tokenize(s), [[0, 3]]) }, 16).length, 2);
});
