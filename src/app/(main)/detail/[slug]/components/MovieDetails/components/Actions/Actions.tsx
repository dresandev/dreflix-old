import { IconButton } from '~/components/IconButton'
import { TrailerButton } from '~/components/TrailerButton'
import { HeartIcon, PlusIcon } from '~/components/SVG'
import styles from './Actions.module.css'

interface ActionsProps {
  trailerKey?: string
}

export const Actions: React.FC<ActionsProps> = ({
  trailerKey,
}) => {
  return (
    <div className={styles.actions}>
      {
        trailerKey && (
          <TrailerButton
            trailerKey={trailerKey}
            variant='text'
          />
        )
      }
      <IconButton ariaLabel='Add to list'>
        <PlusIcon />
      </IconButton>
      <IconButton ariaLabel='Mark as favorite'>
        <HeartIcon />
      </IconButton>
    </div>
  )
}