import { data } from './../data/data'

interface IProps {
  galleryRef: React.MutableRefObject<HTMLDivElement>
  currentMovie: number
  handleClick: (idx: number) => void
}

const Gallery = ({ galleryRef, currentMovie, handleClick }: IProps) => {
  return (
    <div ref={galleryRef} className='opacity-0 hide-scrollbar outline-none fixed md:top-3 bottom-3 md:right-3 bg-neutral-800/60 backdrop-blur-md shadow-lg border border-white/10 md:w-[7rem] w-screen h-[9rem] md:h-[97%] rounded-sm flex mx-6 md:flex-col flex-row gap-4 p-4 overflow-auto'>
      {
        data.map((item, idx) => (
          <div key={idx} onClick={() => handleClick(idx)} className={`hover:opacity-100 transition duration-200 ${idx !== currentMovie ? 'opacity-30' : 'opacity-100'} cursor-pointer flex-shrink-0`}>
            <img src={`./assets/${item.thumbnail}`} alt={item.title} className='md:w-auto md:h-auto w-52 h-[7rem] object-cover' />
          </div>
        ))
      }
    </div>
  )
}

export default Gallery