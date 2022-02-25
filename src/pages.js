
// uni-app自带一个webpack loader钩子文件pages.js，在项目src目录下建立pages.js（与pages.json同级）即可生效（pages.json仍然需要存在，内容为{}即可）。
module.exports = () => ({
    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
        {
            "path": "pages/index/index",
            "style": {
                "navigationBarTitleText": "uni-app"
            }
        },
        {
            "path": "pages/index/test",
            "style": {
                "navigationBarTitleText": "uni-app22"
            }
        },
        {
            "path": "pages/login/login",
            "style": {
                "navigationBarTitleText": "uni-app22"
            }
        }
    ],
    "subPackages": [{
        "root": "pages/sub",
        "pages": [
            {
                "path": "a"
            },
            {
                "path": "cart"
            },
        ]
    }],
    "globalStyle": {
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "uni-app",
        "navigationBarBackgroundColor": "#e0552f",
        "backgroundColor": "#e0552f"
    }
})