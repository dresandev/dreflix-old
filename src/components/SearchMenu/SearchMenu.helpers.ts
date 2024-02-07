import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { removeFocusActiveElement } from '~/utils'

export const navigateToSearch = (title: string, router: AppRouterInstance) => {
  removeFocusActiveElement()
  const searchParams = new URLSearchParams({ search_query: title }).toString()
  const href = `/search?${searchParams}`
  router.push(href)
}
