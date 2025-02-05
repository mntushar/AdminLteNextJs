"use client";

import '@/app/_shared/layout/sidbar.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sidebarCollapse } from './nav_menu';

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const router = useRouter();

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenuName: string) => {
    setActiveSubmenu(activeSubmenu === submenuName ? null : submenuName);
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: '/images/icons8-dashboard-48.png',
      link: '/',
      submenu: null
    },
    {
      name: 'Sales',
      icon: '/images/icons8-sales-48.png',
      submenu: [
        { name: 'List', link: '/category', subMenuItems: null },
        { name: 'Add New', link: '/category/create', subMenuItems: null }
      ]
    },
    {
      name: 'Distribution',
      icon: '/images/icons8-sales-48.png',
      submenu: [
        { name: 'List', link: '/category', subMenuItems: null },
        { name: 'Add New', link: '/category/create', subMenuItems: null }
      ]
    },
    {
      name: 'Purchase',
      icon: '/images/icons8-purchase-48.png',
      submenu: [
        { name: 'List', link: '/category', subMenuItems: null },
        { name: 'Add New', link: '/category/create', subMenuItems: null }
      ]
    },
    {
      name: 'Report',
      icon: '/images/icons8-report-100.png',
      submenu: [
        { name: 'List', link: '/category', subMenuItems: null },
        { name: 'Add New', link: '/category/create', subMenuItems: null }
      ]
    },
    {
      name: 'Product',
      icon: '/images/icons8-product-94.png',
      submenu: [
        { name: 'List', link: '/category', subMenuItems: null },
        { name: 'Add New', link: '/category/create', subMenuItems: null }
      ]
    },
    {
      name: 'Customer',
      icon: '/images/icons8-customer-64.png',
      submenu: [
        { name: 'List', link: '/category', subMenuItems: null },
        { name: 'Add New', link: '/category/create', subMenuItems: null }
      ]
    },
    {
      name: 'Return',
      icon: '/images/icons8-return-purchase-80.png',
      submenu: [
        {
          name: 'Category',
          link: '/category',
          subMenuItems: [
            {
              name: 'Category',
              link: '/category'
            }
          ]
        },
      ]
    },
    {
      name: 'Setup',
      icon: '/images/icons8-setup-96.png',
      submenu: [
        {
          name: 'Category',
          link: null,
          subMenuItems: [
            {
              name: 'Insert',
              link: '/category'
            }
          ]
        },
        {
          name: 'Size',
          link: null,
          subMenuItems: [
            {
              name: 'Insert',
              link: '/category'
            }
          ]
        },
      ]
    },
    {
      name: 'Admin',
      icon: '/images/icons8-admin-60.png',
      submenu: [
        { name: 'List', link: '/category', subMenuItems: null },
        { name: 'Add New', link: '/category/create', subMenuItems: null }
      ]
    },
  ];

  return (
    <div className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
      <div className="sidebar-brand">
        <Link href="/" className="brand-link">
          <Image
            src="/images/logo-icon.png"
            alt="AdminLTE Logo"
            className="brand-image opacity-75 shadow"
            width={100}
            height={40}
          />
          <span className="brand-text fw-light">Inventory</span>
        </Link>
        <button className="SidbarToggler_mobile"
          onClick={sidebarCollapse}
        >
          <Image
            src="/images/close-96.png"
            alt="Toggle Menu"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="sidebar-wrapper">
        <nav className="mt-2">
          <ul
            className="nav sidebar-menu flex-column"
            data-lte-toggle="treeview"
            role="menu"
            data-accordion="false"
          >
            {menuItems.map((item) => (
              <li key={item.name} className={`nav-item ${activeMenu === item.name ? 'menu-open' : ''}`}>
                <a href='#' className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.submenu) {
                      if (item.submenu) {
                        toggleMenu(item.name);
                      }
                    }
                    else {
                      router.push(item.link);
                    }
                  }}>
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={25}
                    height={23}
                  />
                  <p>
                    {item.name}
                    {item.submenu ? (
                      <i className="nav-arrow bi bi-chevron-right"></i>
                    ) : (
                      <i></i>
                    )}
                  </p>
                </a>
                {item.submenu && (
                  <ul className="nav nav-treeview">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name} className="nav-item">
                        {subItem.link ? (
                          <Link href={subItem.link} className="nav-link">
                            <i className="nav-icon bi bi-circle"></i>
                            <p>{subItem.name}</p>
                          </Link>
                        ) : (
                          <a href='#' id='sub-item-id' className="nav-link"
                            onClick={(e) => {
                              e.preventDefault();
                              if (subItem) {
                                toggleSubmenu(subItem.name)
                              }
                            }}>
                            <i className="nav-icon bi bi-bounding-box-circles"></i>
                            <p>{subItem.name}</p>
                            <i className="nav-arrow bi bi-chevron-right"></i>
                          </a>
                        )}

                        {subItem.subMenuItems && (
                          <div id='sub-menu-id' className={`nav-item ${activeSubmenu === subItem.name ? 'sub-menu-open' : ''}`}>
                            <ul className='nav-treeview'>
                              {subItem.subMenuItems.map((subMenuItem) => (
                                <li key={subMenuItem.name} className="nav-item">
                                  <Link href={subMenuItem.link} className="nav-link">
                                    <i className="nav-icon bi bi-circle"></i>
                                    <p>{subMenuItem.name}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;