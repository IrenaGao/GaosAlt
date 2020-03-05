import React from 'react';
import Hero from '../components/MiscHero';
import LCLPoster from '../assets/lclposter.png';

import Row from 'react-bootstrap/Row';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            width: 120,
            border: 0,
            backgroundColor: color,
            height: 5
        }}
    />
);

function MiscPage(props) {
    return (
        <div>
            <Hero/>
            <div className="py-1">
                <ColoredLine color='#FCE29F' />
            </div>
            <Row className='justify-content-center mt-0 pt-0'>
                {/* <div className="mySlides fade"> */}
                    <h3 className='mt-0 pt-0 pb-3' style={{color:'#AED9E2'}}> Life Changing Labs Club Festival Poster</h3>
            </Row>
            <Row className='justify-content-center mt-0 ml-5 pt-3'>
                <img className="col-md-6" style={{height:'auto', width:'100'}} src={LCLPoster}/>
                {/* </div> */}
            </Row>
            {/* <div className="py-1">
                <ColoredLine color='#FCE29F' />
            </div>
            <Row className='justify-content-center mt-0 pt-0'>
                <h3 className='mt-0 pt-0 pb-3' style={{color:'#AED9E2'}}><a href="https://medium.com/@ijg24/chime-song-request-board-asking-chimemasters-to-play-your-favorite-song-bae8eb4d7a55">ChimeMasters Song Request</a></h3>
            </Row>
            <div className="py-1">
                <ColoredLine color='#FCE29F' />
            </div>
            <Row className='justify-content-center mt-0 pt-0'>
                <h3 className='mt-0 pt-0 pb-3' style={{color:'#AED9E2'}}><a href="https://docs.google.com/document/d/1w9j7VWhZOFf-A_uvo12sfQpOU6QpkTFMVh-EagMimLA/edit?usp=sharing">Roblox Design Challenge</a></h3>
            </Row> */}
        </div>
    );
}

export default MiscPage;