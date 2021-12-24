import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function MetaDecorator({ title, description }) {
    if (!title || !description) {
        title = 'Open Sauced';
        description = 'The path to your next open-source contribution.';
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />

            //Open Graph Protocol Meta
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="https://i.ibb.co/my2VqXw/sauced-social-card.png" />
                <meta property="og:url" content="https://opensauced.pizza/" />
                <meta property="og:type" content="website" />

            //Twitter Meta
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content="https://i.ibb.co/my2VqXw/sauced-social-card.png" />
            </Helmet>
        </HelmetProvider>
    );
};

export default MetaDecorator;
