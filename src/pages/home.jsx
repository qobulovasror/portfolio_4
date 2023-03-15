import TextWriter from '../component/textWriter'
const Home = () => {
    const textArr = [
        'Web developer',
        'Freelancer',
    ]
  return (
    <>
      <div className="home">
        <div className="content">
            <div className="name">
                <h2>Qobulov <span>Asror</span></h2>
            </div>
            <div className="title">
                <span>
                    I am a {" "}<TextWriter speed={80} textArr={textArr} cursor={"|"}/>
                </span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
