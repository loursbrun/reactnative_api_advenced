import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import { getFilmsFromApiWithSearchedText } from './API/TMDBAApi'
import FilmItem from './Components/FilmItem'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { films: [] }
    }


_loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => this.setState({ films: data.results }))
}

  render() {
    return (
      <View style={styles.container}>
         <Button style={{ height: 50 }} title="Rechercher" onPress={() => this._loadFilms()} />
         <FlatList style={{ flex: 1, width: 360}}
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


