'use client'

import { useEffect } from 'react'

interface ScrollToTopProps {
  children: React.ReactNode
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  children
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return children
}
