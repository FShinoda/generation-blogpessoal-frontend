import React from 'react'

function Grid() {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-1 bg-red-600 h-screen'>
            Servidores
        </div>

        <div className='col-span-3 bg-orange-600 h-screen'>
            Canais
        </div>

        <div className='col-span-6 bg-yellow-500 h-screen'>
            Feed
        </div>

        <div className='col-span-2 bg-green-500 h-screen'>
            Participantes
        </div>
    </div>
  )
}

export default Grid