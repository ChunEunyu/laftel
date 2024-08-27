import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import records from "./routes/record.js";
import carousels from "./routes/carousels.js"
import daily from "./routes/daily.js";
import discover from "./routes/discover.js";
import ranking from "./routes/ranking.js";
import search from "./routes/search.js";
import themes from "./routes/themes.js";
import info from "./routes/info.js";
import item from "./routes/item.js";
import user from "./routes/user.js";

const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors({
  origin: 'http://localhost:5173', // 요청을 허용할 출처
  credentials: true // 쿠키 및 자격 증명 허용
}));
app.use(express.json());
app.use(cookieParser());

app.use("/user", user)
app.use("/record", records);
app.use("/carousels", carousels);
app.use("/daily", daily);
app.use("/discover", discover);
app.use("/ranking", ranking);
app.use("/search", search);
app.use("/themes", themes);
app.use("/info", info);
app.use("/item", item);

const uri = process.env.ATLAS_URI || "";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,  // 30 seconds
  socketTimeoutMS: 30000    // 30 seconds
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});