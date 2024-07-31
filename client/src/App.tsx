import { Outlet, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import { useAppSelector } from './app/hooks';
import { selectId, selectToggle } from './features/modal/animeModalSlice';
import AnimeModal from './pages/AnimeModal';
import { useEffect } from 'react';

function App() {
  const isOpen = useAppSelector(selectToggle);
  const id = useAppSelector(selectId);
  const [addedParams, setAddedParams] = useSearchParams();

  useEffect(() => {
    if (isOpen) {
      setAddedParams({ modal: id.toString() });
    } else {
      setAddedParams({});
    }
  }, [isOpen, id])

  return (
    <>
      <Header />
      <Outlet />
      { isOpen && <AnimeModal /> }
    </>
  )
}

export default App
