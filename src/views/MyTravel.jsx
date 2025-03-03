import { React, useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Profile from "./../assets/profile.png";
import { Link } from "react-router-dom";

export const MyTravel = () => {
  const [travellerFullname, setTravellerFullname] = useState('');
  const [travellerEmail, setTravellerEmail] = useState('');
  const [travellerImage, setTravellerImage] = useState('');

  useEffect(() => {
    //เอาข้อมูลใน Memory มาแสดงที่ Appbar
    //อ่านข้อมูล Traveller จาก Memory
    const traveller = JSON.parse(localStorage.getItem("traveller"));
    //เอาข้อมูลในตัวแปรกำหนดให้กับ state ที่สร้างไว้
    setTravellerFullname(traveller.travellerFullname);
    setTravellerEmail(traveller.travellerEmail);
    setTravellerImage(traveller.travellerImage);

    console.log(traveller);
    console.log('travellerFullname: ' + traveller.travellerFullname);
    console.log('travellerEmail: ' + travellerEmail);
    console.log('travellerImage: ' + travellerImage);
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FlightTakeoffIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              บันทึกการเดินทาง
            </Typography>
            <Link to="/editprofile" style={{ color: "white" }}>
              <Button color="inherit">{travellerFullname}</Button>
              </Link>
            <Avatar
              src={
                travellerImage
                  ? `http://localhost:4000/images/traveller/${travellerImage}`
                  : Profile
              }
            />
            <Link
              to={"/"}
              style={{
                color: "red",
                textDecoration: "none",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            >
              LOG OUT
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: "70%", boxShadow: 4, mx: "auto", p: 5, my: 4 }}>
        <Typography
          variant="h3"
          component={"div"}
          fontWeight={"bold"}
          sx={{ textAlign: "center" }}
        >
          การเดินทางของฉัน
        </Typography>
        <Link to="/addmytravel" style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ py: 2, color: "white", fontWeight: "bold" }}
          >
            เพิ่มการเดินทาง
          </Button>
        </Link>
      </Box>
    </>
  );
};
