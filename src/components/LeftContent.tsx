interface IProps {
  logoRef: React.MutableRefObject<HTMLDivElement>
  appTitleRef: React.MutableRefObject<HTMLHeadingElement>
  appDescriptionRef: React.MutableRefObject<HTMLParagraphElement>
  creditRef: React.MutableRefObject<HTMLParagraphElement>
}

const LeftContent = ({ logoRef, appTitleRef, appDescriptionRef, creditRef }: IProps) => {
  return (
    <div className='col-span-3 text-white flex items-center px-10 py-6 flex-col'>
      <div className='flex-1 flex flex-col gap-14 justify-center items-center'>
        <div ref={logoRef} className='w-28 h-28 opacity-0'>
          <img src='./assets/logo.png' alt='Silver Frame' className='pointer-events-none' />
        </div>
        <div className='text-center'>
          <h1 ref={appTitleRef} className='opacity-0 text-3xl font-playwrite'>Silver Frame</h1>
          <p ref={appDescriptionRef} className='opacity-0 w-5/6 m-auto mt-6 text-sm leading-relaxed text-neutral-400'>
            Dive into a world of captivating movie trailers, where every frame tells a story. Watch, explore, and get inspired
          </p>
        </div>
      </div>
      <p ref={creditRef} className='opacity-0 text-xs'>Design inspired by: <a href='https://we-go-again.com/' target='_blank' className='outline-none underline text-blue-400'>We Go Again</a></p>
    </div>
  )
}

export default LeftContent