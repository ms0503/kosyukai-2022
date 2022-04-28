'use strict';

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ja">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta http-equiv="access-control-allow-origin" content="*" />
                    <meta http-equiv="access-control-allow-methods" content="get, options, post" />
                    <meta http-equiv="access-control-max-age" content="604800" />
                    <meta http-equiv="x-content-type-options" content="nosniff" />
                    <meta http-equiv="x-xss-protection" content="1; mode=block" />
                    <meta http-equiv="content-security-policy" content="default-src 'self'; font-src https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' https://ajax.googleapis.com https://gist.github.com; style-src 'self' 'unsafe-inline' https://cdn.skypack.dev https://fonts.googleapis.com https://unpkg.com" />
                    <meta http-equiv="strict-transport-security" content="max-age=31536000" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <meta name="msapplication-square70x70logo" content="/kosyukai-2022/site-tile-70x70.png" />
                    <meta name="msapplication-square150x150logo" content="/kosyukai-2022/site-tile-150x150.png" />
                    <meta name="msapplication-wide310x150logo" content="/kosyukai-2022/site-tile-310x150.png" />
                    <meta name="msapplication-square310x310logo" content="/kosyukai-2022/site-tile-310x310.png" />
                    <meta name="msapplication-TileColor" content="#0083ff" />
                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
                    <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/kosyukai-2022/favicon.ico" />
                    <link rel="icon" type="image/vnd.microsoft.icon" href="/kosyukai-2022/favicon.ico" />
                    <link rel="icon" type="image/png" sizes="36x36" href="/kosyukai-2022/icon/android-chrome-36x36.png" />
                    <link rel="icon" type="image/png" sizes="48x48" href="/kosyukai-2022/icon/android-chrome-48x48.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/kosyukai-2022/icon/android-chrome-72x72.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/kosyukai-2022/icon/android-chrome-96x96.png" />
                    <link rel="icon" type="image/png" sizes="128x128" href="/kosyukai-2022/icon/android-chrome-128x128.png" />
                    <link rel="icon" type="image/png" sizes="144x144" href="/kosyukai-2022/icon/android-chrome-144x144.png" />
                    <link rel="icon" type="image/png" sizes="152x152" href="/kosyukai-2022/icon/android-chrome-152x152.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/kosyukai-2022/icon/android-chrome-192x192.png" />
                    <link rel="icon" type="image/png" sizes="256x256" href="/kosyukai-2022/icon/android-chrome-256x256.png" />
                    <link rel="icon" type="image/png" sizes="384x384" href="/kosyukai-2022/icon/android-chrome-384x384.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/kosyukai-2022/icon/android-chrome-512x512.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/kosyukai-2022/icon/icon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="24x24" href="/kosyukai-2022/icon/icon-24x24.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/kosyukai-2022/icon/icon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="36x36" href="/kosyukai-2022/icon/icon-36x36.png" />
                    <link rel="icon" type="image/png" sizes="48x48" href="/kosyukai-2022/icon/icon-48x48.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/kosyukai-2022/icon/icon-72x72.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/kosyukai-2022/icon/icon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="128x128" href="/kosyukai-2022/icon/icon-128x128.png" />
                    <link rel="icon" type="image/png" sizes="144x144" href="/kosyukai-2022/icon/icon-144x144.png" />
                    <link rel="icon" type="image/png" sizes="152x152" href="/kosyukai-2022/icon/icon-152x152.png" />
                    <link rel="icon" type="image/png" sizes="160x160" href="/kosyukai-2022/icon/icon-160x160.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/kosyukai-2022/icon/icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="196x196" href="/kosyukai-2022/icon/icon-196x196.png" />
                    <link rel="icon" type="image/png" sizes="256x256" href="/kosyukai-2022/icon/icon-256x256.png" />
                    <link rel="icon" type="image/png" sizes="384x384" href="/kosyukai-2022/icon/icon-384x384.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/kosyukai-2022/icon/icon-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/kosyukai-2022/icon/apple-touch-icon-57x57.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="/kosyukai-2022/icon/apple-touch-icon-60x60.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/kosyukai-2022/icon/apple-touch-icon-72x72.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="/kosyukai-2022/icon/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/kosyukai-2022/icon/apple-touch-icon-114x114.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="/kosyukai-2022/icon/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/kosyukai-2022/icon/apple-touch-icon-144x144.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/kosyukai-2022/icon/apple-touch-icon-152x152.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/kosyukai-2022/icon/apple-touch-icon-180x180.png" />
                    <link rel="manifest" type="application/json" href="/kosyukai-2022/manifest.json" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?f=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

