'use client'
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { mainMenu } from "@/utils/constants";
import PersonalDataSection from "@/components/personalDataSection/PersonalDataSection";
import ProjectsSection from "@/components/proyectsSection/ProjectsSection";
import WorkExperienceSection from "@/components/workExperienceSection/WorkExperienceSection";
import { v4 as uuidv4 } from 'uuid';
import EducationSection from "@/components/educationSection/EducationSection";
import SkillTechSection from "@/components/skillsTechSection/SkillTechSection";
import ContactSection from "@/components/contactSection/ContactSection";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center bg-black`}>
      <Navbar className="bg-background/20">
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle className="text-white" />
        </NavbarContent>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {
            mainMenu.map(value => (
              <NavbarItem key={uuidv4()}>
                <Link className="text-white" href={`/#${value.id}`}>
                  {value.label}
                </Link>
              </NavbarItem>
            ))
          }
        </NavbarContent>
        <NavbarMenu className="bg-black bg-background/20">
          {mainMenu.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-white" href={`/#${item.id}`}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <PersonalDataSection />
      <div className="w-full bg-orange-600">
        <ProjectsSection />
      </div>
      <WorkExperienceSection />
      <div className="w-full bg-orange-600"><EducationSection /></div>
      <SkillTechSection />
      <ContactSection/>
    </main>
  );
}
