import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.jpg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

const CardLabel = styled.span`
    color: ${colors.primary};
    font-size: 22px;
    font-weight: normal;
    padding-left: 15px;
`;

const CardTitle = styled.span`
    font-size: 22px;
    font-weight: bold;
    align-self: center;
    color: black;
`;

const CardImage = styled.img`
    height: 150px;
    width: 150px;
    align-self: center;
    border-radius: 50%;
    margin: 30px 0 30px 0;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? colors.backgroundDark : colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;

function Card({ label, title, picture }) {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <CardWrapper isDarkMode={theme === 'dark'}>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture,
};

export default Card;
