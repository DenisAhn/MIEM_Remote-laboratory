import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { ROOT_NODE } from 'config/rootNode';
import { RootPage } from 'pages/RootPage';
import { initMobX } from 'stores/initMobx';


initMobX();

const root = createRoot(ROOT_NODE);

root.render(
    <React.Fragment>
        <RootPage />
    </React.Fragment>
);
