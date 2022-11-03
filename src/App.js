import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout/Layout';
import Star from './components/pages/Star'
import Visualization from './components/pages/Visualization';
import FullstackList from './components/pages/FullstackList';
import Tools from './components/pages/Tools';

function App() {
  const routesElement = useRoutes(routes);

  return (
    <div className='App'>
      {routesElement}
    </div>
  );
}

export default App;




    // <Routes>
    //   <Route path='/' element={<Layout />}>
    //     <Route path="/Stared" element={<Star />} ></Route>
    //     <Route path="/Visualization" element={<Visualization />} ></Route>
    //     <Route path="/Fullstack" element={<FullstackList />} ></Route>
    //     <Route path="/Tools" element={<Tools />} ></Route>
    //   </Route>
    // </Routes>
