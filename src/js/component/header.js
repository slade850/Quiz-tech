import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import asset from '../../../assets/images/avatar/femme1.png'

const mockData ={
  userID: "1",
  userPseudo: "Fang",
  userPoints: "100",
  avatar: asset
}

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/themes">Themes</Link>
          </li>
        </ul>
        <h2>{ mockData.userPseudo }</h2>
        <StyledImg2 src={mockData.avatar} />
      </StyledNav>
    
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background: #9F489B;
  border-radius: 3px;
  `

const StyledNav = styled.nav`
  ${'' /* background: palevioletred; */}
  font-weight: bold;
  padding: 1em;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
`;

const StyledImg = styled.img.attrs({
  src: 'assets/images/avatar/femme1.png'
})`width: 100px;
height: 100px;
border: 1px solid lightgrey;`

const StyledImg2 = styled.img`width: 100px;
height: 100px;
border: 1px solid lightgrey;`