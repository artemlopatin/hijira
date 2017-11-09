(function () {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.text =
        '        setInterval(function () {\n' +
        '            [61, 71, 101, 111].forEach(function (id) {\n' +
        '                var el = $(\'body > #workflow-transition-\' + id + \'-dialog\');' +
        '                el.find(\'form\').submit();\n' +
        '                el.hide();' +
        '                $(\'body > .aui-blanket\').hide();' +
        '            })\n' +
        '        }, 1000);\n';
    document.getElementsByTagName('body')[0].appendChild(script);
})();
