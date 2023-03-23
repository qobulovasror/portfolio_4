const Resume = () => {
  return (
    <>
      <div className="resume">
        <div className="container">
          <div className="resumeTitle row between">
            <h3>Resume.</h3>
            <i class="bx bxs-id-card"></i>
          </div>
          <hr />
          <div className="row around">
            <div className="exper">
              <h3 className="t-center">EXPERIENCE</h3>
              <ul className="column">
                <li className="t-center">
                  <h4>Software injener</h4>
                  <span>SAMARQAND STADE UNIVERSITET, SAMARQAND, UZB</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero cum autem nam similique iure. Adipisci perferendis
                    aperiam doloremque ratione vel.
                  </p>
                </li>
                {/* <li className="t-center">
                  <h4>Web developer</h4>
                  <span>Exis development</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero cum autem nam similique iure. Adipisci perferendis
                    aperiam doloremque ratione vel.
                  </p>
                </li> */}
              </ul>
            </div>
            <div className="educa">
              <h3 className="t-center">EDUCATION</h3>
              <ul className="column">
                <li className="t-center">
                  <h4>Software injener</h4>
                  <span>SAMARQAND STADE UNIVERSITET, SAMARQAND, UZB</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero cum autem nam similique iure. Adipisci perferendis
                    aperiam doloremque ratione vel.
                  </p>
                </li>
                <li className="t-center">
                  <h4>Frontend developer</h4>
                  <span>WEPRO IT ACADEMY, SAMARQAND, UZB</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero cum autem nam similique iure. Adipisci perferendis
                    aperiam doloremque ratione vel.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <hr />
          <div className="skill">
            <h3 className="t-center">SKILLS</h3>
            <div className="row between">
              <ul className="box column">
                <h4 className="t-center">Frontend skills</h4>
                <li className="row between">
                      <h3>HTML</h3><span>✔</span>
                </li>
                <li className="row between">
                      <h3>CSS</h3><span>✔</span>
                </li>
                <li className="row between">
                      <h3>JAVASCRIPT</h3><span>✔</span>
                </li>
                <li className="row between">
                      <h3>REACT</h3><span>✔</span>
                </li>
              </ul>
              <ul className="box column">
                <h4 className="t-center">Backend skills</h4>
                <li className="row between">
                      <h3>NODE JS</h3><span>✔</span>
                </li>
                <li className="row between">
                      <h3>EXPRESS JS</h3><span>✔</span>
                </li>
                <li className="row between">
                      <h3>MONGODB</h3><span>✔</span>
                </li>
                <li className="row between">
                      <h3>MySQL</h3><span>✔</span>
                </li>
              </ul>
              <ul className="box column">
                <h4 className="t-center">Mobile skills</h4>
                <li className="row between">
                      <h3>REACT NATIVE</h3><span>✔</span>
                </li>
                <li className="row between">
                      <h3>JAVA</h3><span>✔</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
