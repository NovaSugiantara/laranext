import { useAuth } from "@/hooks/auth";
import Link from "next/link";
import React from "react";

const Nav = () => {
    const { user, logout } = useAuth();
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4 justify-end px-8">
                <li>
                    <Link href="/" legacyBehavior>
                        <a className="text-white">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior>
                        <a className="text-white">About</a>
                    </Link>
                </li>
                <li>
                    {user ? (
                        <a href="#" onClick={logout} className="text-white">
                            Sign Out
                        </a>
                    ) : (
                        <Link href={"/login"} legacyBehavior>
                            <a className="text-white">Sign In</a>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
