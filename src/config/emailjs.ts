export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

// Función para validar que las credenciales estén configuradas
export const isEmailJSConfigured = (): boolean => {
  return !!(
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.TEMPLATE_ID &&
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};
