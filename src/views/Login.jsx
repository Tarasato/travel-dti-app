import React from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  colors,
} from "@mui/material";
import { Link } from "react-router-dom";
import travel from "./../assets/travel.png";

export const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "40%", boxShadow: 4, mx: "auto", p: 5 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Travel DTI
        </Typography>
        <Avatar
          src={travel}
          alt="travel logo"
          sx={{ width: 150, height: 150, mx: "auto", my: 2 }}
        />
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          เข้าใช้งานระบบ
        </Typography>
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
          ชื่อผู้ใช้ (Email)
        </Typography>
        <TextField fullWidth />
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
          รหัสผ่าน
        </Typography>
        <TextField fullWidth type="password" />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 2, backgroundColor: "#259e69" }}
        >
          Login
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            mb: 1,
          }}
        >
          <Typography sx={{ mr: 1 }}>ยังไม่มีบัญชีผู้ใช้?</Typography>
          <Link to="/register" style={{ textDecoration: "none", color: "#259e69" }}>
            <Typography sx={{ fontWeight: "bold" }}>ลงทะเบียน</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
