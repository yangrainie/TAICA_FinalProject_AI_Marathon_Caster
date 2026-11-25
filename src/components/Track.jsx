import React from 'react';
import { useThree } from '@react-three/fiber';
import { Box } from '@react-three/drei';

export default function Track({ scene }) {
  // 根據 scene 變更材質/貼圖，簡化起見先用顏色區分
  const colorMap = {
    City: 'rgb(199, 140, 227)',
    Park: '#6c3',
    Coastal: '#4af',
  };
  return (
    <Box args={[100, 0.5, 10]} position={[0, 0, 0]}>
      <meshStandardMaterial color={colorMap[scene] ?? '#999'} />
    </Box>
  );
}