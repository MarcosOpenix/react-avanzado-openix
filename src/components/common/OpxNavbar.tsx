'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, Image, Badge } from "@nextui-org/react";
import { useUserStore } from "@/providers/user-store-provider";
import { CartIcon } from "../icons/CartIcon";
import { useRouter } from "next/navigation";

export default function OpxNavbar() {
  const { user, setUser } = useUserStore((state) => state);
  const router = useRouter();
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar style={{ display: !user ? 'hidden' : undefined }} className="bg-[#FFE600]" disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image width={25} src="/TiendaOnline.png"></Image>
          <p className="font-bold text-inherit">Tienda Online</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Image className="rounded-none" width={30} src="/TiendaOnline.png"></Image>
          <p className="font-bold text-2xl">Tienda Online</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="text-black">
            <Badge className="border-none" color="primary" content={50} shape="rectangle">
              <CartIcon size={30} />
            </Badge>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
