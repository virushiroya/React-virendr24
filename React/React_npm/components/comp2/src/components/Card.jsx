import React from 'react';

const CardWithImageExample = () => {
  return (

    <div className="relative flex justify-center items-center">

      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-row space-x-0 space-x-8 space-y-12 space-y-0 justify-center items-center mt-10">
          <div className="flex flex-col pb-5 mt-5 bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className=''>
              <img className='w-72' src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.517067783.1711263208&semt=ais_user_b" alt="" />
            </div>
            <div className="mt-10 font-semibold text-lg ml-28"><b>Console</b></div>
            <div className="font-semibold text-sm text-center mt-4">Lorem ipsum dolor sit amet consectetur <br></br>iusto accusamus nisi quibusdam voluptas.<br></br> tenetur, nam dolorum ipsam, quia nihil  <br></br>sed adipisci accusantium ea, iusto </div>
            <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border border-green-500 mt-4">Go Anywhere</button>

          </div>

          <div className="flex flex-col pb-5 mt-5 bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className=''>
              <img className='w-72' src="https://img.freepik.com/free-photo/school-playground-anime-style_23-2151125224.jpg?t=st=1715851645~exp=1715855245~hmac=dbe094efa643ac093d3877ebfeae7162f14b10290adc3fc01fc625991a818d15&w=996" alt="" />
            </div>
            <h1 className="mt-10 font-semibold text-lg ml-24"><b>Playground</b></h1>
            <div className="font-semibold text-sm text-center mt-4">Lorem ipsum dolor sit amet consectetur <br></br>iusto accusamus nisi quibusdam voluptas.<br></br> tenetur, nam dolorum ipsam, quia nihil  <br></br>sed adipisci accusantium ea, iusto </div>
            <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border border-green-500 mt-4">Go Anywhere</button>

          </div>



          <div className="flex flex-col pb-5 mt-5 bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className=''>
              <img className='w-72' src="https://img.freepik.com/free-photo/mysterious-fog-veils-dark-forest-wet-leaves-tranquil-beauty-nature-generated-by-artificial-intelligence_25030-64501.jpg?t=st=1715851686~exp=1715855286~hmac=3a7dd38d3eb102344004bbb25e6747965938029ba3ab88f555f0b9f1a364935b&w=996" alt="" />
            </div>
            <h1 className="mt-10 font-semibold text-lg ml-24"><b>Adventure</b></h1>
            <div className="font-semibold text-sm text-center mt-4">Lorem ipsum dolor sit amet consectetur <br></br>iusto accusamus nisi quibusdam voluptas.<br></br> tenetur, nam dolorum ipsam, quia nihil  <br></br>sed adipisci accusantium ea, iusto </div>
            <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border border-green-500 mt-4">Go Anywhere</button>

          </div>
        </div>
      </div>
    </div>



  )
}

export default CardWithImageExample