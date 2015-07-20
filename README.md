React Native AsyncStorage (WIP)
-------------------------------

An abstraction on top of react-native's AsyncStorage.  
Not tested in the production. Use it on your risk.  
PR is awesome :)

####Installation
    npm install react-native-async-storage

####Methods
 - [get(id)](src/model.js#L26)
 - [add(entry)](src/model.js#L34)
 - [update(id, data)](src/model.js#L52)
 - [remove(id)](src/model.js#L72)
 - [clear()](src/model.js#L87)
 - [find(criteria)](src/model.js#L98)

####Simple example

    ReactNativeAsyncStorage.using('model_name')
      .then((model) => {
        model.get(id);
        model.find();
        model.add({field1: 'value'});
        model.add([{field2: 'value'}, {field3: 'value'}]);
        
        // Save changes when all manipulations are done.
        model.save()
          .then(() => {
            console.log('Model has been saved');
          })
          .catch((err) => console.log('Oops...', err));
      })
      .catch((err) => console.log('Oops...', err));
