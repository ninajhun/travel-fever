import React from 'react';

function RecipientMessage(props) {
  return (
    <div className="row no-gutters my-3">

      <div className='recipient-icon-container col-2 d-flex align-items-center justify-content-center'>
        <img src={props.imageUrl} alt={props.imageUrl} className='card-img inbox-icon ' />
      </div>

      <div className='col-10 d-flex align-items-center'>
        <div className='px-2 d-flex'>
          <p className='text-left pl-3 mb-0 flex-wrap'>{props.content} </p>
        </div>
      </div>

    </div>

  );
}

export default RecipientMessage;
