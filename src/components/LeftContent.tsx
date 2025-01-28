interface IProps {
  logoRef: React.MutableRefObject<HTMLDivElement>
  appTitleRef: React.MutableRefObject<HTMLHeadingElement>
  appDescriptionRef: React.MutableRefObject<HTMLParagraphElement>
  creditRef: React.MutableRefObject<HTMLParagraphElement>
}

const LeftContent = ({ logoRef, appTitleRef, appDescriptionRef, creditRef }: IProps) => {
  return (
    <div className='md:col-span-3 md:row-span-9 row-span-1 text-white flex md:items-center items-start md:px-10 px-6 md:py-6 flex-col'>
      <div className='flex-1 flex md:flex-col flex-row md:gap-14 gap-4 justify-center items-center'>
        <div ref={logoRef} className='md:w-28 md:h-28 w-14 h-14 opacity-0'>
          <img src='./assets/logo.png' alt='Silver Frame' className='pointer-events-none' />
        </div>
        <div className='text-center'>
          <h1 ref={appTitleRef} className='opacity-0 md:text-3xl text-lg font-playwrite'>Silver Frame</h1>
          <p ref={appDescriptionRef} className='opacity-0 w-5/6 m-auto mt-6 text-sm leading-relaxed text-neutral-400 md:block hidden'>
            Dive into a world of captivating movie trailers, where every frame tells a story. Watch, explore, and get inspired
          </p>
        </div>
      </div>
      <p ref={creditRef} className='opacity-0 text-xs md:block hidden'>Design inspired by: <a href='https://we-go-again.com/' target='_blank' className='outline-none underline text-blue-400'>We Go Again</a></p>
    </div>
  )
}

export default LeftContent