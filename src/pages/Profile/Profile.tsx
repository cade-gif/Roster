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

function Profile() {
  return (
    <div className="profile-page">
      <header className="topbar">
        <span className="topbar-brand">Roster</span>
        <div className="topbar-items">
          <span className="topbar-pill">Photos</span>
          <span className="topbar-pill">School</span>
          <span className="topbar-pill">Team</span>
          <span className="topbar-pill">Achievements</span>
        </div>
        <div className="topbar-avatar">CR</div>
      </header>

      <main className="profile-main">
        <section className="card hero">
          <div className="diamond-wrap">
            <div className="diamond-shape">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9z" />
              </svg>
            </div>
          </div>

          <div className="hero-info">
            <h1 className="hero-name">Full Name</h1>
            <p className="hero-tagline">Position • Sport • Class Year</p>
            <p className="hero-location">City, State</p>
            <div className="hero-badge">🎓 School / Team Name</div>
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
              <button className="btn btn-secondary" type="button">
                Add Section
              </button>
            </div>
          </div>
        </section>

        <div className="profile-grid">
          <div className="profile-main-col">
            <section className="card">
              <h2 className="card-title">Activity</h2>
              <p className="activity-meta">
                0 followers · <a href="#">Show all</a>
              </p>
              <div className="placeholder-box">Posts will go here</div>
            </section>

            <section className="card">
              <h2 className="card-title">Athletic Achievements</h2>
              <div className="achievements-row">
                {achievements.map((a) => (
                  <div className="achievement-badge" key={a.label}>
                    <div className="achievement-icon">{a.icon}</div>
                    <span className="achievement-label">{a.label}</span>
                  </div>
                ))}
                <div className="achievement-badge">
                  <div className="achievement-icon" style={{ background: 'transparent', border: '1px dashed var(--color-border)', color: 'var(--color-text-muted)' }}>
                    +
                  </div>
                  <span className="achievement-label">Add</span>
                </div>
              </div>
            </section>

            <section className="card">
              <h2 className="card-title">Suggested to Follow</h2>
              <p className="card-subtitle">Algorithm coming soon</p>
              <div className="suggested-row">
                {suggestedToFollow.map((s) => (
                  <div className="suggested-card" key={s.name}>
                    <div className="avatar-circle">
                      {s.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')}
                    </div>
                    <div>
                      <div className="friend-name">{s.name}</div>
                      <div className="friend-meta">{s.meta}</div>
                    </div>
                    <button className="suggested-follow-btn" type="button">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="profile-side-col">
            <section className="card">
              <h2 className="card-title">Friends</h2>
              <div className="friend-list">
                {friends.map((f) => (
                  <div className="friend-row" key={f.name}>
                    <div className="avatar-circle">
                      {f.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')}
                    </div>
                    <div>
                      <div className="friend-name">{f.name}</div>
                      <div className="friend-meta">{f.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default Profile
