import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [dolarData, setDolarData] = useState(null);

  useEffect(() => {
    // Realizar la solicitud HTTP al webservice
    axios.get('https://dolar.melizeche.com/api/1.0/')
      .then(response => {
        setDolarData(response.data.dolarpy);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  if (!dolarData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}><MaterialIcons name="account-balance" size={24} color="#1E88E5" /> Banco BCP:</Text>
        <Text style={styles.text}>Compra: {dolarData.bcp.compra}</Text>
        <Text style={styles.text}>Venta: {dolarData.bcp.venta}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}><MaterialIcons name="local-atm" size={24} color="#43A047" /> Bonanza:</Text>
        <Text style={styles.text}>Compra: {dolarData.bonanza.compra}</Text>
        <Text style={styles.text}>Venta: {dolarData.bonanza.venta}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}><MaterialIcons name="store" size={24} color="#F4511E" /> Cambios Alberdi:</Text>
        <Text style={styles.text}>Compra: {dolarData.cambiosalberdi.compra}</Text>
        <Text style={styles.text}>Venta: {dolarData.cambiosalberdi.venta}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}><MaterialIcons name="attach-money" size={24} color="#8E24AA" /> Cambios Chaco:</Text>
        <Text style={styles.text}>Compra: {dolarData.cambioschaco.compra}</Text>
        <Text style={styles.text}>Venta: {dolarData.cambioschaco.venta}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  loadingText: {
    fontSize: 20,
    color: '#666',
  },
});

export default App;
