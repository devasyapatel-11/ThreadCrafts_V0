import { useState, useEffect } from 'react';

const useIsIFrame = () => {
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    try {
      setIsIframe(window.self !== window.top);
    } catch (e) {
      setIsIframe(true);
    }
  }, []);

  return { isIframe };
};

export default useIsIFrame;
