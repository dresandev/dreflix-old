'use client'

import { useTrailerModalStore } from '~/store/trailer-modal-store'
import { useToggleBodyOverflow } from '~/hooks'
import { TrailerModal } from './TrailerModal'

export const TrailerModalCC = () => {
  const showTrailerModal = useTrailerModalStore(state => state.showTrailerModal)
  useToggleBodyOverflow(showTrailerModal)
  return showTrailerModal && <TrailerModal />
}
