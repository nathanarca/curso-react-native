import React from 'react';

import { StyleSheet, View } from 'react-native';

import Field from './Field';

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field
                {...field}
                key={c}
                onOpenField={() => props.onOpenField(r, c)}
                onSelect={() => props.onSelectField(r, c)}
            />;
        });
        return <View style={{ flexDirection: 'row' }} key={r}>{columns}</View >;

    });

    return <View style={styles.container}>{rows}</View>;
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#eee'
    }
});