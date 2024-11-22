/* eslint-disable @typescript-eslint/no-unused-vars */
type MyTuple = [string, number, boolean];

const tuple: MyTuple = ["Hello", 42, true];

type ExtendedTuple = [string, ...number[]];

const tuple2: ExtendedTuple = ["Hello", 1, 2, 3];

// Récupération du premier type du tuple
type First<T extends unknown[]> = T extends [infer First, ...unknown[]] ? First : never;
type Example = First<[string, number, boolean]>;


//  Combinaison dynamique de tuples
type Push<T extends unknown[], V> = [...T, V];
type Example2 = Push<[string, number], boolean>;
const tuple3: Example2 = ["Hello", 42, true];


type Reverse<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : [];
  type ExampleToReverse = Reverse<[string, number, boolean]>;

  const tuple4: ExampleToReverse = [true, 1, 'coucou']
