export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (number: string) => {
  const phoneRegex = /^[-+,0-9]{10,20}$/;
  return phoneRegex.test(number);
};
