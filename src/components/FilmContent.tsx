import { formatDate } from './../utils/formatter'
import { IoCalendar } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa'
import { data } from './../data/data'

interface IProps {
  titleRef: React.MutableRefObject<HTMLHeadingElement>
  descriptionRef: React.MutableRefObject<HTMLParagraphElement>
  detailRef: React.MutableRefObject<HTMLDivElement>
  thumbnailRef: React.MutableRefObject<HTMLDivElement>
  currentMovie: number
}

const FilmContent = ({ titleRef, descriptionRef, detailRef, thumbnailRef, currentMovie }: IProps) => {
  return (
    <div className='md:col-span-6 md:row-span-9 row-span-8 text-white md:w-3/4 w-full p-6 flex flex-col'>
      <div className='md:flex-1'>
        <h1 ref={titleRef} className='font-bn tracking-wider text-5xl opacity-0 font-semibold'>{data[currentMovie].title}</h1>
        <p ref={descriptionRef} className='mt-8 text-neutral-200 text-sm opacity-0 leading-relaxed'>{data[currentMovie].description}</p>
        <div ref={detailRef} className='flex opacity-0 items-center gap-9 mt-4'>
          <div className='flex items-center gap-2 text-neutral-200'>
            <FaStar />
            <p>{data[currentMovie].star}</p>
          </div>
          <div className='flex items-center gap-2 text-neutral-200'>
            <IoCalendar />
            <p>{formatDate(data[currentMovie].releasedDate)}</p>
          </div>
        </div>
      </div>
      <div ref={thumbnailRef} className='scale-0 w-full md:h-2/4 h-1/3 relative origin-bottom md:mt-0 mt-12'>
        <img src={`./assets/${data[currentMovie].thumbnail}`} alt={data[currentMovie].title} className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none' />
      </div>
    </div>
  )
}

export default FilmContent