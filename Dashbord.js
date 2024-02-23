import { auth } from "./Login_reg/Fire";

import React, { useState, useEffect } from "react";
import "./App.css";
import videoBg from "./assets/lines_-_5224 (Original).mp4";
import videoBgm from "./assets/video (2160p).mp4";
import { Image } from "antd";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Carousel from "react-bootstrap/Carousel";

import ReactApexChart from "react-apexcharts";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button } from "antd";
import "./Fotter.css";
import { Cascader } from "antd";
import { Select } from "antd";
import { alphab, specialCharacters, optionssec, data } from "./Data";
import { FieldTimeOutlined } from "@ant-design/icons";

import Slider from "@mui/material/Slider";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
function valuetext(value) {
  return `${value}°C`;
}

const optionsgesture = [
  "closed Fist",
  "Wrist elongation",
  "Wrist flexion",
  "Free hand",
  "Rock first hand gesture",
  "hand gesture finger tap",
  "custom gesture 1",
  "custom gesture 2",
];

const optionsgesturesrc = [
  "https://cdn.pixabay.com/photo/2017/09/01/11/56/hand-2704013_1280.jpg",
  "https://assets-global.website-files.com/647888ca92d03e3fca3f1e9b/647888ca92d03e3fca3f2188_stretch%205.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1NdETUkHnlD3U15rM265PEh7PT_HT_ui-T-UPdoo2jDt9xccowf6xCXMeTqoxPe2Wto&usqp=CAU",
  "https://st2.depositphotos.com/10614052/49034/i/450/depositphotos_490349742-stock-photo-male-hand-white-background.jpg",
  "https://c8.alamy.com/comp/2D3FCY5/male-hand-on-a-black-background-two-fingers-pointing-and-little-finger-raised-up-goat-gesture-2D3FCY5.jpg",
  "https://ilglobo.com/media/listing_images/2019/11/13/hand_gestures_2_pexels.jpeg",
  "https://t3.ftcdn.net/jpg/06/04/93/48/360_F_604934878_AVUTMqgED6Np0fJXdbXhVHHzzd9eUP0M.jpg",
  "https://t3.ftcdn.net/jpg/06/04/93/48/360_F_604934878_AVUTMqgED6Np0fJXdbXhVHHzzd9eUP0M.jpg",
];
const Dashbord = () => {
  const navigate = useNavigate();

  const [tokenPresent, setTokenPresent] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      // Redirect to login if token is not present
      navigate("/login");
      setTokenPresent(false);
    }
  }, [navigate]);

  useEffect(() => {
    // Get the UID from sessionStorage
    const storedUID = sessionStorage.getItem("token");

    // Check if there's a user currently signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        if (user.uid === storedUID) {
          // The stored UID matches the current user's UID
          // sendDataToFirebasea(user.uid);
          console.log("User exists");
        } else {
          // UID mismatch - User does not match the stored UID
          console.log("User does not exist");
          navigate("/login");
        }
      } else {
        // No user is signed in
        console.log("No user signed in");
        navigate("/login");
      }
    });

    return () => {
      // Unsubscribe the auth listener to avoid memory leaks
      unsubscribe();
    };
  }, []);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Can calibrate now </div>;
    }

    return (
      <div className="timer">
        <div className="text">
          <h className="bodyhead">Remaining</h>
        </div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  const [showTimer, setShowTimer] = useState(false);
const[emgsdata,setdataemg]=useState()
  const handleButtonClick = () => {
    console.log("cl");

    setShowTimer(true);
    
    const firebaseUrl = "https://btpnew-4f494-default-rtdb.firebaseio.com/";

  
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString()
      .split("/")
      .map((part) => part.padStart(2, "0"))
      .join("-");
    
    const formattedTime = currentDate
      .toLocaleTimeString()
      .split(":")
      .map((part) => part.padStart(2, "0"))
      .join(":");
    
    const kk = `${formattedDate}${formattedTime}_${optionsgesture[geslable]}`;
  
    try {
      fetch(`${firebaseUrl}/${sessionStorage.getItem("token")}/emg/${kk}.json`, {
        method: "PATCH",
        body: JSON.stringify(emgsdata),
      });

      console.log("Data successfully sent to Firebase.");

      // Start checking for changes
      // checkForChanges();
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
    }


  };
  console.log(showTimer);
  const handleComplete = () => {
    setTimeout(() => {
      setShowTimer(false);
    }, 1000); // 1000 milliseconds (1 second)
  };
  const gradientBackground = {
    // background: "linear-gradient(to right, #ff8a00, #e52e71)",
    // background: "linear-gradient(to right, #bfe9ff, #bfe9ff )",
    background: "linear-gradient(to right, #ff6f72, #f14dfd )",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    // height: 100,
  };
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [value, setValue] = React.useState(1000);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const onChange = (value, aa) => {
    console.log(value + " " + aa);

    const firebaseUrl = "https://btpnew-4f494-default-rtdb.firebaseio.com/";

    const data = {};
    data[aa] = value;

    try {
      fetch(`${firebaseUrl}/${sessionStorage.getItem("token")}/gestures.json`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });

      console.log("Data successfully sent to Firebase.");

      // Start checking for changes
      // checkForChanges();
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
    }
  };
  const [geslable, setlable] = useState(0);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setlable(value);
  };

  const [chartDataArray, setChartDataArray] = useState({});

  const setChartDataaa = (index, newData) => {
    setChartDataArray((prevDataArray) => ({
      ...prevDataArray,
      [index]: {
        series: [{ name: `sEMG sensor - channel ${index}`, data: newData }],
        options: {
          chart: {
            type: "area",
            height: "100%",
          },
          grid: {
            borderColor: "#e7e7e7",
            row: {
              colors: ["transparent", "transparent"],
              opacity: 0.5,
            },
          },
          xaxis: {
            title: {
              text: `channel ${index}`,
              style: {
                color: "red",
              },
            },
          },
          fill: {
            color: "#FFFFFF",
          },
          stroke: {
            width: 2,
            colors: ["#FFFFFF"],
          },
          // ... other options
        },
      },
    }));
  };
  useEffect(() => {
    const channelNames = ["0", "1", "2", "3", "4", "5", "6", "7"];
    const newDataObject = {};
    data.forEach((item) => {
      const key = item.index;
      newDataObject[key] = {
        timestamp: item.timestamp,
        0: item["0"],
        1: item["1"],
        2: item["2"],
        3: item["3"],
        4: item["4"],
        5: item["5"],
        6: item["6"],
        7: item["7"],
      };
    });
    setdataemg(newDataObject)
    channelNames.forEach((channel, index) => {
      const newData = data.map((item) => item[channel]);
      console.log(channel, newData);
      setChartDataaa(index, newData);
    });
  }, []);

  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted className="background-video" />

      <div className="main">
        <div className="ovedashbord"></div>
        <div className="contentdiv">
          <div>
            <Box sx={{ flexGrow: 1, marginLeft: -86 }}>
              <div>
                <AppBar
                  position="static"
                  style={{
                    backgroundColor: isHover
                      ? "rgba(159, 90, 253, 0.25)"
                      : "rgba(159, 90, 253, 0)",
                  }}
                  sx={{
                    position: "absolute",
                    zindex: 1,
                    borderRadius: 5,

                    top: 0,
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      <h1 className="bodyhead" style={gradientBackground}>
                        G.A.I.A
                      </h1>
                    </Typography>

                    <Button
                      color="inherit"
                      variant="outlined"
                      onClick={() => {
                        navigate("./Analasis");
                      }}
                    >
                      <h className="bodyhead">Analysis</h>
                    </Button>
                    <div style={{ marginLeft: 10 }}></div>
                    <div className="vl"></div>
                    <div style={{ marginLeft: 10 }}></div>

                    <Button
                      color="inherit"
                      variant="outlined"
                      onClick={() => {
                        sessionStorage.removeItem("token");
                        navigate("/");
                      }}
                    >
                      <h className="bodyhead">Logout</h>
                    </Button>
                  </Toolbar>
                </AppBar>
              </div>
            </Box>
          </div>
          <br></br>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-11" style={{ marginLeft: 40 }}>
                <div>
                  <br></br>
                  <br></br>
                  <Box
                    sx={{
                      height: 550,

                      //  margin: 4.5,
                      //  marginLeft: 2,

                      borderRadius: 5,
                      border: "red",
                      // backgroundColor: "white",

                      "&:hover": {
                        // backgroundColor: "white",

                        boxShadow: "2px 3px 10px #F4AAB9",
                      },
                    }}
                  >
                    <br></br>

                    <div class="row">
                      <div class="col-sm-6">
                        {" "}
                        <Carousel
                          activeIndex={index}
                          onSelect={handleSelect}
                          fade
                          interval={null}
                        >
                          <Carousel.Item>
                            <h5>closed Fist </h5>
                            <Image
                              width={590}
                              height={450}
                              src="https://cdn.pixabay.com/photo/2017/09/01/11/56/hand-2704013_1280.jpg"
                            />
                          </Carousel.Item>

                          <Carousel.Item>
                            <h5>Wrist elongation</h5>
                            <Image
                              width={590}
                              height={450}
                              src="https://assets-global.website-files.com/647888ca92d03e3fca3f1e9b/647888ca92d03e3fca3f2188_stretch%205.png"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <h5>Wrist flexion</h5>
                            <Image
                              width={590}
                              height={450}
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1NdETUkHnlD3U15rM265PEh7PT_HT_ui-T-UPdoo2jDt9xccowf6xCXMeTqoxPe2Wto&usqp=CAU"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <h5>Free hand</h5>
                            <Image
                              width={590}
                              height={450}
                              src="https://st2.depositphotos.com/10614052/49034/i/450/depositphotos_490349742-stock-photo-male-hand-white-background.jpg"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <h5>Rock first hand gesture</h5>
                            <Image
                              width={590}
                              height={450}
                              src="https://c8.alamy.com/comp/2D3FCY5/male-hand-on-a-black-background-two-fingers-pointing-and-little-finger-raised-up-goat-gesture-2D3FCY5.jpg"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <h5> hand gesture finger tap</h5>
                            <Image
                              width={590}
                              height={450}
                              src="https://ilglobo.com/media/listing_images/2019/11/13/hand_gestures_2_pexels.jpeg"
                            />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                      <div class="col-sm-6">
                        <div>
                          <center>
                            <br></br>
                            <br></br>
                            <p>
                              {" "}
                              Ensure correct placement of the sEMG sensor on the
                              hand. To learn more, click "Learn More". After
                              placing the sensor correctly, observe dynamic
                              waves on the graph. Set the duration of your
                              gesture using the sliding gradient background.
                              Maintain a constant slider value for each gesture,
                              and take a 2 to 10-second rest between gestures.
                              Follow the images in the slider for each gesture,
                              repeating it 10 to 20 times. For additional custom
                              gestures, selsct the coustom gestures
                            </p>
                          </center>
                        </div>
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="main">
        <div className="ovedashbord"></div>
        <div className="contentdiv">
          <Box
            sx={{
              height: 550,
              width: 1290,
              //  margin: 4.5,
              //  marginLeft: 2,

              borderRadius: 5,
              border: "red",
              // backgroundColor: "white",

              "&:hover": {
                // backgroundColor: "white",

                boxShadow: "2px 3px 10px #F4AAB9",
              },
            }}
          >
            <div>
              <Dialog
                fullWidth={true}
                maxWidth="xl"
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    width: "300%", // Set the width of the dialog
                    maxHeight: "100vh", // Set the maximum height of the dialog
                    backgroundColor: "rgba( 0 , 0 , 0 , 0.854 )",
                    border: "2px solid red", // Make the dialog box transparent
                  },
                  component: "form",
                  onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                  },
                }}
              >
                <DialogContent
                  style={{ backgroundColor: "transparent", opacity: 0.9 }}
                >
                  <DialogContentText style={{ color: "white" }}>
                    <div class="row">
                      <div class="col" style={{ color: "red" }}>
                        {Object.keys(chartDataArray)
                          .slice(0, 4)
                          .map((channelIndex) => (
                            <div key={channelIndex}>
                              <ReactApexChart
                                series={chartDataArray[channelIndex].series}
                                options={chartDataArray[channelIndex].options}
                                height={200}
                                width={550}
                              />
                            </div>
                          ))}
                      </div>
                      <div class="col" style={{ marginTop: 300 }}>
                        <center>
                          <Button>Capture</Button>
                        </center>
                      </div>
                      <div class="col" style={{ color: "red" }}>
                        {Object.keys(chartDataArray)
                          .slice(4, 8)
                          .map((channelIndex) => (
                            <div key={channelIndex}>
                              <ReactApexChart
                                series={chartDataArray[channelIndex].series}
                                options={chartDataArray[channelIndex].options}
                                height={200}
                                width={550}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
              </Dialog>
            </div>
            <br></br>
            <div class="row">
              <div class="col-sm-6">
                <center>
                  <div>
                    <Select
                      defaultValue="closed Fist"
                      style={{
                        width: 170,
                        backgroundColor: "transparent",
                        marginLeft: "10px",
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "0",
                          label: "closed Fist",
                        },
                        {
                          value: "1",
                          label: "Wrist elongation",
                        },
                        {
                          value: "2",
                          label: "Wrist flexion",
                        },
                        {
                          value: "3",
                          label: "Free hand",
                        },
                        {
                          value: "4",
                          label: "Rock first hand gesture",
                        },
                        {
                          value: "5",
                          label: "hand gesture finger tap",
                        },
                        {
                          value: "6",
                          label: "custom gesture 1",
                        },
                        {
                          value: "7",
                          label: "custom gesture 2",
                        },
                      ]}
                    />

                    <button
                      className="buttona"
                      onClick={handleButtonClick}
                      style={{ marginLeft: "16px" }}
                      disabled={showTimer}
                    >
                      Calibrate
                    </button>
                    <button
                      onClick={handleClickOpen}
                      style={{ marginLeft: "16px" }}
                    >
                      All signals
                    </button>
                    <br></br>
                    <br></br>
                    <div id="chart" style={{ color: "red" }}>
                      <br></br>
                      {Object.keys(chartDataArray)
                        .slice(2, 3)
                        .map((channelIndex) => (
                          <div key={channelIndex}>
                            <ReactApexChart
                              series={chartDataArray[channelIndex].series}
                              options={chartDataArray[channelIndex].options}
                              height={350}
                              width={600}
                            />
                          </div>
                        ))}
                      <div></div>
                      <h style={{ color: "white" }}>
                        duaraion <sub>in ms</sub>
                      </h>
                      <FieldTimeOutlined
                        style={{ fontSize: 40, color: "skyblue" }}
                      />
                      <Slider
                        aria-label="Temperature"
                        defaultValue={1000}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        shiftStep={30}
                        step={50}
                        marks
                        min={100}
                        max={2000}
                        style={{ width: "50%", color: "white" }}
                        onChange={handleSliderChange}
                      />
                    </div>
                  </div>
                </center>
              </div>
              <br></br>
              <br></br>
              <div class="col-sm-6">
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <h>Gesture name:{optionsgesture[geslable]}</h>
                  <br></br>
                  <h>Duaraion: {value} in ms </h>
                  <br></br>
                  commmand wants to be triggered:
                  <Cascader
                    defaultValue={["NONE"]}
                    style={{ marginLeft: 20 }}
                    fieldNames={{
                      label: "name",
                      value: "code",
                      children: "items",
                    }}
                    options={optionssec}
                    onChange={(value) => {
                      onChange(value, geslable);
                    }}
                    // placement="bottomRight"
                    placeholder="Please select"
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <div class="row">
                    <div class="col">
                      <h5>Examples of common shortcut</h5>
                      <br></br>
                      <h>
                        <h
                          className="cursivefont "
                          style={{ fontWeight: "bold" }}
                        >
                          Switch desktops{" "}
                        </h>
                        : Win + Ctrl + {"<-"} {"->"}
                      </h>
                      <br></br>
                      <h>
                        {" "}
                        <h
                          className="cursivefont "
                          style={{ fontWeight: "bold" }}
                        >
                          Copy{" "}
                        </h>
                        :Ctrl+C
                      </h>
                      <br></br>
                      <h>
                        {" "}
                        <h
                          className="cursivefont "
                          style={{ fontWeight: "bold" }}
                        >
                          Paste{" "}
                        </h>
                        :Ctrl+V
                      </h>
                      <br></br>
                      <h>
                        {" "}
                        <h
                          className="cursivefont "
                          style={{ fontWeight: "bold" }}
                        >
                          Maximize Window{" "}
                        </h>
                        : F11 or Win + Up{" "}
                      </h>
                      <br></br>
                      <h>
                        {" "}
                        <h
                          className="cursivefont "
                          style={{ fontWeight: "bold" }}
                        >
                          Open Task View
                        </h>
                        : win + Tab
                      </h>
                      <br></br>
                      <h>
                        {" "}
                        <h
                          className="cursivefont "
                          style={{ fontWeight: "bold" }}
                        >
                          Switch between apps{" "}
                        </h>
                        : Alt + Tab
                      </h>
                      <br></br>
                      <h>
                        {" "}
                        <h
                          className="cursivefont "
                          style={{ fontWeight: "bold" }}
                        >
                          Lock your PC{" "}
                        </h>
                        : Win + L
                      </h>
                    </div>
                    <div class="col">
                      <div className="timer-wrapper">
                        <br></br>
                        {showTimer ? (
                          <CountdownCircleTimer
                            isPlaying
                            duration={10}
                            colors={[
                              "#004777",
                              "#F7B801",
                              "#A30000",
                              "#A30000",
                            ]}
                            colorsTime={[10, 6, 3, 0]}
                            onComplete={handleComplete}
                          >
                            {renderTime}
                          </CountdownCircleTimer>
                        ) : (
                          <div>
                            {" "}
                            <Image
                              width={259}
                              height={300}
                              src={optionsgesturesrc[geslable]}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="main">
        <div className="ove"></div>
        <div className="contentdiv">
          <div className="dog"></div>
          <h1 className="bodyhead" style={gradientBackground}>
            Coustommise the gestures
          </h1>
          <br></br>
          <div>
            <div style={{ marginLeft: "20px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Closed Fist{" "}
                </h>{" "}
                <Cascader
                  style={{ marginLeft: 140 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  options={optionssec}
                  onChange={(value) => {
                    onChange(value, 0);
                  }}
                  // placement="bottomRight"
                  defaultValue={["NONE"]}
                  placeholder="Please select"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Wrist elongation{" "}
                </h>
                <Cascader
                  style={{ marginLeft: 98 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  options={optionssec}
                  onChange={(value) => {
                    onChange(value, 1);
                  }}
                  defaultValue={["NONE"]}
                  // placement="bottomRight"
                  placeholder="Please select"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Wrist flexion{" "}
                </h>
                <Cascader
                  style={{ marginLeft: 121 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  options={optionssec}
                  onChange={(value) => {
                    onChange(value, 2);
                  }}
                  defaultValue={["NONE"]}
                  // placement="bottomRight"
                  placeholder="Please select"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Free hand{" "}
                </h>
                <Cascader
                  style={{ marginLeft: 148 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  options={optionssec}
                  onChange={(value) => {
                    onChange(value, 3);
                  }}
                  defaultValue={["NONE"]}
                  // placement="bottomRight"
                  placeholder="Please select"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Rock first hand gesture{" "}
                </h>
                <Cascader
                  style={{ marginLeft: 39 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  options={optionssec}
                  defaultValue={["NONE"]}
                  onChange={(value) => {
                    onChange(value, 4);
                  }}
                  // placement="bottomRight"
                  placeholder="Please select"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Hand gesture finger tap{" "}
                </h>
                <Cascader
                  style={{ marginLeft: 37 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  options={optionssec}
                  defaultValue={["NONE"]}
                  onChange={(value) => {
                    onChange(value, 5);
                  }}
                  // placement="bottomRight"
                  placeholder="Please select"
                />
              </div>
              <br></br>
              <br></br>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Coustom gesture 1{" "}
                </h>
                <Cascader
                  style={{ marginLeft: 20 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  defaultValue={["NONE"]}
                  options={optionssec}
                  onChange={(value) => {
                    onChange(value, 6);
                  }}
                  // placement="bottomRight"
                  placeholder="Please select"
                />
              </div>
              <br></br>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h className="cursivefont " style={{ fontWeight: "bold" }}>
                  Coustom gesture 2{" "}
                </h>
                <Cascader
                  defaultValue={["NONE"]}
                  style={{ marginLeft: 20 }}
                  fieldNames={{
                    label: "name",
                    value: "code",
                    children: "items",
                  }}
                  options={optionssec}
                  onChange={(value) => {
                    onChange(value, 7);
                  }}
                  // placement="bottomRight"
                  placeholder="Please select"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
