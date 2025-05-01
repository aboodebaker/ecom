import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
<<<<<<< HEAD
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'
=======
import { fetchFooter } from '../../_api/fetchGlobals'


import classes from './index.module.scss'
import FooterComponent from './FooterComponent'
>>>>>>> 162a78f (finished)

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
<<<<<<< HEAD
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
=======
console.log(error)
>>>>>>> 162a78f (finished)
  }

  const navItems = footer?.navItems || []

  return (
<<<<<<< HEAD
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
            <img
              className={classes.logo}
              alt="Payload Logo"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
            />
          </picture>
        </Link>
        <nav className={classes.nav}>
          <ThemeSelector />
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
          <Link href="/admin">Admin</Link>
          <Link
            href="https://github.com/payloadcms/payload/tree/main/templates/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Link>
          <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
            Payload
          </Link>
        </nav>
      </Gutter>
    </footer>
=======
    <>
      <FooterComponent footer={footer} />
    </>
>>>>>>> 162a78f (finished)
  )
}
