import styled, {css} from 'styled-components';
import {Link} from  'react-router-dom';

const OptionsContainerStyles = css`
        padding: 10px 15px;
       cursor: pointer;
`;

export const HeaderContainer = styled.div`
height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

`;

export const LogoContainer = styled(Link)`
 height: 100%;
      width: 70px;
      padding: 15px;
`;

export const OptionsContainer = styled.div`
 width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
     
      text-transform: uppercase;
      text-decoration: none;
      color: #031D44;
      position: relative;
` ;
export const OptionLink = styled(Link)`${OptionsContainerStyles}`;
export const OptionDiv = styled.div`${OptionsContainerStyles}`;

