import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/auth.css'
import { useSignUp } from './SignUpContext'

function SignUpEmail() {
  const { data, updateData } = useSignUp()
  const navigate = useNavigate()

  function handleNext(e: FormEvent) {
    e.preventDefault()
    navigate('/signup/gender')
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1 className="auth-title">What's your email?</h1>

        <form className="auth-form" onSubmit={handleNext}>
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            required
          />

          <div className="auth-actions">
            <button type="button" className="auth-btn-secondary" onClick={() => navigate('/signup/name')}>
              Back
            </button>
            <button type="submit" className="auth-btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpEmail
