'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AstronautMesh({ descent }: { descent: number }) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  const white = new THREE.MeshStandardMaterial({ color: '#e8e0ff', roughness: 0.3, metalness: 0.1 })
  const suit = new THREE.MeshStandardMaterial({ color: '#f0effe', roughness: 0.4, metalness: 0.05 })
  const visor = new THREE.MeshStandardMaterial({ color: '#7c3aed', roughness: 0, metalness: 0.8, transparent: true, opacity: 0.7 })
  const detail = new THREE.MeshStandardMaterial({ color: '#a78bfa', roughness: 0.5, metalness: 0.2 })

  return (
    <Float speed={1.8} rotationIntensity={0.1} floatIntensity={1.2}>
      <group
        ref={group}
        position={[1.6, 0.4 - descent * 6, 0]}
        scale={1}
      >
        {/* Helmet */}
        <mesh position={[0, 1.7, 0]} material={suit}>
          <sphereGeometry args={[0.52, 32, 32]} />
        </mesh>
        {/* Visor */}
        <mesh position={[0, 1.72, 0.28]} material={visor}>
          <sphereGeometry args={[0.38, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        </mesh>

        {/* Torso */}
        <mesh position={[0, 0.7, 0]} material={suit}>
          <capsuleGeometry args={[0.38, 0.7, 8, 16]} />
        </mesh>

        {/* Left arm */}
        <mesh position={[-0.62, 0.75, 0]} rotation={[0, 0, 0.45]} material={suit}>
          <capsuleGeometry args={[0.16, 0.6, 6, 12]} />
        </mesh>
        {/* Left hand */}
        <mesh position={[-0.88, 0.38, 0]} material={white}>
          <sphereGeometry args={[0.18, 12, 12]} />
        </mesh>

        {/* Right arm */}
        <mesh position={[0.62, 0.75, 0]} rotation={[0, 0, -0.45]} material={suit}>
          <capsuleGeometry args={[0.16, 0.6, 6, 12]} />
        </mesh>
        {/* Right hand */}
        <mesh position={[0.88, 0.38, 0]} material={white}>
          <sphereGeometry args={[0.18, 12, 12]} />
        </mesh>

        {/* Left leg */}
        <mesh position={[-0.22, -0.25, 0]} rotation={[0, 0, 0.1]} material={suit}>
          <capsuleGeometry args={[0.18, 0.65, 6, 12]} />
        </mesh>
        {/* Left boot */}
        <mesh position={[-0.25, -0.72, 0.08]} material={detail}>
          <capsuleGeometry args={[0.2, 0.22, 6, 12]} />
        </mesh>

        {/* Right leg */}
        <mesh position={[0.22, -0.25, 0]} rotation={[0, 0, -0.1]} material={suit}>
          <capsuleGeometry args={[0.18, 0.65, 6, 12]} />
        </mesh>
        {/* Right boot */}
        <mesh position={[0.25, -0.72, 0.08]} material={detail}>
          <capsuleGeometry args={[0.2, 0.22, 6, 12]} />
        </mesh>

        {/* Backpack */}
        <mesh position={[0, 0.72, -0.46]} material={detail}>
          <boxGeometry args={[0.45, 0.55, 0.18]} />
        </mesh>

        {/* Chest detail */}
        <mesh position={[0, 0.78, 0.38]} material={detail}>
          <boxGeometry args={[0.3, 0.2, 0.05]} />
        </mesh>

        {/* Antenna */}
        <mesh position={[0.3, 2.22, 0]} material={detail}>
          <cylinderGeometry args={[0.02, 0.02, 0.38, 8]} />
        </mesh>
        <mesh position={[0.3, 2.43, 0]} material={visor}>
          <sphereGeometry args={[0.05, 8, 8]} />
        </mesh>
      </group>
    </Float>
  )
}

export function Astronaut3D() {
  const [descent, setDescent] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1)
      setDescent(progress)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-4, 3, 3]} intensity={3} color="#a78bfa" />
        <pointLight position={[3, -2, 2]} intensity={0.8} color="#6366f1" />
        <pointLight position={[0, 5, 2]} intensity={0.5} color="#ffffff" />
        <AstronautMesh descent={descent} />
      </Canvas>
    </div>
  )
}
