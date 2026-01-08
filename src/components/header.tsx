import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center p-2 w-3/5 my-0 mx-auto shadow-md  rounded-md">
        <div className="flex justify-center items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/sliomota.png"
              alt="@sliomota"
            />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <h5 className="text-xl font-bold">Simon Lionello</h5>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#about">Sobre mi</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="#proyects">Projectos</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="https://www.linkedin.com/in/sliomota/">
                    <FaLinkedinIn className="text-black size-5" />
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="https://github.com/sliomota">
                    <FiGithub className="text-black size-5 stroke-3" />
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
}
