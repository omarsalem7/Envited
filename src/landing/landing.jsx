import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './landing.css';

const Landing = () => {
  return (
    <div className="land">
      <div>
        <h1>Imagine if</h1>
        <h1 className="land-gradient">Snapchat</h1>
        <h1> had events.</h1>
        <p className="land-text">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div className="land-img-container">
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T073232Z&X-Amz-Expires=86400&X-Amz-Signature=f6a31fe99896a5ffb2fe19935e8decb672172ab4deba832bbf0eb87907aef101&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
          alt="landing"
        />
      </div>
      <Button>
        <Link to="/create">🎉 Create my event</Link>
      </Button>
    </div>
  );
};

export default Landing;
