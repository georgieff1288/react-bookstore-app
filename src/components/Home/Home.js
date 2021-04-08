import './Home.css';
import BestSellers from '../Book/BestSellers/BestSellers';
import Greeting from './Greeting/Greeting';

const Home = () => {

    return(
        <div className="home">
            <BestSellers/>
            <Greeting/>
        </div>
    );
};

export default Home;