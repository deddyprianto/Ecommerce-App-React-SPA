import React, { useState, useDeferredValue } from "react";

const List = ({ strings }) => {
  // pas pakai ini, ketikan di input muncul bisa lebih dulu
  const deferred = useDeferredValue(strings);
  return deferred.map((str) => <p>{str}</p>);
  // pas pakai ini, ketikan di input harus nunggu perubahan list nya
  // return strings.map((str) => <p>{str}</p>);
};

const generateList = (prefix = "") => {
  let result = [];
  for (let i = 0; i < 20000; i++) {
    result.push(prefix + i);
  }
  return result;
};

export default function App() {
  const [prefix, setPrefix] = useState("");

  const strings = generateList(prefix);
  return (
    <div className="mt-[10%]">
      <input onChange={(a) => setPrefix(a.target.value)} value={prefix} />
      <List strings={strings} />
    </div>
  );
}
