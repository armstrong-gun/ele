import axios from 'axios'
import API from '../../api'
import Img from '../../filtersImg/homeImg'

//请求定位数据
export function getLocationData() {
    return new Promise((resolve, reject) => {
        axios.get(API.LOCATION)
            .then(response => {
                // console.log('请求成功');
                // console.log(response);

                resolve(response)
            })
            .catch(error => {
                console.log(error);

                console.log('请求失败');

            })
    })
}

//请求轮播图数据
export function getEntries_BannerData() {
    return new Promise((resolve, reject) => {
        axios.get(API.ENTRIES_BANNER)
            .then(response => {
                // console.log('请求成功');
                // console.log(response.data[0]);
                let data = response.data[0].entries.map(item => {
                    return {
                        name: item.name,
                        id: item.id,
                        image_hash: Img(90, 90, item.image_hash)
                    }
                })
                resolve(data)
            })
            .catch(error => {
                console.log(error);

                console.log('请求失败');

            })
    })
}

//请求排序数据
export function getInside_Sort_FilterData() {
    return new Promise((resolve, reject) => {
        axios.get(API.SORTFILTER)
            .then(response => {
                // console.log('请求成功');
                // console.log(response);
                let data = response.data.inside_sort_filter.map(item => {
                    return {
                        key: item.key,
                        name: item.name,
                        value: item.value
                    }
                })
                resolve(data)
            })
            .catch(error => {
                console.log(error);

                console.log('请求失败');

            })
    })
}

//请求距离最近和品质联盟数据
export function getOutside_Sort_FilterData() {
    return new Promise((resolve, reject) => {
        axios.get(API.SORTFILTER)
            .then(response => {
                // console.log('请求成功');
                // console.log(response);
                let data = response.data.outside_sort_filter.map(item => {
                    return {
                        key: item.key,
                        name: item.name,
                        value: item.value
                    }
                })
                resolve(data)
            })
            .catch(error => {
                console.log(error);

                console.log('请求失败');

            })
    })
}

//请求筛选(优惠活动（单选）)数据数据
export function getActivity_TypesData() {
    return new Promise((resolve, reject) => {
        axios.get(API.FILTRATE)
            .then(response => {
                // console.log('请求成功');
                // console.log(response);
                let data = response.data.activity_types.map(item => {
                    return {
                        id: item.id,
                        name: item.name
                    }
                })
                resolve(data)
            })
            .catch(error => {
                console.log(error);
                console.log('请求失败');

            })
    })
}

//请求筛选(商家服务（蜂鸟专送）)数据数据
export function getDelivery_ModeData() {
    return new Promise((resolve, reject) => {
        axios.get(API.FILTRATE)
            .then(response => {
                // console.log('请求成功');
                // console.log(response);
                let data = response.data.delivery_mode
                resolve({
                    id: data.id,
                    text: data.text,
                    icon_hash: Img(24, 24, data.icon_hash)
                })
            })
            .catch(error => {
                console.log(error);
                console.log('请求失败');

            })
    })
}


//请求筛选(商家服务（可多选）)数据数据
export function getSupportsData() {
    return new Promise((resolve, reject) => {
        axios.get(API.FILTRATE)
            .then(response => {
                // console.log('请求成功');
                // console.log(response);
                let data = response.data.supports.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        icon_hash: Img(24, 24, item.icon_hash)
                    }
                })
                resolve(data)
            })
            .catch(error => {
                console.log(error);
                console.log('请求失败');

            })
    })
}

//请求筛选(人均消费)数据数据
export function getAverage_CostsData() {
    return new Promise((resolve, reject) => {
        axios.get(API.FILTRATE)
            .then(response => {
                // console.log('请求成功');
                // console.log(response);
                let data = response.data.average_costs
                    .map(item => {
                        return {
                            description: item.description,
                            id: item.id,
                        }
                    })
                resolve(data)
            })
            .catch(error => {
                console.log(error);
                console.log('请求失败');

            })
    })
}