import * as React from 'react';
import { MovieList } from './components/MovieList';
import { SearchField } from './components/SearchField';
import { PageTransition } from 'src/_common/PageTransition';

const HomePage = () => {
    const [searchParam, setSearchParam] = React.useState<string>('');

    return (
        <PageTransition>
            <SearchField setSearchParam={setSearchParam} />
            <MovieList searchParam={searchParam} />
        </PageTransition>
    );
};

export { HomePage };
