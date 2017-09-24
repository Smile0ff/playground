import React from 'react';

export const DefaultLayout = ({ children }) => (
    <div id='root'>
        <header id='header'></header>
        <main id='content'>
            { children }
        </main>
    </div>
);