import { Modal } from 'antd';
import { useActions } from '../../hook/actions';
import { useAppSelector } from '../../hook/redux';

export const ModalAdmin = () => {
    const { changeModalAdmin } = useActions();
    const { modalAdmin, data } = useAppSelector((state) => state.modalAdminSliceReducer);

    const handleOk = () => {
        changeModalAdmin(false);
    };

    return (
        <Modal title="Basic Modal" open={modalAdmin} onOk={handleOk} onCancel={() => changeModalAdmin(false)}>
            <p>Key: {data.key}</p>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Address: {data.address}</p>
        </Modal>
    );
};
