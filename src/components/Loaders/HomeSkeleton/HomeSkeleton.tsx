import clsx from 'clsx'
import { ScrollToTop } from '~/components/ScrollToTop'
import sharedStyles from '../sharedStyles.module.css'
import styles from './HomeSkeleton.module.css'

export const HomeSkeleton = () => {
  return (
    <ScrollToTop>
      <div className={styles.container}>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.title,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.hero,
        )}></div>

        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.title,
        )}></div>
        <div className={styles.carousel}>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
          <div className={clsx(
            'carouselMovieCardWidth',
            sharedStyles.loaderBlockBg,
            styles.movieCard,
          )}></div>
        </div>
      </div>
    </ScrollToTop>
  )
}
