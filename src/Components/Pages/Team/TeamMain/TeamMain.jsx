import React from "react";
import "./TeamMain.css";
import TeamMember from "../TeamMemberCard/TeamMember";
import TeamData from '../../../../data/TeamData';
import TeamHome from "../TeamHome/TeamHome";
import Team_MUN_2023 from "../../../../Assets/Team/Team_Mun_2023.png"
import LoadingDots from "../../../Load_Page/LoadingDots";

export default function TeamMain({data}) {
    const [selectedYear, setSelectedYear] = React.useState(2024);
    const currentYear = new Date().getFullYear();
    const [yearData, setYearData] = React.useState(null);
    const getYearData = year => data.length>0?data.filter(x=>x.year==year.toString())[0].data:null;

    React.useEffect(()=>{
        console.log(data)
        setYearData(getYearData(selectedYear))
    },[data])
    
    function nextYear() {
        if (selectedYear < currentYear) {
            setSelectedYear(selectedYear + 1);
            setYearData(getYearData(selectedYear+1))
        }
    }

    function previousYear() {
        if (selectedYear > 2023) {
            setSelectedYear(selectedYear - 1);
            setYearData(getYearData(selectedYear-1))
        }
    }

    return (
        <div>
            <TeamHome year={selectedYear} previousYear={previousYear} nextYear={nextYear} />
            {
                yearData==null && <LoadingDots />
            }
            <div className="team-main">
                {/* LEADS Section */}
                {/* <p>{yearData.length.toString()}</p> */}
                {yearData && yearData.Generals && (
                    <div className="category">
                        <div className="team-heading">LEADS</div>
                        <div className="team" style={{ flexDirection: "column" }}>
                            {yearData.Generals.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={`${selectedYear}/${member.img}`}
                                    linkedin={member.linkedin}
                                    insta={member.insta}
                                />
                            ))}
                        </div>
                    </div>
                )}
                
                {/* CORE TEAM Section */}
                {yearData && yearData.core && yearData.core.length > 0 && (
                    <div className="category">
                        <div className="team-heading">CORE TEAM</div>
                        <div className="team">
                            {yearData.core.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={`${selectedYear}/${member.img}`}
                                    linkedin={member.linkedin}
                                />
                            ))}
                        </div>
                    </div>
                )}
                
                {/* SENIOR TEAM Section */}
                {yearData && yearData.senior_team && yearData.senior_team.length > 0 && (
                    <div className="category">
                        <div className="team-heading">SENIOR TEAM</div>
                        <div className="team">
                            {yearData.senior_team.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={`${selectedYear}/${member.img}`}
                                    linkedin={member.linkedin}
                                />
                            ))}
                        </div>
                    </div>
                )}
                
                {/* WEBSITE TEAM Section */}
                {yearData && yearData.Website_team && yearData.Website_team.length > 0 && (
                    <div className="category">
                        <div className="team-heading">Website Team</div>
                        <div className="team">
                            {yearData.Website_team.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    post={member.post}
                                    image={`${selectedYear}/${member.img}`}
                                    linkedin={member.linkedin}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/*Team*/}
                {selectedYear===2023 && (
                    <div className="category">
                        <div className="team-heading">Our Team</div>
                        <div className="team">
                       <img src={Team_MUN_2023} alt="" className="team-image-mun"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
