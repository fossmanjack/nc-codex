import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native';
import {
	useState
} from 'react';

export default function TextEditor(props) {
	const [ ht, setHeight ] = useState(0);
	const [ fht, setFullHeight ] = useState(0);
	const [ wd, setWidth ] = useState(0);
	const [ currentText, setCurrentText ] = useState('');

	return (
		<View
			style={styles.page}
			onLayout={(ev) => {
				console.log('Layout:', ev.nativeEvent);
				const fullHeight = ev.nativeEvent.layout.height - 80;
				setHeight(fullHeight);
				setFullHeight(fullHeight);
				setWidth(ev.nativeEvent.layout.width);
			}}
		>
			<ScrollView keyboardDismissMode='interactive'>
				<TextInput
					multiline={true}
					onChangeText={text => setCurrentText(text)}
					value={currentText}
					style={[ styles.input, { height: ht }]}
					autoFocus={true}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		alignItems: 'stretch',
	},
	input: {
		padding: 20,
		paddingTop: 0,
		fontSize: 18,
		fontFamily: 'System',
		textAlign: 'left',
		textAlignVertical: 'top'
	},
});
