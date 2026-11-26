import React from 'react';
import { Box } from '@react-three/drei';

export default function Track({ scene }) {
  const colorMap = {
    City: '#8fa',
    Park: '#6c3',
    Coastal: '#4af',
  };
  const color = colorMap[scene] || '#999';
  return (
    <Box args={[100, 0.5, 10]} position={[0, 0, 0]}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}
