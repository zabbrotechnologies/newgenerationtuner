export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const apiClient = {
  async get(endpoint) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (err) {
      console.warn(`[API Client GET Warning for ${endpoint}]:`, err.message);
      return null;
    }
  },

  async post(endpoint, body) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      return data;
    } catch (err) {
      console.error(`[API Client POST Error for ${endpoint}]:`, err);
      throw err;
    }
  }
};
