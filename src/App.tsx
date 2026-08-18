import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Followers from './pages/Followers/Followers'
import { SignUpProvider } from './pages/SignUp/SignUpContext'
import SignUpName from './pages/SignUp/SignUpName'
import SignUpEmail from './pages/SignUp/SignUpEmail'
import SignUpGender from './pages/SignUp/SignUpGender'
import SignUpPassword from './pages/SignUp/SignUpPassword'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />

        <Route
          path="/signup"
          element={
            <SignUpProvider>
              <Outlet />
            </SignUpProvider>
          }
        >
          <Route path="name" element={<SignUpName />} />
          <Route path="email" element={<SignUpEmail />} />
          <Route path="gender" element={<SignUpGender />} />
          <Route path="password" element={<SignUpPassword />} />
        </Route>

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
