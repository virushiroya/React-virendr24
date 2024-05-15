import React from 'react';

const CardWithImageExample = () => {
  return (

    <div className="relative flex justify-center items-center">

      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-row space-x-0 space-x-8 space-y-12 space-y-0 justify-center items-center mt-10">
          <div className="flex flex-col pl-5 pr-5 pb-5 mt-5 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <div className='mb-10'>
              <img className='w-72 ml-7' src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg" alt="" />
            </div>
            <div className="font-semibold text-sm text-center">Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit. In maxime, ipsam <br></br>iusto accusamus nisi quibusdam voluptas. Eligendi<br></br> tenetur, nam dolorum ipsam, quia nihil dolorem fugiat <br></br>sed adipisci accusantium ea, iusto aspernatur</div>
          </div>

          <div className="flex flex-col pb-3 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4  w-auto">
            <img className="w-80 rounded-md" src="https://thumbs.dreamstime.com/b/young-attractive-asian-female-student-using-laptop-computer-smiling-excited-cafe-coffee-shop-happy-success-woman-worker-139053709.jpg" alt="" />
            <div className='ml-28'>
              <div className="mt-3 font-semibold text-lg"><b>Billy Cullen</b></div>
              <div className="text-sm font-light w-60 w-auto mt-2 ml-3">Web devloper</div>
            </div>
            <div className="my-2 text-center text-sm">Lorem ipsum dolor sit, amet consectetur<br></br>quisquam dolorem quam itaque ex quia!</div>

            <div className='flex justify-center space-x-4'>
              <img className='size-8 rounded-full' src="https://i.pinimg.com/736x/05/0a/65/050a6577c4da2965f8bb78222c579df4.jpg" alt="" />
              <img className='size-8 rounded-full' src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" alt="" />
              <img className='size-6 rounded-full mt-1' src="https://i.pinimg.com/736x/64/ab/f8/64abf8f70c55f0a124f61ae808492550.jpg" alt="" />
            </div>
          </div>

          <div className="flex flex-col pb-4 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 w-auto">
            <img className="w-80 rounded-md" src="https://blog.hubspot.com/hs-fs/hubfs/image-file-extensions.webp?width=610&height=406&name=image-file-extensions.webp" alt="" />
            <div className='ml-4'>
              <div className="mt-3 font-semibold text-xl">Card title</div>
              <div className="text-sm font-light w-60 w-auto mt-2"><b>Lorem ipsum dolor sit consectetur adipisicing <br></br> Lorem ipsum dolor sit amet consectetur.</b></div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-sm w-32 border border-slate-100 shadow-xl mt-4">Button</button>
            </div>

          </div>
        </div>
      </div>
    </div>



  )
}

export default CardWithImageExample