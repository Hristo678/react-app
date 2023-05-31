import React from 'react'
import ReactDOMServer from 'react-dom/server'

// import our main App component
import App from '../../src/App';
import Navigation from '../../src/navigation'

import path from 'path'
import fs from 'fs'
import { StaticRouter } from 'react-router-dom/server'
import { Routes } from 'react-router-dom';
import PageWrapper from '../../src/components/pageWrapper';


export default (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        

        // render the app as a string
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.path}>
                <App>
                    <PageWrapper>

                    {/* TODO: Must be added the Navigation */}
                    </PageWrapper>
                </App>
            </StaticRouter>);

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
}