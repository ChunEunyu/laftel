import { Outlet, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectToggle, setToggle, selectId } from './features/modal/animeModalSlice';
import AnimeModal from './pages/AnimeModal';
import { useEffect } from 'react';

function App() {
  const isOpen = useAppSelector(selectToggle);
  const id = useAppSelector(selectId);
  const [addedParams, setAddedParams] = useSearchParams();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const modalId = addedParams.get('modal');
    
    if (modalId && !isOpen) {
      dispatch(setToggle(true));

    } else if (!modalId && isOpen) {
      dispatch(setToggle(false));
    
    }
  }, [addedParams]);

  useEffect(() => {
    if (isOpen) {
      setAddedParams({ modal: id.toString() });
    } else {
      setAddedParams({}, { replace: false });
    }
  }, [isOpen, id]);

  
  
  return (
    <>
      <Header />
      <Outlet />
      { isOpen && <AnimeModal /> }
    </>
  )
}

export default App
