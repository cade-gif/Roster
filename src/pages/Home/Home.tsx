import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <div className="home-layout">
        <nav className="nav-col">
          <Link className="nav-brand" to="/home">
            Roster
          </Link>

          <div className="nav-list">
            <Link className="nav-item" to="/home">
              <span className="nav-icon">🏠</span> Home
            </Link>
            <Link className="nav-item" to="/followers">
              <span className="nav-icon">👥</span> Followers
            </Link>
            <a className="nav-item" href="#">
              <span className="nav-icon">🔔</span> Notifications
            </a>
            <a className="nav-item" href="#">
              <span className="nav-icon">✉️</span> Messages
            </a>
            <a className="nav-item" href="#">
              <span className="nav-icon">🔍</span> Search
            </a>
            <Link className="nav-item" to="/profile">
              <span className="nav-icon">👤</span> Profile
            </Link>
          </div>

          <button className="nav-post-btn" type="button">
            Post
          </button>

          <Link className="nav-user-card" to="/profile">
            <div className="nav-user-avatar">FN</div>
            <span className="nav-user-name">Full Name</span>
          </Link>
        </nav>

        <main className="feed-col">
          <section className="card">
            <h2 className="card-title">Feed</h2>
            <div className="placeholder-box">Posts feed will go here</div>
          </section>
        </main>

        <aside className="sidebar-col">
          <section className="card">
            <h2 className="card-title">Activities &amp; Events</h2>
            <div className="placeholder-box">Activity/event feed will go here</div>
          </section>
        </aside>
      </div>
    </div>
  )
}

export default Home
