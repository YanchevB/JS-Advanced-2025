function cars(input) {
  const objects = {};
  const parents = {};

  for (let entry of input) {
    let [command, name, param2, param3] = entry.split(' ');

    if (command === 'create') {
      objects[name] = {};

      if (param2 === 'inherit') {
        parents[name] = param3
      }

    } else if (command === 'set') {
      objects[name][param2] = param3;

    } else if (command === 'print') {
      const result = {};
      
      collectProps(name);

      const output = Object.entries(result)
        .map(([k, v]) => `${k}:${v}`)
        .join(',');

      console.log(output);

      function collectProps(name) {
        Object.assign(result, objects[name]);
        
        let p = parents[name];
        while(p) {
          for (const [k, v] of Object.entries(objects[p])) {
            if (!(k in result)) {
              result[k] = v;
            }
          }
          p = parents[p];
        }
      }
    }
  }
}


cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2'
]);