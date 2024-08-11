
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarForUser() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={40} height={40} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Image src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"  className="mr-3 h-6 sm:h-9 rounded" alt="User Settings" width={40} height={40} />
          }
        >
            { /*
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          */
            }
          <Dropdown.Item>
            <Link href="/">Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/links">Links</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link href="/logout">Logout</Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/links">Links</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export function NavbarForAnonymousUser() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={40} height={40} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/links">Links</Navbar.Link>
        <Navbar.Link href="/register">Sign Up</Navbar.Link>
        <Navbar.Link href="/login">Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}