import { Route, Routes } from 'react-router-dom';
import './MyGuitarJourney.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from './views/authorized';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './views/ApplicationViews';
import { RandomChord } from './chord/RandomChord';



export const MyGuitarJourney = () => {
	return <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
          <NavBar/> <RandomChord/>
          <ApplicationViews/>
        </>
			</Authorized>


		} />
	</Routes>
}