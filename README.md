React Native AsyncStorage (WIP)
-------------------------------

An abstraction on top of react-native's AsyncStorage.

####TODO
 - Tests
 - Add few more methids:
   - `update(id:number|data:Object, data?:Object)`
   - `remove(id:number|Array)`
   - `find(criteria?:Object)`
   - `clear()`

####Simple example

    ReactNativeAsyncStorage.using('model_name')
      .then((model) => {
        model.get(id);
        model.find();
        model.add({field1: 'value'});
        model.add([{field2: 'value'}, {field3: 'value'}]);
        model.save()
          .then(() => {
            console.log('Model has been saved');
          })
          .catch((err) => console.log('Oops...', err));
      })
      .catch((err) => console.log('Oops...', err));
