import { Layout, theme, Table, Input } from 'antd';
import { useEffect, useState } from 'react';

export const ContentIndex = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const lData: any = [];
        for (let i = 1; i < 8; i++) lData.push({ key: i, name: `name ${i}`, age: i * 4, address: `address ${i}` });
        setData(lData);
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'key',
            key: 'key',
            sorter: {
                compare: (a: any, b: any) => a.key - b.key,
                multiple: 1,
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a: any, b: any) => a.name.localeCompare(b.name),
                multiple: 1,
            },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: (age: string) => <a href="#">{age}</a>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const [state, setState] = useState<any>({ filterTable: null, columns: columns, baseData: data });
    const search = (value: any) => {
        const filterTable = data.filter((o: any) => Object.keys(o).some((k) => String(o[k]).toLowerCase().includes(value.toLowerCase())));
        setState({ filterTable });
    };

    return (
        <Layout.Content
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
            }}
        >
            <Input.Search placeholder="Search by..." enterButton onSearch={search} />
            <Table
                dataSource={state.filterTable == null ? data : state.filterTable}
                columns={columns}
                size="small"
                sortDirections={['descend', 'ascend']}
            />
        </Layout.Content>
    );
};
