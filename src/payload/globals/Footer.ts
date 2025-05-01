import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
<<<<<<< HEAD
=======
      name: 'copyright',
      label: 'copyright',
      type: 'text',
      required: true,
    },
    {
>>>>>>> 162a78f (finished)
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
