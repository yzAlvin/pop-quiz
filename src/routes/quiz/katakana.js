export const a = {
  ア: "a",
  イ: "i",
  ウ: "u",
  エ: "e",
  オ: "o",
};

export const k = {
  カ: "ka",
  キ: "ki",
  ク: "ku",
  ケ: "ke",
  コ: "ko",
};

export const s = {
  サ: "sa",
  シ: "shi",
  ス: "su",
  セ: "se",
  ソ: "so",
};

export const t = {
  タ: "ta",
  チ: "chi",
  ツ: "tsu",
  テ: "te",
  ト: "to",
};

export const n = {
  ナ: "na",
  ニ: "ni",
  ヌ: "nu",
  ネ: "ne",
  ノ: "no",
};

export const h = {
  ハ: "ha",
  ヒ: "hi",
  フ: "hu",
  ヘ: "he",
  ホ: "ho",
};

export const m = {
  マ: "ma",
  ミ: "mi",
  ム: "mu",
  メ: "me",
  モ: "mo",
};

export const y = {
  ヤ: "ya",
  ユ: "yu",
  ヨ: "yo",
};

export const r = {
  ラ: "ra",
  リ: "ri",
  ル: "ru",
  レ: "re",
  ロ: "ro",
};

export const w = {
  ワ: "wa",
  ヲ: "wo",
};

export const g = {
  ガ: "ga",
  ギ: "gi",
  グ: "gu",
  ゲ: "ge",
  ゴ: "go",
};

export const z = {
  ザ: "za",
  ジ: "ji",
  ズ: "zu",
  ゼ: "so",
  ゾ: "zo",
};

export const d = {
  ダ: "da",
  ヂ: "di",
  ヅ: "du",
  デ: "de",
  ド: "do",
};

export const b = {
  バ: "ba",
  ビ: "bi",
  ブ: "bu",
  ベ: "be",
  ボ: "bo",
};

export const p = {
  パ: "pa",
  ピ: "pi",
  プ: "pu",
  ペ: "pe",
  ポ: "po",
};



export const basic_katakana = {
  ...a,
  ...k,
  ...s,
  ...t,
  ...n,
  ...h,
  ...m,
  ...y,
  ...r,
  ...w,
};

export const dakuten_katakana = {
  ...g,
  ...z,
  ...d,
  ...b,
  ...p
}

export const katakana = {
  ...basic_katakana,
  ...dakuten_katakana
}
