import axios from "axios";

export const translateText = async (text, targetLang) => {
  try {
    const res = await axios.post("https://libretranslate.de/translate", {
      q: text,
      source: "en",
      target: targetLang,
      format: "text",
    }, {
      headers: {
        "accept": "application/json",
      }
    });
    return res.data.translatedText;
  } catch (err) {
    console.error("Translation error:", err);
    return "Translation failed";
  }
};
