import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';

export const HeaderApp = () => {
    const menuItems = [
        {
            key: '1',
            label: <Link to="/">Главная страница</Link>,
        },
        {
            key: '2',
            label: <Link to="/login">Авторизация</Link>,
        },
        {
            key: '3',
            label: <Link to="/edit">Административная панель</Link>,
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case '3':
                localStorage.setItem('nav', '3');
                break;

            case '2':
                localStorage.setItem('nav', '2');
                break;

            default:
                localStorage.setItem('nav', '1');
                break;
        }
    };

    return (
        <Layout.Header className="header">
            <Menu
                onClick={onClick}
                items={menuItems}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[localStorage.getItem('nav')?.toString() || '1']}
            />
        </Layout.Header>
    );
};
