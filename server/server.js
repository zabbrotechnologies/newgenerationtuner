import app from './app.js';
import { config } from './config/index.js';

const server = app.listen(config.port, () => {
  console.log(`=======================================================`);
  console.log(`🚀 New Generation Tuners Atelier API is Running`);
  console.log(`📍 Port: ${config.port}`);
  console.log(`🌐 Environment: ${config.nodeEnv}`);
  console.log(`📡 Client URL: ${config.clientUrl}`);
  console.log(`🔗 Health Check: http://localhost:${config.port}/api/health`);
  console.log(`=======================================================`);
});

// Handle unhandled rejections and termination signals
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down gracefully...', err);
  server.close(() => process.exit(1));
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received. Shutting down gracefully.');
  server.close(() => console.log('Process terminated.'));
});
