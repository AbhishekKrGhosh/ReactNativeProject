// data/detailsData.js
export const details = {
  code: `
<TouchableOpacity
    style={{
        backgroundColor: '#28A745',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }}
    onPress={() => Alert.alert('Button Pressed!')}>
        <Text
            style={{
                color: '#FFF',
                fontSize: 16,
                fontWeight: '600'
            }}>
        </Text>
</TouchableOpacity>
`,
  description:
    'This is a beautiful React Native button created using TouchableOpacity. It has rounded corners, a shadow for elevation, and a green background. When pressed, it triggers an Alert saying "Button Pressed!"',
};
