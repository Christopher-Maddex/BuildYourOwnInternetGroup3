$(document).ready(function(){

        $('#messageList').nestedSortable({
            handle: 'div',
            items: 'div',
            toleranceElement: '> div'
        });

    });