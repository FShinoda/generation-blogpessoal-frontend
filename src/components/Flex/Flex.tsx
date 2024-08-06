import React from 'react';

function Flex() {
  return (
    <div className='border-4 border-[#3c4c41] m-8 p-8 flex items-center justify-between'>
        <div className='w-[250px]'>
            <h1 className='text-2xl'>Chris Cornell</h1>
            <p>No one sings like you anymore</p>
        </div>

        <div className='w-[250px]'>
            <img src="https://img.apmcdn.org/8011968c3ee90d57ef87bd5b99173cc0e8a0c908/uncropped/6bfba4-20200508-chris-cornell-performing-in-2014.jpg" alt="Chris Cornell" />
        </div>
    </div>
  )
};

export default Flex;