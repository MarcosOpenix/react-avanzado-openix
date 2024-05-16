'use client'
import Image from "next/image";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NextUIProvider, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { Poppins } from 'next/font/google'
import { mainMenu, menuItems } from "@/utils/constants";
import PersonalDataSection from "@/components/personalDataSection/PersonalDataSection";
import ProjectsSection from "@/components/proyectsSection/ProjectsSection";
import WorkExperienceSection from "@/components/workExperienceSection/WorkExperienceSection";
import { v4 as uuidv4 } from 'uuid';
import EducationSection from "@/components/educationSection/EducationSection";
import SkillTechSection from "@/components/skillsTechSection/SkillTechSection";

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center ${poppins.className}`}>
      <Navbar className="bg-orange-600">
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {
            mainMenu.map(value => (
              <NavbarItem key={uuidv4()}>
                <Link color="foreground" href={`/#${value.id}`}>
                  {value.label}
                </Link>
              </NavbarItem>
            ))
          }
        </NavbarContent>
        <NavbarMenu>
          {mainMenu.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <PersonalDataSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillTechSection />
    </main>
  );
}
