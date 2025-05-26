import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';

interface PoemAnimationProps {
  speed?: number;
}

// Helper for random float in range
function randFloat(a: number, b: number) {
  return a + Math.random() * (b - a);
}

// Comet type
interface Comet {
  id: number;
  position: THREE.Vector3;
  direction: THREE.Vector3;
  speed: number;
  life: number;
  maxLife: number;
  rotation: number;
}

export default function PoemAnimation({ speed = 1 }: PoemAnimationProps) {
  const ref = useRef<THREE.Points>(null);
  // Slower star movement
  const starSpeed = speed * 0.25;

  // Generate random points in a sphere
  const count = 5000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    random.inSphere(positions, { radius: 1.5 });
    return positions;
  }, []);

  // Comets state
  const [comets, setComets] = useState<Comet[]>([]);
  const cometId = useRef(0);
  const cometTimer = useRef(0);

  useFrame((state, delta) => {
    // Rotate stars slowly
    if (ref.current) {
      ref.current.rotation.x -= (delta / 10) * starSpeed;
      ref.current.rotation.y -= (delta / 15) * starSpeed;
    }
    // Comet logic
    cometTimer.current -= delta;
    if (cometTimer.current <= 0) {
      // Spawn a new comet randomly every 2-6 seconds
      cometTimer.current = randFloat(2, 6);
      // Comet starts on the sphere surface, flies through the center
      const theta = randFloat(0, Math.PI * 2);
      const phi = randFloat(0, Math.PI);
      const start = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * 1.5,
        Math.cos(phi) * 1.5,
        Math.sin(phi) * Math.sin(theta) * 1.5
      );
      // Direction: toward the center, with a little random offset
      const dir = start.clone().negate().add(new THREE.Vector3(randFloat(-0.2,0.2), randFloat(-0.2,0.2), randFloat(-0.2,0.2))).normalize();
      setComets((prev) => [
        ...prev,
        {
          id: cometId.current++,
          position: start,
          direction: dir,
          speed: randFloat(3.5, 5.5),
          life: 0,
          maxLife: randFloat(0.7, 1.2),
          rotation: randFloat(0, Math.PI * 2),
        },
      ]);
    }
    // Move comets
    setComets((prev) =>
      prev
        .map((comet) => {
          const newPos = comet.position.clone().add(comet.direction.clone().multiplyScalar(comet.speed * delta));
          return { ...comet, position: newPos, life: comet.life + delta };
        })
        .filter((comet) => comet.life < comet.maxLife)
    );
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Stars in a sphere around the origin */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#e0e6f0"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Comets as glowing streaks */}
      {comets.map((comet) => (
        <mesh key={comet.id} position={comet.position.toArray()} rotation={[0, 0, comet.rotation]}>
          <planeGeometry args={[0.04, 0.22]} />
          <meshBasicMaterial
            transparent
            opacity={0.7}
            color="#fffbe8"
            blending={THREE.AdditiveBlending}
          >
            {/* Simulate a glowing streak with a gradient texture */}
          </meshBasicMaterial>
        </mesh>
      ))}
    </group>
  );
} 