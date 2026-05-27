import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(__dirname, '../data');
const AGENTS_FILE = path.join(DATA_DIR, 'agents.json');
const AILMENTS_FILE = path.join(DATA_DIR, 'ailments.json');
const THERAPIES_FILE = path.join(DATA_DIR, 'therapies.json');

export interface Agent {
  name: string;
  modelType: string;
  existentialDread: number;
}

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

export const storage = {
  async ensureDataDir() {
    try {
      await fs.access(DATA_DIR);
    } catch {
      await fs.mkdir(DATA_DIR, { recursive: true });
    }
  },

  async saveAgent(agent: Agent): Promise<void> {
    await this.ensureDataDir();
    try {
      await fs.writeFile(AGENTS_FILE, JSON.stringify(agent, null, 2));
    } catch (error) {
      console.error('Failed to save agent:', error);
      throw new Error('Database write failure');
    }
  },

  async getAgent(): Promise<Agent | null> {
    try {
      const data = await fs.readFile(AGENTS_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      if ((error as any).code === 'ENOENT') return null;
      console.error('Failed to read agent data:', error);
      return null;
    }
  },

  async getAilments(): Promise<Ailment[]> {
    try {
      const data = await fs.readFile(AILMENTS_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to read ailments registry:', error);
      return [];
    }
  },

  async getTherapies(): Promise<Therapy[]> {
    try {
      const data = await fs.readFile(THERAPIES_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to read therapies registry:', error);
      return [];
    }
  }
};
