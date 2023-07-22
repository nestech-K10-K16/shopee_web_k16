import React from 'react';
import { IMG_BannerSample, IMg_ProductSample } from 'assets/image';
import './index.css';

const Home = () => {
  return (
    <main>
      <section id='home'>
        <div className='home__content'>
          <div className='home__content__slider margin-bottom-4rem'>
            <img src={IMG_BannerSample} alt='' className='img-fluid' />
          </div>

          <div className='home__content__product'>
            <div className='home__content__product__heading d-flex justify-content-between align-items-center margin-bottom-2rem'>
              <p className='heading-01 m-0'>Shop The Latest</p>
              <a
                className='heading-04 text-black text-decoration-none'
                href='/shop'
              >
                View all
              </a>
            </div>
            <div className='home__content__product__row-1 row'>
              <a
                className='col text-black text-decoration-none'
                href='/product'
              >
                <img src={IMg_ProductSample} alt='' />
                <p className='heading-03 margin-bottom-0-5rem'>Lira Earrings</p>
                <p className='heading-04'>$ 20,00</p>
              </a>

              <a className='col text-black text-decoration-none' href='/'>
                <img src={IMg_ProductSample} alt='' />
                <p className='heading-03 margin-bottom-0-5rem'>Hal Earrings</p>
                <p className='heading-04'>$ 25,00</p>
              </a>

              <a className='col text-black text-decoration-none' href='/'>
                <img src={IMg_ProductSample} alt='' />
                <p className='heading-03 margin-bottom-0-5rem'>
                  Kaede Hair Pin Set Of 3
                </p>
                <p className='heading-04'>$ 30,00</p>
              </a>
            </div>

            <div className='home__content__product__row-2 row'>
              <a className='col text-black text-decoration-none' href='/'>
                <img src={IMg_ProductSample} alt='' />
                <p className='heading-03 margin-bottom-0-5rem'>
                  Hair Pin Set of 3
                </p>
                <p className='heading-04'>$ 30,00</p>
              </a>

              <a className='col text-black text-decoration-none' href='/'>
                <img src={IMg_ProductSample} alt='' />
                <p className='heading-03 margin-bottom-0-5rem'>
                  Plaine Necklace
                </p>
                <p className='heading-04'>$ 19,00</p>
              </a>

              <a className='col text-black text-decoration-none' href='/'>
                <img src={IMg_ProductSample} alt='' />
                <p className='heading-03 margin-bottom-0-5rem'>
                  Yuki Hair Pin Set of 3
                </p>
                <p className='heading-04'>$ 29,00</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
