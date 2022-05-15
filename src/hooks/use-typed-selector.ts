import { useSelector , TypedUseSelectorHook } from "react-redux";
import {RootState }from '../state/index';

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;