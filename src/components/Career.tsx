import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Test Engineer</h4>
                <h5>Tech Mahindra, Ahmedabad</h5>
              </div>
              <h3>2022 - NOW</h3>
            </div>
            <p>
              Working on Virtual Reality devices mobile, PC based and Android Apps.
              Flashing the device OS with python commands installing Android apk.
              Performed Smoke, Integration, Regression testing and Retesting. 
              Worked on Bug Reporting and VR log capturing tracking the status of fixed bugs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
