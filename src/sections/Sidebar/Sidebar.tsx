import { Link } from 'react-router-dom';

import routes from '@/routes';
import useSidebar from '@/store/sidebar';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  return (
    <div>
      {isSidebarOpen && (
        <ul>
          {Object.values(routes)
            .filter((route) => route.title)
            .map(({ path, title }) => (
              <li key={path}>
                <Link to={path} onClick={sidebarActions.close}>
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
