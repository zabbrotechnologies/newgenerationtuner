import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRoutes from './routes/index.js';
import { apiLimiter, errorHandler } from './middleware/index.js';
import { config } from './config/index.js';

const app = express();

// Security Headers
app.use(helmet());

// CORS Configuration
app.use(cors({
  origin: config.clientUrl,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Request Logging
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// Body Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Apply Rate Limiter to API
app.use(config.apiPrefix, apiLimiter);

// Mount API Routes
app.use(config.apiPrefix, apiRoutes);

// Catch 404 for undefined API endpoints
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `API endpoint '${req.originalUrl}' does not exist on this studio server.`
  });
});

// Centralized Error Handler
app.use(errorHandler);

export default app;
