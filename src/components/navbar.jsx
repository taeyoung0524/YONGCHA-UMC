// navbar.jsx
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
    display:flex;
    width:auto;
    heigth:20px;
    color:red;
    font-weight:bold;
    font-size:20px;
    justify-content:center;
    align-items:center;

    padding:10px 15px 10px 15px;
    border-bottom: 1px solid #D91656;
`
const ButtonGroup = styled.div`
    display:flex;
    gap:10px;
    margin-left: auto; /* 버튼을 오른쪽 끝으로 밀기 */
`

const StyledButton = styled.div`
    background-color:#D91656;
    color:white;
    border:none;
    padding:8px 16px;
    border-radius:5px;
    cursor:pointer;
    font-size:11px;

    &:hover{
    background-color:#A31345;
    }
`
const Navbar = () => {
    return (
        <NavbarContainer>
            <Link to='/' style={{color:"#D91656", textDecoration:"none", fontWeight:"bold", fontSize:"17px"}}>YONGCHA</Link>
            <ButtonGroup>
                <StyledButton>
                    <Link to='/login' style={{color:'white', textDecoration:'none'}}>로그인</Link>
                </StyledButton>
                <StyledButton>
                    <Link to="/signup" style={{color:'white', textDecoration:'none'}}>회원가입</Link>
                </StyledButton>
            </ButtonGroup>
        </NavbarContainer>
    );
};

export default Navbar;
