import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendOtpApi, verifyOtpApi } from "./api";
import { useAuthStore } from "./store";
import OtpVerifyCard from "./OtpVerifyCard";
import { useNavigate } from "react-router-dom";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPhone(value: string) {
  return /^[0-9]{10,15}$/.test(value);
}

export default function LoginPage() {
  const [step, setStep] = useState<"contact" | "otp">("contact");
  const [contactInput, setContactInput] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const setToken = useAuthStore((s) => s.setToken);
  const setContact = useAuthStore((s) => s.setContact);
  const contact = useAuthStore((s) => s.contact);

  const sendOtpMutation = useMutation({
    mutationFn: sendOtpApi,
    onSuccess: () => {
      setContact(contactInput);
      setStep("otp");
      setErrorMessage(null);
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.error || "Failed to send OTP";
      setErrorMessage(message);
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: verifyOtpApi,
    onSuccess: (data) => {
      console.log("VERIFY OTP SUCCESS RESPONSE:", data);

      if (data.token) {
        setToken(data.token);
        navigate("/");
      }
    },
    onError: (error: any) => {
    console.log("VERIFY OTP ERROR:", error);
    console.log("ERROR RESPONSE:", error?.response);
    console.log("ERROR DATA:", error?.response?.data);
      const message =
        error?.response?.data?.error || "Invalid OTP";
      setErrorMessage(message);
    },
  });

  const handleSendOtp = () => {
    if (!contactInput) {
      setErrorMessage("Please enter email or phone number");
      return;
    }

    const payload: any = {
      recaptcha: "recaptcha-test",
    };

    if (isEmail(contactInput)) {
      payload.email = contactInput;
    } else if (isPhone(contactInput)) {
      payload.phone_no = contactInput;
    } else {
      setErrorMessage("Enter a valid email or phone number");
      return;
    }

    sendOtpMutation.mutate(payload);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* LEFT SECTION */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 12 },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#1ea7d7", mb: 4 }}
        >
          DOCTUSTECH
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
          We Make HCC Coding Education Easy.
        </Typography>

        <Typography sx={{ maxWidth: 480, color: "#4a4a4a" }}>
          DoctusTech App is the best way for clinicians to learn HCC Coding.
          8 out of 10 doctors prefer DoctusTech to any other method of HCC Training.
        </Typography>

        <Box
          sx={{
            mt: 8,
            height: 220,
            backgroundColor: "#dceaf2",
            borderRadius: 3,
          }}
        />
      </Box>

      {/* RIGHT SECTION */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#eaf3f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        {step === "contact" && (
          <Paper
            elevation={4}
            sx={{
              width: 380,
              maxWidth: "100%",
              p: 4,
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Welcome to DoctusTech
            </Typography>

            <Typography variant="body2" sx={{ mb: 3 }}>
              Please sign-in to your account
            </Typography>

            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            )}

            <TextField
              fullWidth
              placeholder="Enter your email or mobile number"
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleSendOtp}
              disabled={sendOtpMutation.isPending}
              sx={{ py: 1.4, fontWeight: 600 }}
            >
              {sendOtpMutation.isPending ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Next"
              )}
            </Button>
          </Paper>
        )}

        {step === "otp" && contact && (
          <OtpVerifyCard
            contact={contact}
            onBack={() => {
              setStep("contact");
              setErrorMessage(null);
            }}
            onSubmit={(otpValue) =>
              verifyOtpMutation.mutate({
                otp: otpValue,
                ...(contact.includes("@")
                  ? { email: contact }
                  : { phone_no: contact }),
              })
            }
            isLoading={verifyOtpMutation.isPending}
            expirySeconds={45}
          />
        )}
      </Box>
    </Box>
  );
}
