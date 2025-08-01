import React from 'react';

function LanguageSelector() {
  const handleChange = (e) => {
    alert(`Language changed to ${e.target.value}`);
  };

  return (
    <div className="language-selector">
      <label htmlFor="lang">Language: </label>
      <select id="lang" onChange={handleChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="te">Telugu</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
