import { Link } from 'react-router-dom';
import './styles.css';

function Welcome() {
  return (
    <div className="welcome-page">
      <div className="video-row">
        <video className="background-video" autoPlay loop muted>
          <source src="/videos/doggybkg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="welcome-button-row">
        <Link to="/catalog">
          <button className="button">View Our Dogs</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
