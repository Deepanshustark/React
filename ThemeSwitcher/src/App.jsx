import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import useTheme, { ThemeProvider } from './context/Theme'

function App() {
  
  const [themeMode,setThemeMode]= useState("light")

  const darkMode=()=>{
    setThemeMode("dark")
  }
  const lightMode=()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <>
     <ThemeProvider value={{themeMode,darkMode,lightMode}}>
        <div className="flex flex-wrap min-h-screen items-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
      </ThemeProvider>
    </>
  )
}

export default App
