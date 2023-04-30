import { BINO, DARYO, GUL, GULCHI, MARKA1, MARKA2, USER } from "../../assets"






const Stati = ({handleDate , handleSAve , save}) => {
  return (
    <div className=" p-5 flex flex-col">
        <div className="sm:block hidden ">
        <div className="flex">
        <form>
          <input type="search" className="border-[2px] md:w-[333px] w-[222px] outline-none px-5 h-[40px] border-[#999] rounded-[10px]" placeholder="Поиск"/>
        </form>

        <div className="flex text-[30px] items-center gap-5 text-[#999] absolute right-5 ">
          <i class="fa-solid fa-bell"></i>

          <div>
            <img src={USER} alt="" />
          </div>
        </div>
        </div>
        </div>

        <div className=" py-16">

        <div className="text-[18px] text-[#BC4639] pb-[20px]">   
            <h1>Дизайн ландшафта</h1>
        </div>
        <div className="md:flex block gap-10 justify-between items-start">

          <div className="flex flex-col">

            <div className="md:w-[375px] w-full h-[598px] bg-[white] shadow rouded-[10px]">

            <div className=" relative">
                <img src={GUL} alt="" className=" w-full" />
                {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
              </div>

              <div className="flex justify-between items-center p-5">
                  <h1 className="text-[#006C70]">ДИЗАЙН ЛАНДШАФТА</h1>

                  <dir className='flex justify-center items-center gap-5 text-[#999]'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>{handleDate}</p>
                  </dir>
              </div>

              <div className="flex justify-center items-center md:text-[25px] text-[20px] p-5">
                <h1>Как выращивать фиолетовый картофель</h1>
              </div>


            </div>


            <div className="mt-10 flex bg-[#FFF4F1] p-3 rounded-[10px] shadow md:w-[369px] w-full h-[375px] flex-col px-4 gap-6 justify-start items-start">

              <div className=" text-[#006C70]">
                <h1>ДИЗАЙН ЛАНДШАФТА</h1>
              </div>

              <div className="font-bold">
                <h1>В Тюмени открылась онлайн-школа «Здоровый садовод»</h1>
              </div>

              <div>
                <p>В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой могут все желающие. Любителям работы на приусадебных участках расскажут о том, как следить за своим здоровьем и как оказывать первую помощь...</p>
              </div>

              <dir className='flex justify-center items-center gap-5 text-[#999]'>
                <i class="fa-regular fa-calendar"></i>
                <p>{handleDate}</p>
              </dir>

              
            </div>


          </div>



          <div>

          <div className="flex md:mt-0 mt-10 w-full"> 
              <div>
                <img src={BINO} alt="" className="sm:h-[370px] sm:block hidden" />
              </div>

              <div className="bg-[#FFF4F1] shadow w-[757px] h-[369px] flex justify-start items-start">


              <div className="flex flex-col gap-10 md:p-10 p-5">
                  <div className="text-[#006C70]">
                    <h1>ДИЗАЙН ЛАНДШАФТА</h1>
                  </div>

                  <div className="font-bold">
                    <h1>В Тюмени открылась онлайн-школа <br /> «Здоровый садовод»</h1>
                  </div>

                  <div className="sm:text-[14px] text-[10px]">
                    <p>В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой могут все желающие. Любителям работы на приусадебных участках расскажут о том, как следить за своим здоровьем и как оказывать первую помощь...</p>
                  </div>

                  <dir className='flex justify-start items-start gap-5 text-[#999]'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>{handleDate}</p>
                  </dir>

              </div>


              </div>

          </div>

          <div className="sm:flex block md:mt-12 mt-16 justify-between items-start ">

            <div>
            <div className="bg-[white] shadow md:w-[375px] w-full md:mt-0 mt-5 md:h-[598px] h-[650px] rounded-[10px]">

                <div className=" relative">
                  <img src={GULCHI} alt="" className="md:w-[375px] md:h-[370px]  w-[770px] h-[441px]" />
                  {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                  {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                </div>

                <div className="flex justify-between items-center p-5">
                    <h1 className="text-[#006C70]">ДИЗАЙН ЛАНДШАФТА</h1>

                    <dir className='flex justify-center items-center gap-5 text-[#999]'>
                      <i class="fa-regular fa-calendar"></i>
                      <p>{handleDate}</p>
                    </dir>
                </div>

                <div className="flex justify-center items-center md:text-[25px] text-[20px] p-5">
                  <h1>Как выращивать фиолетовый картофель</h1>
                </div>
            </div>
            </div>
            
            <div>
            <div className="bg-[white] shadow md:w-[375px] w-full md:mt-0 mt-5 md:h-[598px] h-[650px] rounded-[10px]">

                <div className=" relative">
                  <img src={DARYO} alt="" className="md:w-[375px] md:h-[370px]  w-[770px] h-[441px]" />
                  {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                  {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                </div>

                <div className="flex justify-between items-center p-5">
                    <h1 className="text-[#006C70]">ДИЗАЙН ЛАНДШАФТА</h1>

                    <dir className='flex justify-center items-center gap-5 text-[#999]'>
                      <i class="fa-regular fa-calendar"></i>
                      <p>{handleDate}</p>
                    </dir>
                </div>

                <div className="flex justify-center items-center md:text-[25px] text-[20px] p-5">
                  <h1>Как выращивать фиолетовый картофель</h1>
                </div>
            </div>
            </div>
            


            
          </div>


        </div>
        </div>

          <div className="flex items-center gap-2 text-[20px] text-[#1E72FD]">
            <h1>Смотреть больше</h1>
            <i class="fa-solid fa-right-long fa-bounce"></i>
          </div>




        </div>


        <div className=" py-16">

        <div className="text-[18px] text-[#BC4639] pb-[20px]">   
            <h1>Экология</h1>
        </div>
        <div className="md:flex block gap-10 justify-between items-start">

          <div className="flex flex-col">

            <div className="md:w-[375px] w-full h-[598px] bg-[white] shadow rouded-[10px]">

            <div className=" relative">
                <img src={GUL} alt="" className=" w-full" />
                {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
              </div>

              <div className="flex justify-between items-center p-5">
                  <h1 className="text-[#006C70]">Экология</h1>

                  <dir className='flex justify-center items-center gap-5 text-[#999]'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>{handleDate}</p>
                  </dir>
              </div>

              <div className="flex justify-center items-center md:text-[25px] text-[20px] p-5">
                <h1>Как выращивать фиолетовый картофель</h1>
              </div>


            </div>


            <div className="mt-10 flex bg-[#FFF4F1] p-3 rounded-[10px] shadow md:w-[369px] w-full h-[375px] flex-col px-4 gap-6 justify-start items-start">

              <div className=" text-[#006C70]">
                <h1>Экология</h1>
              </div>

              <div className="font-bold">
                <h1>В Тюмени открылась онлайн-школа «Здоровый садовод»</h1>
              </div>

              <div>
                <p>В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой могут все желающие. Любителям работы на приусадебных участках расскажут о том, как следить за своим здоровьем и как оказывать первую помощь...</p>
              </div>

              <dir className='flex justify-center items-center gap-5 text-[#999]'>
                <i class="fa-regular fa-calendar"></i>
                <p>{handleDate}</p>
              </dir>

              
            </div>


          </div>



          <div>

          <div className="flex md:mt-0 mt-10 w-full"> 
              <div>
                <img src={BINO} alt="" className="sm:h-[370px] sm:block hidden" />
              </div>

              <div className="bg-[#FFF4F1] shadow w-[757px] h-[369px] flex justify-start items-start">


              <div className="flex flex-col gap-10 md:p-10 p-5">
                  <div className="text-[#006C70]">
                    <h1>Экология</h1>
                  </div>

                  <div className="font-bold">
                    <h1>В Тюмени открылась онлайн-школа <br /> «Здоровый садовод»</h1>
                  </div>

                  <div className="sm:text-[14px] text-[10px]">
                    <p>В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой могут все желающие. Любителям работы на приусадебных участках расскажут о том, как следить за своим здоровьем и как оказывать первую помощь...</p>
                  </div>

                  <dir className='flex justify-start items-start gap-5 text-[#999]'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>{handleDate}</p>
                  </dir>

              </div>


              </div>

          </div>

          <div className="sm:flex block md:mt-12 mt-16 justify-between items-start ">

            <div>
            <div className="bg-[white] shadow md:w-[375px] w-full md:mt-0 mt-5 md:h-[598px] h-[650px] rounded-[10px]">

                <div className=" relative">
                  <img src={GULCHI} alt="" className="md:w-[375px] md:h-[370px]  w-[770px] h-[441px]" />
                  {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                  {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                </div>

                <div className="flex justify-between items-center p-5">
                    <h1 className="text-[#006C70]">Экология</h1>

                    <dir className='flex justify-center items-center gap-5 text-[#999]'>
                      <i class="fa-regular fa-calendar"></i>
                      <p>{handleDate}</p>
                    </dir>
                </div>

                <div className="flex justify-center items-center md:text-[25px] text-[20px] p-5">
                  <h1>Как выращивать фиолетовый картофель</h1>
                </div>
            </div>
            </div>
            
            <div>
            <div className="bg-[white] shadow md:w-[375px] w-full md:mt-0 mt-5 md:h-[598px] h-[650px] rounded-[10px]">

                <div className=" relative">
                  <img src={DARYO} alt="" className="md:w-[375px] md:h-[370px]  w-[770px] h-[441px]" />
                  {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                  {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                </div>

                <div className="flex justify-between items-center p-5">
                    <h1 className="text-[#006C70]">Экология</h1>

                    <dir className='flex justify-center items-center gap-5 text-[#999]'>
                      <i class="fa-regular fa-calendar"></i>
                      <p>{handleDate}</p>
                    </dir>
                </div>

                <div className="flex justify-center items-center md:text-[25px] text-[20px] p-5">
                  <h1>Как выращивать фиолетовый картофель</h1>
                </div>
            </div>
            </div>
            


            
          </div>


        </div>
        </div>

          <div className="flex items-center gap-2 text-[20px] text-[#1E72FD]">
            <h1>Смотреть больше</h1>
            <i class="fa-solid fa-right-long fa-bounce"></i>
          </div>




        </div>


    </div>
  )
}

export default Stati