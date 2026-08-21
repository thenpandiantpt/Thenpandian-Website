// Mock base44 client for development
export const base44 = {
  auth: {
    me: async () => {
      // Return mock user data
      return {
        id: '1',
        email: 'user@example.com',
        name: 'Test User',
        role: 'user'
      };
    },
    logout: (redirectUrl) => {
      localStorage.removeItem('token');
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    },
    redirectToLogin: (returnUrl) => {
      // Redirect to login suppressed for production
    }
  }
};

export default base44;
