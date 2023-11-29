import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './router';

const PORT: number = Number(process.env.PORT) || 8000;

const app: Application = express();

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.json({ message: 'Hello world!' });
// });
app.use(cors());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
