import React from 'react';

const CardWithImageExample = () => {
  return (

    <div className="relative flex justify-center items-center">

      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-row space-x-0 space-x-8 space-y-12 space-y-0 justify-center items-center mt-10">
          <div className="flex flex-col pb-5 mt-5 bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className=''>
              <img className='w-72' src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" alt="" />
            </div>
            <div className="mt-10 font-semibold text-lg ml-28"><b>Console</b></div>
            <div className="font-semibold text-sm text-center mt-4">Lorem ipsum dolor sit amet consectetur <br></br>iusto accusamus nisi quibusdam voluptas.<br></br> tenetur, nam dolorum ipsam, quia nihil  <br></br>sed adipisci accusantium ea, iusto </div>
            <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border border-green-500 mt-4">Go Anywhere</button>

          </div>

          <div className="flex flex-col pb-5 mt-5 bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className=''>
              <img className='w-72' src="https://imageio.forbes.com/specials-images/imageserve/64aceb40d0ea591fa2edfb01/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="" />
            </div>
            <h1 className="mt-10 font-semibold text-lg ml-24"><b>Playground</b></h1>
            <div className="font-semibold text-sm text-center mt-4">Lorem ipsum dolor sit amet consectetur <br></br>iusto accusamus nisi quibusdam voluptas.<br></br> tenetur, nam dolorum ipsam, quia nihil  <br></br>sed adipisci accusantium ea, iusto </div>
            <button className="text-green-500 px-4 w-40 py-2 ml-16 rounded-sm border border-green-500 mt-4">Go Anywhere</button>

          </div>



          <div className="flex flex-col pb-5 mt-5 bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className=''>
              <img className='w-72' src="https://t3.ftcdn.net/jpg/01/40/27/40/240_F_140274029_SluifTJK8Ln2VqHgfIEvxVLJyBt4f82x.jpg" alt="" />
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