import React from 'react';

function RecipientMessage(props) {
  return (
    <div className="row no-gutters ">
      <div className='recipient-icon-container col-2'>
        <img src={props.imageUrl} alt={props.imageUrl} className='card-img inbox-icon ' />
      </div>

      <div className='col-10 '>
        <div className='p-3'>
          <p className=''>{props.content}</p>
        </div>
      </div>
    </div>

  );
}

export default RecipientMessage;
