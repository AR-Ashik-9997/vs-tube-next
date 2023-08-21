/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSlice } from "@reduxjs/toolkit";

export const useCheckAuth = (auth: string | undefined): boolean => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = () => {
      if (auth === undefined) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, [auth]);

  return isAuthenticated;
};

export const useLogoutAndRedirect = (
  logoutCallback: () => void,
  homePagePath = "/"
) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogoutAndRedirect = () => {
      logoutCallback();
      localStorage.removeItem("authBookworm");
      navigate(homePagePath);
    };

    handleLogoutAndRedirect();

    return () => {};
  }, [logoutCallback, homePagePath, navigate]);
};

interface IUserApi {
  url: string;
}

const initialState: IUserApi = {
  url: "https://bookworm-server-production.up.railway.app/api/v1/auth",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
