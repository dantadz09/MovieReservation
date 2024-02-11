import React from 'react'
import { DatePicker } from 'antd'
import MyCarousel from './MyCarousel'
function Home() {
  return (
    <div>
        <div className = 'title'>
        <h1>Now Showing</h1>
        <DatePicker />
        </div>
        <MyCarousel/>
    </div>
  )
}

export default Home