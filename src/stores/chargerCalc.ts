import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


interface ChargerCalcStore {
    chargerWatts: number;
    batteryMah: number;
    cellCount: number;

    setChargerWatts: (watts: number) => void;
    setBatteryMah: (mah: number) => void;
    setCellCount: (count: number) => void;
}

export const useChargerCalcStore = create<ChargerCalcStore>()(persist((set, get) => ({
    chargerWatts: 0,
    batteryMah: 0,
    cellCount: 0,

    setChargerWatts: (watts: number) => set({ chargerWatts: watts }),
    setBatteryMah: (mah: number) => set({ batteryMah: mah }),
    setCellCount: (count: number) => set({ cellCount: count }),
}), {
    name: "pitchup-charger-calc",
    storage: createJSONStorage(() => localStorage),
}));