'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Crystal({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const innerRef = useRef<THREE.Mesh>(null)
  const outerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!innerRef.current || !outerRef.current) return
    innerRef.current.rotation.x = state.clock.elapsedTime * 0.14
    innerRef.current.rotation.y = state.clock.elapsedTime * 0.2
    outerRef.current.rotation.x = -state.clock.elapsedTime * 0.09
    outerRef.current.rotation.y = state.clock.elapsedTime * 0.27
  })

  const solidMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#7c3aed',
    roughness: 0.02,
    metalness: 0.75,
    transparent: true,
    opacity: 0.65,
  }), [])

  const wireMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#c4b5fd',
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  }), [])

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.9}>
      <group position={position} scale={scale}>
        <mesh ref={innerRef} material={solidMat}>
          <icosahedronGeometry args={[0.88, 1]} />
        </mesh>
        <mesh ref={outerRef} material={wireMat}>
          <icosahedronGeometry args={[1.0, 1]} />
        </mesh>
      </group>
    </Float>
  )
}

function Ring({ position, rotation = [0, 0, 0] as [number, number, number] }: {
  position: [number, number, number]
  rotation?: [number, number, number]
}) {
  const ref = useRef<THREE.Mesh>(null)
  const initRot = useRef(rotation)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.22
    ref.current.rotation.x = initRot.current[0] + Math.sin(state.clock.elapsedTime * 0.28) * 0.08
  })

  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#a78bfa',
    roughness: 0.0,
    metalness: 0.9,
    emissive: new THREE.Color('#6d28d9'),
    emissiveIntensity: 0.25,
  }), [])

  return (
    <Float speed={1.8} floatIntensity={0.5}>
      <mesh ref={ref} position={position} rotation={rotation} material={mat}>
        <torusGeometry args={[1.05, 0.055, 16, 80]} />
      </mesh>
    </Float>
  )
}

function Gem({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.9
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
  })

  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#ddd6fe',
    roughness: 0.0,
    metalness: 0.4,
    emissive: new THREE.Color('#8b5cf6'),
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.88,
  }), [])

  return (
    <Float speed={2.4} floatIntensity={1.1} rotationIntensity={0.5}>
      <mesh ref={ref} position={position} material={mat}>
        <octahedronGeometry args={[0.32, 0]} />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const count = 160
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 13
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    return arr
  }, [])

  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.025
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#e0d4ff" size={0.045} transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

export function HeroScene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 48 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.5} color="#ddd6fe" />
        <pointLight position={[5, 4, 4]} intensity={8} color="#8b5cf6" />
        <pointLight position={[-4, -3, 2]} intensity={5} color="#a78bfa" />
        <spotLight position={[0, 7, 5]} intensity={10} color="#ffffff" angle={0.45} penumbra={0.6} />

        <Crystal position={[2.9, 0.4, 0]} scale={1.0} />
        <Crystal position={[-2.7, -0.7, -1]} scale={0.62} />

        <Ring position={[2.9, 0.4, 0]} rotation={[Math.PI / 3, 0, 0]} />
        <Ring position={[-2.7, -0.7, -1]} rotation={[0.3, Math.PI / 4, Math.PI / 5]} />

        <Gem position={[0.9, 2.5, 0.4]} />
        <Gem position={[-1.1, -2.3, 0.6]} />
        <Gem position={[-3.6, 1.6, -0.4]} />
        <Gem position={[3.5, -1.8, 0.2]} />

        <ParticleField />
      </Canvas>
    </div>
  )
}
