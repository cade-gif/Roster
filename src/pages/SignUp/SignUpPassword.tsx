import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/auth.css'
import { useSignUp } from './SignUpContext'

function SignUpPassword() {
  const { data, updateData } = useSignUp()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setError('')
    // Backend wiring (supabase.auth.signUp + creating the profile row) comes
    // later - this just confirms the flow visually for now.
    navigate('/home')
  }

  const inputType = showPassword ? 'text' : 'password'

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1 className="auth-title">Create a password</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type={inputType}
            placeholder="Password"
            value={data.password}
            onChange={(e) => updateData({ password: e.target.value })}
            required
          />
          <input
            className="auth-input"
            type={inputType}
            placeholder="Confirm password"
            value={data.confirmPassword}
            onChange={(e) => updateData({ confirmPassword: e.target.value })}
            required
          />

          <label className="auth-checkbox-row">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show password
          </label>

          {error && <div className="auth-error">{error}</div>}

          <div className="auth-actions">
            <button type="button" className="auth-btn-secondary" onClick={() => navigate('/signup/gender')}>
              Back
            </button>
            <button type="submit" className="auth-btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPassword
