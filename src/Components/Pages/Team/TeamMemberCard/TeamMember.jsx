import React from "react";
import ReactCardFlip from 'react-card-flip';
import './TeamMember.css';

class TeamMember extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    // Access props directly from this.props
    const { image, name, post, linkedin, insta } = this.props;

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div onClick={this.handleClick} className="team-container-front" style={{ width: '300px', height: '400px', cursor: "pointer", background: 'linear-gradient(180deg, rgba(138, 0, 215, 0.5) 0%, rgba(73, 0, 113, 0) 114.66%)' }}>
          <div className="team-img">
            <img src={`/Team/${image}`} alt={`${name}`} />
          </div>
          <div className="team-detail">
            <h4>{name}</h4>
            <h6>{post}</h6>
          </div>
        </div>

        {/* Back of the card */}
        <div onClick={this.handleClick} className="team-container-back" style={{ width: '300px', height: '400px', cursor: "pointer", background: 'linear-gradient(180deg, rgba(138, 0, 215, 0.5) 0%, rgba(73, 0, 113, 0) 114.66%)' }}>
          <div className="team-socials">
            <a href={linkedin}>
              <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 0.952637H42.5C43.8808 0.952637 45 2.08288 45 3.47709V43.8683C45 45.2625 43.8808 46.3927 42.5 46.3927H2.5C1.11927 46.3927 0 45.2625 0 43.8683V3.47709C0 2.08288 1.11927 0.952637 2.5 0.952637ZM4.99999 6.00154V41.3438H40V6.00154H4.99999ZM11.25 16.0993C9.17892 16.0993 7.49999 14.404 7.49999 12.3127C7.49999 10.2213 9.17892 8.52599 11.25 8.52599C13.321 8.52599 15 10.2213 15 12.3127C15 14.404 13.321 16.0993 11.25 16.0993ZM8.74999 18.6238H13.75V37.5572H8.74999V18.6238ZM22.5 19.708C23.961 18.2838 25.6638 17.3616 27.5 17.3616C32.6775 17.3616 36.25 21.5999 36.25 26.8282V37.5572H31.25V26.8282C31.25 24.3884 29.2913 22.4105 26.875 22.4105C24.4588 22.4105 22.5 24.3884 22.5 26.8282V37.5572H17.5V18.6238H22.5V19.708Z" fill="white" />
              </svg>
            </a>
            <a href={insta}>
              <svg width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.543 4.99463H15.4596C9.36149 4.99463 4.41797 9.65833 4.41797 15.4113V36.2446C4.41797 41.9976 9.36149 46.6613 15.4596 46.6613H37.543C43.6411 46.6613 48.5846 41.9976 48.5846 36.2446V15.4113C48.5846 9.65833 43.6411 4.99463 37.543 4.99463Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35.2391 24.6056C35.5116 26.3395 35.1977 28.1102 34.342 29.6661C33.4863 31.2219 32.1323 32.4836 30.4727 33.2716C28.8131 34.0596 26.9323 34.3339 25.098 34.0555C23.2636 33.777 21.569 32.9599 20.2552 31.7205C18.9414 30.4811 18.0753 28.8824 17.7802 27.1519C17.485 25.4213 17.7757 23.6471 18.6111 22.0814C19.4464 20.5157 20.7838 19.2384 22.4329 18.4311C24.0821 17.6238 25.9591 17.3277 27.797 17.5848C29.6717 17.847 31.4073 18.6712 32.7474 19.9354C34.0875 21.1997 34.9611 22.837 35.2391 24.6056Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38.6445 14.3696H38.6666" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="team-detail">
            <h4>{name}</h4>
            <h6>{post}</h6>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default TeamMember;
