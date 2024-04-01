import { useEffect, useRef } from 'react'
import { useTrailerModalStore } from '~/store/trailer-modal-store'
import { CloseIcon } from '~/components/SVG'
import styles from './TrailerModal.module.css'

export const TrailerModal = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const prevScrollY = useRef(0)
  const trailerKey = useTrailerModalStore(state => state.trailerKey)
  const toggleShowTrailerModal = useTrailerModalStore(state => state.toggleShowTrailerModal)

  useEffect(() => {
    prevScrollY.current = window.scrollY

    const handleFullscreenChange = () => {
      if (document.fullscreenElement) return

      window.scrollTo({ top: prevScrollY.current })
      modalRef.current?.focus()
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  useEffect(() => {
    const handlePressEscape = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      toggleShowTrailerModal()
    }

    document.addEventListener('keydown', handlePressEscape)

    return () => {
      document.removeEventListener('keydown', handlePressEscape)
    }
  }, [toggleShowTrailerModal])

  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  return (
    <div
      ref={modalRef}
      className={styles.modal}
      tabIndex={0}
    >
      <button
        aria-label='Close trailer modal'
        className={styles.closeModalBtn}
        onClick={toggleShowTrailerModal}
      >
        <CloseIcon />
      </button>

      <iframe
        className={styles.trailerFrame}
        src={`https://www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&si=F2Vt2iqn8TdSBHMP&amp;controls=1`}
        title='YouTube video player'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  )
}
