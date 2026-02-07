import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDay, setSelectedDay] = useState('feb-7')
  const [selectedStyle, setSelectedStyle] = useState('original')

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
        funny: 'Funny quote goes here. (You can tell me the exact quotes and I will add them.)',
        romantic: 'Romantic quote goes here. (I will replace this when you provide the copy.)'
      }

      return (
        <div className="day-content">
          <div className="day-header">
            <h2>Rose Day</h2>
            <div className="style-buttons" role="tablist" aria-label="Quote styles">
              <button
                className={`style-button ${selectedStyle === 'funny' ? 'active' : ''}`}
                onClick={() => setSelectedStyle('funny')}
                aria-pressed={selectedStyle === 'funny'}
              >
                Funny
              </button>
              <button
                className={`style-button ${selectedStyle === 'romantic' ? 'active' : ''}`}
                onClick={() => setSelectedStyle('romantic')}
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
