import React,{useRef} from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows,RandomizedLight } from '@react-three/drei';



const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={30}
    alphaTest={0.2}
    scale={4}
    rotation={[Math.PI / 2,0,0]}
    position={[0,0,-0.14]}
    >
        <RandomizedLight 
            amount={5}
            radius={9}
            intensity={0.65}
            ambient={0.25}
            position={[4,3,-10]}
        />
        <RandomizedLight 
            amount={4}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-3,3,-9]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop