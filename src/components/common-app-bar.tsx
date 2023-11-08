import React from 'react';
import {Appbar} from 'react-native-paper';

type CommonAppBarProps = {
  title: string;
};

export default function CommonAppBar({title}: CommonAppBarProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
