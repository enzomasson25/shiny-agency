import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink } from '../../utils/style/Atoms';
import HomeIllustration from '../../assets/home-illustration.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? colors.backgroundDark : colors.backgroundLight};
`;

const HomerContainer = styled.div`
    margin: 30px;
    padding: 60px 90px;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
`;

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    flex: 1;
    ${StyledLink} {
        max-width: 250px;
    }
`;

const StyledTitle = styled.h2`
    padding-bottom: 30px;
    max-width: 280px;
    line-height: 50px;
`;

const Illustration = styled.img`
    flex: 1;
`;

function Home() {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <HomeWrapper isDarkMode={theme === 'dark'}>
            <HomerContainer>
                <LeftCol>
                    <StyledTitle>
                        Repérez vos besoins, on s’occupe du reste, avec les
                        meilleurs talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration} />
            </HomerContainer>
        </HomeWrapper>
    );
}

export default Home;
