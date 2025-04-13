export const mockLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        resolve({ token: "fake-jwt-token", user: { name: "Test User", email } });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};

export const mockRegister = async ({ name, email, password }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Registered successfully", user: { name, email } });
    }, 1000);
  });
};

export const mockPasswordReset = async ({ email }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: `Reset link sent to ${email}` });
    }, 1000);
  });
};
