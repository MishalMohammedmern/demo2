import React from 'react'
import Nav1 from '../../components/Headers/Nav1'
import Nav2 from '../../components/Headers/Nav2'
import Footer from '../../components/footer/Footer'
import './home.css'
import Project from '../../components/div1/Project'
import Featured from '../../components/featured/Featured'

function Home() {
  return (
    <div>
        <div>
            <Nav1/>
        </div>
        <div>
            <Nav2/>
        </div>

        <div className='w-full h-968 bg-black pb-20'>
          <div className=' w-4/5 h-768 ml-44'><img className='w-full h-full ' src="/images/pumb.png" alt=""  /></div>
          <div className=' ml-30% w-849 h-12 home3 flex flex-row'><input className='font-noto text-lg bg-black rounded-md text-buttoncolor w-full h-full border-buttoncolor pl-4' type="text"  placeholder='Search a Product...|'/>
          <img className=' w-6 h-6 relative right-8 mt-4  ' src="/images/Search.png" alt=""  /></div>
          <div className=' w-518 h-28 home ml-24'><p className=' text-white font-noto text-4xl font-bold tracking-widest '>Illuminate your space with style and efficiency</p></div>
          <div className=' w-518 h-28  ml-24 home1'><p className=' text-buttoncolor font-noto text-base font-normal m-0 '>We believe in the power of brands to create credibility. That’s why we partner with the best to bring you top-quality products. Trust us to deliver excellence, every time.
          Shop with confidence, knowing you’re getting the best.</p></div>
          <button  className='font-noto text-sm text-color1 border-color1 rounded-md w-64 h-12 bg-black relative bottom-72 ml-24'>Learn More about Project</button>
          <div className='flex flex-row ml-55% home1 '>
            <div className='w-215 h-337 border-buttoncolor rounded-md  '><img className=' w-full h-full m-0   ' src="/images/img1.png" alt="" /></div>
            <div className='w-215 h-337 border-buttoncolor rounded-md ml-5 '><img className=' w-full h-full' src="/images/img2.png" alt="" /></div>
            <div className='w-215 h-337 border-buttoncolor rounded-md ml-5 '><img className=' w-full h-full' src="/images/img3.png" alt="" /></div>
          </div>
          <div className=' w-full flex flex-row justify-center home4'>
            <img className='w-28 '  src="/images/white.png" alt=""  />
            <img className='w-28 ml-5  ' src="/images/yellow.png" alt=""  />
            <img className='w-28 ml-5 ' src="/images/white.png" alt=""  />
          </div>

        </div>
        <div className=' bg-firstbody w-full flex justify-center'>
          <div className=' pb-12'>
          <h3 className='mt-20 text-textblack text-4xl font-noto font-bold text-center'>Browse a Product by Brand</h3>
          <div className='flex justify-center'>
          <h3 className='mt-0 text-base text-gray1 w-702 font-normal font-noto text-center leading-12 tracking-wider'>We believe in the power of brands to create credibility. That’s why we partner with the best to bring you top-quality products. Trust us to deliver excellence, every time.Shop Now with confidence, knowing you’re getting the best.</h3></div>
          <div className=' w-1719  border-4 border-slate-500 mb-10'>
            <img className=' w-full h-460' src="/images/box.png" alt=""/>
            <div className='flex flex-row relative bottom-96 '>
              <div>
                <div className='w-40 h-9 ml-32 mt-6'><img className='w-full h-full' src="/images/techno.png" alt="" /></div>
                <div className=' w-80 mt-14 ml-12'><img className='w-full' src="/images/ver.png" alt=""  /></div>
              </div>
              <div className='flex '>
                <div className='h-32 relative ml-10  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='w-40 h-9 ml-32 mt-6'><img className='w-full h-full' src="/images/euchips.png" alt="" /></div>
                <div className=' w-80 mt-14 ml-12'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-32 relative ml-10  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                  <div className='ltech1 relative bottom-16 ml-9'>
                <div className='w-40 h-9 ml-32 mt-6 relative top-16'><img className='w-full h-full' src="/images/ltech.png" alt="" /></div>
                </div>
                <div className=' w-80  ml-12 relative bottom-16 left-6'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-32 relative ml-10  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='w-40 h-9 ml-32 mt-6'><img className='w-full h-full' src="/images/tridonic.png" alt="" /></div>
                <div className=' w-80 mt-14 ml-12'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
            </div>
            <div className='flex flex-row relative bottom-96 '>
              <div>
                <div className='w-40 h-9 ml-32 mt-6'><img className='w-full h-full' src="/images/techno.png" alt="" /></div>
              </div>
              <div className='flex '>
                <div className='h-32 relative ml-132  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='w-40 h-9 ml-32 mt-6'><img className='w-full h-full' src="/images/euchips.png" alt="" /></div>
                </div>
              </div>
              <div className='flex '>
                <div className='h-32 relative ml-132  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                  <div className=' '>
                  <div className='w-40 h-9 ml-32 mt-6'><img className='w-full h-full' src="/images/ltech1.png" alt="" /></div>
                </div>
          </div>
              </div>
              <div className='flex '>
                <div className='h-32 relative ml-40  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='w-40 h-9 ml-32 mt-6'><img className='w-full h-full' src="/images/tridonic.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          </div>


        </div>
        <div className=' relative bottom-72 w-full flex justify-center'>
          <Project/>
        </div>
       <div className=' relative bottom-24'>
        <Featured/>
       </div>

       <div className=' bg-firstbody flex justify-center '>
        <div>
       <h3 className='mt-16 text-textblack text-4xl font-noto font-bold text-center'>Product Categories</h3>
          <div className='flex justify-center'>
          <h3 className='mt-0 text-base text-gray1 w-702 font-normal font-noto text-center leading-12 tracking-wider'>Discover our wide range of lighting fixture categories and find the perfect addition to your space. From modern to classic, we have a style to suit every taste.Shop now and brighten up your home with our stunning lighting fixtures!</h3></div>
          <div className=' w-1719  border-4 border-slate-500 mb-10 mt-10'>
            <img className=' w-full h-56' src="/images/box.png" alt=""/>
            <div className='flex flex-row relative bottom-48 '>
              <div>
                <div className=' ml-14 mt-3'>Downlights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Spot Lights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Modular Lights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Recessed Linear Lights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Magnetic Track Lights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Linear Pendant Lights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Cabinet Lights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Track Lights</div>
                <div className=' w-44 mt-8 ml-4'><img className='w-full' src="/images/ver.png" alt=""  /></div></div>
              </div>
            </div>
            <div className='flex flex-row relative bottom-44 '>
              <div>
                <div className=' ml-14 mt-3 w-40'>Mirror Lights</div>
              
              </div>
              <div className='flex '>
                <div className='h-24 relative   bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Outdoor Lights</div>
                </div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-8  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Industrial Lights</div>
                </div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-6  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Decorative Lights</div>
                </div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-7  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Facad Lights</div>
                </div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-7  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-3  w-40 ltech relative bottom-6 text-buttoncolor flex justify-center items-center'>Strip & Neon Lights</div>
                </div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-7  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Accessories</div>
                </div>
              </div>
              <div className='flex '>
                <div className='h-24 relative ml-7  bottom-7'>
                  <img className='h-full' src="/images/hor.png" alt="" />
                </div>
                <div>
                <div className='ml-7 mt-3 w-40'>Street Lights</div>
                </div>
              </div>
            </div>
          </div>
          <div className=' relative bottom-24'>
          <Project/>
          </div>
       </div>
      
       </div>
       <div className=' mt-103 mb-20'>
        <Featured/>
       </div>
      <div className=' bg-firstbody'>
       <div className='  w-full flex justify-center '>
        <div className=''>
        <h3 className='mt-20 text-textblack text-4xl font-noto font-bold text-center'>Application Areas</h3>
          <div className='flex justify-center'>
          <h3 className='mt-0 text-base text-gray1 w-600 font-normal font-noto text-center leading-12 tracking-wider'>Light up any space with our versatile lighting fixtures. From the living room to the bedroom and beyond, our fixtures are perfect for any area of your home.Shop now and discover the perfect lighting solution for every room!</h3></div>
          <div className='flex mt-10'>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto text-textblack'>Kitchen</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Bedroom</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Hall</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 box text-buttoncolor'>Office</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Street</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Cabinets</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Racks</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Garden</button>


          </div>
          <div className='flex mt-5'>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto text-textblack'>Pathway</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Parking Areas</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Supermarket</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Classroom</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Washroom</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Showroom</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Dinning</button>
            <button className=' w-48 h-24 border-2 border-gray1 rounded-md text-sm font-noto ml-5 text-textblack'>Living Room</button>


          </div>
          <div className='mt-103'>
            <Project/>
          </div>
          
        </div>
          
       </div>
       <div className='flex'>
            <div className='flex mt-24 ml-103'>
              <div>
                <div className=' w-415 h-224'>
                  <img className='w-full h-full' src="/images/image1.png" alt=""  />
                </div>
                <div className=' w-415 h-506 mt-5'>
                  <img className=' w-full h-full' src="/images/image2.png" alt=""  />
                </div>
              </div>
              <div className='ml-5'>
                
                <div className=' w-415 h-506 '>
                  <img className=' w-full h-full' src="/images/image3.png" alt=""  />
                </div>
                <div className=' w-415 h-224 mt-5'>
                  <img className='w-full h-full' src="/images/image4.png" alt=""  />
                </div>
              </div>

            </div>
            <div className='box w-849 rounded-md h-540 mt-48 ml-7'>
              <h3 className='text-4xl font-noto font-bold ml-103 mt-16 text-buttoncolor'>About US</h3>
              <p className=' w-650 ml-103 text-buttoncolor text1 text-base font-noto font-normal'>Tecnolight is one of the world’s largest online retailer of modern and contemporary lighting and furnishings, as well as a popular destination for modern design fans. Tecnolight has spent years establishing itself as the leading online and offline supplier of high-end designer products with a fresh and contemporary appearance. Tecnolight’s range of over 18,000 modern lights includes everything from legendary mid-century modern lighting to cutting-edge contemporary lighting for today’s homes.</p>
              <button className='box w-267 h-12 rounded-md text-buttoncolor mt-14 ml-103'>Learn More About US</button>

            </div>

          </div>
          <div className='w-full flex justify-center  mt-88'>
            <img className='w-90% shadow-md rounded-sm' src="/images/image5.png" alt=""  />
          </div>
          <div className='mt-103'>
            <Project/>
          </div>
          <div className=' w-full flex flex-col items-center'>
            <h3 className='mt-103 text-textblack text-4xl font-noto font-bold text-center'>Testimonials</h3>
            <p className=' w-731 text-center text1 font-noto font-normal text-gray1 mt-0'>Don't just take our word for it - see what our satisfied customers have to say about our lighting fixtures! From exceptional quality to unbeatable style, our fixtures have made a big impact in homes across the country. Read our testimonials and see for yourself!"</p>
            <div className='flex justify-center'>
              <div>
                <img className=' w-702 h-265' src="/images/des1.png" alt=""  />
                <p className=' w-650 text1 font-noto font-normal text-gray1 relative bottom-60 ml-10'>Don't just take our word for it - see what our satisfied customers have to say about our lighting fixtures! From exceptional quality to unbeatable style, our fixtures have made a big impact in homes across the country. Read our testimonials and see for yourself!"</p>
              </div>
              <div>
                <img className=' w-702 h-265' src="/images/des2.png" alt=""  />
                <p className=' w-650 text1 font-noto font-normal text-gray1 relative bottom-60 ml-10'>Don't just take our word for it - see what our satisfied customers have to say about our lighting fixtures! From exceptional quality to unbeatable style, our fixtures have made a big impact in homes across the country. Read our testimonials and see for yourself!"</p>

              </div>
            </div>
            <div className='flex justify-center m-0 relative bottom-20'>
              <div className='flex'>
                <div>
                  <h5 className='m-0 text-lg font-noto text-textblack'>Santosh Khan</h5>
                  <h5 className='text-sm font-noto text-textblack mt-3'>Sale Executive</h5>
                </div>
                <div className=' w-32 h-32 bg-div rounded-md ml-5'></div>
              </div>
              <div className='flex ml-5'>
              <div className=' w-32 h-32 bg-div rounded-md '></div>
                <div className='ml-5'>
                  <h5 className='m-0 text-lg font-noto text-textblack'>Santosh Khan</h5>
                  <h5 className='text-sm font-noto text-textblack mt-3'>Sale Executive</h5>
                </div>
              </div>

            </div>
          </div>
          <div className='w-full flex-col flex justify-center relative bottom-12 items-center'>
            <div>
          <h3 className='mt-103 text-textblack text-4xl font-noto font-bold text-center'>News, Blog & Articles</h3>
            <p className=' w-731 text-center text1 font-noto font-normal text-gray1 mt-0'>Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!</p>
           
           </div>
           <div className='flex mt-5'>
            <div className=' w-415 h-518 '>
               <div className=' h-60 w-373 box ml-5'></div>
               <h3 className='ext-lg font-noto text-textblack ml-5'>News, Blog & Articles</h3>
               <p className='text-sm font-noto text-gray1 w-360 tracking-wide leading-6 ml-5'>Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!</p>
               <p className='text-sm font-noto text-gray1 m-0 ml-5'>Read Full Articles</p>
               <img className='w-40 ml-5' src="/images/under.png" alt=""  />
            </div>
            <div className=' w-415 h-518 bg-buttoncolor ml-5'>
               <div className=' h-60 w-373 box ml-5'></div>
               <h3 className='ext-lg font-noto text-textblack ml-5'>News, Blog & Articles</h3>
               <p className='text-sm font-noto text-gray1 w-360 tracking-wide leading-6 ml-5'>Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!</p>
               <p className='text-sm font-noto text-gray1 m-0 ml-5'>Read Full Articles</p>
               <img className='w-40 ml-5' src="/images/under.png" alt=""  />
            </div>
            <div className=' w-415 h-518  ml-5'>
               <div className=' h-60 w-373 box ml-5'></div>
               <h3 className='ext-lg font-noto text-textblack ml-5'>News, Blog & Articles</h3>
               <p className='text-sm font-noto text-gray1 w-360 tracking-wide leading-6 ml-5'>Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!</p>
               <p className='text-sm font-noto text-gray1 m-0 ml-5'>Read Full Articles</p>
               <img className='w-40 ml-5' src="/images/under.png" alt=""  />
            </div>
            <div className=' w-415 h-518  ml-5'>
               <div className=' h-60 w-373 box ml-5'></div>
               <h3 className='ext-lg font-noto text-textblack ml-5'>News, Blog & Articles</h3>
               <p className='text-sm font-noto text-gray1 w-360 tracking-wide leading-6 ml-5'>Stay up-to-date with the latest trends and news in the world of lighting fixtures with our informative blog and articles. From design tips to product reviews, we’ve got you covered. Check out our latest posts and discover something new!</p>
               <p className='text-sm font-noto text-gray1 m-0 ml-5'>Read Full Articles</p>
               <img className='w-40 ml-5' src="/images/under.png" alt=""  />
            </div>
           </div>
           <div className='w-full relative top-36'>
            <Project/>
           </div>
          </div>
       </div>




        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home