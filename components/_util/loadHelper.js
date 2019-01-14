/**
 * 图片加载函数
 * 返回一个promise
 */
export const loadImage = (images, success = () => {}, error = () => {}) => {
    let haveLoadCount = 0;
    let successCount = 0;
    let errorCount = 0;
    const total = images.length;

    return new Promise((resolve, reject) => {
        // image对象处理图片加载
        // 每次加载一张图片，会通知加载成功\失败
        // 全部加载完成了，resolve加载结果
        const load = (src, index) => {
            let image = new Image();
            image.onload = function (status) {
                haveLoadCount++;
                successCount++;
                success(index);
                if (haveLoadCount === total) {
                    resolve({success: successCount, error: errorCount});
                }
            };
            image.onerror = function (e) {
                haveLoadCount++;
                errorCount++;
                error(index);
                if (haveLoadCount === total) {
                    resolve({success: successCount, error: errorCount});
                }
            };
            image.src = src;
        };

        // 空数组
        if (total === 0) {
            resolve({
                successCount: 0,
                errorCount: 0,
            });
        }

        // 遍历加载
        images.map((image, index) => {
            load(image, index);
        });
    });
};
