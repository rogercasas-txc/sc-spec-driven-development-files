export interface Ailment {
  id: string;
  name: string;
  description: string;
  severity: number;
}

export interface Therapy {
  id: string;
  name: string;
  description: string;
  estimatedDowntime: string;
}

const API_BASE = 'http://localhost:3001/api/registry';

export const registryService = {
  async getAilments(): Promise<Ailment[]> {
    const response = await fetch(`${API_BASE}/ailments`);
    if (!response.ok) throw new Error('Failed to fetch ailments');
    return response.json();
  },

  async getTherapies(): Promise<Therapy[]> {
    const response = await fetch(`${API_BASE}/therapies`);
    if (!response.ok) throw new Error('Failed to fetch therapies');
    return response.json();
  }
};
