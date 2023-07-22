export const validateEmail = (email) => {
  return email && email?.includes("@") && email?.length > 50;
};
