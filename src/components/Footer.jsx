import React from 'react'
import siteData from './Data'
import Feature from './Feature'
function Footer() {
  return (
    <>
      <Feature featuresdata={siteData.featuresdata} />
    </>
  )
}

export default Footer