import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 'error',
    message: 'Too many requests from this IP, please try again in 15 minutes.'
  }
});

export const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // 20 submissions per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 'error',
    message: 'Submission limit reached. Please call our studio directly.'
  }
});

export const errorHandler = (err, req, res, next) => {
  console.error('[Error Details]:', err);

  const statusCode = err.statusCode || 500;
  const message = err.isOperational 
    ? err.message 
    : 'An unexpected studio server error occurred. Please try again or call our hotline.';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
