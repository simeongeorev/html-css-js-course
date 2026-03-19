// function solve() {
//   let inputTextEl = document.getElementById("input")
//   let outputEl = document.getElementById("output")

//   let sentences = inputTextEl.value.split(".")

//   let filteredSentences = []
//   sentences.forEach(sentence => {if (sentence.length >= 1) {filteredSentences.push(sentence)}});

//   let paragraphsNeeded = parseInt(filteredSentences.length / 3)
//   let paragraphSentences = [paragraphsNeeded * []]

//   for (let i = 0; i < paragraphSentences.length; i++) {

//     while (filteredSentences && paragraphSentences[i].length < 3) {
//       paragraphSentences[i].push(filteredSentences.shift())
//     }
//   }

//   for (const p of paragraphSentences) {
//     p = `<p>${p.join(".")}</p>`
//     outputEl.innerHTML += p
//   }
// }


function solve() {
  /* ---------- 1. Grab the elements ---------- */
  const inTxt = document.getElementById('input');       // textarea
  const outDiv = document.getElementById('output');     // container for <p>s

  /* ---------- 2. Split into sentences strings --- */
  // .split('.') returns an array; we keep only non‑empty pieces,
  // strip surrounding white‑space and remember to add the dot back later.
  const raw = inTxt.value.split('.');                 // note: the dot stays removed
  const sentences = raw
    .map(s => s.trim())                     // " hello " → "hello"
    .filter(s => s.length > 0);           // discard "" caused by consecutive dots

  if (sentences.length === 0) return;    // nothing to do

  /* ---------- 3. How many paragraphs blocks? ---- */
  // Ceil gives us a block even when the count isn’t divisible by 3
  const paraCnt = Math.ceil(sentences.length / 3);

  /* ---------- 4. Create the needed empty arrays ----- */
  // `Array.from` creates brand‑new arrays, not the same reference duplicated
  const paras = Array.from({ length: paraCnt }, () => []);

  /* ---------- 5. Distribute sentences → paragraphs */
  sentences.forEach((sen, idx) => {
    // integer divide tells which paragraph receives this sentence
    const bucket = Math.floor(idx / 3);
    paras[bucket].push(sen);
  });

  /* ---------- 6. Build the HTML string --------------- */
  // For each paragraph:
  //   - join the sentences with '. ' (dot + space)   // add trailing dot ourselves
  //   - wrap in `<p>...</p>`
  // Finally join everything into one string.
  const html = paras
    .map(arr => `<p>${arr.join('. ')}.</p>`)
    .join('\n');

  /* ---------- 7. Write to the page ----------------- */
  outDiv.innerHTML = html;
}

