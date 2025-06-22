export const isLoggedIn = () => {
  return !!localStorage.getItem("loggedInUser");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("loggedInUser");
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem("loggedInUser");
};

export const login = (email, password) => {
  const users = JSON.parse(localStorage.getItem("userData")) || [];
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return user;
  }
  return null;
};
