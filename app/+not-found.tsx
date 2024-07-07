import { Stack } from 'expo-router';
import { View, Text } from 'tamagui';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: '404 - not found' }} />
			<View flex={1} alignItems="center" justifyContent="center">
				<Text fontSize={'$16'}>404</Text>
				<Text fontSize={'$8'}>Page not found</Text>
			</View>
		</>
	);
}
