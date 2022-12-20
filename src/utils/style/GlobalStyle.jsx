import { createGlobalStyle } from 'styled-components';
import { useTheme } from '../hooks';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        transition: 200ms;
    }

    body {
        color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
        
        background-color: ${({ theme }) =>
            theme === 'light' ? 'white' : '#2F2E41'};
        margin: 0;  
    }
`;

function GlobalStyle() {
    const { theme } = useTheme();

    return <StyledGlobalStyle theme={theme} />;
}

export default GlobalStyle;
