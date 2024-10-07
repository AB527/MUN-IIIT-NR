import React, { useState } from 'react';
import './IOTW.css';

const IOTW = ({ data = [] }) => {

    return (
        <div className="iotw-container" id="IOTW">
            <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3500" data-aos-delay="300">Issue of the Week</h1>
            <div className='flex-container'>
                {
                    data.slice(0, 4).map((post, i) => (
                        <div className='iotw-block' key={i}>
                            <a href={post.link} target='_blank'>
                                <img src={`/IOTW/${post.img}.png`} alt={`${post.img}`}></img>
                            </a>
                        </div>
                    ))
                }
                <div className='iotw-block iotw-block-ls'>
                    <a href='https://www.instagram.com/mun_iiitnr/' target='_blank'>
                        <img src={`/IOTW/${data[4].img}.png`} alt={`${data[4].img}`}></img>
                        <p>Click to Explore</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default IOTW;
