import { useState } from 'react'
import './App.css'

function App() {
  const [selectedDay, setSelectedDay] = useState('feb-7')

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
      return (
        <div className="day-content">
          <h2>Rose Day</h2>
          <p>A beautiful rose symbolizes love and admiration. On this day, express your feelings with a red rose.</p>
          <div className="rose-day-message">
            <p>Roses are red, violets are blue, thorns keep things interesting — just like my attempts for you.</p>
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
