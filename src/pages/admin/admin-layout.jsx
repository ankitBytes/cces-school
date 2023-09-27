import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserAuth } from "../../contexts/authContext";
import Container from "@mui/material/Container";

export default function AdminLayout() {
  // console.log(UserAuth);
  const currentUser = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/admin/login");
    } else {
      navigate("/admin/dashboard");
    }
  }, []);
  return <Outlet />;
}
