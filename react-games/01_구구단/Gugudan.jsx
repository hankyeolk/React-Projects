const React = require("react");
const { useState, useRef } = React;

const Gugudan = () => {
  // hooks에서는 스테이트를 분리해서 사용
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault;

    if (parseInt(value) === first * second) {
      setResult("정답: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };
  const onChange = (e) => {
    // hooks에서는 setState 대신 setValue처럼
    // 비구조화 할당에 사용된 변수로 해당 state요소를 변경해준다.
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="number" value={value} onChange={onChange} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = Gugudan;
