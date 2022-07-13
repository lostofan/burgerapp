import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState, AddDispatch} from './store';

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
