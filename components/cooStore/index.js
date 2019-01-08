/**
 * 简易的store
 * Created by coocss on 2019/1/8.
 */
let observer = function () {
    const listeners = [];
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

// 确保只创建一次
let observerInstance;
if (!observerInstance) {
    observerInstance = observer();
}

export default observerInstance;
