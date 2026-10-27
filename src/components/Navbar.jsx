import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <nav className="fixed top-0 z-20 px-auto w-full transition-all duration-300 bg-colo"></nav> */}
      <nav className="fixed top-0 z-50 border-b border-border bg-bg w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-primary">DevHub</div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted transition-colors hover:text-text"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-muted transition-colors hover:text-text"
            >
              Categories
            </a>
            <button className="rounded-lg bg-primary px-4 py-2 font-medium text-white transition hover:bg-violet-500">
              Add Resource
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
