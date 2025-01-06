import { IoSearchSharp } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components for Sidebar
const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border:none;
  width: 200px; /* 고정 너비 설정 */
  min-width: 200px; /* 최소 너비 설정 */
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center; /* 아이콘과 텍스트를 수평 정렬 */
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 16px;
  margin: 5px 10px 5px 10px;
`;

const IconWrapper = styled.div`
  margin-right: 8px; /* 아이콘과 텍스트 사이의 간격 */
  font-size: 20px;
`;


const Sidebar =() => {
    return (
        <SidebarContainer>
            <StyledLink to="/search">
                <IconWrapper>
                    <IoSearchSharp/>
                </IconWrapper>
                찾기
            </StyledLink>
            <StyledLink to ='/category'>
                <IconWrapper>
                    <BiSolidCameraMovie/>
                </IconWrapper>
                영화
            </StyledLink>
        </SidebarContainer>
    )
}

export default Sidebar;