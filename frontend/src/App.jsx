import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChatRoom from "./pages/components/ChatRoom";
import Profile from "./pages/profile/profile";
import ProfileProvider from "./pages/profile/profileProvider";
import BookingPage from "./pages/bookingpage/booking";
import BookingInitializePage from "./pages/bookingpage/initiateBook";
import PaymentSuccess from "./pages/payment/paymentSuccess";
import Execution from "./pages/execution/execution";
import ServicesPage from "./pages/services/ServicesPage";
import ForgotPasswordUser from "./pages/LoginPage/components/forgotPassword";
import ContactPage from "./pages/contact/ContactPage"; // 👈 New Contact Page
import AdminLoginPage from "./pages/admin/adminLoginPage";
import AdminHome from "./pages/admin/adminHome";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import OTPResetPage from "./pages/LoginPage/components/OTPResetPage";
import VerifyAuthorizedOTP from "./pages/profile/components/VerifyAuthorizedOTP";
import ProviderProfile from "./pages/bookingpage/components/ProviderProfile";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat/:bookingId/:role" element={<ChatRoom />} />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              {" "}
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/profileProvider/:id" element={<ProfileProvider />} />
        <Route path="/booking" element={<BookingPage />} /> {/* ✅ ADD THIS */}
        <Route
          path="/booking/initiate/:providerId"
          element={<BookingInitializePage />}
        />{" "}
        <Route path="/payment-success/:bookingId" element={<PaymentSuccess />} />
        <Route path="/execution/:bookingId" element={<Execution />} />
        <Route path="/provider/execution/:bookingId" element={<Execution />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordUser />} />
        <Route path="/contact" element={<ContactPage />} />{" "}
        {/* 👈 New Contact Page */}
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/*" element={<AdminHome />} />
        <Route path="/otp-reset" element={<OTPResetPage />} />
        <Route path="/verify-authorized" element={<VerifyAuthorizedOTP />} />
        <Route path="/provider/:id" element={<ProviderProfile />} />{" "}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/providers/public/:id" element={<ProviderProfile />} />

      </Routes>
    </div>
  );
}

export default App;
