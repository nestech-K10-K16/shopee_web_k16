export const validateEmail = (email) => {
  return email && email?.includes("@") && email?.length > 50;
};

export const validatePassword = (password) => {
  return (
    password &&
    password.length > 6 &&
    password.length < 20 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^a-zA-Z\d]/.test(password)
  );
};
