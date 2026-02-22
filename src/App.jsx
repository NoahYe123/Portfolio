import { useState, useCallback, useRef } from 'react'
import './App.css'
import StarfieldBg from './components/StarfieldBg.jsx'
import ScanLines from './components/ScanLines.jsx'
import NavBar from './components/NavBar.jsx'
import MainMenu from './components/MainMenu.jsx'
import CampaignScreen from './components/CampaignScreen.jsx'
import ArmoryScreen from './components/ArmoryScreen.jsx'
import CommandCenter from './components/CommandCenter.jsx'
import IntelScreen from './components/IntelScreen.jsx'
import TransmissionScreen from './components/TransmissionScreen.jsx'

const SCREENS = {
  menu: MainMenu,
  campaign: CampaignScreen,
  armory: ArmoryScreen,
  command: CommandCenter,
  intel: IntelScreen,
  transmission: TransmissionScreen,
}

export default function App() {
  const [current, setCurrent] = useState('menu')
  const [transitioning, setTransitioning] = useState(false)
  const wrapperRef = useRef(null)

  const navigate = useCallback((target) => {
    if (target === current || transitioning) return
    setTransitioning(true)

    const el = wrapperRef.current
    if (el) {
      el.classList.add('screen-exit')
      setTimeout(() => {
        el.classList.remove('screen-exit')
        setCurrent(target)
        el.classList.add('screen-enter')
        setTimeout(() => {
          el.classList.remove('screen-enter')
          setTransitioning(false)
        }, 310)
      }, 310)
    } else {
      setCurrent(target)
      setTransitioning(false)
    }
  }, [current, transitioning])

  const Screen = SCREENS[current] ?? MainMenu
  const showNav = current !== 'menu'

  return (
    <div className="app">
      <StarfieldBg />
      <ScanLines />

      {showNav && <NavBar current={current} navigate={navigate} />}

      <div className={`screen-wrapper ${transitioning ? '' : ''}`} ref={wrapperRef}>
        <div className={`screen-content ${showNav ? 'has-nav' : ''}`}>
          <Screen navigate={navigate} />
        </div>
      </div>
    </div>
  )
}
