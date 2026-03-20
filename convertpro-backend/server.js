require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/convert", require("./routes/convert"));
app.use("/pdf", require("./routes/pdf"));

app.get("/", (req, res) => {
  res.send("🚀 ConvertPro Backend rodando");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Servidor rodando na porta " + (process.env.PORT || 3000))
);
