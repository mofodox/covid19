import Head from 'next/head'

export default function SEO(props) {
    return (
        <Head>
            <title>CORONA | {props.pageTitle}</title>
            <meta charSet="UTF-8" />
            <meta name="description" content="Corona Virus Global Cases" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Khairul Akmal" />

            <link href="/toast-grid.css" rel="stylesheet" />
            <link href="/styles.css" rel="stylesheet" />
        </Head>
    )
}