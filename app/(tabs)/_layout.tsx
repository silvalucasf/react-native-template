import { Tabs } from 'expo-router';
import { create } from 'zustand';

type TPressCount = {
	pressCount: number,
	incrementCount: (value: number) => void
}

export const useCount = create<TPressCount>()((set) => ({
	pressCount: 0,
	incrementCount: (value) => set((state) => ({pressCount: state.pressCount + value}))
}))

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
				}}
			/>
			<Tabs.Screen
				name="hello"
				options={{
					title: 'Hello',
				}}
			/>
		</Tabs>
	);
}
