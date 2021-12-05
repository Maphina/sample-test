import ABOUT_IMG from '../assests/images/about.jpg';
const About = () => {
    return (


        <div className=" flex">

            <div>
                <img src={ABOUT_IMG} style={{
                   
                    height: '50vh',
                    width: '20vw',
                    backgroundSize:'contain'
                }}></img>
            </div>
            <div className="flex column">
                <h1>ABOUT</h1>
                We're Passionate About Delivering quality products.
            </div>


        </div >


    );
}

export default About;
