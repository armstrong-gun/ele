/*
接口功能：商家数据
接口参数：latitude：商家纬度
         longitude：商家经度
         offset：从第几个索引开始请求（0开始，每次加8）
         limit：每次请求商家的个数（默认8个）
         extras[]
         extras[]
         extra_filters：那个页面需要？？？
         rank_id：
         terminal
*/
const RESTAURANT = '/restapi/shopping/v3/restaurants?latitude=22.569071&longitude=114.253228&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'




/*
    接口功能：地址定位
    接口参数：latitude：纬度
             longitude：经度
*/
// const LOCATION = '/restapi/bgs/poi/reverse_geo_coding?latitude=22.626024&longitude=113.837884'



/*
接口功能：轮播图
接口参数：?latitude=22.569071
         &longitude=114.253228
         &templates[]=main_template
         &templates[]=favourable_template
         &templates[]=svip_template
         &terminal=h5
*/
const ENTRIES_BANNER = '/restapi/shopping/openapi/entries?latitude=22.569071&longitude=114.253228&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'


/*
接口功能：综合排序
接口参数：?latitude=22.569071
         &longitude=114.253228
         &terminal=h5
*/
const SORTFILTER = '/restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=22.569071&longitude=114.253228&terminal=h5'

/*
接口功能：筛选
接口参数：?latitude=22.569071
         &longitude=114.253228
         &terminal=h5
*/
const FILTRATE = '/restapi/shopping/v1/restaurants/filter-bar/attributes?latitude=22.569071&longitude=114.253228&terminal=h5'

export default {
    SORTFILTER,
    ENTRIES_BANNER,
    FILTRATE,
    RESTAURANT
}