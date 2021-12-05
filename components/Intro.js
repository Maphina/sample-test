import INTRO_IMG from '../assests/images/intro.jpg';
const Intro = () => {
    return (
        <div className=" flex">

            <div className="flex column">
                <h1> Intro </h1>
                <h2> We Deal With Best Books For The Best Readers</h2>
                <div style={{width:'50vw'}}>
                    <p>
                        Book Market adds splash to readers to study and inhance .
                        Book Marketadds splash to the grayscale photos.
                        Brings new life to old photos by reliable method for colorizing grayscale image using various algorithms.</p>
                    <p>"Our mission here at Book Market is to get you through those moments that you always wanted to live for."</p>
                </div>
            </div>
            <div>
                <img src={INTRO_IMG} style={{
                    height: '55vh',
                    width: '20vw',
                    backgroundSize: 'cover'
                }}></img>
            </div>
        </div >
    );
}

export default Intro;
