import React from 'react'
import * as THREE from 'three'
import './Background.css'
import {Canvas, useThree, useFrame} from '@react-three/fiber'
import {OrbitControls, Stars, Text} from '@react-three/drei' 
import { LayerMaterial, Depth, Noise } from 'lamina'

function Box() {
  return (
    <mesh position={[0,2,0]}>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach ='material' color = 'hotpink' />
    </mesh>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="grey" colorA="skyblue" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  )
}


const Background = () => {
  return (
    <div className="container background__container"> 
      <Canvas>
        <Stars/>
        <ambientLight intensity={0.5} /> 
        <spotLight position={[10,15,10]} angle = {0.3} />
        <Caption>{`HI\nI'M\nRYAN\nHAWKINS`}</Caption>
        <Rig />
        <Box/>
      </Canvas>
    </div> 

  )
}

export default Background