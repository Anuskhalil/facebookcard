import React from 'react'
import AppCard from './Components/AppCard'
import AppCard1 from './Components/AppCard1'
import AppCard2 from './Components/AppCard2'
import AppCard3 from './Components/AppCard3'
import AppCard4 from './Components/AppCard4'
import image2 from './Components/user2 image.jpg'
import image3 from './Components/babar.jpg'
import image4 from './Components/anus.jpeg'
import image5 from './Components/girl.jpeg'

function App() {
  return (
    <div>
      <AppCard />
      <AppCard1 name="Shehzad" para='5d 10min' longPara='It is one of the Amazing click that I ever taken.'  image={image2}/>
      <AppCard2 name="Babar Azam" para='1d 55min' longPara='Very Happy! one of the remarkable performance of mine against India.'  image={image3} />
      <AppCard3 name="Anus Khalil" para='1month 55min' longPara='Feeling relax with great weather.'  image={image4} />
      <AppCard4 name="Julia Eden" para='2week 40min' longPara='Despite of having difficulties but smiling'  image={image5}  />
    </div>
  )
}

export default App
