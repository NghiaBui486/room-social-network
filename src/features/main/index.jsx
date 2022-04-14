import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import ListRoom from "../main/pages/ListOfRooms/index_List/List_Room";
import "./index.scss";

function HomePage() {
  return (
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/" element={<ListRoom/>} />
    </Routes>
  );
}

export default HomePage;