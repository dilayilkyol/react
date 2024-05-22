const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/auth'); // Doğru routes dosyasını import ediyor musunuz?
const productRoutes = require('./routes/products');
const stripe = require("./routes/stripe")

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', userRoutes); // Doğru yol mu?
app.use('/products', productRoutes);
app.use('/api/stripe', stripe);

const PORT = process.env.PORT || 4000; // Port tanımı
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
