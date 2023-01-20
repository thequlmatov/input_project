import React, { useState } from 'react';
import { CameraIcon, MoreInfoIcon, SquarUp } from '../assets/icons';

const Inputs = () => {

  const [open, setOpen] = useState(false);

  const [two, setTwo] = useState(false);

  const [three, setThree] = useState(false);

  const [four, setFour] = useState(false);

  return (
    <div className='input-section'>
      <div className="container">
        <div className="nav mt-4 justify-content-between">
          <h3 className='mb-5'>Персональные данные</h3>
          <div className="nav-icons">
            <button className='icon-button'>
              <MoreInfoIcon />

            </button>
            <button className='icon-button'>
              <SquarUp />
            </button>
          </div>
        </div>
        <div>


          <form  >
            <div className='d-flex flex-wrap'>
              <div className='img-input-section'>
                <label className="d-block" htmlFor="file">Фото</label>
                <label className='label-input-img d-block' htmlFor='file'>
                  <input className='input-img' type="file" name="name" id="file" style={{ display: 'none' }} />
                  <CameraIcon />
                </label>
              </div>

             <div>
             <div className="name-inputs d-flex">
                <div>
                  <label className='d-block' htmlFor="lname">Имя</label>
                  <input className='input-text inputs lname-input' type="text" name="lname" id="lname" />
                </div>

                <div className="fname">
                  <label className='d-block' htmlFor="fname">Фамилия</label>
                  <input className='input-text inputs fname-input' type="text" name="fname" id="fname" />
                </div>

              </div>

                <div className='d-block email'>
                  <label className='d-block' htmlFor="pochta"> Адрес эл. почты</label>
                  <input className='email-input w-100 inputs' type="email" id='pochta' name='pochta' />
                </div>
             </div>


            </div>


           <div className='mt-4'>
           <label className='d-block' htmlFor="sarlavha"> Заголовок</label>
            <input className='inputs w-100 sarlavha-input' type="text" id='sarlavha' name=' Заголовок' />
           </div>

           <div className='mt-4'>
           <label className='d-block' htmlFor="number-phone"> Номер телефона</label>
            <input className='inputs w-100 number-phone-input' type="text" id='number-phone' name=' number-phone' />
           </div>

           <div className='mt-4'>
           <label className='d-block' htmlFor="address"> Адрес</label>
            <input className='inputs w-100 address-input' type="text" id='address' name=' address' />
           </div>

           <div className='mt-4 d-flex'>
          <div className='index w-50'>
          <label className='d-block' htmlFor="emailIndex"> Почтовый индекс</label>
            <input className='inputs w-100 email-index-input  ' type="text" id='emailIndex' name=' emailIndex' />
          </div>

          <div className='city w-50' >
          <label className='d-block' htmlFor="city"> Город</label>
            <input className='inputs w-100  city-input' type="text" id='city' name=' city' />
           </div>
          </div>


          <div  className={`${!open ? "hidden-section" : null} form-item`}>
           <label className='d-block mt-3' htmlFor="data-brith"> Дата рождения</label>
            <input className='inputs w-100 number-phone-input' type="brith" id='data-brith' name='data-brith' />
            <div onClick={() => setOpen(false)}><i class="fa-solid fa-xmark"></i></div>
           </div>

          <div  className={`${!two ? "hidden-section" : null} form-item`}>
           <label className='d-block mt-3' htmlFor="mesto"> Место рождения</label>
            <input className='inputs w-100 number-phone-input' type="text" id='mesto' name='mesto' />
            <div onClick={() => setTwo(false)}><i class="fa-solid fa-xmark"></i></div>
           </div>

          <div  className={`${!three ? "hidden-section" : null} form-item`}>
           <label className='d-block mt-3' htmlFor="number-phone"> Водительское удостоверение</label>
            <input className='inputs w-100 number-phone-input' type="text" id='number-phone' name=' number-phone' />
            <div onClick={() => setThree(false)}><i class="fa-solid fa-xmark"></i></div>
           </div>

          <div  className={`${!four ? "hidden-section" : null} form-item`}>
           <label className='d-block mt-3' htmlFor="number-phone"> Пол</label>
            <input className='inputs w-100 number-phone-input' type="text" id='number-phone' name=' number-phone' />
            <div onClick={() => setFour(false)}><i class="fa-solid fa-xmark"></i></div>
           </div>

          </form>
        </div>

        <div className='mt-4 d-flex '>
          {
            !open &&
            (<button onClick={() => setOpen(!open)}  className='d-flex click-button align-self-center'>
            <span>+</span>
            <p className='mt-2'>Дата рождения</p>
          </button>)
          }

          {
            !two &&
            (<button onClick={() => setTwo(!two)}  className='d-flex click-button align-self-center'>
            <span>+</span>
            <p className='mt-2'>Место рождения</p>
          </button>)
          }

        {
          !three && (
            <button onClick={() => setThree(true)}  className='d-flex click-button align-self-center'>
            <span>+</span>
            <p className='mt-2'>Водительское удостоверение</p>
          </button>
          )
        }

         {
            !four &&
         (<button onClick={() => setFour(true)}  className='d-flex click-button align-self-center'>
            <span>+</span>
            <p className='mt-2'>Пол</p>
          </button>)
          }

        </div>
      </div>
    </div>
  )
}

export default Inputs