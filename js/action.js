$(document).ready(function(){
    var source = $('#todo-list-item-template').html();
    var todotemplate= Handlebars.compile(source);
    //CREATE
   /*  $("li.new").find(".content").blur(function(e){
        var todo =$(e.currentTarget).text();
        //架構
        todo = todo.trim(); // 去頭去尾空格
        
        //判斷是否有無輸入
        if (todo.length >0){
        //取用模組填入值再丟給compile
        var context ={is_complete:false,content:todo,};
        var li = todotemplate(context);
        //var li =$('<li></li>').text(todo);
        //var li = $('#temp_hide').find('li').clone();
        //li.find('.content').text(todo);
        //插入內容
        $(e.currentTarget).closest('li').before(li);
        //清除使用者輸入內容
        $(e.currentTarget).empty();
        } 
    });*/
    //UPDATE
    $("#todo_list")
        .on("dblclick",".content",function(e){
        $(this).prop('contenteditable',true).focus();
        })
        .on("blur",".content",function(e){
        var isnew = $(this).closest('li').is('.new');
        if(isnew){
            var todo =$(e.currentTarget).text();
        //架構
        todo = todo.trim(); // 去頭去尾空格
        
        //判斷是否有無輸入
        if (todo.length >0){
            //新增
            //取用模組填入值再丟給compile
            var context ={is_complete:false,content:todo,};
            var li = todotemplate(context);
            //插入內容
            $(e.currentTarget).closest('li').before(li);
            //清除使用者輸入內容
            $(e.currentTarget).empty();
            }
        }
        else{
            //更新
            $(this).prop('contenteditable',false);
        }
        })
         //刪除
        .on("click",".delete",function(e){
            var result = confirm("Do You Want To Delete?");
            if (result){
                $(this).closest('li').remove();
            }
        })
        //complete
        .on("click",".checkbox",function(e){
            $(this).closest('li').toggleClass('complete');       
        })
        ;
        //排序
        $("#todo_list").find('ul').sortable({items : 'li:not(.new)',
    });
       
});