import "./styles.css";
import {Canvas, useThree, useFrame} from '@react-three/fiber'
import { Environment, Text, useGLTF, Sky, Cloud, Float } from "@react-three/drei";
import { React, Suspense } from "react";
import * as THREE from 'three'

import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Work from './components/work/Work'



function HawkFinal2(props) {
  const { scene } = useGLTF('HawkFinal2.glb')
  return (
    <primitive object={scene} {...props} roughness={0.1}/>
    
  )
}

function Clouds() {
  return (
    <group>
      <Cloud depthTest={false} position={[0, 15, -10]} speed={0.2} opacity={0.4} segments={100} width={40}/>
    </group>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 1, state.mouse.y / 1, 10), 0.05)
  });
};

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.9}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      fontSize={width / 4}
      color="#0B3127"
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {children}
    </Text>
  )
}

export default function App() {
  return (
    <div className="App">
      <div className="ThreeDCanvas">
      <Canvas>
        <Suspense fallback={null}>
        <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5} scale={5.8} rotation={[0.1, -0.1, -0.2]} position={[1, -0.05, -5]}>
          <HawkFinal2/>
        </Float>
          <Rig/>
          <ambientLight />
          <Caption>{`HI,\nI'M\nRYAN\nHAWKINS`}</Caption>
          <Environment preset="forest" background />
          <Sky/>
          <Clouds/>
        </Suspense>
      </Canvas>
      </div>

      <Navbar/>
      <About/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}