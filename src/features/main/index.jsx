import React from "react";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import AppHeader from "./pages/header";
import AppFooter from "./pages/footer";
import RoomDetail from "./pages/room-detail";
import Home from "./pages/home";
import Login from "../../components/login";
import News from "../dashboard/pages/manapostnews";
import Register from "../../components/register";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function HomePage() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Routes>
          <Route path="/detail/*" element={<RoomDetail />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/news/*" element={<News/>} />  
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default HomePage;