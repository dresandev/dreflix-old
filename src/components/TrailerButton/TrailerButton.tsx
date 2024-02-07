'use client'

import { useTrailerModalStore } from '~/store/trailer-modal-store'
import { IconButton } from '~/components/IconButton'
import { PlayIcon } from '~/components/SVG'
import styles from './TrailerButton.module.css'

interface TrailerButtonProps {
  trailerKey: string
  variant: 'icon' | 'text'
}

export const TrailerButton: React.FC<TrailerButtonProps> = ({
  trailerKey,
  variant
}) => {
  const { toggleShowTrailerModal, setTrailerKey } = useTrailerModalStore()

  const handleOnClick = () => {
    setTrailerKey(trailerKey)
    toggleShowTrailerModal()
  }

  const buttonVariant = {
    icon: (
      <IconButton
        ariaLabel='Play Trailer'
        size='small'
        onClick={handleOnClick}
      >
        <PlayIcon />
      </IconButton>
    ),
    text: (
      <button
        className={styles.trailerTextButton}
        onClick={handleOnClick}
      >
        <div className={styles.playIcon}>
          <PlayIcon />
        </div>
        <span className={styles.text}>Play Trailer</span>
      </button>
    ),
  }

  return buttonVariant[variant]
}
