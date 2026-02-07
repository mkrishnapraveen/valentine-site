import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDay, setSelectedDay] = useState('feb-7')
  const [selectedStyle, setSelectedStyle] = useState('original')
  const [funnyQuoteIndex, setFunnyQuoteIndex] = useState(0)
  const [romanticQuoteIndex, setRomanticQuoteIndex] = useState(0)

  const funnyQuotes = [
    "Roses are red, violets are blue, I'm not good at rhyming, refrigerator.",
    "Roses are red, violets are blue, my attempts at poetry are embarrassing too.",
    "Roses are red, the sky is blue, I'm running out of things to rhyme, how are you?",
    "Roses are red, violets are blue, I can't count syllables so banana.",
    "Roses are red, violets are blue, I forgot what I was going to say, oops.",
    "Roses are red, violets are blue, I tried to be romantic but failed, boo hoo.",
    "Roses are red, violets are blue, I bought you flowers from the grocery store.",
    "Roses are red, violets are blue, that's actually not true, they're pink.",
    "Roses are red, violets are blue, I'm running out of ideas, you're welcome.",
    "Roses are red, violets are blue, your expectations are too high for my mediocre rhymes.",
    "Roses are red, violets are blue, I'm just here for the conversation and cake crumbs.",
    "Roses are red, violets are blue, my sense of humor is broken like my phone too.",
    "Roses are red, violets are blue, I probably should have proof-read this, oops I just did.",
    "Roses are red, violets are blue, I have no idea what I'm doing but here's a flower for you."
  ]

  const romanticQuotes = [
    "Roses are red, violets are blue, every moment with you feels like a dream come true.",
    "Roses are red, violets are blue, your smile is the most beautiful thing I see.",
    "Roses are red, violets are blue, I fall for you more with each passing day.",
    "Roses are red, violets are blue, you make my heart skip a beat every time you're near.",
    "Roses are red, violets are blue, loving you is the easiest thing I've ever done.",
    "Roses are red, violets are blue, you're the reason my days are brighter.",
    "Roses are red, violets are blue, I choose you today, tomorrow, and forever.",
    "Roses are red, violets are blue, being with you feels like home.",
    "Roses are red, violets are blue, you've made me believe in true love.",
    "Roses are red, violets are blue, thank you for filling my life with joy.",
    "Roses are red, violets are blue, you're my greatest adventure.",
    "Roses are red, violets are blue, your love is my favorite feeling.",
    "Roses are red, violets are blue, I'm grateful for every shared moment with you.",
    "Roses are red, violets are blue, you're the one I want by my side always."
  ]

  const valentinesWeek = [
    { date: 'Feb 7', day: 'Rose Day', value: 'feb-7' },
    { date: 'Feb 8', day: 'Propose Day', value: 'feb-8' },
    { date: 'Feb 9', day: 'Chocolate Day', value: 'feb-9' },
    { date: 'Feb 10', day: 'Teddy Day', value: 'feb-10' },
    { date: 'Feb 11', day: 'Promise Day', value: 'feb-11' },
    { date: 'Feb 12', day: 'Hug Day', value: 'feb-12' },
    { date: 'Feb 13', day: 'Kiss Day', value: 'feb-13' },
    { date: 'Feb 14', day: 'Valentine\'s Day', value: 'feb-14' }
  ]

  const renderContent = () => {
    if (selectedDay === 'feb-7') {
      const styleQuotes = {
        original:
          'Roses are red, violets are blue, thorns keep things interesting—and my life is currently a cliffhanger episode waiting for your review.',
        funny: funnyQuotes[funnyQuoteIndex],
        romantic: romanticQuotes[romanticQuoteIndex]
      }

      return (
        <div className="day-content">
          <div className="day-header">
            <h2>Rose Day</h2>
            <div className="style-buttons" role="tablist" aria-label="Quote styles">
              <button
                className={`style-button ${selectedStyle === 'funny' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedStyle('funny')
                  setFunnyQuoteIndex(Math.floor(Math.random() * funnyQuotes.length))
                }}
                aria-pressed={selectedStyle === 'funny'}
              >
                Funny
              </button>
              <button
                className={`style-button ${selectedStyle === 'romantic' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedStyle('romantic')
                  setRomanticQuoteIndex(Math.floor(Math.random() * romanticQuotes.length))
                }}
                aria-pressed={selectedStyle === 'romantic'}
              >
                Romantic
              </button>
              <button
                className={`style-button ${selectedStyle === 'original' ? 'active' : ''}`}
                onClick={() => setSelectedStyle('original')}
                aria-pressed={selectedStyle === 'original'}
              >
                Original
              </button>
            </div>
          </div>
          <div className="rose-day-message">
            <p>{styleQuotes[selectedStyle]}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="day-content stay-tuned">
          <h2>Stay Tuned...</h2>
          <p>Coming soon! More surprises await you!</p>
        </div>
      )
    }
  }

  return (
    <div className="container">
      <header>
        <h1>From Indonesia, With Love</h1>
        <p>A small surprise to my lady, from her cutie...</p>
      </header>
      <main>
        <div className="dropdown-container">
          <label htmlFor="valentines-week">Valentine's Week:</label>
          <select
            id="valentines-week"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="dropdown"
          >
            {valentinesWeek.map((item, index) => (
              <option key={index} value={item.value}>
                {item.date} - {item.day}
              </option>
            ))}
          </select>
        </div>
        
        <div className="content-section">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default App
