import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export const useRaceStore = create(
  subscribeWithSelector(set => ({
    raceConfig: {
      name: '',
      scene: '',
      weather: '',
      runnerCount: 0,
    },
    runners: [],
    setRaceConfig: config => set({ raceConfig: config }),
    addRunner: runner => set(state => ({ runners: [...state.runners, runner] })),
  }))
);

// Persist to localStorage on every change and rehydrate on load
export const persistStore = () => {
  const stored = localStorage.getItem('raceStore');
  if (stored) {
    try {
      const data = JSON.parse(stored);
      useRaceStore.setState(data);
    } catch (e) {
      // ignore parse errors
    }
  }
  useRaceStore.subscribe(
    state => JSON.stringify(state),
    json => localStorage.setItem('raceStore', json)
  );
};
