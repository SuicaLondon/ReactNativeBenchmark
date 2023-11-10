import {differenceInMilliseconds} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BinaryTree, fibonacci} from './CalculationTools';

const calculateTimes = 10000;

export default function CalculationBenchmark() {
  const [calculationTime1, setCalculationTime1] = useState<number>();
  const [calculationTime2, setCalculationTime2] = useState<number>();
  const [calculationTime3, setCalculationTime3] = useState<number>();
  const [calculationTime4, setCalculationTime4] = useState<number>();
  const [calculationTime5, setCalculationTime5] = useState<number>();
  const [calculationTime6, setCalculationTime6] = useState<number>();
  const [calculationTime7, setCalculationTime7] = useState<number>();
  const [calculationTime8, setCalculationTime8] = useState<number>();

  useEffect(() => {
    loop((sum: number, i: number) => {
      return (sum += i);
    }, setCalculationTime1);
    loop((sum: number, i: number) => {
      return (sum -= i);
    }, setCalculationTime2);
    loop((sum: number, i: number) => {
      return (sum *= i);
    }, setCalculationTime3);
    loop((sum: number, i: number) => {
      return (sum /= i);
    }, setCalculationTime4);
    calculate((num: number) => fibonacci(num), setCalculationTime5);
    loop((_, _2) => new Date().getTime(), setCalculationTime6);
    let tree = generateTree(calculateTimes, setCalculationTime7);
    tree = searchTree(tree, 7624, setCalculationTime8);
    console.log(tree);
  }, []);

  const calculate = (
    callback: (times: number) => void,
    setState: React.Dispatch<React.SetStateAction<number | undefined>>,
  ) => {
    const startTime = new Date();
    callback(50);
    const endTime = new Date();
    const ms = differenceInMilliseconds(endTime, startTime);
    setState(ms);
  };

  const loop = (
    callback: (sum: number, index: number) => number,
    setState: React.Dispatch<React.SetStateAction<number | undefined>>,
  ) => {
    let sum = 0;
    const startTime = new Date();
    for (let i = 0; i < calculateTimes; i++) {
      sum = callback(sum, i);
    }
    const endTime = new Date();
    const ms = differenceInMilliseconds(endTime, startTime);
    setState(ms);
  };

  const generateTree = (
    length: number,
    setState: React.Dispatch<React.SetStateAction<number | undefined>>,
  ) => {
    const tree = new BinaryTree();
    const startTime = new Date();
    for (let i = 0; i < length; i++) {
      tree.insertValue(i);
    }
    const endTime = new Date();
    const ms = differenceInMilliseconds(endTime, startTime);
    setState(ms);
    return tree;
  };

  const searchTree = (
    tree: BinaryTree,
    value: number,
    setState: React.Dispatch<React.SetStateAction<number | undefined>>,
  ) => {
    const startTime = new Date();
    tree.containsValue(value);
    const endTime = new Date();
    const ms = differenceInMilliseconds(endTime, startTime);
    setState(ms);
    return tree;
  };

  return (
    <View>
      <Text>Calculation</Text>
      <Text>
        Add {calculateTimes} times: {calculationTime1}
      </Text>
      <Text>
        Minus {calculateTimes} times: {calculationTime2}
      </Text>
      <Text>
        Times {calculateTimes} times: {calculationTime3}
      </Text>
      <Text>
        Divide {calculateTimes} times: {calculationTime4}
      </Text>
      <Text>Fib 50 times: {calculationTime5}</Text>
      <Text>
        Create instance of now {calculateTimes} nodes: {calculationTime6}
      </Text>
      <Text>
        Create binary tree with {calculateTimes} nodes: {calculationTime7}
      </Text>
      <Text>Search binary tree with at value 7624: {calculationTime8}</Text>
    </View>
  );
}
