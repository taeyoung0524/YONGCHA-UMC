// '/'로 시작하는 모든 루트 경로에서 해당하는 Outlet을 공유 
// '/'로 접속시에 Outlet 위치에 Hompage가 렌더링 된다.
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
    dipslay:flex;
    flex-direction:column;
    height:100vh;
    color:white;
`

const MainContent = styled.div`
    display:flex;
    flex-grow:1;
`

const SidebarContainer= styled.div`
    width:200px;
    background-color:#282727;
    padding:20px;
    height:100vh;
`

const ContentContainer = styled.div`
    flex-grow:1;
    padding:20px;
`

const RootLayout = () => {
    return (
        <LayoutContainer>
            <Navbar/>
            <MainContent>
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>
                <ContentContainer>
                    <Outlet/>
                </ContentContainer>
            </MainContent>
        </LayoutContainer>
    );
};

export default RootLayout;
