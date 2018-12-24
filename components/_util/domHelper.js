/**
 * 检查dom是否属于组件内
 */
export const isNodeFound = (current, componentNode) => {
    if (current === componentNode) {
        return true;
    }

    while (current.parentNode) {
        current = current.parentNode;
        if (current === componentNode) {
            return true;
        }
    }

    return false;
};
