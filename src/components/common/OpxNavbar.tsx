'use client'
import React from "react";
import { Navbar, NavbarBrand, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, NavbarMenuToggle, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Image, Badge } from "@nextui-org/react";
import { useUserStore } from "@/providers/user-store-provider";
import { CartIcon } from "../icons/CartIcon";
import { useRouter } from "next/navigation";
import { ChevronDown } from '../icons/ChevronDown';
import { fetchCategories } from "@/actions/categoriesAction";
import { useState, useEffect } from 'react';
import { Category } from "@/types/types";

export default function OpxNavbar() {
  const { user, cart } = useUserStore((state) => state);
  const [categories, setCategories] = useState<Category[]>([])

  const router = useRouter();

  useEffect(() => {
    fetchCategories().then(response => {
      setCategories(response)
    })
  }, []);

  
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
          <Link color="foreground" href="http://localhost:3000/home">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className="bg-black">
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                variant="light"
                endContent={<ChevronDown fill='black' size={"16px"} />}
              >
                Categorias
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="text-white">
              {
                categories.map(value => (
                  <DropdownItem
                    key={value.id}
                    onClick={() => router.push(`http://localhost:3000/home/products/categories/${value.id}`)}
                  >
                    {value.name}
                  </DropdownItem>
                ))
              }
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem isActive>
          <Link href="http://localhost:3000/home/shoppingCart" aria-current="page" className="text-black">
            <Badge className="border-none" color="primary" content={cart.length ?? 0} shape="rectangle">
              <CartIcon size={30} />
            </Badge>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
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
        ))} */}
      </NavbarMenu>
    </Navbar>
  );
}
