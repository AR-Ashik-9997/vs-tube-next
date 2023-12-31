import {
  Kbd,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Dropdown,
  DropdownTrigger,
} from "@nextui-org/react";
import NextLink from "next/link";
import { MoonFilledIcon, SearchIcon, SunFilledIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router=useRouter();
  const [search, setSearch] = useState<string>("");
  const { data: session } = useSession();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search.length > 0) {
      setSearch(search);
    } else {
      setSearch("");
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(search){
      router.push(`/searches/${search}`);
    }
    
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunFilledIcon
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonFilledIcon
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <NextUINavbar maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">VS-TUBE</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden md:flex w-1/2">
          <form onSubmit={handleSubmit} className="w-full">
            <Input
              aria-label="Search"
              classNames={{
                inputWrapper: "bg-default-200",
                input: "text-sm",
              }}
              endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                  K
                </Kbd>
              }
              labelPlacement="outside"
              placeholder="Search..."
              startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="text"
              name="search"
              onChange={handleSearchChange}
            />
          </form>
        </NavbarItem>
      </NavbarContent>
      {renderThemeChanger()}
      <NavbarContent className="basis-1 pl-4" justify="end">
        {session?.user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={session?.user?.image || undefined}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{session?.user?.name}</p>
                <p className="font-semibold">{session?.user?.email}</p>
              </DropdownItem>
              <DropdownItem key="Switch"></DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => {
                  signOut();
                  Cookies.remove("auth");
                }}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
};
