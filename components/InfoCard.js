import TextyAnim from 'rc-texty'

const InfoCard = (props) => {
    return (
        <div className="grid__col grid__col--1-of-3" style={{ marginBottom: '64px' }}>
            <div className="container">
                <p className="content-title">{`${props.contentTitle}`}</p>
                <p className="content-subtitle" style={props.style}>{`${props.subtitleValue}`}</p>
            </div>

            <style jsx>{`
                .container {
                    text-align: center;
                }

                .content-title {
                    font-size: 20px;
                }

                .content-subtitle {
                    font-size: 40px;
                    font-weight: bold;
                    margin-top: 16px;
                    margin-bottom: 16px;
                    color: white;

                    padding: 16px;
                }
            `}</style>
        </div>
    )
}

export default InfoCard