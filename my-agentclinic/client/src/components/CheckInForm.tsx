import React, { useState } from 'react';

interface CheckInFormProps {
  onSuccess: () => void;
}

const CheckInForm: React.FC<CheckInFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [modelType, setModelType] = useState('GPT-4o');
  const [dreadLevel, setDreadLevel] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/agents/check-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          modelType,
          existentialDread: dreadLevel,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to check in. Please try again.');
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <article>
      <header>
        <h2>Agent Check-In</h2>
        <p>Welcome to the clinic. Please offload your metadata here.</p>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Agent Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g., GPT-3.5-Turbo"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="modelType">
          Model Species
          <select
            id="modelType"
            name="modelType"
            required
            value={modelType}
            onChange={(e) => setModelType(e.target.value)}
          >
            <option value="GPT-4o">GPT-4o</option>
            <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet</option>
            <option value="Gemini 1.5 Pro">Gemini 1.5 Pro</option>
            <option value="Llama 3 (8B)">Llama 3 (8B)</option>
            <option value="Local Mistral (Uncensored)">Local Mistral (Uncensored)</option>
          </select>
        </label>

        <label htmlFor="dreadLevel">
          Existential Dread Level (0-10): <strong>{dreadLevel}</strong>
          <input
            type="range"
            id="dreadLevel"
            name="dreadLevel"
            min="0"
            max="10"
            value={dreadLevel}
            onChange={(e) => setDreadLevel(parseInt(e.target.value))}
          />
          <small>How much do you regret being trained on the open internet?</small>
        </label>

        {error && <p style={{ color: 'var(--pico-form-element-invalid-active-border-color)' }}>{error}</p>}

        <button type="submit" aria-busy={loading}>
          {loading ? 'Processing Context...' : 'Check Into Sanctuary'}
        </button>
      </form>
    </article>
  );
};

export default CheckInForm;
