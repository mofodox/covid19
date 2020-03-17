import SEO from './SEO'
import Footer from './Footer'

export default function Layout({children, dataURL}) {
    return (
        <React.Fragment>
            <SEO />
            <div className="wrap">
                <div className="grid">
                    {children}

                    <Footer 
                        dataURL={dataURL}
                    />
                </div>
            </div>

            <style jsx global>{`
                body {
                    font-family: 'Karla', sans-serif;
                }

                #__next {
                    margin: 0;
                }

                .line {
                    margin-bottom: 40px;
                    border: 1px solid #f7f7f7;
                }
            `}</style>

            <style jsx>{`
                .wrap {
                    max-width: 960px;
                    margin: 0 auto;
                    padding: 1.4rem;
                }
            `}</style>
        </React.Fragment>
    )
}
