import { HOST_URL } from '~/constants'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    host: HOST_URL,
  }
}
