import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage';
import './index.css';
import { Layout } from 'antd';
import { HeaderApp } from './components/app/HeaderApp';
import { AdminPage } from './pages/AdminPage';
import { ModalAdmin } from './components/admin/ModalAdmin';
import { useAppSelector } from './hook/redux';

function App() {
    const { modalAdmin, data } = useAppSelector((state) => state.modalAdminSliceReducer);

    return (
        <Layout>
            <HeaderApp />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/edit" element={<AdminPage />} />
            </Routes>

            {modalAdmin && data && <ModalAdmin />}
        </Layout>
    );
}

export default App;
