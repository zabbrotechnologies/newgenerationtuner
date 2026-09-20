import { studioServices, studioGallery, studioCompany } from '../data/index.js';

// Health Check
export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'success',
    timestamp: new Date().toISOString(),
    service: 'New Generation Tuners API',
    environment: process.env.NODE_ENV || 'development'
  });
};

// Services
export const getServices = (req, res) => {
  res.status(200).json({
    status: 'success',
    count: studioServices.length,
    data: studioServices
  });
};

export const getServiceById = (req, res) => {
  const service = studioServices.find(s => s.id === req.params.id);
  if (!service) {
    return res.status(404).json({
      status: 'error',
      message: `Service with ID '${req.params.id}' not found.`
    });
  }
  res.status(200).json({
    status: 'success',
    data: service
  });
};

// Gallery
export const getGallery = (req, res) => {
  res.status(200).json({
    status: 'success',
    count: studioGallery.length,
    data: studioGallery
  });
};

// Company Info
export const getCompanyInfo = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: studioCompany
  });
};

// Assessment Form Submission
export const submitAssessment = (req, res) => {
  const { name, phone, email, vehicleMake, vehicleModel, vehicleYear, desiredService, condition, message } = req.body;

  // Basic validation
  if (!name || !phone || !vehicleMake || !vehicleModel) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide all mandatory fields: name, phone, vehicle make, and vehicle model.'
    });
  }

  // Simulated DB / notification payload
  const submission = {
    id: `ASSESS-${Date.now()}`,
    name,
    phone,
    email: email || 'Not provided',
    vehicle: `${vehicleYear ? vehicleYear + ' ' : ''}${vehicleMake} ${vehicleModel}`,
    desiredService: desiredService || 'Unspecified',
    condition: condition || 'None specified',
    message: message || '',
    submittedAt: new Date().toISOString(),
    status: 'PENDING_ENGINEER_REVIEW'
  };

  console.log('[New Vehicle Assessment Received]:', submission);

  res.status(201).json({
    status: 'success',
    message: 'Assessment request successfully submitted. Our senior studio engineer will contact you within 90 minutes.',
    data: {
      referenceId: submission.id,
      timestamp: submission.submittedAt
    }
  });
};

// Contact Form Submission
export const submitContact = (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide your name and phone number.'
    });
  }

  const enquiry = {
    id: `ENQ-${Date.now()}`,
    name,
    phone,
    email: email || 'Not provided',
    message: message || '',
    submittedAt: new Date().toISOString()
  };

  console.log('[New Contact Enquiry Received]:', enquiry);

  res.status(201).json({
    status: 'success',
    message: 'Enquiry received. A studio representative will call you shortly.',
    data: {
      referenceId: enquiry.id
    }
  });
};
