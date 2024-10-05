import React from "react"
import './TeamHome.css'

export default function TeamHome(props) {


    return (
        <div className="team-home">
            <div className="team-building">
            </div>
            <div className="team-head">
                SECRETERIAT
                <div className="year">
                    <svg width="148" height="116" viewBox="0 0 148 116" fill="none" xmlns="http://www.w3.org/2000/svg" id="left" onClick={props.previousYear}>
                        <path d="M82.6921 58.0034L107.235 81.9269L100.223 88.7622L68.668 58.0034L100.223 27.2441L107.235 34.0795L82.6921 58.0034Z" fill="white" fill-opacity="0.4" />
                        <path d="M48.2779 58.003L70.3458 79.4517L64.0408 85.5799L35.668 58.003L64.0408 30.4258L70.3458 36.554L48.2779 58.003Z" fill="white" fill-opacity="0.4" />
                    </svg>

                    <div className="year-num">{props.year}</div>

                    <svg width="148" height="116" viewBox="0 0 148 116" fill="none" xmlns="http://www.w3.org/2000/svg" id="right" onClick={props.nextYear} >
                        <path d="M65.3079 57.9966L40.7651 34.0731L47.7772 27.2378L79.332 57.9966L47.7772 88.7559L40.7651 81.9205L65.3079 57.9966Z" fill="white" fill-opacity="0.4" />
                        <path d="M99.7221 57.997L77.6542 36.5483L83.9592 30.4201L112.332 57.997L83.9592 85.5742L77.6542 79.446L99.7221 57.997Z" fill="white" fill-opacity="0.4" />
                    </svg>
                </div>
            </div>
        </div>
    )
}