import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DELETE from './pags/DELETA/DELETE';
import Home from './pags/Home';

export default function Navigation() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/DELETA/DELETE/:id' element={<DELETE/>}/>
            </Routes>
        </BrowserRouter>
    )
}