import clsx from 'clsx'
import { ScrollToTop } from '~/components/ScrollToTop'
import sharedStyles from '../sharedStyles.module.css'
import styles from './DetailSkeleton.module.css'

export const DetailSkeleton = () => {
  return (
    <ScrollToTop>
      <div className={styles.detailsWrapper}>
        <div className={styles.details}>
          <div className={clsx(
            sharedStyles.loaderBlockBg,
            styles.title,
          )}></div>
          <div className={clsx(
            sharedStyles.loaderBlockBg,
            styles.overview,
          )}></div>
          <div className={clsx(
            sharedStyles.loaderBlockBg,
            styles.badges,
          )}></div>
          <div className={styles.actions}>
            <div className={clsx(
              sharedStyles.loaderBlockBg,
              styles.action,
            )}></div>
            <div className={clsx(
              sharedStyles.loaderBlockBg,
              styles.action,
            )}></div>
            <div className={clsx(
              sharedStyles.loaderBlockBg,
              styles.action,
            )}></div>
          </div>
        </div>
      </div>
      <div className={clsx(
        sharedStyles.loaderBlockBg,
        styles.subtitle,
      )}></div>
      <div className={styles.actors}>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
        <div className={clsx(
          sharedStyles.loaderBlockBg,
          styles.actor,
        )}></div>
      </div>
    </ScrollToTop >
  )
}
