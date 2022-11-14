import './App.css';
import Header from "./componts/Header/Header";
import Navbar from "./componts/Navbar/Navbar";
import Profile from "./componts/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./componts/News/News";
import Music from "./componts/Music/Music";
import Settings from "./componts/Settings/Settings";
import DialogsContainer, {SuperDialogsContainer} from "./componts/Dialogs/DialogsConteiner";

const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes >
                        <Route path='/profile' exec element={<Profile />}/>
                        <Route path='/dialogs/*' element={<SuperDialogsContainer />}/>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
