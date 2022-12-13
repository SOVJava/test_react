import './App.css';
import Navbar from "./componts/Navbar/Navbar";
import {Route, Routes, useParams} from "react-router-dom";
import News from "./componts/News/News";
import Music from "./componts/Music/Music";
import Settings from "./componts/Settings/Settings";
import DialogsContainer from "./componts/Dialogs/DialogsConteiner";
import {UsersContainer} from "./componts/Users/UsersConteiner";
import ProfileContainer from "./componts/Profile/ProfileConteiner";
import HeaderContainer from "./componts/Header/HeaderContainer";
import Login from "./componts/Login/Login";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    {/*<Route path='/profile/*' exec element={<ProfileContainer />}/>*/}
                    <Route path='profile' element={<ProfileContainer/>} >
                        <Route path=':userId' element={<ProfileContainer/>} />
                    </Route>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>

                    <Route path='/users' element={<UsersContainer/>}/>

                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
