import React from "react"
import CommitteeContainer from "./CommitteeContainer.jsx"
import CommitteeData from "../../../../data/committee.js"
import './Committee.css'

export default function Committee() {
    return (
        <div className="committee-main">
            <div className="left-arrow">&lt;</div>
            <div className="committee">
                <div className="head">COMMITTEES</div>
                <div className="committee-contain">
                    {CommitteeData.map((item, index) => {
                        return <CommitteeContainer name={item.name} key={index} img={item.img} />
                    })}
                </div>
            </div>
            <div className="right-arrow">&gt;</div>
        </div>
    )
}