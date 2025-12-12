import MainContent from '../components/Main';
import Carrousel from '../components/carousel';
import Diviser from '../components/Diviser'


const Home = () => {
    return (
        <>
        <Diviser></Diviser>
        <Carrousel/>
        <Diviser></Diviser>
        <MainContent /> 
        <Diviser></Diviser>
      </>
    );
  };



export default Home;