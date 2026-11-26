import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

export default function Runner({ id, color, distance }) {
  const meshRef = useRef();

  // 每幀根據 distance 更新 X 位置，跑道長度假設為 100，中心在 0
  useFrame(() => {
    if (meshRef.current) {
      // 計算位置，使跑道中心在 0，跑者向右移動
      meshRef.current.position.set(distance - 50, 0.5, 0);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
}
