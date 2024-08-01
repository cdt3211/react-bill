import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill',
    //数据状态
    initialState: {
        billList: []
    },
    reducers: {
        //同步修改
        setBillList(state,action){
            state.billList = action.payload
        }
    }
})

//解构函数
const { setBillList } = billStore.actions

// 异步修改
const getBillList =() => {
    return async (dispatch) => {
        const res = axios.get('http://localhost:8888/ka')
        dispatch(setBillList(res.data))
    }
}

export {getBillList}

const reducer = billStore.reducer

export default reducer