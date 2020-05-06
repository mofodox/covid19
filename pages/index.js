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
import {
    ResponsiveContainer,
    LineChart,
    BarChart,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    Bar,
    Area
} from 'recharts'

import Layout from '../components/Layout'
import InfoCard from '../components/InfoCard'

const IndexPage = (props) => {
    const { dataAll, dataSG } = props

    console.log(props.dataLiveSG)
    
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
                <h1 className="title">Covid-19 – Global Cases 🌍</h1>
                <p id="time--status">{`Last updated on ${dateAllString}`}</p>
            </div>

            <div className="grid__col grid__col--12-of-12">
                <hr className="line" />
            </div>

            <InfoCard 
                contentTitle="Confirmed:"
                subtitleValue={`${dataAll.confirmed.value}`}
                delay={500}
                style={{ color: '#f7ca18' }}
            />

            <InfoCard
                contentTitle="Deaths:"
                subtitleValue={`${dataAll.deaths.value}`}
                delay={1000}
                style={{ color: '#f64747' }}
            />

            <InfoCard
                contentTitle="Recovered:"
                subtitleValue={`${dataAll.recovered.value}`}
                delay={1500}
                style={{ color: '#23cba7' }}
            />

            <div className="grid__col grid__col--3-of-5 grid__col--centered">
                <h1 className="title">{`Covid-19 – SG Cases 🇸🇬`}</h1>
                <p id="time--status">{`Last updated on ${dateSGString}`}</p>
            </div>

            <div className="grid__col grid__col--12-of-12">
                <hr className="line" />
            </div>

            <InfoCard
                contentTitle="Confirmed:"
                subtitleValue={`${dataSG.confirmed.value}`}
                delay={2000}
                style={{ color: '#f7ca18' }}
            />

            <InfoCard
                contentTitle="Deaths:"
                subtitleValue={`${dataSG.deaths.value}`}
                delay={2500}
                style={{ color: '#f64747' }}
            />

            <InfoCard
                contentTitle="Recovered:"
                subtitleValue={`${dataSG.recovered.value}`}
                delay={3000}
                style={{ color: '#23cba7' }}
            />
            <ResponsiveContainer width="100%" height={500}>
                <AreaChart
                     data={props.dataLiveSG}
                    margin={{ top: 16, right: 16, left: 16, bottom: 16 }}>
                    <defs>
                        <linearGradient id="colorConfirmed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f7ca18" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#f7ca18" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorDeaths" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f64747" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#f64747" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorRecovered" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#23cba7" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#23cba7" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='Date' />
                    <YAxis />
                    <CartesianGrid strokeDasharray="20 20 20" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Confirmed" stroke="#f7ca18" fillOpacity={1} fill="url(#colorConfirmed)" />
                    <Area type="monotone" dataKey="Deaths" stroke="#f64747" fillOpacity={1} fill="url(#colorDeaths)" />
                    <Area type="monotone" dataKey="Recovered" stroke="#23cba7" fillOpacity={1} fill="url(#colorRecovered)" />
                </AreaChart>
            </ResponsiveContainer>

            {/* <BarChart width={730} height={250} data={ props.dataLiveSG }>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis dataKey="Active" hide={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Confirmed" fill="#8884d8" />
                <Bar dataKey="Deaths" fill="#82ca9d" />
                <Bar dataKey="Recovered" fill="#82ca9d" />
            </BarChart> */}

            {/* <LineChart width={1000} height={500} data={props.dataLiveSG}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis dataKey="Active" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" />
                <Line type="monotone" dataKey="Deaths" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Recovered" stroke="#82ca9d" />
            </LineChart> */}

            <div className="grid__col grid__col--3-of-5 grid__col--centered share--fold">
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
                    color: #444;
                }

                #time--status {
                    text-align: center;
                    color: #696969;
                }

                .share--fold {
                    // background-color: grey;
                    margin-bottom: 40px;
                    margin-top: 40px;
                    text-align: center;
                }

                // Extra small devices (portrait phones, less than 576px)
                @media (max-width: 575.98px) {
                    .title {
                        font-size: 32px;
                    }

                    #time--status {
                        font-size: 15px;
                    }
                }
            `}</style>
        </Layout>
    )
}

IndexPage.getInitialProps = async () => {
    const resAll = await fetch('https://covid19.mathdro.id/api')
    const dataAll = await resAll.json()

    const resDaily = await fetch('https://covid19.mathdro.id/api/confirmed')
    const dataDaily = await resDaily.json()

    const resSG = await fetch('https://covid19.mathdro.id/api/countries/SG')
    const dataSG = await resSG.json()

    const resLiveSG = await fetch('https://api.covid19api.com/live/country/SG')
    const dataLiveSG = await resLiveSG.json()

    // console.log(dataAll)
    console.log(dataDaily)
    console.log(dataLiveSG)
    // console.log('dataSG', dataSG)
    // console.log('countries', dataCountries)

    return { dataAll, dataDaily, dataSG, dataLiveSG }
}

export default withGA('UA-160833862-1', Router)(IndexPage)
