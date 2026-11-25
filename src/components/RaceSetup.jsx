import React, { useState } from 'react';
import { TextField, MenuItem, Button, Stack } from '@mui/material';
import { useRaceStore } from '../store/useRaceStore';

const scenes = ['City', 'Park', 'Coastal'];
const weathers = ['Sunny', 'Rainy', 'Cloudy'];

export default function RaceSetup() {
  const setRaceConfig = useRaceStore(state => state.setRaceConfig);
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

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField label="Race Name" name="name" value={form.name} onChange={handleChange} required />
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
        <TextField label="Number of Runners" name="runnerCount" type="number" inputProps={{ min: 1, max: 50 }}
          value={form.runnerCount} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary">Save Race Config</Button>
      </Stack>
    </form>
  );
}
