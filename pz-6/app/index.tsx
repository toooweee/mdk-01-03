import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function Index() {
  const [expression, setExpression] = useState('');
  const [display, setDisplay] = useState('0');

  const appendToExpression = (value) => {
    setExpression(prev => {
      if (display !== expression && !isNaN(display)) {
        return value;
      }
      if (prev === '0' && value !== '.') {
        return value;
      }
      return prev + value;
    });
    setDisplay(prev => prev === '0' ? value : prev + value);
  };

  const appendOperator = (operator) => {
    setExpression(prev => {
      if (['+', '-', '*', '/', '%'].includes(prev.slice(-1))) {
        return prev.slice(0, -1) + operator;
      }
      return prev + operator;
    });
    setDisplay(prev => prev + operator);
  };

  const calculate = () => {
    if (expression) {
      try {
        const result = eval(expression.replace('%', '/100'));
        setDisplay(result.toString());
        setExpression(result.toString());
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    }
  };

  const clear = () => {
    setExpression('');
    setDisplay('0');
  };

  const clearChar = () => {
    const newExpression = expression.slice(0, -1);
    setExpression(newExpression)
    setDisplay(newExpression);
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="AC" color="#ff9500" onPress={clear} />
          <Button title="🔚" color="#ff9500" onPress={() => clearChar()} />
          <Button title="%" color="#ff9500" onPress={() => appendOperator('%')} />
          <Button title="/" color="#ff9500" onPress={() => appendOperator('/')} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => appendToExpression('7')} />
          <Button title="8" onPress={() => appendToExpression('8')} />
          <Button title="9" onPress={() => appendToExpression('9')} />
          <Button title="*" color="#ff9500" onPress={() => appendOperator('*')} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => appendToExpression('4')} />
          <Button title="5" onPress={() => appendToExpression('5')} />
          <Button title="6" onPress={() => appendToExpression('6')} />
          <Button title="-" color="#ff9500" onPress={() => appendOperator('-')} />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => appendToExpression('1')} />
          <Button title="2" onPress={() => appendToExpression('2')} />
          <Button title="3" onPress={() => appendToExpression('3')} />
          <Button title="+" color="#ff9500" onPress={() => appendOperator('+')} />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => appendToExpression('0')} />
          <Button title="." onPress={() => appendToExpression('.')} />
          <Button title="=" color="#ff9500" onPress={calculate} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#000',
  },
  displayText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '200',
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 1,
  },
  zeroButton: {
    flex: 2,
    justifyContent: 'center',
  },
});