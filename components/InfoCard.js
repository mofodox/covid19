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
                    color: #696969;
                }

                .content-subtitle {
                    font-size: 40px;
                    font-weight: bold;
                    margin-top: 16px;
                    margin-bottom: 16px;
                    padding: 16px;
                    border: 1px solid #e4e4e4;
                    border-radius: 4px;

                    // -webkit-box-shadow: 0px 4px 16px 1px rgba(0,0,0,0.16);
                    // -moz-box-shadow: 0px 4px 16px 1px rgba(0,0,0,0.16);
                    // box-shadow: 0px 4px 16px 1px rgba(0,0,0,0.16);
                }

                // Extra small devices (portrait phones, less than 576px)
                @media (max-width: 575.98px) {
                    .content-title {
                        font-size: 18px;
                    }

                    .content-subtitle {
                        font-size: 32px;
                    }
                }
            `}</style>
        </div>
    )
}

export default InfoCard