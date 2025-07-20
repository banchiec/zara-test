import { type JSX } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = (): JSX.Element => {
  return (
    <div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
