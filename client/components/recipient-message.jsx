import React from 'react';

function RecipientMessage(props) {
  return (

    <div className='container-flex'>
      <div className="row">
        <div className='sender-icon-container col-2'>
          <img src="/images/greenpowerranger.png" alt={props.imageUrl} className='card-img inbox-icon ' />
        </div>

        <div className='col-10 '>
          <div className='p-3'>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RecipientMessage;
