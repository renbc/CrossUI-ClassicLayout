xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("16.666666666666668em")
                .setTop("5.833333333333333em")
                .setWidth("12.5em")
                .setHeight("20em")
                .setZIndex(1003)
                .setSrc("https://www.crossui.com/RAD/img/svg_demo.svg")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "这是一个测试",
                            "这是一个测试"
                        ],
                        "method":"pop"
                    },
                    "_xui_ui_image5_onclick"
                ]),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button8")
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setCaption("这是一个按钮")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"url",
                        "args":[ ],
                        "method":"selectFile",
                        "onOK":0,
                        "event":1
                    }
                ]),
                "before"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("5.833333333333333em")
                .setTop("14.166666666666666em")
                .setWidth("5.583333333333333em")
                .setHeight("10.333333333333334em")
                .setCaption("123456"),
                "main"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        /**
         * 在click图片的时候触发该事件
         * @method onClick [xui.UI.Image event]
         * @param {xui.UIProfile} profile , 当前控件的配置对象(特征数据)
         * @param {Object} item , 子项对象
         * @param {String} src , 事件所属DOM元素的xid
        */
        _xui_ui_image5_onclick:function(profile, item, src){
            var ns = this, uictrl = profile.boxing();
        }
    }
});