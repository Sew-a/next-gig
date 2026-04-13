"use client";
import Link from "next/link";
import "./styles.scss";
import { routeNames } from "@/utils/mainRoutes";

const MobileHeader = () => {

    return (
        <header className="mobile-header">
              {routeNames.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`nav-link`}
                >
                  {route.name}
                </Link>
              ))}
        </header>
    );
};

export default MobileHeader;
