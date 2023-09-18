import { signIn } from "next-auth/react";
import { useEffect } from "react";

const GoogleLoginButton = () => {
  useEffect(() => {
    signIn("google", {
      callbackUrl: "/",
    });
  }, []);
};

export default GoogleLoginButton;
