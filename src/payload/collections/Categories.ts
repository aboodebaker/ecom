import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
<<<<<<< HEAD
    },
=======
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    }

>>>>>>> 162a78f (finished)
  ],
}

export default Categories
