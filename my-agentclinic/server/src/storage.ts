import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(__dirname, '../../data');
const AGENTS_FILE = path.join(DATA_DIR, 'agents.json');

export interface Agent {
  name: string;
  modelType: string;
  existentialDread: number;
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
    // For this phase, we only store the "current" agent (single user clinic)
    await fs.writeFile(AGENTS_FILE, JSON.stringify(agent, null, 2));
  },

  async getAgent(): Promise<Agent | null> {
    try {
      const data = await fs.readFile(AGENTS_FILE, 'utf-8');
      return JSON.parse(data);
    } catch {
      return null;
    }
  }
};
