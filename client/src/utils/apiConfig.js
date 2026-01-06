// Centralized API configuration
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || (
  process.env.NODE_ENV === 'production' 
    ? '' // Use same domain in production (Vercel will route /api to serverless functions)
    : 'http://localhost:5000'
);
export const API_FALLBACK_URL = process.env.REACT_APP_API_FALLBACK_URL || 'https://cse471-project-backend-51jt.onrender.com';

// Helper function to construct API URLs
export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Helper function for fallback URL
export const getApiFallbackUrl = (endpoint) => {
  return `${API_FALLBACK_URL}${endpoint}`;
};
