import { Button, Text, View } from 'tamagui';
import { usePressCount, incrementCount } from '@/hooks/useCount';

export default function HelloScrren() {
	const pressCount = usePressCount()
	
	function onPress(){
		incrementCount(2)
	}

	return (
		<View flex={1} alignItems="center" justifyContent="center">
			<Text fontSize={'$16'}>Hello World!</Text>
			<Button onPress={onPress}>
				<Text>Add: {pressCount.count}</Text>
			</Button>
		</View>
	);
}
