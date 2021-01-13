import axios from 'axios';

const ERR_OK = 0;

export function get(url) {
    return function (params) {
        return axios.get(url, {
            params
        }).then((res) => {
            const {errno, data} = res.data
            if(errno === ERR_OK) {
                return data;
            }
            // 如果是其他错误，另外写
        }).catch(() => {
            // 失败就什么都不做了
        })
    }
}