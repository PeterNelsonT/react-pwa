import useSidebar from '@/store/sidebar';

function Header() {
  const [, sidebarActions] = useSidebar();

  return (
    <div>
      <button onClick={sidebarActions.toggle}>sidebar</button>
    </div>
  );
}

export default Header;
