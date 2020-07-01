import React from 'react';

function SenderMessage(props) {
  return (

    <div className="row no-gutters">

      <div className='col-10 '>
        <div className='px-2'>
          <p className='text-right pr-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   </p>
        </div>
      </div>

      <div className='sender-icon-container col-2'>
        <img src="/images/timd.png" alt={props.imageUrl} className='card-img inbox-icon ' />
      </div>

    </div>

  );
}

export default SenderMessage;
