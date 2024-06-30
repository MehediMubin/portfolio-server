import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import router from "./routes";

const app: Application = express();

//parsers
app.use(express.json());

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

// application routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Portfolio Server!");
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
