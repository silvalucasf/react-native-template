import '../tamagui-web.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { useFonts } from 'expo-font'

import { tamaguiConfig } from '../tamagui.config';
import { useEffect } from 'react';
export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	  })

	useEffect(() => {
	if (loaded) {
		// can hide splash screen here
	}
	}, [loaded])
	
	if (!loaded) {
		return null
	}
	
	return (
		<TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="+not-found" />
				</Stack>
			</ThemeProvider>
		</TamaguiProvider>
	);
}
