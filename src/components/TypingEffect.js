import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TypingEffect({text}) {
  const [typingText, setTypingText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 텍스트가 모두 출력되면 멈춥니다.
    if (index < text.length) {
      const timer = setTimeout(() => {
        setTypingText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 100); // 100ms마다 한 글자씩 추가

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }
  }, [index, text]);

  return (
    <div id='typingEffect'>{typingText}</div>
  );
}

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired
};

export default TypingEffect;