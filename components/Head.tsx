import React from 'react';
import Head from 'next/head';

export interface CustomHeadProps {
}

const CustomHead: React.FunctionComponent<CustomHeadProps> = () => {
    return (
        <Head>
            <title> Mythic+ God Team </title>
            <meta charSet="UTF-8" />
            <meta name="description" content="Free Web tutorials" />
            <meta name="keywords" content="World of Warcraft, Mythic Plus, Mythic+" />
            <meta name="author" content="Louis-Philippe" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
}

export default CustomHead;