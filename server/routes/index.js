import { Router } from 'express';
import { 
  getHealth, 
  getServices, 
  getServiceById, 
  getGallery, 
  getCompanyInfo, 
  submitAssessment, 
  submitContact 
} from '../controllers/index.js';
import { formLimiter } from '../middleware/index.js';

const router = Router();

// Public Data Endpoints
router.get('/health', getHealth);
router.get('/services', getServices);
router.get('/services/:id', getServiceById);
router.get('/gallery', getGallery);
router.get('/company', getCompanyInfo);

// Submissions (Rate-limited)
router.post('/assessment', formLimiter, submitAssessment);
router.post('/contact', formLimiter, submitContact);

export default router;
