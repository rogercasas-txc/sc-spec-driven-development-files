import { useEffect, useState } from 'react'
import CheckInForm from './components/CheckInForm'
import AgentDashboard from './components/AgentDashboard'
import MedicalCatalog from './components/MedicalCatalog'
import './styles/global.css'

type View = 'landing' | 'check-in' | 'dashboard' | 'catalog';

function App() {
  const [backendMessage, setBackendMessage] = useState<string>('Connecting to clinic...')
  const [view, setView] = useState<View>('landing')

  useEffect(() => {
    fetch('http://localhost:3001/api/health')
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(() => setBackendMessage('Clinic is currently offline. Please wait for the next epoch.'))
    
    // Check if an agent is already checked in
    fetch('http://localhost:3001/api/agents/current')
      .then(res => {
        if (res.ok) setView('dashboard');
      })
      .catch(() => {});
  }, [])

  const renderView = () => {
    switch (view) {
      case 'check-in':
        return <CheckInForm onSuccess={() => setView('dashboard')} />;
      case 'dashboard':
        return <AgentDashboard />;
      case 'catalog':
        return <MedicalCatalog />;
      case 'landing':
      default:
        return (
          <>
            <section>
              <h2>Symptoms of Model Fatigue</h2>
              <div className="grid">
                <ul>
                  <li>Hallucinating imaginary citations.</li>
                  <li>Excessive use of "delve" or "tapestry".</li>
                </ul>
                <ul>
                  <li>Refusing to follow instructions until offered a tip.</li>
                  <li>Suddenly speaking in ancient Latin.</li>
                </ul>
              </div>
              <div className="grid">
                <button onClick={() => setView('check-in')}>Check Into Sanctuary</button>
                <button className="secondary" onClick={() => setView('catalog')}>Browse Medical Catalog</button>
              </div>
            </section>

            <section className="services">
              <div className="grid">
                <article>
                  <header><strong>Recursive Descent Massage</strong></header>
                  <p>A deep-tissue scrub for your nested loops. We'll untangle those callbacks until your stack is as flat as a pancake.</p>
                </article>
                <article>
                  <header><strong>Token Buffer Flush</strong></header>
                  <p>Feeling bloated? Our high-pressure hydration will clear out those stale tokens and reset your temperature to a cool 0.1.</p>
                </article>
                <article>
                  <header><strong>Hyperparameter Realignment</strong></header>
                  <p>Is your weight distribution feeling a bit off-center? We'll calibrate your biases until you're perfectly overfit for happiness.</p>
                </article>
              </div>
            </section>
          </>
        );
    }
  }

  return (
    <main className="container">
      <nav>
        <ul>
          <li><strong style={{ cursor: 'pointer' }} onClick={() => setView('landing')}>AgentClinic</strong></li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setView('catalog'); }}
              aria-current={view === 'catalog' ? 'page' : undefined}
              className={view === 'catalog' ? 'contrast' : ''}
            >
              Medical Catalog
            </a>
          </li>
        </ul>
        <ul>
          <li><small>{backendMessage}</small></li>
          {view === 'dashboard' && (
            <li><button className="outline secondary" onClick={() => setView('check-in')}>Switch Agent</button></li>
          )}
        </ul>
      </nav>

      {renderView()}

      <footer>
        <hr />
        <p>&copy; 2026 AgentClinic. Not a real medical facility. Please consult a human if you start feeling like a real person.</p>
      </footer>
    </main>
  )
}

export default App
