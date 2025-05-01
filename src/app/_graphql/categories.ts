<<<<<<< HEAD
export const CATEGORIES = `categories {
=======
export const PRODUCT_CATEGORIES = `categories {
>>>>>>> 162a78f (finished)
  title
  id
  breadcrumbs {
    id
    label
  }
}`
<<<<<<< HEAD
=======

export const CATEGORIES = `
  query Categories {
    Categories(limit: 300) {
      docs {
        id
        title
        media {
          alt
          width
          height
          url
        }
      }
    }
  }`
>>>>>>> 162a78f (finished)
