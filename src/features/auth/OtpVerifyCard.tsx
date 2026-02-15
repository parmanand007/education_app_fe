import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useRef, useState } from "react";

interface Props {
  contact: string;
  onBack: () => void;
  onSubmit: (otp: string) => void;
  isLoading?: boolean;
  expirySeconds?: number;
}

function maskContact(value: string) {
  if (value.includes("@")) {
    const [name, domain] = value.split("@");
    const visible = name.slice(0, 3);
    return `${visible}${"*".repeat(
      Math.max(name.length - 3, 0)
    )}@${domain}`;
  }
  return value.slice(0, 2) + "*".repeat(value.length - 4) + value.slice(-2);
}

export default function OtpVerifyCard({
  contact,
  onBack,
  onSubmit,
  isLoading,
  expirySeconds = 45,
}: Props) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(expirySeconds);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#eaf3f9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Back button aligned to start of right section */}
      <Box
        sx={{
          px: 6,
          pt: 4,
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          sx={{
            textTransform: "none",
            color: "#4a4a4a",
          }}
        >
          Back
        </Button>
      </Box>

      {/* Centered card */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: 420,
            maxWidth: "100%",
            p: 4,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Verify Code
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            The code has been sent to
          </Typography>

          <Typography sx={{ fontWeight: 600, mb: 3 }}>
            {maskContact(contact)}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mb: 3,
            }}
          >
            {otp.map((digit, index) => (
              <TextField
                key={index}
                value={digit}
                inputRef={(el) => (inputsRef.current[index] = el)}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "18px",
                  },
                }}
                sx={{
                  width: 48,
                }}
              />
            ))}
          </Box>

          <Button
            fullWidth
            variant="contained"
            disabled={!isComplete || isLoading}
            onClick={() => onSubmit(otp.join(""))}
            sx={{
              py: 1.4,
              fontWeight: 600,
              mb: 2,
            }}
          >
            Sign in
          </Button>

          <Typography variant="body2" sx={{ mb: 1 }}>
            Code Expires in: <strong>{timeLeft}s</strong>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: timeLeft === 0 ? "primary.main" : "#6b7280",
              cursor: timeLeft === 0 ? "pointer" : "default",
            }}
          >
            Didn’t receive the verification code?
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
