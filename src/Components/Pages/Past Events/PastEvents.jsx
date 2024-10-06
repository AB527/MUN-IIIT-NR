import React from 'react'
import MainPage from './Main Page/MainPage'
import Committee from './Committee/Committee'
import Events_Grid from './Events_Grid/Events_Grid'
import './PastEvents.css'
import Testimonials from './Testimonials/Testimonials'
import Gallery from "./Gallery/Gallery"
import AboutGallery from './AboutGallery/AboutGallery'
import ContactUs from '../../ContactUs/ContactUs'
import Navbar2 from '../../Navbar2/Navbar2'
import GalleryData from '../../../data/GalleryImages'
import fetchAPI from '../../../Utilities/NetworkUtility'
import LoadingDots from '../../Load_Page/LoadingDots'

const PastEvents = () => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetchAPI("get-past-events", data => {
      setData(data)
    })
  }, []);
  return (
    <div className='past-events-main'>
      <Navbar2 currentSelected="past-events" /> 
      <MainPage />
      {
        !data.past_events && <LoadingDots />
      }
      {
        data.past_events && data.past_events.map((eve, index) => (
          <div key={index}>
            <AboutGallery
              head1={eve.title}
              text={eve.desc} />
            {eve.committees && <Committee />}
            {eve.event_grid && <Events_Grid />}
            <Gallery Gallery={eve.gallery} />
          </div>
        ))
      }
      <Testimonials data={data.testimonials} />
      <ContactUs />
    </div>
  )
}

export default PastEvents