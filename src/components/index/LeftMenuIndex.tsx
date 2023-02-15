import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export const LeftMenuIndex = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items: MenuProps['items'] = [
        {
            label: 'Menu 1',
            key: '1',
            icon: <LaptopOutlined />,
            onClick: () => {},
        },
        {
            label: 'Menu 2',
            key: '2',
            icon: <NotificationOutlined />,
            onClick: () => {},
        },
        {
            label: 'Menu 3',
            key: '3',
            icon: <UserOutlined />,
            children: [
                {
                    label: 'Item 1',
                    key: '4',
                    onClick: () => {},
                },
                {
                    label: 'Item 2',
                    key: '5',
                    onClick: () => {},
                },
                {
                    label: 'Item 3',
                    key: '6',
                    onClick: () => {},
                },
            ],
        },
    ];

    return (
        <Layout.Sider width={200} style={{ background: colorBgContainer }}>
            <Menu items={items} mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['menu3']} style={{ height: '100%', borderRight: 0 }} />
        </Layout.Sider>
    );
};
