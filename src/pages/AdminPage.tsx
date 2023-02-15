import { Layout } from 'antd';
import { CardAdmin } from '../components/admin/CardAdmin';

export const AdminPage = () => {
    return (
        <Layout>
            <Layout.Content style={{ height: '92vh', padding: '12px' }}>
                <CardAdmin />
            </Layout.Content>
        </Layout>
    );
};
