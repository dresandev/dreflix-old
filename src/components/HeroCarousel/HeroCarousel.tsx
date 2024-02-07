import { headers } from 'next/headers'
import { heroMovies } from '~/data/hero-movies'
import { Carousel } from '~/components/Carousel'
import { HeroMovieCard } from '~/components/HeroMovieCard'
import { isMobile } from '~/utils/is-mobile'

export const HeroCarousel = async () => {
  const userAgent = headers().get('user-agent') || ''

  return (
    <Carousel
      showPagination
      autoPlay
      itemScrollSnapStopAlways
      itemsGap='var(--inline-space)'
      btnHoverVariant='scaleHover'
    >
      {
        heroMovies.map((movie, i) => {
          const loading = (i < 2 || isMobile(userAgent))
            ? 'eager'
            : 'lazy'
          const fetchPriority = (i < 2)
            ? 'high'
            : undefined

          return (
            <HeroMovieCard
              key={movie.movieId}
              {...movie}
              imageLoading={loading}
              imageFetchPriority={fetchPriority}
            />
          )
        })
      }
    </Carousel>
  )
}
