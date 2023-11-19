import express, { Application, NextFunction, Request, Response } from 'express';

const PORT: number = Number(process.env.PORT) || 8000;

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
