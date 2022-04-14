import React from "react";
import { Layout } from 'antd';
import '../index.scss';
import BannerHouse from "../pages/HomePage/index_UI/BannerHouse";
import Searching from "./HomePage/index_UI/Searching";
import Hot_key from "./HomePage/index_UI/Hot_key";
import NewPost from "../pages/HomePage/index_UI/NewPost";
import Room_Stay_Provinces from "./HomePage/index_UI/Room_Stay_Provinces";
import Head from "../../../components/Hearder";
import Foot from "../../../components/Footer";
const { Header, Content, Footer } = Layout;

function Main() {
    return (
               <Layout style={{color: 'blue'}}>
                  <Head />
                       {/* {Components must start uppercase, otherwise React thinks that 
                        they are simple HTML tags and not components. So you must change player to Player everywhere} */}
                    <Content className="content">
                          <BannerHouse /> 
                          <Searching />
                            <Hot_key />
                              <NewPost />
                                <Room_Stay_Provinces />
                      </Content> 
                    <Foot />
                </Layout>
                
              // <Detail >
              // </Detail>
    );
  }

export default Main;