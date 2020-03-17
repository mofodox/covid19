import fetch from 'isomorphic-unfetch'
// import YouTube from 'react-youtube'

import Layout from '../components/Layout'
import InfoCard from '../components/InfoCard'

export default function IndexPage(props) {
    const { dataAll, dataSG } = props 

    let dateAll = new Date(dataAll.lastUpdate)
    let dateAllString = dateAll.toDateString()

    let dateSG = new Date(dataSG.lastUpdate)
    let dateSGString = dateSG.toDateString()

    return (
        <Layout
            dataURL={dataAll.source}
        >
            <div className="grid__col grid__col--3-of-5 grid__col--centered">
                <h1 className="title">Covid-19 Global Cases 🌍</h1>
                {/* <div id="circle"></div> */}
                <p id="time--status">{`Last updated on ${dateAllString}`}</p>
            </div>

            <hr className="line" />

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
                <h1 className="title">Covid-19 SG Cases 🇸🇬</h1>
                {/* <div id="circle"></div> */}
                <p id="time--status">{`Last updated on ${dateSGString}`}</p>
            </div>

            <hr className="line" />

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

            {/* <YouTube 
                opts={{
                    height: '500',
                    width: '100%',
                }}
                videoId="6Af6b_wyiwI"
                style={{ marginBottom: '64px' }}
            /> */}

            <style jsx>{`
                .title {
                    font-size: 40px;
                    text-align: center;
                    margin: 0 auto;
                }

                #circle {
                    display: inline-block;
                    position: relative;
                    top: -30px;
                    left: 48px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: orange;
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

    console.log(dataAll)
    console.log(dataDaily)
    console.log(dataSG)

    return { dataAll, dataDaily, dataSG }
}