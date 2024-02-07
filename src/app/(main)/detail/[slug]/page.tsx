import { notFound } from 'next/navigation'
import { IMAGES_BASE_URL } from '~/constants'
import { isFulfilled, simpleSlugify } from '~/utils'
import { heroMovies } from '~/data/hero-movies'
import {
  getMovieMainCast,
  getMovieDetails,
  getMovieTrailerKey,
  getSimilarMovies
} from '~/actions/movies-actions'
import { HeroImage } from './components/HeroImage'
import { MovieDetails } from './components/MovieDetails'
import { MainCast } from './components/MainCast'
import { SimilarMovies } from './components/SimilarMovies'

interface DetailsPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DetailsPageProps) {
  const movie = await getMovieDetails(params.slug)

  if (!movie) notFound()

  return {
    metadataBase: new URL(`${IMAGES_BASE_URL}/w780`),
    title: `Dreflix: ${movie.title}`,
    description: movie.overview,
    openGraph: {
      images: `${movie.backdrop_path}`,
    },
  }
}

export function generateStaticParams() {
  return heroMovies.map(({ movieId, title }) => ({
    slug: `${movieId}-${simpleSlugify(title)}`,
  }))
}

export default async function DetailPage({
  params
}: DetailsPageProps) {
  const movie = await getMovieDetails(params.slug)

  if (!movie) notFound()

  const {
    id,
    title,
    overview,
    backdrop_path,
    genres,
    release_date,
    runtime,
    imdb_id,
    homepage,
    tagline,
  } = movie

  const movieId = id.toString()

  const [
    similarMoviesResponse,
    mainCast,
    trailerKey,
  ] = await Promise.allSettled([
    getSimilarMovies(movieId),
    getMovieMainCast(movieId),
    getMovieTrailerKey(movieId),
  ])

  return (
    <>
      <HeroImage backdropPath={backdrop_path} />

      <MovieDetails
        movieId={movieId}
        title={title}
        overview={overview}
        releaseDate={release_date}
        genres={genres}
        runtime={runtime}
        imdbId={imdb_id}
        homepage={homepage}
        tagline={tagline}
        trailerKey={
          isFulfilled(trailerKey)
            ? trailerKey.value
            : undefined
        }
      />

      {
        isFulfilled(mainCast) && (
          <MainCast
            cast={mainCast.value}
          />
        )
      }

      {
        isFulfilled(similarMoviesResponse) && (
          <SimilarMovies
            similarMovies={similarMoviesResponse.value.results}
          />
        )
      }
    </>
  )
}
