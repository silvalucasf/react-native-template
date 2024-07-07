import { Button, Text, View } from 'tamagui';
import { useCount } from './_layout';
import { usePressCount, incrementCount } from '@/hooks/useCount';

export default function HomeScrren() {
	const pressCount = usePressCount()

	function onPress(){
		incrementCount(1)
	}

	return (
		<View flex={1} alignItems="center" justifyContent="center">
			<Text fontSize={'$16'}>Home</Text>
			<Button onPress={onPress}><Text>Add: {pressCount.count}</Text></Button>
		</View>
	);
}
