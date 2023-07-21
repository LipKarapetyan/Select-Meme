import React, { useState } from 'react';

export const memeTypes = [
  {
    "label": "10 Guy",
    "value": "10-Guy"
},
{
    "label": "1950s Middle Finger",
    "value": "1950s-Middle-Finger"
},
{
    "label": "1990s First World Problems",
    "value": "1990s-First-World-Problems"
},
{
    "label": "1st World Canadian Problems",
    "value": "1st-World-Canadian-Problems"
},
{
    "label": "2nd Term Obama",
    "value": "2nd-Term-Obama"
},
];

function MemeGenerator() {
  const [selectedMeme, setSelectedMeme] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeUrl, setMemeUrl] = useState('');

  const handleMemeChange = (e) => {
    setSelectedMeme(e.target.value);
  };

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleGenerateMeme = () => {
    const memeUrl = `https://apimeme.com/meme?meme=${selectedMeme}&top=${topText}&bottom=${bottomText}`;
    setMemeUrl(memeUrl);
  };

  return (
    <div>
      <select value={selectedMeme} onChange={handleMemeChange}>
        <option >Select Meme Type</option>
        {memeTypes.map((memeType) => (
          <option key={memeType.value} value={memeType.value}>
            {memeType.label}
          </option>
        ))}
      </select>
      <br />
      <input type="text" value={topText} onChange={handleTopTextChange} />
      
      <input type="text"  value={bottomText} onChange={handleBottomTextChange} />
      
      <button onClick={handleGenerateMeme}>Generate</button>
      {memeUrl && <img src={memeUrl} alt="Generated Meme" />}
    </div>
  );
}

export default MemeGenerator;
