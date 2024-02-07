import { useState, useEffect } from 'react'
import { Movie, MovieListResponse } from '~/models'
import { useIsInView } from './use-is-in-view'

interface useFetchMoviesProps {
  initMovies: Movie[]
  totalPages: number
  fetchMovies: (page: string) => Promise<MovieListResponse>
}

export const useFetchMovies = ({
  initMovies,
  totalPages,
  fetchMovies,
}: useFetchMoviesProps) => {
  const [moviesData, setMoviesData] = useState({
    movies: initMovies,
    page: 2,
    isLoading: false,
    hasError: false,
  })

  const { observerTargetRef, isInView } = useIsInView<HTMLDivElement>({
    rootMargin: '100%',
    threshold: 1,
  })

  const { movies, page, isLoading } = moviesData

  useEffect(() => {
    setMoviesData(prevMoviesData => ({
      ...prevMoviesData,
      movies: initMovies,
    }))
  }, [initMovies])

  useEffect(() => {
    if (!isInView || isLoading || page > totalPages) return

    const loadMoreMovies = async () => {
      try {
        setMoviesData((prevMoviesData) => ({
          ...prevMoviesData,
          isLoading: true,
        }))

        const moviesResult = await Promise.all([
          fetchMovies(page.toString()),
          fetchMovies((page + 1).toString()),
        ])

        const movies = moviesResult.flatMap(movieResult => movieResult.results)

        setMoviesData(prevData => ({
          ...prevData,
          movies: [...prevData.movies, ...movies],
          page: prevData.page + 2,
          hasError: false,
        }))
      } catch (error) {
        console.error('Error fetching movies:', error)
        setMoviesData(prevData => ({
          ...prevData,
          hasError: true,
        }))
      } finally {
        setMoviesData(prevData => ({
          ...prevData,
          isLoading: false,
        }))
      }
    }

    loadMoreMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return { observerTargetRef, ...moviesData }
}
