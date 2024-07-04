import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import carousels from "./routes/carousels.js"
import daily from "./routes/daily.js";
import discover from "./routes/discover.js";
import ranking from "./routes/ranking.js";
import search from "./routes/ranking.js";
import themes from "./routes/themes.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use("/carousels", carousels);
app.use("/daily", daily);
app.use("/discover", discover);
app.use("/ranking", ranking);
// app.use("/search", search);
app.use("/themes", themes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});