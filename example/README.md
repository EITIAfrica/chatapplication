## Run the example

```
git clone https://github.com/EITIAfrica/chatapplication
cd chatapplication/example
npm install
react-native run-ios
```

## Development helper

Normally, after a code change to chatapplication src files, you must remove the node_modules/chatapplication directory and npm install. The react-native packager wont follow symlinks.

To assist development, this command watches and rsyncs changes:

```
npm run sync
```

Leave a terminal open running this command when running the Example app and making chatapplication src changes.


Development helper inspired by [@joenoon's commit](https://github.com/aksonov/react-native-router-flux/commit/ba85007a36b1d317e9114b9cd46086f4aba9d142)
