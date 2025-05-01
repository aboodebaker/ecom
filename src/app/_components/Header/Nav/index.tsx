'use client'

import React from 'react'
import Link from 'next/link'

<<<<<<< HEAD
import { Header as HeaderType, User } from '../../../../payload/payload-types'
=======
import { Header as HeaderType } from '../../../../payload/payload-types'
>>>>>>> 162a78f (finished)
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
<<<<<<< HEAD
=======
import { Button } from '../../Button'
>>>>>>> 162a78f (finished)

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[
        classes.nav,
<<<<<<< HEAD
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
=======
>>>>>>> 162a78f (finished)
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {!user && (
<<<<<<< HEAD
        <React.Fragment>
          <Link href="/login">Login</Link>
          <Link href="/create-account">Create Account</Link>
        </React.Fragment>
      )}
=======
        <Button
        el='link'
      href='login'
      label='Login'
      appearance='primary'
      onClick={() => {window.location.href = '/login'}}
        />
        
      )}

      {user && <CartLink />}
>>>>>>> 162a78f (finished)
    </nav>
  )
}
