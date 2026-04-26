'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function AstronautMesh({ descent }: { descent: number }) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.18
  })

  // Cartoon toon materials — flat cel-shaded look
  const matSuit = useMemo(() => new THREE.MeshToonMaterial({ color: '#ddd6fe' }), [])
  const matWhite = useMemo(() => new THREE.MeshToonMaterial({ color: '#f5f3ff' }), [])
  const matVisor = useMemo(() => new THREE.MeshToonMaterial({ color: '#6d28d9', transparent: true, opacity: 0.88 }), [])
  const matDetail = useMemo(() => new THREE.MeshToonMaterial({ color: '#7c3aed' }), [])
  const matOutline = useMemo(() => new THREE.MeshToonMaterial({ color: '#2e1065', side: THREE.BackSide }), [])

  // Outline helper: renders a slightly scaled-up back-face version for cartoon outline
  function Outlined({ children, scale = 1.08, mat = matOutline }: { children: React.ReactNode; scale?: number; mat?: THREE.Material }) {
    return (
      <>
        {children}
        <group scale={scale}>
          {/* clone with outline material */}
          {(children as any)}
        </group>
      </>
    )
  }

  return (
    <Float speed={2} rotationIntensity={0.08} floatIntensity={0.9}>
      <group
        ref={group}
        position={[2.2, 0.2 - descent * 6, 0]}
        scale={0.62}
      >
        {/* ── Helmet ── */}
        <mesh position={[0, 1.7, 0]} material={matSuit}>
          <sphereGeometry args={[0.52, 20, 20]} />
        </mesh>
        {/* Helmet outline */}
        <mesh position={[0, 1.7, 0]} material={matOutline} scale={1.06}>
          <sphereGeometry args={[0.52, 20, 20]} />
        </mesh>

        {/* Visor */}
        <mesh position={[0, 1.72, 0.29]} material={matVisor}>
          <sphereGeometry args={[0.38, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        </mesh>

        {/* ── Torso ── */}
        <mesh position={[0, 0.7, 0]} material={matSuit}>
          <capsuleGeometry args={[0.38, 0.7, 6, 14]} />
        </mesh>
        <mesh position={[0, 0.7, 0]} material={matOutline} scale={1.05}>
          <capsuleGeometry args={[0.38, 0.7, 6, 14]} />
        </mesh>

        {/* ── Arms ── */}
        <mesh position={[-0.62, 0.75, 0]} rotation={[0, 0, 0.45]} material={matSuit}>
          <capsuleGeometry args={[0.15, 0.6, 5, 10]} />
        </mesh>
        <mesh position={[-0.88, 0.38, 0]} material={matWhite}>
          <sphereGeometry args={[0.17, 10, 10]} />
        </mesh>

        <mesh position={[0.62, 0.75, 0]} rotation={[0, 0, -0.45]} material={matSuit}>
          <capsuleGeometry args={[0.15, 0.6, 5, 10]} />
        </mesh>
        <mesh position={[0.88, 0.38, 0]} material={matWhite}>
          <sphereGeometry args={[0.17, 10, 10]} />
        </mesh>

        {/* ── Legs ── */}
        <mesh position={[-0.22, -0.25, 0]} rotation={[0, 0, 0.1]} material={matSuit}>
          <capsuleGeometry args={[0.17, 0.65, 5, 10]} />
        </mesh>
        <mesh position={[-0.25, -0.72, 0.08]} material={matDetail}>
          <capsuleGeometry args={[0.19, 0.22, 5, 10]} />
        </mesh>

        <mesh position={[0.22, -0.25, 0]} rotation={[0, 0, -0.1]} material={matSuit}>
          <capsuleGeometry args={[0.17, 0.65, 5, 10]} />
        </mesh>
        <mesh position={[0.25, -0.72, 0.08]} material={matDetail}>
          <capsuleGeometry args={[0.19, 0.22, 5, 10]} />
        </mesh>

        {/* ── Backpack ── */}
        <mesh position={[0, 0.72, -0.46]} material={matDetail}>
          <boxGeometry args={[0.42, 0.52, 0.16]} />
        </mesh>

        {/* ── Chest panel ── */}
        <mesh position={[0, 0.78, 0.39]} material={matDetail}>
          <boxGeometry args={[0.28, 0.18, 0.05]} />
        </mesh>

        {/* ── Antenna ── */}
        <mesh position={[0.3, 2.22, 0]} material={matDetail}>
          <cylinderGeometry args={[0.025, 0.025, 0.38, 6]} />
        </mesh>
        <mesh position={[0.3, 2.44, 0]} material={matVisor}>
          <sphereGeometry args={[0.06, 8, 8]} />
        </mesh>
      </group>
    </Float>
  )
}

export function Astronaut3D() {
  const [descent, setDescent] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setDescent(Math.min(window.scrollY / window.innerHeight, 1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        {/* Flat toon lighting — bright ambient + one key light, no fill */}
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight position={[4, 6, 4]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-3, 2, 3]} intensity={2} color="#c4b5fd" />
        <AstronautMesh descent={descent} />
      </Canvas>
    </div>
  )
}
