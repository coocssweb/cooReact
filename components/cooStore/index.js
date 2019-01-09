/**
 * 简易的store
 * Created by coocss on 2019/1/8.
 */
let observer = function () {
    const listeners = [];
    // 添加事件订阅
    const subscribe = function (name, listener) {
        if (!listeners[name]) {
            listeners[name] = [];
        }
        listeners[name].push(listener);

        return () => {
            const index = listeners[name].indexOf(listener);
            listeners[name].splice(index, 1);
        };
    };

    // 通知事件队列
    const notify = function (name, ...args) {
        (listeners[name] || []).map((listener) => {
            listener.call(...args);
        });
    };

    return {
        subscribe,
        notify
    };
};

// 确保实例只创建一次
let observerInstance;
if (!observerInstance) {
    observerInstance = observer();
}

export default observerInstance;
