import { useState } from 'react'
import { Link } from 'react-router-dom'
import ManageModal from '../../components/ManageModal'
import './Profile.css'

const friends = [
  { name: 'Felix M.', meta: 'Georgetown Crew' },
  { name: 'Mia R.', meta: 'Andover Basketball' },
  { name: 'Abi T.', meta: 'Georgetown SFS' },
]

const suggestedToFollow = [
  { name: 'Jordan P.', meta: 'Coxswain, GU' },
  { name: 'Sam K.', meta: 'Basketball, GU' },
  { name: 'Riley N.', meta: 'Crew, Andover' },
  { name: 'Casey L.', meta: 'Rowing, GU' },
]

const achievements = [
  { icon: '🏆', label: 'Team MVP' },
  { icon: '🥇', label: 'Regional Champ' },
  { icon: '⛵', label: 'Captain' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
}

function Profile() {
  const [activityModalOpen, setActivityModalOpen] = useState(false)
  const [postsModalOpen, setPostsModalOpen] = useState(false)
  const [achievementsModalOpen, setAchievementsModalOpen] = useState(false)

  return (
    <div className="profile-page">
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand-title" to="/home">
            Roster
          </Link>
          <div className="topbar-spacer" />
          <input className="search-input" type="text" placeholder="Search" />
        </div>
      </header>

      <main className="profile-main">
        <div className="col-left">
          <section className="card profile-bio-card">
            <div className="diamond-wrap">
              <div className="diamond-shape">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9z" />
                </svg>
              </div>
            </div>
            <div className="profile-bio-info">
              <h1 className="hero-name">Full Name</h1>
              <p className="hero-tagline">Position • Sport • Class Year</p>
              <p className="hero-bio">Short bio goes here.</p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <strong>0</strong> followers
                </div>
                <div className="hero-stat">
                  <strong>0</strong> following
                </div>
              </div>
              <div className="hero-actions">
                <button className="btn btn-primary" type="button">
                  Edit Profile
                </button>
              </div>
            </div>
          </section>

          <section className="card achievements-card">
            <div className="card-header-row">
              <h2 className="card-title">Athletic Achievements</h2>
              <button
                className="card-add-btn"
                type="button"
                aria-label="Add or edit achievements"
                onClick={() => setAchievementsModalOpen(true)}
              >
                +
              </button>
            </div>
            <div className="achievements-row">
              {achievements.map((a) => (
                <div className="achievement-badge" key={a.label}>
                  <div className="achievement-icon">{a.icon}</div>
                  <span className="achievement-label">{a.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="card posts-card">
            <div className="card-header-row">
              <h2 className="card-title">Posts</h2>
              <button
                className="card-add-btn"
                type="button"
                aria-label="Add or edit posts"
                onClick={() => setPostsModalOpen(true)}
              >
                +
              </button>
            </div>
            <div className="placeholder-box">Posts will go here</div>
          </section>

          <section className="card suggested-card">
            <h2 className="card-title">Suggested to Follow</h2>
            <p className="card-subtitle">Algorithm coming soon</p>
            <div className="suggested-shelf">
              {suggestedToFollow.map((s) => (
                <div className="suggested-item" key={s.name}>
                  <div className="avatar-circle">{initials(s.name)}</div>
                  <div className="friend-name">{s.name}</div>
                  <div className="friend-meta">{s.meta}</div>
                  <button className="suggested-follow-btn" type="button">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-right">
          <section className="card activity-card">
            <div className="card-header-row">
              <h2 className="card-title">Activity</h2>
              <button
                className="card-add-btn"
                type="button"
                aria-label="Add or edit activities"
                onClick={() => setActivityModalOpen(true)}
              >
                +
              </button>
            </div>
            <div className="placeholder-box">Activity feed will go here</div>
          </section>

          <section className="card friends-card">
            <h2 className="card-title">Friends With</h2>
            <div className="friend-list">
              {friends.map((f) => (
                <div className="friend-row" key={f.name}>
                  <div className="avatar-circle">{initials(f.name)}</div>
                  <div>
                    <div className="friend-name">{f.name}</div>
                    <div className="friend-meta">{f.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {activityModalOpen && (
        <ManageModal label="Activity" onClose={() => setActivityModalOpen(false)} />
      )}
      {postsModalOpen && <ManageModal label="Post" onClose={() => setPostsModalOpen(false)} />}
      {achievementsModalOpen && (
        <ManageModal label="Achievement" onClose={() => setAchievementsModalOpen(false)} />
      )}
    </div>
  )
}

export default Profile
