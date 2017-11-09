// chrome.webNavigation.onCompleted.addListener(function () {
/*
    setInterval(
        function () {
            $('#workflow-transition-71-dialog form').submit();
            $('#workflow-transition-61-dialog form').submit();
            $('#workflow-transition-101-dialog form').submit();
            $('#workflow-transition-111-dialog form').submit();
        }, 1000);
*/
// };

//document.addEventListener("DOMContentLoaded", function() {
//document.addEventListener("load", function () {
//document.addEventListener("DOMContentLoaded", function(){
//chrome.tabs.onUpdated.addListener(function(id,info,tab)
//{
//});


/*
autoSubmitJira = function autoSubmitJira() {
    setTimeout(function () {
        console.warn('onChange');
        $('#workflow-transition-71-dialog form#issue-workflow-transition').submit();
        $('#workflow-transition-61-dialog form#issue-workflow-transition').submit();
        $('#workflow-transition-101-dialog form#issue-workflow-transition').submit();
        $('#workflow-transition-111-dialog form#issue-workflow-transition').submit();
    }, 1000);
};

document.addEventListener("DOMSubtreeModified", function () {
    autoSubmitJira();
});
autoSubmitJira();
*/

// document.addEventListener("DOMSubtreeModified", function () {
//     setTimeout(function () {
//         [61, 71, 101, 111].forEach(function (id) {
//             $('body > #workflow-transition-' + id + '-dialog form').submit();
//         })
//     }, 1000);
//     // $('#workflow-transition-71-dialog form input#issue-workflow-transition-submit').click();
//     //     $('#workflow-transition-61-dialog form input#issue-workflow-transition-submit').click();
//     //     $('#workflow-transition-101-dialog form input#issue-workflow-transition-submit').click();
//     //     $('#workflow-transition-111-dialog form input#issue-workflow-transition-submit').click();
// });

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

