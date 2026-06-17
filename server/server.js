import 'dotenv/config';
import express from 'express';
import { promises as fs } from 'fs'; // 1. Correct promise-based fs import
import path from 'path';

const app = express();
app.use(express.json());

const routesPath = './src/routes';

async function addRoutes() {
    try {
        const files = await fs.readdir(routesPath);
        
        for (const file of files) {
            // Only process JavaScript files
            if (file.endsWith('.js')) {
                // 2. Use dynamic import() and destructure the default export
                const { default: router } = await import(`./src/routes/${file}`);
                
                app.use('/api', router);
            }
        }
    } catch (err) {
        console.error("Error reading routes directory:", err);
    }
}

// Call the function to load all routes dynamically
await addRoutes();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});