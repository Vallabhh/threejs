import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';


const Tab = ({tab,isFilterTab,isActiveTab,handleclick}) => {
  const snap = useSnapshot(state);


  const ActiveStyles = isFilterTab && isActiveTab 
  ? { backgroundColor:snap.color,opacity:1}
  : { backgroundColor:"transparent",opacity:1}
  return (
    <div
    key={tab.name}
    className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
    onClick={handleclick}
    style={ActiveStyles}
    >
    <img 
      src = {tab.icon}
      alt={tab.name}
      className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
    />

    </div>
  )
}

export default Tab