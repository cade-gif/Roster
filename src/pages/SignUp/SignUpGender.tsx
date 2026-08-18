import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/auth.css'
import { useSignUp } from './SignUpContext'

function SignUpGender() {
  const { data, updateData } = useSignUp()
  const navigate = useNavigate()

  function handleNext(e: FormEvent) {
    e.preventDefault()
    navigate('/signup/password')
  }

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1 className="auth-title">What's your gender?</h1>

        <form className="auth-form" onSubmit={handleNext}>
          <select
            className="auth-select"
            value={data.gender}
            onChange={(e) => updateData({ gender: e.target.value })}
            required
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>

          <div className="auth-actions">
            <button type="button" className="auth-btn-secondary" onClick={() => navigate('/signup/email')}>
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

export default SignUpGender
