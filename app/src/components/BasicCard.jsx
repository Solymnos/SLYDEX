import React from 'react'

const BasicCard = () => {
  return (
    <div className='h-[575px] w-[400px] flex flex-col justify-between  rounded-2xl box-content'   >
      <div className='relative w-[400px] h-[500px] rounded-t-2xl rounded-b-md overflow-hidden' style={{
    background: "radial-gradient(circle at center, #FFD700 0%, #000000 100%)"
  }} >
        <div className='absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-50' style={{backgroundImage: " url('https://grainy-gradients.vercel.app/noise.svg')", filter: "contrast(180%) brightness(1200%)"}}/>
        <div className='flex flex-col w-[400px] h-[500px] relative z-10 p-8 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-t-2xl rounded-b-md gap-2'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='staa text-5xl text-white'>Decay</h1>
            <img className='h-10' src='/img/Basic.png' />
          </div>
          
          <img className='h-full w-full object-cover' src='/img/Decay.jpg' style={{ clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)', }}/>
        </div>
      </div>
      <div className='relative w-[400px] h-[70px] rounded-b-2xl rounded-t-md overflow-hidden ' >
        <div className='absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-50' style={{backgroundImage: " url('https://grainy-gradients.vercel.app/noise.svg')", filter: "contrast(180%) brightness(1200%)"}}/>
        <div className='w-[400px] h-[70px] relative z-10 p-6 bg-white/10 backdrop-blur-xl rounded-b-2xl rounded-t-md flex flex-row items-center justify-between'>
          <img className='h-10' src='/img/FRA.png'/>
          <h1 className='staa text-2xl text-white'>Depuis 2024</h1>
          <h1 className='staa text-2xl text-white'>LOL</h1>
        </div>
      </div>
    </div>
  )
}

export default BasicCard

/**
  
  <div className="relative w-[400px] h-[500px] rounded-xl overflow-hidden">

  <div 
    className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-50"
    style={{
      backgroundImage: " url('https://grainy-gradients.vercel.app/noise.svg')",
      filter: "contrast(180%) brightness(1200%)",
    }}
  />

  <div className="relative z-10 p-6 bg-white/10  backdrop-blur-xl rounded-xl text-white">
    <h2 className="text-xl font-bold">Cybersecurity</h2>
    <p className="text-sm text-white/70">Cutting-edge on-chain security technology</p>
  </div>
</div>

*/