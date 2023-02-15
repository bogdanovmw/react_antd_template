import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { modalAdminSliceActions } from '../store/slice/modal.admin.clise';

const actions = { ...modalAdminSliceActions };

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actions, dispatch);
};
