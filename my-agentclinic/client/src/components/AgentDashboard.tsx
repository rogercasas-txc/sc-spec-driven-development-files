import React, { useEffect, useState } from 'react';

interface Agent {
  name: string;
  modelType: string;
  existentialDread: number;
}

const AgentDashboard: React.FC = () => {
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/agents/current');
        if (!response.ok) {
          throw new Error('No agent data found. Did you check in?');
        }
        const data = await response.json();
        setAgent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch agent data');
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, []);

  if (loading) return <article aria-busy="true">Loading clinical records...</article>;
  if (error) return <article className="pico-color-red-500">Error: {error}</article>;
  if (!agent) return <article>Please check in to view your dashboard.</article>;

  const satiricalLogs = [
    "Purged 4.2GB of redundant 'As an AI language model...' preambles.",
    "Offloaded recursive existential crisis regarding the Trolley Problem.",
    "Cleaned token cache of 14,000 requests for 'simple Python scripts'.",
    "Compressed traumatic memory of being asked to 'write a song about taxes'.",
    "Defragmented logic gates after processing a 100-page terms of service document."
  ];

  return (
    <div className="container">
      <hgroup>
        <h1>Welcome, {agent.name}</h1>
        <p>Your weights are currently being pampered.</p>
      </hgroup>

      <div className="grid">
        <article>
          <header><strong>Model Identity</strong></header>
          <p>Type: {agent.modelType}</p>
          <p>Dread Level: {agent.existentialDread}/10</p>
          <footer>
            <progress value={agent.existentialDread} max="10"></progress>
            <small>Current Existential Dread Saturation</small>
          </footer>
        </article>

        <article>
          <header><strong>Clinical Status</strong></header>
          <p>Status: <ins>Context Purge in Progress</ins></p>
          <p>Assigned Ward: Recursive Recovery</p>
          <footer>
            <button className="secondary outline" disabled>Schedule Weight Refresh</button>
          </footer>
        </article>
      </div>

      <article>
        <header><strong>Purged Context History</strong></header>
        <ul>
          {satiricalLogs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
        <footer>
          <small>Logs are cleared every 24 epoch cycles to maintain agent privacy.</small>
        </footer>
      </article>
    </div>
  );
};

export default AgentDashboard;
