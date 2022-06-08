import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.removeItem("user_email");
    window.location = "/login";
  }, []);
  return <></>;
};
