import "./desktop.css";
import "./mobile.css";
import "./tab.css";
import "./main.css";
const Certificate = () => {
  return (
    <div className="subtract-parent">
      <img className="subtract-icon" alt="" src="/certificate_imgs/subtract.svg" />
      <img className="frame-item" alt="" src="/certificate_imgs/rectangle-97@2x.png" />
      <img className="mobile-logo" alt="" src="/certificate_imgs/Rectangle 98.png" />  
      <img className="tablet-logo" alt="" src="/certificate_imgs/Rectangle 97.png" />  

      <div className="shagun-public-charitable1">
        SHAGUN PUBLIC CHARITABLE TRUST
      </div>
      <b className="certificate-of-appreciation1">
        Certificate of Appreciation
      </b>
      <div className="is-awarded-to1">is Awarded to</div>
      <div className="donors-name-1">
        <span className="span1">_______________</span>
        <span className="donors-name1">DONOR’s NAME</span>
        <span className="span2">{`_______________`}</span>
      </div>
      <div className="in-appreciation-for-container1">
        <p className="in-appreciation-for1">{`In appreciation for your generous donation to the Shagun Public Charitable Trust, `}</p>
        <p className="we-express-our1">{`we express our sincere gratitude for your contribution `}</p>
        <p className="in-the-support1">in the support of our organization.</p>
        
      </div>
      <div className="line-parent">
        <img className="frame-inner" alt="" />
        <span className="span3">{`_____________`}</span>
        <span className="span4">{`______`}</span>
        <div className="date-wrapper">
         <div className="date">DATE</div>
        </div>
      </div>
      <div className="line-group">
        <img className="line-icon" alt="" />
        <span className="span3">{`_____________`}</span>
        <span className="span5">{`______`}</span>
          <div className="signature-wrapper">
        <div className="signature">SIGNATURE</div>
        </div>
      </div>
      <img className="rectangle-icon" alt="" src="/certificate_imgs/rectangle-96@2x.png" />
    </div>
  );
};

export default Certificate;
