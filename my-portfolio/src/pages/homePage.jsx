import React from 'react';
import NavigationHeader from '@component-library';

export const HomePage = () => {
  const textForBio = `I am a father, veteran, sports enthusiast and a Full Stack Software Engineer. I currently live
        in and work in the San Diego area.

        I am currently employed by Fuse Integration, a veteran owned company in San Diego that focuses on coming up innovative networking and communications solutions to improve the sharing of information.
        At Fuse, I plan and develop web based software to ensure the experience and expectations of our clients the warfighters are met.

        Please feel free to explore my portfolio.`;

  return (
    <>
      <NavigationHeader />
      <div className='home-page-parent'>
        <div className='home-page-img'></div>
        <div className='about-me-info add-break'>
          <h2>Welcome!</h2>
          {/* <br></br> */}
          <h4> {textForBio} </h4>
        </div>
      </div>
      <div className='add-break'>
        Foot
      </div>
    </>
  )
}
