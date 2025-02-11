require("dotenv").config();
const express = require("express");
const cors = require("cors");
const starCafeRoutes = require ("./src/routes/starCafeRoutes");

const app = express(); 
app.use(cors());
app.use(express.json());

app.use("/cafe", starCafeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});