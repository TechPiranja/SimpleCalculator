import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState(0);
  const [operationNumber, setOperationNumber] = useState('');
  const [operationType, setOperationType] = useState('');

  useEffect(() => {
    clearInput();
  }, [result]);

  function clearInput() {
    setOperationNumber('');
    setOperationType('');
  }

  function clearAll() {
    setResult(0);
    clearInput();
  }

  function calculateResult() {
    setResult(eval(result + operationType + parseFloat(operationNumber)));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titleText}>Simple React Native Calculator</Text>

      <View style={styles.bgContainer}>
        <View style={styles.resultContainer}>
          <TouchableOpacity onPress={clearAll} style={styles.clearBtn}>
            <Text style={styles.clearText}>AC</Text>
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 40, textAlign: 'right' }}>
            {result}
          </Text>
        </View>
        <Text style={styles.evaluationText}>
          {operationNumber || operationType
            ? operationType + ' ' + operationNumber
            : ''}
        </Text>
      </View>

      <View style={styles.numPadContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: true,
            maxWidth: 280
          }}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'].map(
            (num) => (
              <TouchableOpacity
                onPress={() => setOperationNumber(operationNumber + num)}
                style={styles.button}>
                <Text style={styles.text}>{num}</Text>
              </TouchableOpacity>
            )
          )}
          <TouchableOpacity onPress={calculateResult} style={styles.button}>
            <Text style={styles.text}>=</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
          {['+', '-', '*', '/'].map((o) => (
            <TouchableOpacity
              onPress={() => setOperationType(o)}
              style={styles.opButton}>
              <Text style={styles.text}>{o}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: '#594545',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    width: '90%'
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  numPadContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: true,
    margin: 10,
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#815B5B',
    borderRadius: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF8EA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff'
  },
  clearText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF8EA'
  },
  titleText: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
    color: '#815B5B'
  },
  button: {
    backgroundColor: '#9E7676',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 70,
    height: 70
  },
  clearBtn: {
    borderRadius: 10,
    float: 'left',
    borderColor: '#FFF8EA',
    borderWidth: 1,
    padding: 10
  },
  opButton: {
    backgroundColor: '#9E7676',
    padding: 10,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 70,
    height: 70
  },
  evaluationText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'right',
    height: 20
  }
});
