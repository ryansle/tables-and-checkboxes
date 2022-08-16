// Components
import Table from '../components/Table';

// Data
import data from '../data/data.json';

const Home = () => {
  return (
    <div className='m-10'>
      <Table data={data} />
    </div>
  );
};

export default Home;
