import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [selectedDay, setSelectedDay] = useState('feb-7')
  const [selectedStyle, setSelectedStyle] = useState('original')
  const [funnyQuoteIndex, setFunnyQuoteIndex] = useState(0)
  const [romanticQuoteIndex, setRomanticQuoteIndex] = useState(0)
  const [proposalFunnyIndex, setProposalFunnyIndex] = useState(0)
  const [proposalRomanticIndex, setProposalRomanticIndex] = useState(0)
  const [isScratched, setIsScratched] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)
  const videoRef = useRef(null)
  const mediaStreamRef = useRef(null)

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
    "Roses are red, violets are blue, I fall for you more with each passing day.",
    "Roses are red, violets are blue, I choose you today, tomorrow, and forever.",
    "Roses are red, violets are blue, you're the one I want by my side always."
  ]

  const proposalFunnyQuotes = [
    "I would ask you out fancy, but I'm broke. Pizza and a movie? No judgment zone.",
    "They say the way to someone's heart is through their stomach. Coffee date?",
    "I'm not great at speeches, but I'm great at finding good restaurants. Let's eat?",
    "I would drop to one knee, but I just did leg day. Want to hang out instead?",
    "You're the only notification I want to see first thing in the morning. Coffee?",
    "I searched 'how to ask someone out,' and the answer was simply: just ask. So... date?",
    "I promise to laugh at your jokes even when they're terrible. Dinner with me?",
    "My phone autocorrects 'you' to 'you're amazing.' Let's grab lunch?",
    "I'm not perfect, but I'm perfect for a date with you. Free this weekend?",
    "You're my favorite person to be socially awkward with. Drinks sometime?",
    "I can't cook, but I know a great place. Want to grab dinner?",
    "Life without a date with you would be pointless. How about Friday?",
    "I promise to make you laugh until your stomach hurts. Coffee date?",
    "Worst case, we have a fun story to tell. Best case? Let's find out. Date?"
  ]

  const proposalRomanticQuotes = [
    "From the moment I met you, I knew I wanted to know you better. Will you go on a date with me?",
    "Every moment with you makes me smile. I'd love to spend more time with you. Date?",
    "You light up my world. Let me take you out and show you how special you are.",
    "I genuinely enjoy your company. Can I see you over dinner this week?"
  ]


  useEffect(() => {
    setIsScratched(false)
    setCameraActive(false)
    // Stop camera when day changes
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop())
    }
  }, [selectedDay])

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: 'user' } }
      })
      mediaStreamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
      setCameraActive(true)
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Could not access camera. Please check permissions.')
    }
  }

  const handleCloseCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop())
    }
    setCameraActive(false)
  }

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
          'Roses are red, violets are blue, thorns keep things interesting—and my life is a cliffhanger moment waiting just for you.',
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
          
          <div className="rose-day-special-section">
            <div className="image-left">
              <img src="/images/left.jpg" alt="Rose Day" className="dummy-image" />
            </div>
            
            <div className="special-right">
              <h3>Gift for the day</h3>
              <div className="scratch-card-container" onClick={() => setIsScratched(!isScratched)}>
                {!isScratched && <div className="scratch-placeholder">Click me!</div>}
                <div className="scratch-revealed" style={{ display: isScratched ? 'flex' : 'none' }}>
                  <img src="/images/right.jpg" alt="Surprise" className="revealed-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (selectedDay === 'feb-8') {
      const styleQuotes = {
        original: "bangaaram, will you go out on a date with me?",
        funny: proposalFunnyQuotes[proposalFunnyIndex],
        romantic: proposalRomanticQuotes[proposalRomanticIndex]
      }

      return (
        <div className="day-content">
          <div className="day-header">
            <h2>Proposal Day</h2>
            <div className="style-buttons" role="tablist" aria-label="Quote styles">
              <button
                className={`style-button ${selectedStyle === 'funny' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedStyle('funny')
                  setProposalFunnyIndex(Math.floor(Math.random() * proposalFunnyQuotes.length))
                }}
                aria-pressed={selectedStyle === 'funny'}
              >
                Funny
              </button>
              <button
                className={`style-button ${selectedStyle === 'romantic' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedStyle('romantic')
                  setProposalRomanticIndex(Math.floor(Math.random() * proposalRomanticQuotes.length))
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
          
          <div className="rose-day-special-section">
            <div className="crush-message">
              <p>Mirror mirror on the wall, I have this huge crush on someone special. If you're curious to know who the cutest of them all is, click on this wall. Help me make her say yes to my proposal.</p>
            </div>
            
            <div className="special-right">
              <div className="scratch-card-container" onClick={cameraActive ? handleCloseCamera : handleOpenCamera}>
                {!cameraActive ? (
                  <div className="scratch-placeholder">Show me</div>
                ) : (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="camera-video"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                  />
                )}
              </div>
            </div>
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
