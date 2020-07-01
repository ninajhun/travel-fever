import React from 'react';

function RecipientMessage(props) {
  return (
    <div className="row no-gutters">
      <div className='recipient-icon-container col-2'>
        <img src="/images/greenpowerranger.png" alt={props.imageUrl} className='card-img inbox-icon ' />
      </div>

      <div className='col-10 '>
        <div className='p-3'>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
        </div>
      </div>
    </div>

  );
}

export default RecipientMessage;
