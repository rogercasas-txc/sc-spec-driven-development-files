// Trigger restart
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ message: 'Hello from AgentClinic! The models are resting.' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
