let callbackMap ={};

export default {
    $on: function(eventName, callback){
        // 根据事件名字获得了回调
        // 保存所有的回调函数
       if(!callbackMap[eventName]){
           callbackMap[eventName] =[];
       }
       callbackMap[eventName].push(callback);

    },
    
    $emit: function(eventName, ...rest){
        // 根据事件名字，调用对应的回调函数
        // 调出来之前保存的相同事件名字的回调函数，一个一个执行。
       let callbackArr = callbackMap[eventName];
       if(!callbackArr){
           return;//如果没有回调
       }
       callbackArr.map(callbackItem =>{
           callbackItem(...rest);
       })
    },

    $off: function(){
        if(!eventName){
            //移除所有监听
            callbackMap = {};
            return;
        }
        if(eventName && (!callback)){
            //移除指定事件的所有监听
            callbackMap[eventName] = [];
        }
        if (eventName && callback) {
            //移除指定事件的指定监听
            //获得所有回调
            let callbackArr = callbackMap[eventName];
            callbackMap[eventName] =callbackArr.filter(call =>{
                call == callback
            })
            
        }
    }
}