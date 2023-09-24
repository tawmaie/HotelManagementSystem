import React from 'react';
import '../style/background-video.css';

export default function BackgroundVideo() {
    const videoBg = '../assets/BgVideo.mp4'

    return (
        <div className="background-video">
            <video loop autoplay="" muted>
                <source src="../assets/BgVideo.mp4" type="video/mp4" />
            </video>
            <div className="content" style={{textAlign: 'center'}}>
                <h1>Introducing</h1>
                <h1>Noppawut</h1>
                <h1>Eiamwat</h1>
                <p>Web Developer</p>
            </div>
        </div>
    );
};