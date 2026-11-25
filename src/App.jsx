import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import RaceSetup from './components/RaceSetup';
import CanvasScene from './components/CanvasScene';

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI Marathon Caster (MVP)
      </Typography>

      <Box display="flex" gap={4}>
        {/* 左側表單 */}
        <Box flex={1}>
          <RaceSetup />
        </Box>

        {/* 右側 3D 畫布（暫時空白） */}
        <Box flex={1} sx={{ height: '400px' }}>
          <CanvasScene />
        </Box>
      </Box>
    </Container>
  );
}
