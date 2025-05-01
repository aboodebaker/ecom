<<<<<<< HEAD
import React, { Fragment } from 'react'
import Link from 'next/link'

=======
import React from 'react'
>>>>>>> 162a78f (finished)
import { Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
<<<<<<< HEAD
import { Message } from '../../_components/Message'
import { Price } from '../../_components/Price'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const {
    id,
    stripeProductID,
=======
import { Price } from '../../_components/Price'

import classes from './index.module.scss'

export const ProductHero: React.FC<{ product: Product }> = ({ product }) => {
  const {
>>>>>>> 162a78f (finished)
    title,
    categories,
    meta: { image: metaImage, description } = {},
  } = product

  return (
<<<<<<< HEAD
    <Fragment>
      {!stripeProductID && (
        <Gutter>
          <Message
            className={classes.warning}
            warning={
              <Fragment>
                {'This product is not yet connected to Stripe. To link this product, '}
                <Link
                  href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/products/${id}`}
                >
                  edit this product in the admin panel
                </Link>
                {'.'}
              </Fragment>
            }
          />
        </Gutter>
      )}
      <Gutter className={classes.productHero}>
        <div className={classes.content}>
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <Fragment key={index}>
                    {titleToUse}
                    {!isLast && <Fragment>, &nbsp;</Fragment>}
                  </Fragment>
                )
              }

              return null
            })}
          </div>
          <h1 className={classes.title}>{title}</h1>
          <div>
            <p className={classes.description}>
              {`${description ? `${description} ` : ''}To edit this product, `}
              <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/products/${id}`}>
                navigate to the admin dashboard
              </Link>
              {'.'}
            </p>
          </div>
          <Price product={product} button={false} />
          <AddToCartButton product={product} className={classes.addToCartButton} />
        </div>
        <div className={classes.media}>
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>No image</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media imgClassName={classes.image} resource={metaImage} fill />
            )}
          </div>
          {metaImage && typeof metaImage !== 'string' && metaImage?.caption && (
            <RichText content={metaImage.caption} className={classes.caption} />
          )}
        </div>
      </Gutter>
    </Fragment>
=======
    <Gutter className={classes.productHero}>
      {/* Media Section */}
      <div className={classes.mediaWrapper}>
        {!metaImage && <div className={classes.placeholder}>No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} resource={metaImage} fill />
        )}
      </div>

      {/* Product Details */}
      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.metaRow}>
          {/* Categories */}
          <div className={classes.categories}>
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const name = category.title || 'Untitled category'
                const isLast = index === categories.length - 1

                return (
                  <span key={index} className={classes.category}>
                    {name}
                    {!isLast && <span className={classes.separator}>,&nbsp;</span>}
                  </span>
                )
              }
              return null
            })}
          </div>

          {/* Vertical Divider */}
          <div className={classes.verticalDivider} />

          {/* Stock Status */}
          <p className={classes.stock}>In stock</p>
        </div>

        {/* Price and Description */}
        <div className={classes.infoSection}>
          <Price product={product} button={false} />

          <div className={classes.description}>
            <h6>Description</h6>
            <p>{description}</p>
          </div>

          <AddToCartButton
            product={product}
            className={classes.addToCartButton}
          />
        </div>
      </div>
    </Gutter>
>>>>>>> 162a78f (finished)
  )
}
