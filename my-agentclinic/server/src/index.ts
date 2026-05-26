// Trigger restart
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

export const HEALTH_MESSAGE = 'Hello from AgentClinic! The models are resting.';

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ message: HEALTH_MESSAGE });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
