import React from 'react'
import './Main.css'
import { FaGreaterThan } from 'react-icons/fa';
import Map from '../map/Map'
export default function Main() {

  return (
    <div className="mainContainer">
      <div className="topBanner">
        {/* <img src={bkg} alt="" /> */}
        <h1 className="header">IP Addres Tracker</h1>
      </div>

      <div className="search-bar">
        <form action="#">
          <input type="text" className='search-input' placeholder='Search for any IP address or domain' />
          <button type="submit"><FaGreaterThan className='search-icon' /></button>
        </form>
      </div>

      <div className="monitor">
        <div className="ip">
        <p className="address">IP ADDRESS</p>
        <h1 className="address-code">192.212.174.101</h1>
        </div>
        <div className="location">
        <p className="location-page">LOCATION</p>
        <h1 className="location-head">Broklyn,NY 100001</h1>
        </div>
        <div className="timezone">
        <p className="timeZone-page">TIMEZONE</p>
        <h1 className="timeZone-head">UTC-05:00</h1>
        </div>
        <div className="isp">
        <p className="isp-page">ISP</p>
        <h1 className="isp-head">SpaceX Starlink</h1>
        </div>
      </div>

    <Map/>
<div className="test"><h1>Hello</h1></div>
    </div>
  )
}
