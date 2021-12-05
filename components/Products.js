import AVENGERS_IMG from '../assests/images/avengers.jpg';
const Products = () => {
    return (
        <div className=" flex-centered column">

            <h1> Products</h1>
            <h2> Most Viewed Produts</h2>
            Show All Old New

            <div >
            <img src ={AVENGERS_IMG}style={{
                   
                    height: '25vh',
                    backgroundSize:'contain'
                }}></img>
                <img src ={AVENGERS_IMG}style={{
                   
                    height: '25vh',
                    backgroundSize:'contain'
                }}></img>
                <img src ={AVENGERS_IMG}style={{
                   
                    height: '25vh',
                    backgroundSize:'contain'
                }}></img>
                
                <img src ={AVENGERS_IMG}style={{
                   
                    height: '25vh',
                    backgroundSize:'contain'
                }}></img>
                </div>
        </div>
    );
}
export default Products;
