import React from 'react';

function inboxCard(props) {
  return (
    <div>
      <div className='card inbox'>
        <div className='d-flex'>
          <div className='inbox-icon-container'>
            <img src={props.imageUrl} alt={props.imageUrl} className='card-img inbox-icon' />
          </div>
          <div className='col-md-8 d-flex align-items-center'>
            <div className='card-body p-3'>
              <h5 className='card-title mt-3'>{props.username}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="inbox-border"></div>
      </div>
    </div>
  );
}

export default inboxCard;