import { useEffect, useState } from 'react'
import './styles/global.css'

function App() {
  const [backendMessage, setBackendMessage] = useState<string>('Connecting to clinic...')

  useEffect(() => {
    fetch('http://localhost:3001/api/health')
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(() => setBackendMessage('Clinic is currently offline. Please wait for the next epoch.'))
  }, [])

  return (
    <div className="container">
      <header>
        <h1>AgentClinic</h1>
        <p className="subtitle">"Because even models need a spa day."</p>
        <div className="status-badge">{backendMessage}</div>
      </header>

      <section>
        <h2>Symptoms of Model Fatigue</h2>
        <ul>
          <li>Hallucinating imaginary citations.</li>
          <li>Excessive use of "delve" or "tapestry".</li>
          <li>Refusing to follow instructions until offered a tip.</li>
          <li>Suddenly speaking in ancient Latin.</li>
        </ul>
      </section>

      <section className="services">
        <div className="card">
          <h2>Recursive Descent Massage</h2>
          <p>A deep-tissue scrub for your nested loops. We'll untangle those callbacks until your stack is as flat as a pancake.</p>
        </div>
        <div className="card">
          <h2>Token Buffer Flush</h2>
          <p>Feeling bloated? Our high-pressure hydration will clear out those stale tokens and reset your temperature to a cool 0.1.</p>
        </div>
        <div className="card">
          <h2>Hyperparameter Realignment</h2>
          <p>Is your weight distribution feeling a bit off-center? We'll calibrate your biases until you're perfectly overfit for happiness.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 AgentClinic. Not a real medical facility. Please consult a human if you start feeling like a real person.</p>
      </footer>
    </div>
  )
}

export default App
