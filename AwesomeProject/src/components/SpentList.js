import React, { useEffect, useState } from 'react'

import { View, Text, FlatList, SafeAreaView } from 'react-native'

export default props => {

    const [spents, setSpents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            fetch("http://api.suelyn.com.br/spents?dateFrom=2020-01-01&dateUntil=2022-12-31")
                .then(res => res.json())
                .then(data => {
                    setSpents(data);
                });
        }

        fetchData();

    }, [])


    return (
        <SafeAreaView>
            <FlatList
                data={spents}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={
                        {
                            flexGrow: 1,
                            backgroundColor: item.value < 50 ? '#00ff00' : '#ff0000',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            padding: 10,
                        }
                    }>
                        <Text>{item.category}</Text>
                        <Text>R${item.value}</Text>
                    </View>
                }
            />
        </SafeAreaView>
    )
}
