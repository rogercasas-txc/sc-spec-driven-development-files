import { describe, it, expect } from 'vitest';
import { HEALTH_MESSAGE } from './index';

describe('Backend Logic', () => {
  it('should have the correct health message', () => {
    expect(HEALTH_MESSAGE).toBe('Hello from AgentClinic! The models are resting.');
  });

  it('should contain "AgentClinic" in the health message', () => {
    expect(HEALTH_MESSAGE).toContain('AgentClinic');
  });
});
