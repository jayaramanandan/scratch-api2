/*type InputJsonArray =
  | [number, string | [number, number | string]]
  | [number, string | [number, number | string], [number, number | string]];
*/

type InputJsonArray =
  | [1, string | [number, string]]
  | [1 | 3, string | [number, string], null | string | [number, string]];

interface InputsJson {
  [inputName: string]: InputJsonArray;
}

export { InputsJson, InputJsonArray };
