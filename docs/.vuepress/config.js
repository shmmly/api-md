module.exports = {
    base:'/api/',
    title: '移动端接口整理',
    description: '三端的接口展示',
    themeConfig: {
        nav: [
            {
                text: '用户端',
                link: '/user/'
            },
            {
                text: '审批端',
                link: '/approve/'
            },
            {
                text: '司机',
                link: '/car/'
            }
        ],
        sidebar: {
            '/user/':[
                {
                    title:'用户端',
                    collapsable:false,
                    children:[
                        '',
                        'applyCar',
                        'myApply',
                        'evaluate',
                        'personal',
                        'message'
                    ]
                },

            ],
            '/approve/':[
                {
                    title:'审批端',
                    collapsable:false,
                    children:[
                        '',
                        'approve',
                        'personal',
                        'message'
                    ]
                }
            ],
            '/car/':[
                {
                    title:'司机端',
                    collapsable:false,
                    children:[
                        '',
                        'taskDetail',
                        'leave',
                        'breakdown',
                        'message',
                    ]
                }
            ]
        }
    }
}
