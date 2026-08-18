import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/auth.css'
import { useSignUp } from './SignUpContext'

function SignUpName() {
  const { data, updateData } = useSignUp()
  const navigate = useNavigate()

  function handleNext(e: FormEvent) {
    e.preventDefault()
    navigate('/signup/email')
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1 className="auth-title">What's your name?</h1>

        <form className="auth-form" onSubmit={handleNext}>
          <input
            className="auth-input"
            type="text"
            placeholder="First name"
            value={data.firstName}
            onChange={(e) => updateData({ firstName: e.target.value })}
            required
          />
          <input
            className="auth-input"
            type="text"
            placeholder="Last name"
            value={data.lastName}
            onChange={(e) => updateData({ lastName: e.target.value })}
            required
          />

          <div className="auth-actions">
            <button type="button" className="auth-btn-secondary" onClick={() => navigate('/login')}>
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

export default SignUpName
