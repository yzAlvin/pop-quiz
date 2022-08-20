export const a = {
  あ: "a",
  い: "i",
  う: "u",
  え: "e",
  お: "o",
};

export const k = {
  か: "ka",
  き: "ki",
  く: "ku",
  け: "ke",
  こ: "ko",
};

export const s = {
  さ: "sa",
  し: "si",
  す: "su",
  せ: "se",
  そ: "so",
};

export const t = {
  た: "ta",
  ち: "chi",
  つ: "tsu",
  て: "te",
  と: "to",
};

export const n = {
  な: "na",
  に: "ni",
  ぬ: "nu",
  ね: "ne",
  の: "no",
};

export const h = {
  は: "ha",
  ひ: "hi",
  ふ: "hu",
  へ: "he",
  ほ: "ho",
};

export const m = {
  ま: "ma",
  み: "mi",
  む: "mu",
  め: "me",
  も: "mo",
};

export const y = {
  や: "ya",
  ゆ: "yu",
  よ: "yo",
};

export const r = {
  ら: "ra",
  り: "ri",
  る: "ru",
  れ: "re",
  ろ: "ro",
};

export const w = {
  わ: "wa",
  を: "wo",
};

export const g = {
  が: "",
  ぎ: "",
  ぐ: "",
  げ: "",
  ご: "",
};

export const z = {
  ざ: "",
  じ: "",
  ず: "",
  ぜ: "",
  ぞ: "",
};

export const d = {
  だ: "",
  ぢ: "",
  づ: "",
  で: "",
  ど: "",
};

export const b = {
  ば: "",
  び: "",
  ぶ: "",
  べ: "",
  ぼ: "",
};

export const p = {
  ぱ: "",
  ぴ: "",
  ぷ: "",
  ぺ: "",
  ぽ: "",
};

export const basic_hiragana = {
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

export const dakuten = {
  ...g,
  ...z,
  ...d,
  ...b,
  ...p
}

export const hiragana = {
  ...basic_hiragana,
  ...dakuten
}