import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import { useFetch } from '../../utils/hooks';

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
`;

const SubTitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`;

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(3, 2fr);
    align-items: center;
    justify-items: center;
    margin: 0 150px 0 150px;
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

function Freelances() {
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/freelances`
    );

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <div>
            <Title>Trouvez votre prestataire</Title>
            <SubTitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </SubTitle>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader data-testid="loader" />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {data &&
                        data.freelancersList.map((profile, index) => (
                            <Card
                                key={`${profile.name}-${index}`}
                                label={profile.job}
                                title={profile.name}
                                picture={profile.picture}
                            />
                        ))}
                </CardsContainer>
            )}
        </div>
    );
}

export default Freelances;
