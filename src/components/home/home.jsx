import { useEffect } from "react"
import { BINO, DARYO, FIRST, FIWE, FOUR, GUL, GULCHI, MARKA1, MARKA2, MORE, SECOND, THREE, USER, UZUM } from "../../assets"



const Home = ({handleDate , handleSAve , save}) => {


  useEffect(() => {
  }, [handleDate])

  return (
    <div className="flex flex-col  p-5  gap-5">

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


      <div className="flex flex-col">

        <div>
          <h1>НОВОСТИ</h1>
        </div>

        <div className="md:flex block gap-10 ">

        <div className=" relative md:py-0 py-10">
          <img src={FIRST} alt="" className=" hover:scale-105 w-full overflow-auto h-auto" />
          <div className=" absolute bottom-16 left-2 text-white">
            <h3 className="sm:text-[20px] text-[13px] font-bold ">В Тюмени открылась онлайн-школа <br /> «Здоровый садовод»</h3>
            <p className="sm:text-[15px] text-[10px]">В Тюменской области начались лекции онлайн-школы <br /> "Здоровый садовод", присоединиться к которой...</p>
          </div>
        </div>



        <div className="flex flex-col gap-5">

            <div className="sm:flex block gap-5 sm:py-0 py-10  items-center text-white">
                <div className=" relative">
                    <img src={SECOND} alt="" className=" hover:scale-105 w-full overflow-auto h-auto"/>
                    <p className=" absolute bottom-5 left-3">В Тюмени открылась онлайн-школа <br /> «Здоровый садовод»</p>
                </div>

                <div className=" relative sm:pt-0 pt-10 ">
                    <img src={THREE} alt="" className=" hover:scale-105 w-full overflow-auto h-auto"/>
                    <p className=" absolute bottom-5 left-3">В Тюмени открылась онлайн-школа <br /> «Здоровый садовод»</p>
                </div>
            </div>

            <div className="sm:flex block gap-5 items-center text-white">
                <div className=" relative">
                    <img src={FOUR} alt="" className=" hover:scale-105 w-full overflow-auto h-auto"/>
                    <p className=" absolute bottom-5 left-3">В Тюмени открылась онлайн-школа <br /> «Здоровый садовод»</p>
                </div>

                <div className=" relative sm:pt-0 pt-10">
                    <img src={FIWE} alt="" className=" hover:scale-105 w-full overflow-auto h-auto"/>
                    <p className=" absolute bottom-5 left-3">В Тюмени открылась онлайн-школа <br /> «Здоровый садовод»</p>
                </div>
            </div>

        </div>


        </div>

      </div>


      <div className="">
        <div className=" xl:flex block items-center  justify-between">

          <div className="text-[#999]">
            <h1>Выбрать тему:</h1>
          </div>

          <div className="bg-[white] shadow p-3 rounded-[20px] xl:mt-0 pt-5">
            <h5>Уход за растениями и агротехника</h5>
          </div>

          <div className="bg-[white] shadow p-3 rounded-[20px]  xl:mt-0 mt-5">
            <h5>Экология</h5>
          </div>

          <div className="bg-[white] shadow p-3 rounded-[20px]  xl:mt-0 mt-5">
            <h5>Дизайн ландшафта</h5>
          </div>

          <div className="bg-[white] shadow p-3 rounded-[20px]  xl:mt-0 mt-5">
            <h5>Льготы и гос. поддержка</h5>
          </div>

          <div className="bg-[white] shadow p-3 rounded-[20px]  xl:mt-0 mt-5">
            <h5>новости</h5>
          </div>
        </div>
      </div>

      <div>
        <div className="md:flex block justify-between items-start">
            <div className=" relative bg-white shadow h-[598px] rounded-[10px]">

                <div className=" relative">
                  <img src={MORE} alt="" />
                 {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                 {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                </div>

                <div className="flex justify-between items-center p-5">
                  <h1 className="text-[#006C70]">ОГОРОД</h1>

                  <dir className='flex justify-center items-center gap-5 text-[#999]'>
                    <i class="fa-regular fa-calendar"></i>
                    <p>{handleDate}</p>
                  </dir>
                </div>

                <div className="px-5 flex justify-center items-center text-[26px]" >
                  <h1>Как выращивать фиолетовый картофель</h1>
                </div>
            </div>

            <div className="bg-[white] shadow md:w-[375px] w-full md:mt-0 mt-5 md:h-[598px] h-[650px] rounded-[10px]">

              <div className=" relative">
                <img src={UZUM} alt="" className="md:w-[375px] md:h-[370px]  w-[770px] h-[441px]" />
                {!save && <img src={MARKA1} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
                {save && <img src={MARKA2} alt="" onClick={() => handleSAve()} className=" absolute top-0 right-0" />}
              </div>

              <div className="flex justify-between items-center p-5">
                  <h1 className="text-[#006C70]">ОГОРОД</h1>

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


      <div>
        <div className="md:flex block gap-10 justify-between items-start">

          <div className="flex flex-col">

            <div className="md:w-[375px] w-full h-[598px] bg-[white] shadow rouded-[10px]">

            <div className=" relative">
                <img src={GUL} alt="" />
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


            <div className="mt-10 flex bg-[white] shadow md:w-[369px] w-full h-[375px] flex-col px-4 gap-6 justify-start items-start">

              <div className=" text-[#006C70]">
                <h1>ЭКОЛОГИЯ</h1>
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

              <div className="bg-[white] shadow w-[757px] h-[369px] flex justify-start items-start">


              <div className="flex flex-col gap-10 md:p-10 p-5">
                  <div className="text-[#006C70]">
                    <h1>ЭКОЛОГИЯ</h1>
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
                    <h1 className="text-[#006C70]">ОГОРОД</h1>

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
                    <h1 className="text-[#006C70]">ОГОРОД</h1>

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
      </div>


    </div>
  )
}

export default Home