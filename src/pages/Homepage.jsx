import React, { useContext, useEffect, useState } from 'react';
import { ACTIONS, AppContext } from '../context/Context';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HomepageSkeleton } from '../components/HomepageSkeleton';
import { ErrorMsg } from '../components/ErrorMsg';

export const Homepage = () => {
  const userOptions = [
    {header: 'Aesthetic Friendly Mode', text: 'Find your preferred mode be it dark or light mode for a pleasant experience', imgPath: 'image2'},
    {header: 'Simple Shopping System', text: 'Easily navigate through our hassle free website and find your needs', imgPath: 'image1'},
    {header: 'Quick Delivery', text: 'Have your wishlist delivered to you within minutes of placing an order', imgPath: 'image3'},
  ]
  const { state, dispatch, handleActiveStates } = useContext(AppContext);
  const userImage = ['BG2', 'BG1', 'BG3'];
  const [selectedImage, setSelectImage] = useState(0);
  const categoriesUrl = 'https://api.escuelajs.co/api/v1/categories';
  const handleActivePanel = (index) => {
    setSelectImage(index)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(categoriesUrl)
        dispatch({type: ACTIONS.FETCH_CATEGORIES_DATA, data: response.data})
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <main className='p-[1rem] flex flex-col min-lg:px-[7rem] min-[700px]:px-[3rem] min-xl:px-[10rem] py-[6rem] gap-[4rem]'>
      <section className='grid gap-[4rem] min-xl:grid-cols-2'>
        <div className='flex flex-col gap-[2rem] items-center'>
          <div className="animate-bounce bg-purple w-[3rem] h-[3rem] rounded-full"></div>
          <h2 className='text-[4rem] leading-[3.5rem] font-CormorantU font-extrabold text-center'>YOUR ONE STOP <span className='text-purple'>SHOP </span></h2>
          <p className='text-gray-400 font-CormorantU text-2xl text-center'>
            Shopping has never been easier when you shop with shopflix.Have your wishes delivered to your doorstep from the comfort of your abode.
          </p>
          <div className='flex gap-[2rem] items-center text-white'>
            <Link to='products'>
              <button onClick={handleActiveStates} className={`${state.isActive && 'border-1 border-white'} bg-purple py-[0.75rem] button hover:bg-purple-dk duration-150 ease-in`}>Start Shopping</button>
            </Link>
            <Link to='about'>
              <button className={`${state.isActive && 'border-1 border-white'} bg-gray-400 py-[0.75rem] button hover:bg-gray-500 ease-in duration-150`}>Learn More</button>
            </Link>
          </div>
        </div>
        <img src="assets/images/hero-image.svg" alt="hero image" className='hidden min-xl:grid' />
      </section>
      <section className='flex flex-col gap-[2rem] items-center'>
        <h2 className='text-[1.5rem]'>EXPLORE YOUR OPTIONS</h2>
        <div className='flex flex-col gap-[2rem] min-md:grid min-md:grid-cols-2'>
          <div className='flex flex-col gap-[1rem]'>
            {userOptions.map((option, index) => (
              <div className={`border-3 border-gray-500 flex flex-col gap-[1rem] p-[1rem] rounded-md cursor-pointer ${index === selectedImage && 'border-purple ease-in duration-150 !bg-black'} bg-dark-fade`} onClick={() => handleActivePanel(index)} key={index}>
                <h2 className='text-[1.5rem] text-white font-CormorantU font-extrabold'>{option.header}</h2>
                <div className='flex items-center gap-[1.5rem]'>
                  <p className='text-gray-400 font-CormorantU text-[1.5rem] leading-[1.6rem]'>{option.text}</p>
                  <img src={`assets/images/${option.imgPath}.svg`} alt={option.imgPath} className={`w-[3.5rem] text-white`}/>
                </div>
              </div>  
            ))}
          </div>
          <img src={`assets/images/${userImage[selectedImage]}.svg`} alt="user image" className={`${selectedImage && 'animate-fade'}`} />
        </div>
      </section>
      <section className='flex flex-col gap-[2rem]'>
        <h1 className='text-3xl'>Categories</h1>
        {state.isLoading && <HomepageSkeleton cards={5} />}
        <ErrorMsg />
        <div className='flex flex-col min-[600px]:grid min-[600px]:grid-cols-2 min-lg:grid-cols-3 gap-[2rem]'>
          {state.categoriesData && state.categoriesData.slice(0, 5).map(product => (
            <div key={product.id} className='flex flex-col items-center gap-[0.5rem]'>
              <p>{product.name}</p>
              <Link to={`/categories/${product.name}`}>
                <img src={product.image} alt={product.name} className='rounded-xl cursor-pointer' />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className={`mx-auto max-w-[45rem]`}>
        <div className={`border-1 ${state.isDark ? 'bg-dark-fade' : 'bg-gray-300'}  border-purple p-[2rem] flex flex-col items-center rounded-md gap-[1rem]`}>
          <img src="/assets/images/woman1.png" alt="woman image" className='w-[6rem] rounded-full'/>
          <p className={`${state.isDark ? 'text-gray-500' : 'text-gray-700'} font-CormorantU text-center text-[1.4rem]`}>
            “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple Branch are doing wonderful. We get nice comments all the time. “
          </p>
          <div className='flex flex-col items-center'>
          <p className=''>Carmen Peters</p>
          <p className={`${state.isDark ? 'text-gray-500' : 'text-gray-700'} font-script`}>CEO & founder @Mirage </p>
          </div>
        </div>
      </section>
      <section className={`p-[1rem] flex flex-col gap-[1rem] items-center ${state.isDark ? 'bg-dark-fade' : 'bg-gray-300'} rounded-md min-lg:flex-row min-md:p-[2.5rem]`}>
        <div className='flex flex-col items-center gap-[1rem]'>
          <h2 className='font-CormorantU font-extrabold text-[1.4rem]'>Stay Updated</h2>
          <p className='text-center font-CormorantU text-[1.1rem]'>
            Get instant updates on new products as well as your favorite out of stock products. You don't want to miss out any spicy updates
          </p>
          <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-[1rem] min-[650px]:flex-row'>
            <label id='email'></label>
            <input className={`button border-1 ${state.isDark ? 'border-gray-800' : 'border-gray-400'} outline-0`} type="email" id="email" placeholder='Enter your email'/>
            <button className='button bg-purple hover:bg-purple-dk duration-150 ease-in text-white'>Subscribe</button>
          </form>
        </div>
        <div>
          <img src="assets/images/formbg.svg" alt="form image" className='hidden min-lg:block'/>
        </div>
      </section>
    </main>
  )
}
