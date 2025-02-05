"use client";

import Image from 'next/image';
import { Fragment } from 'react';

import './nav_menu.css';

export const sidebarCollapse = () => {
    const mainLayout = document.getElementById('main-layout');
    if (mainLayout) {
        if (mainLayout.classList.contains('sidebar-open')) {
            mainLayout.classList.replace('sidebar-open', 'sidebar-collapse');
        } else if (mainLayout.classList.contains('sidebar-collapse')) {
            mainLayout.classList.replace('sidebar-collapse', 'sidebar-open');
        }
    }
}

function NavMenu() {
    const activeUserDrawer = () => {
        const userDrawer = document.getElementById('user-drawer');
        if(userDrawer){
            userDrawer.classList.toggle('show');
            const isExpanded = userDrawer.classList.contains('show');
            userDrawer.setAttribute('aria-expanded', isExpanded.toString());
        }

        const userDrawerMenu = document.getElementById('user-drawer-menu');
        if(userDrawerMenu){
            userDrawerMenu.classList.toggle('show');
            const dataBsPopper = userDrawerMenu.classList.contains('show') ? 'static' : '';
            userDrawerMenu.setAttribute('data-bs-popper', dataBsPopper);
        }
    }

    return (
        <Fragment>
            <nav className="app-header navbar navbar-expand bg-body">
                {/* begin::Container */}
                <div className="container-fluid">
                    {/* begin::Start Navbar Links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-lte-toggle="sidebar"
                                href="#" role="button" onClick={(e) => {
                                    e.preventDefault();
                                    sidebarCollapse();
                                }}>
                                <i className="bi bi-list"></i>
                            </a>
                        </li>
                    </ul>
                    {/* end::Start Navbar Links */}
                    {/* begin::End Navbar Links */}
                    <ul className="navbar-nav ms-auto">
                        {/* begin::Messages Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-bs-toggle="dropdown" href="#">
                                <Image
                                    src="/images/bell-100.png"
                                    alt="notification Avatar"
                                    width={19}
                                    height={18}
                                />
                                {/* <span className="navbar-badge badge text-bg-warning">3</span> */}
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                <a href="#" className="dropdown-item">
                                    {/* begin::Message */}
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src="/images/user-100.png"
                                                alt="User Avatar"
                                                className="img-size-50 rounded-circle me-3"
                                                width={55}
                                                height={25}
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-end fs-7 text-danger"
                                                ><i className="bi bi-star-fill"></i
                                                ></span>
                                            </h3>
                                            <p className="fs-7">Call me whenever you can...</p>
                                            <p className="fs-7 text-secondary">
                                                <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/* end::Message */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/* begin::Message */}
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src="/images/user-100.png"
                                                alt="User Avatar"
                                                className="img-size-50 rounded-circle me-3"
                                                width={100}
                                                height={25}
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-end fs-7 text-secondary">
                                                    <i className="bi bi-star-fill"></i>
                                                </span>
                                            </h3>
                                            <p className="fs-7">I got your message bro</p>
                                            <p className="fs-7 text-secondary">
                                                <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/* end::Message */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    {/* begin::Message */}
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src="/images/user-100.png"
                                                alt="User Avatar"
                                                className="img-size-50 rounded-circle me-3"
                                                width={100}
                                                height={25}
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-end fs-7 text-warning">
                                                    <i className="bi bi-star-fill"></i>
                                                </span>
                                            </h3>
                                            <p className="fs-7">The subject goes here</p>
                                            <p className="fs-7 text-secondary">
                                                <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/* end::Message */}
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>

                        {/* begin::User Menu Dropdown */}
                        <li id='user-drawer' className="nav-item dropdown user-menu">
                            <a href="#" className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                onClick={(e) => {
                                    e.preventDefault();
                                    activeUserDrawer();
                                }}>
                                <Image
                                    src="/images/user-100.png"
                                    className="user-image rounded-circle shadow"
                                    alt="User Image"
                                    width={100}
                                    height={25}
                                />
                                <span className="d-none d-md-inline">Alexander Pierce</span>
                            </a>
                            <ul id='user-drawer-menu' className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                {/* begin::User Image */}
                                <li className="user-header text-bg-primary">
                                    <Image
                                        src="/images/user-100.png"
                                        className="rounded-circle shadow"
                                        alt="User Image"
                                        width={100}
                                        height={25}
                                    />
                                    <p>
                                        Alexander Pierce - Web Developer
                                        <small>Member since Nov. 2023</small>
                                    </p>
                                </li>
                                {/* end::User Image */}
                                {/* begin::Menu Body */}
                                <li className="user-body">
                                    {/* begin::Row */}
                                    <div className="row">
                                        <div className="col-4 text-center"><a href="#">Followers</a></div>
                                        <div className="col-4 text-center"><a href="#">Sales</a></div>
                                        <div className="col-4 text-center"><a href="#">Friends</a></div>
                                    </div>
                                    {/* end::Row */}
                                </li>
                                {/* end::Menu Body */}
                                {/* begin::Menu Footer */}
                                <li className="user-footer">
                                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                                    <a href="#" className="btn btn-default btn-flat float-end">Sign out</a>
                                </li>
                                {/* end::Menu Footer */}
                            </ul>
                        </li>
                        {/* end::User Menu Dropdown */}
                    </ul>
                    {/* end::End Navbar Links */}
                </div>
                {/* end::Container */}
            </nav>
        </Fragment>
    );
}

export default NavMenu;