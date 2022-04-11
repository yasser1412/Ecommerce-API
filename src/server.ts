import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from './startup/routes';

const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function (_req: Request, res: Response) {
  res.send('Hello World!');
});
routes(app);

app.listen(PORT, function () {
  console.log(`server started at http://localhost:${PORT}`);
});

export default app;
