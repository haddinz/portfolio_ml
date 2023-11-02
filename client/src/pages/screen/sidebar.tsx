interface NavbarItem {
  name: string;
  link: string;
}

function Sidebar({
  openNavbar,
  navbar,
  navbarHandler,
}: {
  openNavbar: boolean;
  navbar: NavbarItem[];
  navbarHandler: (navbar: string) => void;
}) {
  return (
    openNavbar && (
      <div className="w-full h-full fixed top-0 right-0 bg-gray-950">
        <div className="h-full flex flex-col justify-center items-center text-gray-100 space-y-10">
          {navbar.map((item, index) => (
            <nav
              key={index}
              className="text-3xl font-poppins cursor-pointer"
              onClick={() => navbarHandler(item.link.toLowerCase())}
            >
              {item.name}
            </nav>
          ))}
        </div>
      </div>
    )
  );
}

export default Sidebar;
