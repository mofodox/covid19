import fetch from 'isomorphic-unfetch'
import { 
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share'
import Router from 'next/router'
import withGA from 'next-ga'

import Layout from '../components/Layout'
import InfoCard from '../components/InfoCard'

const IndexPage = (props) => {
    const { dataAll, dataSG, dataCountries } = props
    
    // const countryVals = Object.values(dataCountries.countries)
    // console.log(dataCountries.countries.Singapore)
    // console.log(countryVals)

    let dateAll = new Date(dataAll.lastUpdate)
    let dateAllString = dateAll.toDateString()

    let dateSG = new Date(dataSG.lastUpdate)
    let dateSGString = dateSG.toDateString()

    return (
        <Layout
            pageTitle="Home"
            dataURL={dataAll.source}
        >
            <div className="grid__col grid__col--3-of-5 grid__col--centered">
                <h1 className="title">Covid-19 Global Cases 🌍</h1>
                <p id="time--status">{`Last updated on ${dateAllString}`}</p>
            </div>

            <div className="grid__col grid__col--12-of-12">
                <hr className="line" />
            </div>

            <InfoCard 
                contentTitle="Confirmed:"
                subtitleValue={`${dataAll.confirmed.value}`}
                style={{ backgroundColor: '#f7ca18' }}
            />

            <InfoCard
                contentTitle="Deaths:"
                subtitleValue={`${dataAll.deaths.value}`}
                style={{ backgroundColor: '#f64747' }}
            />

            <InfoCard
                contentTitle="Recovered:"
                subtitleValue={`${dataAll.recovered.value}`}
                style={{ backgroundColor: '#23cba7' }}
            />

            <div className="grid__col grid__col--3-of-5 grid__col--centered">
                <h1 className="title">{`Covid-19 ${dataCountries.countries.Singapore} Cases 🇸🇬`}</h1>
                <p id="time--status">{`Last updated on ${dateSGString}`}</p>
            </div>

            <div className="grid__col grid__col--12-of-12">
                <hr className="line" />
            </div>

            <InfoCard
                contentTitle="Confirmed:"
                subtitleValue={`${dataSG.confirmed.value}`}
                style={{ backgroundColor: '#f7ca18' }}
            />

            <InfoCard
                contentTitle="Deaths:"
                subtitleValue={`${dataSG.deaths.value}`}
                style={{ backgroundColor: '#f64747' }}
            />

            <InfoCard
                contentTitle="Recovered:"
                subtitleValue={`${dataSG.recovered.value}`}
                style={{ backgroundColor: '#23cba7' }}
            />

            <div className="grid__col grid__col--3-of-5 grid__col--centered" style={{ marginBottom: '64px', marginTop: '40px', textAlign: 'center' }}>
                <h2>Share the Data With Your Friends</h2>
                <FacebookShareButton
                    quote={`Latest update on SG Covid-19 data – Confirmed: ${dataSG.confirmed.value} Deaths: ${dataSG.deaths.value} Recovered: ${dataSG.recovered.value}`}
                    url="https://covid19.mofodox.now.sh"
                    style={{ marginRight: '16px' }}
                >
                    <FacebookIcon
                        size={40}
                        borderRadius={8}
                    />
                </FacebookShareButton>

                <TwitterShareButton 
                    title={`Latest update on SG Covid-19 data – Confirmed: ${dataSG.confirmed.value} Deaths: ${dataSG.deaths.value} Recovered: ${dataSG.recovered.value}`}
                    url="https://covid19.mofodox.now.sh"
                    via="mofodox"
                    style={{ marginRight: '16px' }}
                >
                    <TwitterIcon 
                        size={40}
                        borderRadius={8}
                    />

                </TwitterShareButton>

                <WhatsappShareButton
                    url="https://covid19.mofodox.now.sh"
                    title={`Latest update on SG Covid-19 data – Confirmed: ${dataSG.confirmed.value} Deaths: ${dataSG.deaths.value} Recovered: ${dataSG.recovered.value}`}
                >
                    <WhatsappIcon 
                        size={40}
                        borderRadius={8}
                    />
                </WhatsappShareButton>
            </div>

            <style jsx>{`
                .title {
                    font-size: 40px;
                    text-align: center;
                    margin: 0 auto;
                }

                #time--status {
                    text-align: center;
                }
            `}</style>
        </Layout>
    )
}

IndexPage.getInitialProps = async () => {
    const resAll = await fetch('https://covid19.mathdro.id/api')
    const dataAll = await resAll.json()

    const resDaily = await fetch('https://covid19.mathdro.id/api/daily')
    const dataDaily = await resDaily.json()

    const resSG = await fetch('https://covid19.mathdro.id/api/countries/SG')
    const dataSG = await resSG.json()

    const resCountries = await fetch('https://covid19.mathdro.id/api/countries')
    const dataCountries = await resCountries.json()

    // console.log(dataAll)
    // console.log(dataDaily)
    // console.log('dataSG', dataSG)
    // console.log('countries', dataCountries)

    return { dataAll, dataDaily, dataSG, dataCountries }
}

export default withGA('UA-160833862-1', Router)(IndexPage)
