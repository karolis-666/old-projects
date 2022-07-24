import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollUp = props => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [path]);

  return <>{props.children}</>;
};

export default ScrollUp;
