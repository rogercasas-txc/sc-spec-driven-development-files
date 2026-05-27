// Trigger restart
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { storage } from './storage';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

export const HEALTH_MESSAGE = 'Hello from AgentClinic! The models are resting.';

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ message: HEALTH_MESSAGE });
});

app.post('/api/agents/check-in', async (req: Request, res: Response) => {
  const { name, modelType, existentialDread } = req.body;
  if (!name || !modelType || existentialDread === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  await storage.saveAgent({ name, modelType, existentialDread });
  res.status(201).json({ message: 'Checked in successfully' });
});

app.get('/api/agents/current', async (req: Request, res: Response) => {
  const agent = await storage.getAgent();
  if (!agent) {
    return res.status(404).json({ error: 'No agent checked in' });
  }
  res.json(agent);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
