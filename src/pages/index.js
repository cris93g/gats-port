import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/23.png'
import thumb02 from '../assets/images/thumbs/22.png'
import thumb03 from '../assets/images/thumbs/28.png'
import thumb04 from '../assets/images/thumbs/24-2.png'


import full01 from '../assets/images/fulls/leag.png'
import full02 from '../assets/images/fulls/pac.png'
import full03 from '../assets/images/fulls/dine.png'
import full04 from '../assets/images/fulls/roomer.png'
import full05 from '../assets/images/fulls/spac.png'

import sv1 from "../assets/images/sv/js.svg"
import sv2 from "../assets/images/sv/ex.svg"
import sv3 from "../assets/images/sv/html.svg"
import sv4 from "../assets/images/sv/node.svg"
import sv5 from "../assets/images/sv/redux.svg"
import sv6 from "../assets/images/sv/react.svg"
import sv7 from "../assets/images/sv/post.svg"



const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'My League Team', description: "React Native app that allows the user to use Riots Api to find he's teamates past games,ranks, and check if they are currently in a game.App use's React,Express,RiotAPI,Node.", ico: 'https://github.com/cris93g/ios_league'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Pac-clone', description: "React app that recreates pac-sun website user is able to view,search,and add to cart different items.App Use's React,Express,Node,Stripe,PostgreSQL.", ico:'https://github.com/cris93g/pac-clone'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Dine-Now', description: "Checks User's geolocation to map out nearby restaurants where they can check Restaurant's phone,price range, and user's reviews.App use's React,GoogleAPI,Express,NodeJs.", ico:'https://github.com/cris93g/DineNow'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Roomers', description: "Group developed app where user can either put their room out for rent or look for a place to move in. App use's AWS,Socket.io,GoogleAPI,MongoDb,Express,React,NodeJs.", ico:'https://github.com/barc-housing/Roomers'},
   
   
];

const svs=[sv1,sv2,sv3,sv4,sv5,sv6,sv7]
class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Cristian|Gonzalez"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Software Developer Based in Dallas TX</h2>
                        </header>
                        <p>My name is Cristian Gonzalez, and I am a Junior Web Developer. When I became 24 I thought I had life figured out, but it turned out that my enjoyment to learn every day took me to a different path. I went to a coding boot camp and from there on I have continued to find out, the more I learn, the more I don't know and that excitement is what keeps me smiling every day. </p>
                      
                        {svs.map(im =>{
                            return(
                                <img style={{maxWidth:'100px'}} src={im}/>
                            )
                        })}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description,ico }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            ico
                        }))} />

                        
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                    
                        <div className="row">
                    
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        2809 owen ln<br />
                                       Mesquite, TX 75150<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        469-989-2254
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">christiandevwork@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex