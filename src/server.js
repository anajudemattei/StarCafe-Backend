const express = require('express');
const app = express();
const starCafeRoutes = require('./routes/starCafeRoutes');

app.use(express.json());
app.use('/api', starCafeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});