import { Layout } from 'antd';
import { LeftMenuIndex } from '../components/index/LeftMenuIndex';
import { ContentIndex } from '../components/index/ContentIndex';
import { RightMenuIndex } from '../components/index/RightMenuIndex';

export const IndexPage = () => {
    return (
        <Layout>
            <LeftMenuIndex />

            <Layout.Content style={{ height: '92vh', padding: '12px' }}>
                <ContentIndex />
            </Layout.Content>

            <RightMenuIndex />
        </Layout>
    );
};
