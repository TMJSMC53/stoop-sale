import img from '../assets/color_doors.png';

export default function Hero() {
  return (
    <div className="hero">
      <img
        style={{ margin: 'auto', width: '90vw' }}
        className="hero-img"
        src={img}
        alt="animated stoop image"
      />
      <div className="overlay"></div>
      <div className="stoop-sign top-left">
        <span className="accent">BK</span> Stoop Sale
      </div>
      <div className="date-time bottom-right">
        <p>Date: July 20th</p>
        <p>Time: 9am-3pm</p>
      </div>
    </div>
  );
}
