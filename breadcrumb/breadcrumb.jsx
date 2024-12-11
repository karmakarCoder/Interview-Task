"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
export default function Breadcrumb() {
  const routers = useSelectedLayoutSegments();
  console.log(routers);

  // Convert path segments into breadcrumb items
  //   const breadcrumbs = pathParts.map((part, index) => {
  //     const href = "/" + pathParts.slice(0, index + 1).join("/");
  //     const label = part.replace(/-/g, " ").toUpperCase(); // Transform `about-us` to `ABOUT US`
  //     return { label, href };
  //   });

  return (
    <nav className="bg-gray-100 p-3 rounded-lg" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {/* {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center space-x-2">
            <span className="text-gray-500">/</span>
            <Link
              href={crumb.href}
              className={`${
                index === breadcrumbs.length - 1
                  ? "text-gray-800"
                  : "text-blue-600 hover:underline"
              }`}
            >
              {crumb.label}
            </Link>
          </li>
        ))} */}
      </ol>
    </nav>
  );
}
