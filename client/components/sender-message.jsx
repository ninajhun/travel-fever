import React from 'react';

function SenderMessage(props) {
  return (

    <div className="row no-gutters">

      <div className='col-10 '>
        <div className='p-3'>
          <p className='text-right pr-3'>{props.content}  </p>
        </div>
      </div>

      <div className='sender-icon-container col-2'>
        <img src={props.imageUrl}alt={props.imageUrl} className='card-img inbox-icon ' />
      </div>

    </div>

  );
}

export default SenderMessage;
