import React from 'react';

const Spinner = () => {
    return <div class="d-flex justify-content-center align-items-center">
    <div class="spinner-border" style={{width: '5rem', height: '5rem', color: 'purple', margin: '350px' }} role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
}

export default Spinner;