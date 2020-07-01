import React from 'react';

function SenderMessage(props) {
  return (

    <div className='container-flex'>
      <div className="row">

        <div className='col-10 '>
          <div className='p-3'>
            <p className=' text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
          </div>
        </div>

        <div className='sender-icon-container col-2'>
          <img src="/images/timd.png" alt={props.imageUrl} className='card-img inbox-icon ' />
        </div>

      </div>
    </div>

  );
}

export default SenderMessage;
