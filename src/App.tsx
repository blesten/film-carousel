import { useEffect, useRef, useState } from 'react'
import { data } from './data/data'
import { gsap } from 'gsap'
import LeftContent from './components/LeftContent'
import FilmContent from './components/FilmContent'
import Gallery from './components/Gallery'

const App = () => {
  const [currentMovie, setCurrentMovie] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const thumbnailRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const backdropRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const descriptionRef = useRef() as React.MutableRefObject<HTMLParagraphElement>
  const detailRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const logoRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const appTitleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>
  const appDescriptionRef = useRef() as React.MutableRefObject<HTMLParagraphElement>
  const creditRef = useRef() as React.MutableRefObject<HTMLParagraphElement>
  const galleryRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false)
      }
    })

    gsap.set(galleryRef.current, {
      opacity: 0
    })

    gsap.set(logoRef.current, {
      y: -50,
      opacity: 0
    })

    gsap.set(appTitleRef.current, {
      y: 50,
      opacity: 0
    })

    gsap.set(appDescriptionRef.current, {
      y: 50,
      opacity: 0
    })

    gsap.set(creditRef.current, {
      y: 50,
      opacity: 0
    })

    gsap.set(thumbnailRef.current, {
      scale: 0
    })

    gsap.set(backdropRef.current, {
      opacity: 0
    })

    gsap.set(titleRef.current, {
      y: -20,
      opacity: 0
    })

    gsap.set(descriptionRef.current, {
      y: -20,
      opacity: 0
    })

    gsap.set(detailRef.current, {
      y: -20,
      opacity: 0
    })

    timeline
      .to(
        galleryRef.current,
        {
          opacity: 1,
          ease: 'power2.inOut',
          duration: 0.5
        },
        0.8
      )
      .to(
        logoRef.current,
        {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut',
          duration: 0.5
        },
        0.5
      )
      .to(
        appTitleRef.current,
        {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut',
          duration: 0.5
        },
        0.5
      )
      .to(
        appDescriptionRef.current,
        {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut',
          duration: 0.5
        },
        0.5
      )
      .to(
        creditRef.current,
        {
          y: 0,
          opacity: 1,
          ease: 'power2.inout',
          duration: 0.5
        },
        0.5
      )
      .to(
        backdropRef.current,
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 0.5,
        },
        0.5
      )
      .to(
        thumbnailRef.current,
        {
          scale: 1,
          ease: "power2.inOut",
          duration: 0.5,
        },
        0.5
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.inOut',
          duration: 0.5
        },
        0.5
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.inOut',
          duration: 0.5
        },
        0.65
      )
      .to(
        detailRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.inOut',
          duration: 0.5
        },
        0.8
      )
  }, [])
  
  const handleClick = (idx: number) => {
    if (!isAnimating && idx !== currentMovie) {
      setIsAnimating(true)

      const timeline = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false)
          setCurrentMovie(idx)
        }
      })

      timeline
        .to(
          thumbnailRef.current,
          {
            scale: 0,
            ease: "power2.inOut",
            duration: 0.5,
          },
          0
        )
        .to(
          titleRef.current,
          {
            opacity: 0,
            y: -20,
            ease: 'power2.inOut',
            duration: 0.5
          },
          0
        )
        .to(
          descriptionRef.current,
          {
            opacity: 0,
            y: -20,
            ease: 'power2.inOut',
            duration: 0.5
          },
          0.1
        )
        .to(
          detailRef.current,
          {
            opacity: 0,
            y: -20,
            ease: 'power2.inOut',
            duration: 0.5
          },
          0.2
        )
        .to(
          backdropRef.current,
          {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.5,
            onComplete: () => {
              backdropRef.current.style.backgroundImage = `url(./assets/${data[idx].thumbnail})`;
              setCurrentMovie(idx)
            },
          },
          0
        )
        .to(
          backdropRef.current,
          {
            opacity: 1,
            ease: "power2.inOut",
            duration: 0.5,
          },
          0.5
        )
        .to(
          thumbnailRef.current,
          {
            scale: 1,
            ease: "power2.inOut",
            duration: 0.5,
          },
          0.5
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.inOut',
            duration: 0.5
          },
          0.5
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.inOut',
            duration: 0.5
          },
          0.65
        )
        .to(
          detailRef.current,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.inOut',
            duration: 0.5
          },
          0.8
        )
    }
  }

  return (
    <div className='w-screen h-screen overflow-hidden grid grid-cols-9 bg-neutral-900 backdrop-blur-3xl'>
      <div ref={backdropRef} style={{ backgroundImage: `url(./assets/${data[currentMovie].thumbnail})` }} className='absolute inset-0 -z-10 bg-cover bg-center filter blur-3xl' />
      <LeftContent
        logoRef={logoRef}
        appTitleRef={appTitleRef}
        appDescriptionRef={appDescriptionRef}
        creditRef={creditRef}
      />
      <FilmContent
        titleRef={titleRef}
        descriptionRef={descriptionRef}
        detailRef={detailRef}
        thumbnailRef={thumbnailRef}
        currentMovie={currentMovie}
      />
      <Gallery
        galleryRef={galleryRef}
        currentMovie={currentMovie}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App