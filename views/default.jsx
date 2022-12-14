const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Post Anything</title>
                <link rel='stylesheet' href='/css/style.css' />
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js' />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Archive</a>
                        </li>
                        <li>
                            <a href="/places/new">Post Something New</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def