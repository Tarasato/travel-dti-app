import {React, useState} from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  styled
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from "react-router-dom";
import travel from "./../assets/travel.png";
import profile from "./../assets/profile.png";

export const Register = () => {

  const [travellerImage, setTravellerImage] = useState(null)
  const [travellerFullname, setTravellerFullname] = useState('')
  const [travellerEmail, setTravellerEmail] = useState('')
  const [travellerPassword, setTravellerPassword] = useState('')

  const handleSelectFileClick = (e) => {
    const file = e.target.files[0];
    if (file) {
        setTravellerImage(file);
    }
  }

  const handleRegisterClick = async (e) => {
    e.preventDefault();

    console.log(travellerFullname)
    console.log(travellerEmail)
    console.log(travellerPassword)
  }

  const SelectFileBt = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

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
      <Box sx={{ width: "60%", boxShadow: 4, mx: "auto", p: 5 , my: 4}}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Travel DTI
        </Typography>
        <Avatar src={travel} alt='travel logo' sx={{width:150, height:150, mx:'auto', my: 2}}/>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          ลงทะเบียน
        </Typography>
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
          ชื่อ-นามสกุล
        </Typography>
        <TextField fullWidth value={travellerFullname} onChange={(e)=>setTravellerFullname(e.target.value)}/>
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
          ชื่อผู้ใช้ (Email)
        </Typography>
        <TextField fullWidth value={travellerEmail} onChange={(e)=>setTravellerEmail(e.target.value)}/>
        <Typography sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
          รหัสผ่าน
        </Typography>
        <TextField fullWidth type="password" value={travellerPassword} onChange={(e)=>setTravellerPassword(e.target.value)}/>
        <Avatar src={travellerImage == null ? profile : URL.createObjectURL(travellerImage)} alt='travel logo' sx={{width:150, height:150, mx:'auto', my: 3}} variant="rounded"/>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <Button variant="contained" startIcon={<CloudUploadIcon />} sx={{mx:'auto'}} component="label">
          อัปโหลดรูปภาพโปรไฟล์
          <SelectFileBt type="file" accept="image/*" onChange={handleSelectFileClick}/>
          </Button>
          </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 2, backgroundColor: "#259e69" }}
          onClick={handleRegisterClick}
        >
          Register
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
          <Typography sx={{ mr: 1 }}>มีบัญชีอยู่แล้ว?</Typography>
          <Link to="/" style={{ textDecoration: "none", color: "#259e69" }}>
            <Typography sx={{ fontWeight: "bold" }}>เข้าสู่ระบบ</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
