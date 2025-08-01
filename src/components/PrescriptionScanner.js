import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { translateText } from "../utils/translate";

function PrescriptionScanner() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState({});

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleScan = async () => {
    if (!image) return;

    const result = await Tesseract.recognize(image, "eng");
    const extractedText = result.data.text;
    setText(extractedText);

    const langs = ["hi", "es", "fr", "bn"];
    const translations = {};
    for (let lang of langs) {
      translations[lang] = await translateText(extractedText, lang);
    }
    setTranslated(translations);
  };

  return (
    <div className="prescription-scanner">
      <h2>Scan Doctor Prescription</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Prescription" style={{ maxWidth: "300px", marginTop: "10px" }} />}
      <br />
      <button onClick={handleScan}>Scan and Translate</button>

      {text && (
        <div>
          <h3>Extracted Text</h3>
          <p>{text}</p>

          <h3>Translated</h3>
          {Object.entries(translated).map(([lang, translation]) => (
            <div key={lang}>
              <strong>{lang.toUpperCase()}: </strong>
              <p>{translation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PrescriptionScanner;
