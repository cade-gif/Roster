import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1 className="auth-title">
          Log into <span className="brand-title">Roster</span>
        </h1>

        <form className="auth-form">
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="auth-btn-primary" type="submit">
            Log in
          </button>
        </form>

        <a className="auth-link" href="#">
          Forgot password?
        </a>

        <div className="auth-secondary-row">
          Don't have an account? <Link to="/signup/name">Create account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
