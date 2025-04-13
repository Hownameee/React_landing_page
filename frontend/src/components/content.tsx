import fire from "./img/fire.svg";
import truck from "./img/truck.svg";
import battery from "./img/battery.svg";

import Form from './form'
import FeatureBlock from "./feature_block";

export default function Content() {
  return (
    <div className="content">
      
      <Form title='Handcrafted, home-made masterpieces' />
      
      <div className="feature">
        <FeatureBlock
          src={fire}
          title="Premium Materials"
          text="Our trombones use the shiniest brass which is sourced
                    locally. This will increase the longevity of your purchase."
        />
        <FeatureBlock
          src={truck}
          title="Fast Shipping"
          text="We make sure you recieve your trombone as soon as we have
                finished making it. We also provide free returns if you are not
                satisfied."
        />
        <FeatureBlock
          src={battery}
          title="Quality Assurance"
          text="For every purchase you make, we will ensure there are no damages
                or faults and we will check and test the pitch of your
                instrument."
        />
      </div>
      <div className="video">
        <iframe
          allowFullScreen
          className="video-frame"
          src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="option">
        <div className="option-block">
          <h2 className="option-title">Tenor Trombone</h2>
          <div className="option-price">$600</div>
          <ul className="option-desc">
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum.</li>
          </ul>
          <a href="#" className="option-select">
            select
          </a>
        </div>
        <div className="option-block">
          <h2 className="option-title">Bass Trombone</h2>
          <div className="option-price">$900</div>
          <ul className="option-desc">
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum.</li>
          </ul>
          <a href="#" className="option-select">
            select
          </a>
        </div>
        <div className="option-block">
          <h2 className="option-title">Valve Trombone</h2>
          <div className="option-price">$1200</div>
          <ul className="option-desc">
            <li>Plays similar to a Trumpet.</li>
            <li>Great for Jazz Bands.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum.</li>
          </ul>
          <a href="#" className="option-select">
            select
          </a>
        </div>
      </div>
    </div>
  );
}
