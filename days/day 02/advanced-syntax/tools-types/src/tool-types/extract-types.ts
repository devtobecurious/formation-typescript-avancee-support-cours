type TResult = Extract<'a' | 'b' | 'c', 'a' | 'e'> // TResult vaut 'a'

type GetFunction = Extract<string | number | (() => void), () => void>

type Person = { name: string; age: number };
type Employee = { name: string; salary: number };
type SharedProperties = Extract<Person | Employee, { name: string }>;

const personOrEmployee: SharedProperties = { age: 1, name: '', salary: 10 }


type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T2 = Extract<Shape, { kind: "circle" }>


type APIResponse =
  | { status: 200; data: { id: number; name: string } }
  | { status: 404; error: string }
  | { status: 500; error: string };

type SuccessResponse = Extract<APIResponse, { status: 200 }>;
// Résultat : { status: 200; data: { id: number; name: string } }

const response: SuccessResponse = {
  status: 200,
  data: { id: 1, name: 'Alice' },
}