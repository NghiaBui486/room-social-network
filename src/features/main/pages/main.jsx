import React from "react";
import { Layout } from 'antd';
import '../index.scss';
import BannerHouse from "../BannerHouse";
import Searching from "../Searching";
import Hot_key from "../Hot_key";
import NewPost from "../NewPost";
import Room_Stay_Provinces from "../Room_Stay_Provinces";
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
                          {/* <Login /> */}
                      </Content>

                          
                    <Foot />
                </Layout>
    );
  }

export default Main;