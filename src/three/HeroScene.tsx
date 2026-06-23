import { useRef, useMemo, useEffect, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Constants ─────────────────────────────────────────────── */
const GRID_SIZE = 32
const GRID_DIVS = 22
const GRID_STEP = GRID_SIZE / GRID_DIVS
const PARTICLE_COUNT = 1200

/* ── Grid floor ────────────────────────────────────────────── */
function GridFloor() {
  const groupRef = useRef<THREE.Group>(null!)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const verts: number[] = []
    for (let i = 0; i <= GRID_DIVS; i++) {
      const pos = -GRID_SIZE / 2 + i * GRID_STEP
      verts.push(pos, 0, -GRID_SIZE / 2, pos, 0, GRID_SIZE / 2)
      verts.push(-GRID_SIZE / 2, 0, pos, GRID_SIZE / 2, 0, pos)
    }
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3))
    return geo
  }, [])

  useFrame((_, delta) => {
    const g = groupRef.current
    if (!g) return
    g.position.z += delta * 0.5
    if (g.position.z >= GRID_STEP) g.position.z = 0
  })

  return (
    <group ref={groupRef} position={[0, -1.6, 0]}>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color="#1E40AF" transparent opacity={0.28} />
      </lineSegments>
      {/* Brighter accent grid on section lines */}
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color="#3B82F6" transparent opacity={0.10} />
      </lineSegments>
    </group>
  )
}

/* ── Floating particles ─────────────────────────────────────── */
function Particles() {
  const ref = useRef<THREE.Points>(null!)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 38
      pos[i * 3 + 1] = Math.random() * 12 - 1.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 38
      const isCyan = Math.random() > 0.45
      col[i * 3 + 0] = isCyan ? 34 / 255 : 59 / 255
      col[i * 3 + 1] = isCyan ? 211 / 255 : 130 / 255
      col[i * 3 + 2] = 1.0
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    return geo
  }, [])

  useFrame(({ clock }) => {
    const p = ref.current
    if (!p) return
    const t = clock.getElapsedTime()
    p.rotation.y = t * 0.016
    p.position.y = Math.sin(t * 0.18) * 0.15
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.032}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  )
}

/* ── Camera parallax ────────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [onMouseMove])

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 1.2, 0.035)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2.8 + mouse.current.y * 0.4, 0.035)
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* ── Exported hero scene ────────────────────────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 2.8, 10], fov: 58 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <CameraRig />
      <GridFloor />
      <Particles />
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 6, 0]} color="#3B82F6" intensity={4} distance={22} />
      <pointLight position={[-9, 3, -9]} color="#22D3EE" intensity={2.5} distance={18} />
    </Canvas>
  )
}
