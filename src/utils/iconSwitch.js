import { DiMongodb } from 'react-icons/di';

export default function iconSwitch(text) {
  // turn text into array
  let textArray = text.toLowerCase().split(', ');

  // list of values to check
  let checkedValues = ['mongodb', 'react', 'graphql'];

  let unmatched = [];
  let matched = [];

  textArray.forEach(tech => {
    if (
      checkedValues.some(regexp => {
        return new RegExp(regexp).test(tech);
      })
    )
      return matched.push(tech);
    else {
      return unmatched.push(tech);
    }
  });

  let array = [];
  let string = '';

  return { array, string };
}
