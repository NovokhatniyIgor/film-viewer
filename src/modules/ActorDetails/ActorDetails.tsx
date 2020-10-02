import * as React from 'react';
import { PageTransition } from 'src/_common/PageTransition';
import { getActorDetails, getMoviesByActor } from 'api/movies';
import { IActorInformation, IMovie } from 'src/types'
import { checkImage } from 'services/checkImage';
import {IActorDetails, IActorDetailsRender, IActorListOfMovies} from "modules/ActorDetails/types";
import { List } from 'antd';
import {
    ActorDetailsContainer,
    ImageBiographyContainer,
    ProfileImageContainer,
    ImageStyled,
    MoviesListContainerStyled,
    CardStyled,
} from './styles';



const ActorDetailsRender: React.FC<IActorDetailsRender> = ({ actorDetails }) => {
    if (!actorDetails) {
        return null;
    }
    return (
        <ImageBiographyContainer>
            <ProfileImageContainer>
                <ImageStyled width={200} src={checkImage( 200, 150, actorDetails.profile_path)} />
            </ProfileImageContainer>
            <CardStyled title={actorDetails.name + ' biography'}>{actorDetails.biography}</CardStyled>
        </ImageBiographyContainer>
    );
};



const ActorListOfMovies: React.FC<IActorListOfMovies> = ({ movies }) => {
    if (!movies) {
        return null;
    }
    return (
        <MoviesListContainerStyled>
            <h2>Starring at:</h2>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{ pageSize: 5 }}
                dataSource={movies}
                renderItem={(item: IMovie) => (
                    <List.Item
                        key={item.title}
                        extra={<img width={200} alt="logo" src={checkImage( 200, 150, item.backdrop_path)} />}
                    >
                        <List.Item.Meta title={<h3>{'Movie: ' + item.title}</h3>} description={item.overview} />
                    </List.Item>
                )}
            />
        </MoviesListContainerStyled>
    );
};

const ActorDetails: React.FC<IActorDetails> = ({ match }) => {
    const [actorDetails, setActorDetails] = React.useState<IActorInformation>();
    const [movies, setMovies] = React.useState<IMovie[]>();

    React.useEffect(() => {
        getActorDetails(match.params.id!).then((res) => {
            setActorDetails(res);
        });

        getMoviesByActor(match.params.id!).then((res) => {
            setMovies(res.cast);
        });
    }, [match.params.id]);

    return (
        <PageTransition>
            <ActorDetailsContainer>
                <ActorDetailsRender actorDetails={actorDetails} />
                <ActorListOfMovies movies={movies} />
            </ActorDetailsContainer>
        </PageTransition>
    );
};

export { ActorDetails };
