<?php include("header.php")?>
<div id="panel">
    <h1>TODOLIST</h1>
    <div id="todo_list">
        <ul>
            <li>
                <div class='checkbox'></div>
                <div class="content">Lorem, ipsum dolor.</div>
                <div class="actions"></div>
                <div class="delete">X</div>
                
            </li>
            <li class='complete'>
                <div class='checkbox'></div>
                <div class="content">Lorem, ipsum dolor.</div>
                <div class="actions"></div>
                <div class="delete">X</div>
                
            </li>
            <li>
                <div class='checkbox'></div>
                <div class="content">Lorem, ipsum dolor.</div>
                <div class="actions"></div>
                <div class="delete">X</div>
                
            </li>
            <li class="new">
                <div class='checkbox'></div>
                <div class="content" contenteditable="true"></div>
               
            </li>
        </ul>
    </div>

   

</div>

<!-- <div id="temp_hide">
        
        <li>
            <div class='checkbox'></div>
            <div class="content"></div>
            <div class="actions"></div>
            <div class="delete">X</div>
            
        </li>
</div> -->

<script id="todo-list-item-template" type="text/x-handlebars-template">
        <li class="{{#if is_complete}}complete{{/if}}">
            <div class='checkbox'></div>
            <div class="content">{{content}}</div>
            <div class="actions"></div>
            <div class="delete">X</div>
            
        </li>
</script>

<?php include("footer.php")?>