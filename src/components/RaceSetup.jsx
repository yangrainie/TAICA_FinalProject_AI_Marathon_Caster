import React, { useState } from 'react';
import { TextField, MenuItem, Button, Stack } from '@mui/material';
import { useRaceStore } from '../store/useRaceStore';

const scenes = ['City', 'Park', 'Coastal'];
const weathers = ['Sunny', 'Rainy', 'Cloudy'];

export default function RaceSetup() {
  // Store actions
  const setRaceConfig = useRaceStore(state => state.setRaceConfig);
  const startRace = useRaceStore(state => state.startRace);

  const [form, setForm] = useState({
    name: '',
    scene: scenes[0],
    weather: weathers[0],
    runnerCount: 5,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setRaceConfig(form);
  };

  const handleStart = () => {
    if (!form.name) {
      alert('請先輸入比賽名稱');
      return;
    }
    startRace(); // 設定 isRunning 為 true
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Race Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField select label="Scene" name="scene" value={form.scene} onChange={handleChange}>
          {scenes.map(s => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </TextField>
        <TextField select label="Weather" name="weather" value={form.weather} onChange={handleChange}>
          {weathers.map(w => (
            <MenuItem key={w} value={w}>{w}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Number of Runners"
          name="runnerCount"
          type="number"
          inputProps={{ min: 1, max: 50 }}
          value={form.runnerCount}
          onChange={handleChange}
        />
        {/* 按鈕排成同一行 */}
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" color="primary">
            儲存設定
          </Button>
          <Button
            type="button"
            onClick={handleStart}
            variant="contained"
            color="secondary"
          >
            開始比賽
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
