import './Description.css';
import RubySlippers from './Clipart/RubySlippers';
import ClothsRack from './Clipart/ClothsRack';
import { useRef } from 'react';
import useMediaQuery from './useMediaQuery';

const Description: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    padding: '1rem 0',
  };

  const clothsRackStyle: React.CSSProperties = {
    flex: 1,
    height: '25vh',
    width: '75%',
  };

  const descriptionStyle: React.CSSProperties = {
    flex: 1,
    alignContent: 'center',
    textAlign: 'center',
    padding: isMobile ? '0.5rem' : '1rem', // Example of adjusting padding based on screen size
  };

  const rubySlippersStyle: React.CSSProperties = {
    flex: 1,
    height: '25vh',
    width: '50%',
    margin: 'auto',
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        onClick={(event) => {
          const dialog = dialogRef.current!;
          const rect = dialog.getBoundingClientRect();
          const isInDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width;
          if (!isInDialog) {
            dialog.close();
          }
        }}
      >
        <button
          style={{ position: 'absolute', top: 0, right: 0 }}
          autoFocus
          onClick={() => dialogRef.current!.close()}
        >
          X
        </button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6051.497081472563!2d-73.99728080000001!3d40.679509200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a585c181957%3A0x50e694b8c1ef75b2!2s2nd%20Pl%20%26%20Court%20St%2C%20Brooklyn%2C%20NY%2011231!5e0!3m2!1sen!2sus!4v1720750225052!5m2!1sen!2sus"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </dialog>
      <div style={containerStyle}>
        <ClothsRack
          className="close-rack-mobile"
          height={'25vh'}
          style={clothsRackStyle}
        />
        <p className="description" style={descriptionStyle}>
          Join us at the corner of
          <a
            className="address"
            href="#"
            onClick={() => dialogRef.current!.showModal()}
          >
            2nd Place & Court St
          </a>
          for a lively stoop sale! Enjoy mingling with neighbors, browsing
          unique items, and finding your next favorite treasure.
        </p>
        <RubySlippers height={'25vh'} style={rubySlippersStyle} />
      </div>
    </>
  );
};

export default Description;

