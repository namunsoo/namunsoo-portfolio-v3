import PropTypes from 'prop-types';

function CodeColor({ text, color }) {
  // `map` 함수를 사용하여 JSX 엘리먼트 배열을 생성합니다.
  // 이 방법이 `for` 루프보다 더 간결하고 React에서 권장됩니다.
  return (
    <>
      {text.map((char, index) => (
        // JSX 배열을 렌더링할 때는 고유한 `key` prop을 추가해야 합니다.
        // 여기서는 `index`를 `key`로 사용합니다.
        // `color` 배열의 길이를 `text`와 동일하다고 가정합니다.
        <span key={index} className={color[index]}>
          {char}
        </span>
      ))}
    </>
  );
};
CodeColor.propTypes = {
  // isRequired: 이 요소는 필수로 있어야 한다.
  // PropTypes.arrayOf(PropTypes.string) 이렇게만 쓰면 필수요소가 아니다.
  // 배열 형식 정의
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CodeColor;