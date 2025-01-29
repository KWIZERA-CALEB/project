import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import challengeRoutes from './routes/challenge.route.js';
import participantsRoutes from './routes/participants.route.js';
import authRoutes from './routes/auth.route.js';
import swaggerSpec from './swagger.js';
import { connectDB } from './config/database.js';
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
    origin: [
        'http://localhost:3000', 
        'https://umurava-app.vercel.app',            
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}

app.use(cors(corsOptions))
// Database Connection
connectDB();

// Routes
app.use('/api/', challengeRoutes);
app.use('/api/', participantsRoutes);
app.use('/api/', authRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 Route
app.use((_req, res) => {
    res.status(404).json({ message: 'Route not found.' });
});

// Error Handling Middleware
app.use((err, _req, res, _next) => {
    console.error('Server Error:', err.message);
    res.status(500).json({ message: 'Internal server error.' });
});

const PORT = process.env.PORT || 5080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
