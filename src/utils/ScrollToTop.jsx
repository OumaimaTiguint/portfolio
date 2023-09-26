import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function ScrollToTop() {
  	const navigate = useNavigate();

  	useEffect(() => {
    	const unlisten = navigate((location) => {
      		if (location.action === 'PUSH') {
        		window.scrollTo(0, 0);
      		}
    	});

    	// Unlisten to route changes when the component unmounts
    	return unlisten;
  	}, [navigate]);

  	return <Outlet />;
}

export default ScrollToTop;
