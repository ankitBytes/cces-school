import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function AdminLogin() {
  document.title = "Admin Login | UNICEF";
  const { currentUser, logIn } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState({ loading: false, error: null });

  useEffect(() => {
    if (currentUser) {
      navigate("/admin/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, error: null });
    try {
      await logIn(email, password);
      setFormState({ loading: false, error: null });
      navigate("/admin/dashboard");
    } catch (err) {
      let errmsg = err.code.replace("auth/", "").replaceAll("-", " ");
      console.error(errmsg);
      setFormState({ loading: false, error: errmsg });
    }
  };

  return (
    <Stack direction="column" sx={{ alignItems: "center", paddingTop: "5rem" }}>
      <Typography variant="h4" align="center" color={"primary"}>
        Login as Admin
      </Typography>

      <Box sx={{ padding: ".5rem", maxWidth: "400px" }}>
        {/* error message for login */}
        {formState.error !== null && (
          <Alert
            variant="outlined"
            severity="error"
            onClose={() => setFormState({ error: null })}
          >
            {formState.error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            disabled={formState.loading}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
            disabled={formState.loading}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={formState.loading}
          >
            {formState.loading ? "logging you in" : "Login"}
          </Button>
        </form>
      </Box>
    </Stack>
  );
}
