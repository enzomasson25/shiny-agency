import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms';
import LightLogo from '../../assets/light-logo.png';
import { useContext } from 'react';
import DarkLogo from '../../assets/dark-logo.png';
import { ThemeContext } from '../../utils/context';
import { useTheme } from '../../utils/hooks';

const HomeLogo = styled.img`
    height: 70px;
`;

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px 0 50px;
`;

function Header() {
    const { theme } = useTheme();

    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? LightLogo : DarkLogo} />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    );
}

export default Header;
