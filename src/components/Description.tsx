import './Description.css';
import RubySlippers from './Clipart/RubySlippers';
import ClothsRack from './Clipart/ClothsRack';

import { useRef } from 'react';

export default function Description() {
  const dialogRef = useRef<HTMLDialogElement>(null);

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
      <div style={{ display: 'flex', flexDirection: 'row', padding: '1rem 0' }}>
        <ClothsRack height={'25vh'} style={{ flex: 1 }} />
        <p
          className="description"
          style={{ flex: 1, alignContent: 'center', textAlign: 'center' }}
        >
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
        <RubySlippers height={'25vh'} style={{ flex: 1 }} />
      </div>
    </>
  );
}
