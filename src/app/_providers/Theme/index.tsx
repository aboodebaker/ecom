'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

import canUseDOM from '../../_utilities/canUseDOM'
import { defaultTheme, themeLocalStorageKey } from './shared'
import { Theme, ThemeContextType, themeIsValid } from './types'

const initialContext: ThemeContextType = {
  theme: 'light', // Set default theme to light
  setTheme: () => null,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light') // Always default to 'light'

  const setTheme = useCallback((themeToSet: Theme | null) => {
    if (themeToSet === null) {
      // Just keep the theme as light if there's no explicit change
      setThemeState('light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setThemeState(themeToSet)
      document.documentElement.setAttribute('data-theme', themeToSet)
    }
  }, [])

  useEffect(() => {
    // Set the theme to light directly on initial load
    document.documentElement.setAttribute('data-theme', 'light')
    setThemeState('light')
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)

// import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

// import canUseDOM from '../../_utilities/canUseDOM'
// import { defaultTheme, getImplicitPreference, themeLocalStorageKey } from './shared'
// import { Theme, ThemeContextType, themeIsValid } from './types'

// const initialContext: ThemeContextType = {
//   theme: undefined,
//   setTheme: () => null,
// }

// const ThemeContext = createContext(initialContext)

// export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
//   const [theme, setThemeState] = useState<Theme | undefined>(
//     canUseDOM ? (document.documentElement.getAttribute('data-theme') as Theme) : undefined,
//   )

//   const setTheme = useCallback((themeToSet: Theme | null) => {
//     if (themeToSet === null) {
//       // window.localStorage.removeItem(themeLocalStorageKey)
//       // const implicitPreference = getImplicitPreference()
//       // document.documentElement.setAttribute('data-theme', implicitPreference || '')
//       // if (implicitPreference) setThemeState(implicitPreference)

//     } else {
//       setThemeState(themeToSet)
//       // window.localStorage.setItem(themeLocalStorageKey, themeToSet)
//       // document.documentElement.setAttribute('data-theme', themeToSet)
//     }
//   }, [])

//   useEffect(() => {
//     let themeToSet: Theme = defaultTheme
//     const preference = window.localStorage.getItem(themeLocalStorageKey)

//     if (themeIsValid(preference)) {
//       themeToSet = preference
//     } else {
//       const implicitPreference = getImplicitPreference()

//       if (implicitPreference) {
//         themeToSet = implicitPreference
//       }
//     }

//     document.documentElement.setAttribute('data-theme', themeToSet)
//     setThemeState(themeToSet)
//   }, [])

//   return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
// }

// export const useTheme = (): ThemeContextType => useContext(ThemeContext)
