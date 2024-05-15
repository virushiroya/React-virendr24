import React from 'react';

const CardWithImageExample = () => {
  return (

    <div className="relative flex justify-center items-center">

      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-row space-x-0 space-x-8 space-y-12 space-y-0 justify-center items-center">
          <div className="flex flex-col pb-4 mt-5 bg-white rounded-lg shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className='mb-3 rounded-xl'>
              <img className='w-80' src="https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-yellow-hipster-sweater-jeans_158538-19973.jpg" alt="" />
            </div>
            <div className='ml-28'>
              <div className="font-semibold text-lg"><b>Alice Mayer</b></div>
              <div className="text-sm text-blue-600 font-light w-60 w-auto mt-3 ml-2"><b>Photographer</b></div>
            </div>
            <div className="font-semibold text-sm text-center mt-3">Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit. In maxime, ipsam <br></br>iusto accusamus nisi quibusdam voluptas.</div>
            <div className='flex justify-center space-x-4 mt-3'>
            <img className='w-8 rounded-full' src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg" alt="" />
              <img className='size-8 rounded-full' src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" alt="" />
              <img className='size-8 rounded-full' src="https://i.pinimg.com/736x/05/0a/65/050a6577c4da2965f8bb78222c579df4.jpg" alt="" />
            </div>
          </div>

          <div className="flex flex-col pl-4 pr-4 pb-4 rounded-lg bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <img className="w-80 rounded-md ml-2" src="https://i1.adis.ws/i/canon/get-inspired-food-photography-tips-1-f9283f1f-d5f8-11ea-bea9-f8bc127793a9?qlt=80&w=1920&sm=aspect&aspect=16:9&scaleFit=poi&poi=0.20190540313720703,0.3765632234151173,0.125,0.15698587127158556&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)" alt="" />
            <div className='ml-4'>
              <div className='flex mt-4'>
              <img className='size-5' src="https://png.pngtree.com/png-clipart/20240309/original/pngtree-pink-spoon-and-fork-png-file-png-image_14548987.png" alt="" />
              <div className='text-pink-600 ml-1'>Culinary</div>
              </div>
              <div className="mt-3 font-semibold text-xl">Cheat day inspirations</div>
              <div className="text-sm font-light w-60 w-auto mt-2"><b>Lorem ipsum dolor sit consectetur adipisicing <br></br> Lorem ipsum dolor sit amet consectetur.<br></br>Lorem, ipsum dolor sit amet consectetur adipisicing<br></br> elit. Adipisci, quod!</b></div>

              <button className="bg-pink-800 text-white px-4 py-2 rounded-sm w-32 border border-slate-100 shadow-xl mt-4">Button</button>
            </div>

          </div>

          <div className="flex flex-col pb-3 rounded-lg bg-white shadow-xl translate-x-4 translate-y-4  w-auto">
            <img className="w-96 rounded-md" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/female-sitting-in-sunlight-indoors-1296-728-header.jpg?w=1155&h=1528" alt="" />
            <div className='ml-36'>
              <div className="mt-3 font-semibold text-lg"><b>Billy Cullen</b></div>
              <div className="text-sm font-light w-60 w-auto mt-2 ml-3">Web devloper</div>
            </div>
            <div className="my-2 text-center text-sm mt-3">Lorem ipsum dolor sit, amet consectetur<br></br>quisquam dolorem quam itaque ex quia!<br></br>Lorem ipsum dolor sit amet consectetur adipisicing <br></br>elit. Odio libero magnam voluptatem natus</div>

            <div className='flex justify-center space-x-4 mt-3'>
              <img className='size-8 rounded-full' src="https://i.pinimg.com/736x/05/0a/65/050a6577c4da2965f8bb78222c579df4.jpg" alt="" />
              <img className='size-8 rounded-full' src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" alt="" />
              <img className='size-6 rounded-full mt-1' src="https://i.pinimg.com/736x/64/ab/f8/64abf8f70c55f0a124f61ae808492550.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default CardWithImageExample