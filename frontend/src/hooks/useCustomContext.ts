import { useContext } from "react";
import { Context } from "../context/Context";

const useCustomContext = () => useContext(Context);

export default useCustomContext