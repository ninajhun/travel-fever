import React from 'react';

function listing() {
  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img src="/images/tokyo.jpg" alt="tokyo" className='card-img'/>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Title</h5>
            <p className='card-text'>$100</p>
            {/* <i className="far fa-heart"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default listing;
