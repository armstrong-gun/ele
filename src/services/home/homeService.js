import axios from 'axios'
import API from '../../api'
import Img from '../../filtersImg/homeImg'

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