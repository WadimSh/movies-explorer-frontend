import React from 'react';

import Icon from '../../images/fail-icon.svg';
import './InfoTooltip.css';

function InfoTooltip(props) {

  const closeClickOverlay = (e) => {
    if (e.target.classList.contains('popup')) {
      props.onClose()
    }
  }

  React.useEffect(() => {
    const closeClickEsc = (e) => {
      if (e.key === "Escape") {
        props.onClose()
      }
    }
    document.addEventListener('keyup', closeClickEsc);
    return () => {
      document.removeEventListener('keyup', closeClickEsc);
    }
  }, []);

  return (
    <div className={`infotoo__popup popup ${props.isOpen ? 'popup_opened' : ''}`} onClick={closeClickOverlay}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={props.onClose} />
        <img className="popup__image" src={Icon} />
        <p className="popup__text">
          {props.status}
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip;