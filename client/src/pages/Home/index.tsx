import Footer from '@/components/Footer';
import AnimeSlider from './components/AnimeSlider';
import MainCarousels from './components/MainCarousels';
import DayButtonGroup from './components/DayButtonGroup';
import { useEffect, useState } from 'react';

const Home = () => {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/daily/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      console.log('records', records);
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length]);

  return (
    <div>
      <MainCarousels />
      <div className='pl-8 pr-8 pt-5 pb-5'>
        <DayButtonGroup isHomePage={true} />
        <AnimeSlider />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
