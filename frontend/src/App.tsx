import './App.css';

import StudentsList from './components/Students/ListStudents';
import AddStudents from './components/Students/AddStudents';
import Header from './components/Header';

import { useAppSelector } from './hook';

function App() {

  const pageView = useAppSelector(state => state.pageView.pageView);
  return (
    <>
      <Header/>
      {pageView === 'listStudents' && <StudentsList /> }
      {pageView === 'addStudents' && <AddStudents/> }
      
    </>
  );
}

export default App;
