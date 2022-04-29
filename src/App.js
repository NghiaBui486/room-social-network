import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import NotFound from "./components/not-found";
import userService from "./services/userService";
import Axios from "axios";
import roomService from "./services/roomService";

//Lazy loading
const HomePage = React.lazy(() => import("./features/main"));
const DashBoard = React.lazy(() => import("./features/dashboard"));
const Login = React.lazy(() => import("./components/login"));
const Register = React.lazy(() => import("./components/register"));
const News = React.lazy(() => import("./features/dashboard/pages/manapostnews"));
const ListRooms = React.lazy(() => import("./features/main/pages/list-room"));

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    //test call api login
    // userService.authenticate({
    //   "username": "hoaprono123",
    //   "password": "1234"
    // }).then((res) => {
    //   if(res.accessToken){
    //     console.log("Token ", res.accessToken);
    //     localStorage.setItem("accessToken", res.accessToken);
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    //room
    // roomService.authenroom().then((res) => {
    //   if(res){
    //     console.log("Room", res);
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
   
  //   Axios.get("/room").then(res => {
  //     console.log(res.data) 
  //     setData(res.data)
  //   })
  //   .catch(err => console.log(err))
  }, []);
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="app__spin">
            <Spin tip="Loading..." />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/room-social-network" replace />} />
            <Route path="/room-social-network/*" element={<HomePage/>} />
            <Route path="/admin-management/*" element={<DashBoard/>} />
            <Route path="/news/*" element={<News/>} />
            <Route path="/login/*" element={<Login/>} />
            <Route path="/register/*" element={<Register/>} />
            <Route path="/list-room/*" element={<ListRooms />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
} 

export default App;