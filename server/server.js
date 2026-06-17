import 'dotenv/config';
import express from 'express';
import listingRoutes from './src/routes/listingRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', listingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
