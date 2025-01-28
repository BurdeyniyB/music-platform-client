import { RootState } from "@/store/reducers";
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector