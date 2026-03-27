export const PHONE_NUMBER = '';

const DEFAULT_MESSAGE = 'Hola! Quiero realizar una consulta legal...';

export const getWhatsAppLink = (customMessage?: string) => {
  const text = customMessage || DEFAULT_MESSAGE;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};
