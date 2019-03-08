import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { ChatApp } from '../ChatApp';

const messages = [
  {
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
    },
  },
];

it('should render <ChatApp/> and compare with snapshot', () => {
  const tree = renderer
    .create(
      <ChatApp
        messages={messages}
        onSend={() => {}}
        user={{
          _id: 1,
        }}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
