import styled from 'styled-components';
import colors from '../../utils/style/colors';
import ErrorIllustration from '../../assets/404.svg';

const ErrorWrapper = styled.div`
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Error() {
    return (
        <ErrorWrapper>
            <h1>Oups..</h1>
            <img src={ErrorIllustration} alt="Error 404 illustration" />
            <h1>Il semblerait qu'il y ait un problème</h1>
        </ErrorWrapper>
    );
}

export default Error;
