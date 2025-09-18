function addAndRemoveElements(commands) {
  let result = [1];
  let currentNum = 1;
  for (let i = 1; i < commands.length; i++) {
    currentNum++
    if (commands[i] === 'add') {
      result.push(currentNum);
    } else {
      result.pop(currentNum)
    }
  }
  result.length > 0 ? console.log(result.join(`\n`)) : console.log('Empty');
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);