import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import { LOGO } from "./assets";
// import { useState } from "react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./components/modal/modal";
import Stati from "./components/stati/stati";

// Import Swiper styles




export default function App() {

  const [menu , setMenu] = useState(false)

  const data = new Date()
  const day = data.getDate()  < 10 ?  '0' +  data.getDate()  :  data.getDate()
  const mon = data.getMonth()  < 10 ?  '0' +  data.getMonth() : data.getMonth() 
  const year = data.getFullYear()

  const handleDate = `${day}.${mon}.${year}`

  const [save , setSave] = useState(false)

  const handleSAve = () => {
    setSave(true)
  }

  setTimeout(()=> {
    setSave(false)
  },3000)


  return (
    <div className="sm:flex block ">

      

      <div className=" sm:h-screen h-[100px] ">
        
      {menu &&  <nav className="MENU z-10 bg-[#5C2018] fixed top-0 left-0 flex flex-col w-full items-center  justify-between h-screen">

          <div className="flex justify-between text-[white] gap-10 pt-5 text-[30px]">
            <i class="fa-solid fa-bell absolute left-3"></i>
            <i class="fa-regular fa-circle-xmark absolute right-3" onClick={() => setMenu(false)}></i>
          </div>

          <div className="text-white">
            <Link>Войти / Регистрация</Link>
          </div>

          <div>
            <button className="bg-[#4285F4] text-white hover:bg-[#6197ed] h-[60px] w-[374px] rounded-[20px] flex justify-center items-center gap-5 text-[20px]" >
              <i class="fa-sharp fa-solid fa-crown "></i>
              <h2>ВСТУПИТЬ В КЛУБ</h2>
            </button>
          </div>

          <div className="flex flex-col text-white">
            <ul className="flex flex-col gap-10 items-center">
              <li><Link>ГЛАВНАЯ</Link></li>
              <li><Link>НОВОСТИ</Link></li>
              <li><Link to={'/stati'}>СТАТЬИ</Link></li>
              <li><Link>ФОРУМ</Link></li>
              <li><Link>О КЛУБЕ</Link></li>
              <li><Link>МАГАЗИН</Link></li>
            </ul>
          </div>

          <div>
            <img src={LOGO} alt="" />
          </div>
          

        </nav>}


        <div className="sm:block md:h-[333vh] h-[740vh]  hidden">
          <div className=" bg-[#5C2018]  w-[235px] h-full  flex flex-col gap-5 items-center ">

            <div>
              <img src={LOGO} alt="" />
            </div>

            <div className="flex flex-col text-white">
            <ul className="flex flex-col gap-10 items-center">
              <li><Link to={'/home'}>ГЛАВНАЯ</Link></li>
              <li><Link to={'/stati'}>СТАТЬИ</Link></li>
              <li><Link>ФОРУМ</Link></li>
              <li><Link>О КЛУБЕ</Link></li>
              <li><Link>ОТЗОВИК</Link></li>
              <li><Link>НАЙТИ ЭКСПЕРТА</Link></li>
              <li><Link>МАГАЗИН</Link></li>
            </ul>
          </div>

          <div>
            <button className="bg-[white] text-[#006C70] hover:bg-[#a4abb6] hover:text-black h-[40px] w-[169px] rounded-[20px] flex justify-center items-center gap-5 text-[14px]" >
              <h2>РЕГИСТРАЦИЯ</h2>
            </button>
          </div>

          <div className="text-[30px] text-[white] flex gap-10">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-vk"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>

          <div className="text-white">
            <h1>Пользовательское соглашение</h1>
          </div>

          </div>
        </div>

        <div className="sm:hidden h-screen w-full block">
          
            <div className="bg-[#5C2018] flex items-center justify-between text-white px-5">
              <div>
                <img src={LOGO} alt="" className="w-[55px] h-[52px]" />
              </div>

              <div className="text-[30px] flex gap-10">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-bars" onClick={() => setMenu(true)}></i>
              </div>
            </div>

        </div>
      </div>

    { save && <div>
        <Modal handleSAve={handleSAve} save={save}>
          <div className="min-h-[100vh] w-[400px] h-[0px]">
            <h1 className="text-center text-[29px]">Malumot Saqlandi</h1>
            <i class="fa-solid fa-check flex  justify-center items-center text-[50px] text-[#0f0] " ></i>
          </div>
        </Modal>
      </div>
      
      }

    



      <div >
        <Routes> 
          <Route path="/" element={<Home  handleDate={handleDate} handleSAve={handleSAve} save={save}/>}></Route>
          <Route path="/stati" element={<Stati handleDate={handleDate} handleSAve={handleSAve} save={save}/>}></Route>
        </Routes>
      </div>






    </div>
  )
}