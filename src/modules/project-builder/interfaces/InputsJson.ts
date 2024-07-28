interface InputsJson {
  [inputName: string]:
    | [number, string | [number, number | string]]
    | [number, string | [number, number | string], [number, number | string]];
}

export default InputsJson;
