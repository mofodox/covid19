export default function Footer(props) {
    return (
        <div className="grid__col grid__col--12-of-12">
            <div className="footer--container">
                <p id="footer--text">Another project by <a href="https://twitter.com/mofodox" target="__blank">@mofodox</a>.</p> 
                <p id="footer--sourceText">Source: <a href={props.dataURL} target="__blank">{props.dataURL}</a>.</p>
            </div>

            <style jsx>{`
                .footer--container {
                    text-align: center;
                }

                #footer--text {
                    margin-bottom: 16px;
                }

                #footer--text a, #footer--sourceText a {
                    color: #59abe3;
                }

                #footer--text a:hover, #footer--sourceText a:hover {
                    color: #296690;
                }
            `}</style>
        </div>
    )
}