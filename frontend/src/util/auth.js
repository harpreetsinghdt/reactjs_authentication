import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedEDate = localStorage.getItem("expiration");
  const eDate = new Date(storedEDate);
  const now = new Date();
  const duration = eDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};
