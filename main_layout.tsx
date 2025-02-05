"use client";

import React from 'react';

import Toast from '../component/toast';
import NavMenu from './nav_menu';
import SideBar from './sidbar';

import './main_layout.css';
import Footer from './footer';

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id='main-layout' className="layout-fixed sidebar-expand-lg sidebar-mini bg-body-tertiary app-loaded sidebar-open">
            <div className='app-wrapper'>
                <NavMenu />
                <SideBar />
                <main className='app-main'>
                    <Toast />
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}