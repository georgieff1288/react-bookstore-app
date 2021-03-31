import './Home.css';
import BestSellers from './BestSellers/BestSellers';
import Greeting from './Greeting/Greeting';


const Home = () => {
    const Username = ''
    return(
        <div className="home">
            <BestSellers/>
            <Greeting>{Username}</Greeting>
            
        </div>
    );
};

export default Home;