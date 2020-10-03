import * as React from 'react';
import { getTrailer } from 'api/movies';
import { ITrailerList } from 'src/types';

interface ITrailer {
    id: string;
}

const Trailer: React.FC<ITrailer> = ({ id }) => {
    const [trailerUrl, setTrailerUrl] = React.useState<string>();

    React.useEffect(() => {
        getTrailer(id).then((response: ITrailerList) => {
            const youTubeTrailerId = response.results.find((el) => el.site === 'YouTube' && el.type === 'Trailer');
            youTubeTrailerId && setTrailerUrl('https://www.youtube.com/embed/' + youTubeTrailerId.key);
        });
    }, [id]);

    return (
        <>
            <iframe title={trailerUrl} src={trailerUrl} allowFullScreen />
        </>
    );
};

export { Trailer };
