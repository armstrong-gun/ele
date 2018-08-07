function homeImg(width, height, path) {
    //图片处理
    if (!path) {
        return '没有图片地址'
    }
    let realPath = 'https://fuss10.elemecdn.com/';
    realPath += path;
    if (path.endsWith('jpeg')) {
        realPath += '.jpeg'
    } else if (path.endsWith('png')) {
        realPath += '.png'
    }
    realPath += `?imageMogr/format/webp/thumbnail/!${width}x${height}r/gravity/Center/crop/${width}x${height}/`
    return realPath
}
export default homeImg