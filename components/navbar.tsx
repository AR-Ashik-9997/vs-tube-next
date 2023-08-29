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
import { SearchIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
import { useGetSearchVideoQuery } from "@/redux/feature/playlist/searchApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  setSearch,
  setSearchData,
} from "@/redux/feature/playlist/playListSlice";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { searchTerm } = useAppSelector((state) => state.playlist);
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const { data } = useGetSearchVideoQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    dispatch(setSearch(search));
  };
  if (data?.data.length > 0) {
    dispatch(setSearchData(data?.data));
  }
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
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
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
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        {
          session?.user?<Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={session?.user?.image||undefined}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">{session?.user?.name}</p>
              <p className="font-semibold">{session?.user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>:<Link href="/login">Login</Link>
        }
        
      </NavbarContent>
    </NextUINavbar>
  );
};
