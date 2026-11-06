import './App.css'
import bgImage from './assets/background.png'

function App() {

  return (
    <>
      <div className='bg-[#FFC4D1] h-screen w-screen'>
        <img className='z-0 h-screen w-screen object-cover' src={bgImage} />
        <div className='inset-0 absolute flex justify-center items-center pr-130 pl-130 pb-10 pt-10'>
          <div className='w-full h-full bg-[#ffffff]'>
            <div className='right-1 absolute rounded-[35px] bg-[#935C67] w-100 h-100'>

            </div>
            <div className='absolute border-[#935C67] border-[8px] rounded-[35px] bg-[#FFD3DC] w-100 h-100'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
