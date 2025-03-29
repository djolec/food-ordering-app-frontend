import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth0();
  const { createUser, isError } = useCreateMyUser();
  const [searchParams] = useSearchParams();

  const returnTo = searchParams.get("returnTo") || "/";
  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    if (isError) {
      logout();
      toast.error("Error creating user");
    }
    navigate(returnTo);
  }, [createUser, isError, logout, navigate, returnTo, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
