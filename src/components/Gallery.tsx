import { data } from './../data/data'

interface IProps {
  galleryRef: React.MutableRefObject<HTMLDivElement>
  currentMovie: number
  handleClick: (idx: number) => void
}

const Gallery = ({ galleryRef, currentMovie, handleClick }: IProps) => {
  return (
    <div ref={galleryRef} className='opacity-0 hide-scrollbar outline-none fixed top-3 right-3 bg-neutral-800/60 backdrop-blur-md shadow-lg border border-white/10 w-[7rem] h-[97%] rounded-sm flex flex-col gap-4 p-4 overflow-auto'>
      {
        data.map((item, idx) => (
          <div key={idx} onClick={() => handleClick(idx)} className={`w-full hover:opacity-100 transition duration-200 ${idx !== currentMovie ? 'opacity-30' : 'opacity-100'} cursor-pointer`}>
            <img src={`./assets/${item.thumbnail}`} alt={item.title} />
          </div>
        ))
      }
    </div>
  )
}

export default Gallery