import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageBuilder } from 'src/routing';

const App = () => {
    return (
        <BrowserRouter>
            <PageBuilder />
        </BrowserRouter>
    );
};

export default App;
