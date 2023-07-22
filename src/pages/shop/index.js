import ReactSlider from 'react-slider';
import { PATH_NAME } from 'constants/common';
import { IMg_ProductSample } from 'assets/image';
import './index.css';

const Shop = () => {
  return (
    <main>
      <section id='shop'>
        <div className='shop__content d-flex'>
          <div className='shop__content__left-side-bar margin-right-4rem'>
            <p className='heading-01 margin-bottom-1rem'>Shop The Latest</p>

            <input
              className='border-0-5px-solid-bright-gray-outline-none-border-top-0-border-left-0-border-right-0-height-3rem w-100 margin-bottom-2rem'
              type='text'
              placeholder='search...'
            ></input>

            <select className='border-1px-bright-gray-padding-10px-border-radius-6px w-100 margin-bottom-1rem'>
              <option>Shop By</option>
            </select>

            <select className='border-1px-bright-gray-padding-10px-border-radius-6px w-100 margin-bottom-2rem'>
              <option>Sort By</option>
            </select>

            <div className='margin-top-1rem margin-bottom-3rem'>
              <ReactSlider
                className='horizontal-slider'
                thumbClassName='example-thumb'
                trackClassName='example-track'
                defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
                pearling
                minDistance={10}
              />
            </div>

            <div className='shop__content__left-side-bar__on-sale d-flex justify-content-between align-items-center margin-bottom-1rem'>
              <p className='heading-05 mb-0'>On sale</p>

              <label class='switch'>
                <input type='checkbox'></input>
                <span class='slider round'></span>
              </label>
            </div>

            <div className='shop__content__left-side-bar__in-stock d-flex justify-content-between align-items-center'>
              <p className='heading-05 mb-0'>In stock</p>

              <label class='switch'>
                <input type='checkbox'></input>
                <span class='slider round'></span>
              </label>
            </div>
          </div>

          <div className='shop__content__product'>
            <div className='home__content__product__row-1 row'>
              <a
                className='col text-black text-decoration-none'
                href={PATH_NAME.PRODUCT}
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
                  Kaede Hair Pin Set Of 3{' '}
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

export default Shop;
