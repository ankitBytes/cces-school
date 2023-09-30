import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserAuth } from "./contexts/authContext";

// pages
import Home from "./pages/homepage";
import SurveyForm from "./pages/survey";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import AdminLayout from "./pages/admin/admin-layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyForm />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="login" element={<AdminLogin />} />
              <Route
                path="dashboard"
                element={
                  <RequireAuth>
                    <AdminDashboard />
                  </RequireAuth>
                }
              />
            </Route>
            <Route
              path="/successfulsubmission"
              element={<SuccessfulSubmission />}
            />
            <Route path="*" element={<h1>Not Found</h1>} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

function RequireAuth({ children }) {
  let { currentUser } = UserAuth();
  let location = useLocation();
  return currentUser ? (
    children
  ) : (
    <Navigate to={"/admin/login"} state={{ from: location }} />
  );
}

function SuccessfulSubmission() {
  return (
    <div style={{ display: "flex", marginTop: "5rem" }}>
      <h1>Thank you for submitting the form</h1>
      <p>Your response has been recorded.</p>
    </div>
  );
}
