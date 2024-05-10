import type { FC } from "react";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";

const ExampleNavbar: FC = function () {
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Tələbə 
              </span>
              <img alt="" src="https://raw.githubusercontent.com/niyazhsnov/telebe360/50f8791d2de971c824ce46b11a2e0be91a845b61/public/home/360minilogo.svg" className="mr-3 h-6 sm:h-6" />
              
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
          
           
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ExampleNavbar;
