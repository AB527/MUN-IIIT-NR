import React from "react"
import TeamHome from "./TeamHome/TeamHome"
import TeamMain from "./TeamMain/TeamMain"
import ContactUs from "../../ContactUs/ContactUs"
import Navbar2 from "../../../Components/Navbar2/Navbar2"
import './TeamPage.css'

import { useEffect, useState } from "react"
import fetchAPI from "../../../Utilities/NetworkUtility"

export default function TeamPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchAPI("get-team", data => {
            setData(data)
        })
    }, []);
    return (
        <div className="team-page">
            <Navbar2 currentSelected="team" />
            <TeamMain data={data} />
            <ContactUs />
        </div>
    )
}