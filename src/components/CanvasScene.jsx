import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import Track from './Track';
import { useRaceStore } from '../store/useRaceStore';
import Runner from './Runner';

export default function CanvasScene() {
  const { scene, runners, isRunning } = useRaceStore(state => ({
    scene: state.raceConfig?.scene,
    runners: state.runners,
    isRunning: state.isRunning,
  }));

  return (
    <Canvas camera={{ position: [0, 8, 20], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sky sunPosition={[100, 20, 100]} />   {/* 可根據 weather 調整 */}
      <Track scene={scene} />
      {isRunning && runners.map(r => (
        <Runner key={r.id} {...r} />
      ))}
      <OrbitControls />
    </Canvas>
  );
}s