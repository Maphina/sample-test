import BANNER_IMG from '../assests/images/banner-bg.jpg';
const Banner = () => {
    return (

        <div className="background">
            <div style={{ height: '85vh' }}>
                <img alt="background" src={BANNER_IMG} style={{
                    width: '100vw',
                    height: '85vh',
                    position: 'absolute',
                    overflow: 'hidden',
                    top: '0',
                    zIndex: '-1'
                }}></img>
            </div>
        </div>
    );
}

export default Banner;
