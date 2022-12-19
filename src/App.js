import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"

import Main from './pages/Main';
import SearchPage from './pages/SearchPage';
import Menu from './components/Menu';
import MenuDetail from './components/MenuDetail';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='menu' element={<Main/>}>
        <Route path=':menuNames'>
          <Route index element={<Menu/>}/>
          <Route path=":id" element={<MenuDetail/>}/>
        </Route>
        <Route path='search'>
          <Route path=":query" element={<SearchPage/>}/>
        </Route>
      </Route>
      <Route path="*" element={<h2> not found</h2>} />  
    </Routes>
    </>
  );
}

export default App;
