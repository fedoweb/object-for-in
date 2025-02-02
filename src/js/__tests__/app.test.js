import orderByProps from '../app';

test.each([
  [
    {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
    ["name", "level"],
    [{key: "name", value: "мечник"}, {key: "level", value: 2}, {key: "attack", value: 80}, {key: "defence", value: 40}, {key: "health", value: 10}]
  ],
  [
    {name: "мечник", health: 10, level: 2, attack: 80, defence: 40},
    [],
    [{key: "attack", value: 80}, {key: "defence", value: 40}, {key: "health", value: 10}, {key: "level", value: 2}, {key: "name", value: "мечник"}]
  ],
  [
    {name: 'мечник', health: 10, level: 2},
    ["name", "level", "health"],
    [{key: "name", value: "мечник"}, {key: "level", value: 2}, {key: "health", value: 10}]
  ],
  [
    {},
    ["name", "level"],
    []
  ]
])('testing function orderByProps',(obj, arr, result) => {
  expect(orderByProps(obj, arr)).toEqual(result);
})