import MainContent from '../components/Main';
import Carrousel from '../components/carousel';
import Diviser from '../components/Diviser'


const Home = () => {
    return (
        <main className="content">
        <Diviser></Diviser>
        <Carrousel/>
        <Diviser></Diviser>
        <MainContent /> 
        <Diviser></Diviser>
      </main>
    );
  };



export default Home;