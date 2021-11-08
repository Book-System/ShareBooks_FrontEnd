<template>

    <div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">고객센터</h3>
                </div>
                    <ul class="list-group">
                        <a href="./customer" class="list-group-item">문의하기</a>
                        <a href="./board" class="list-group-item">문의게시판</a>
                        <a href="./Faq" class="list-group-item">자주묻는질문</a>
                    </ul>
                </div>
        </div>

            <div class="col-md-9">
            <div class="card" style="padding:30px">
                <div class="card-body">
                    <div class="row">
                            
                        <h4>문의작성</h4>
                        <hr/>
                        <form method = "get" action = "write_action.php">
                        <table  style="padding-top:50px" align = center width=700 border=0 cellpadding=2 >
                        <tr>
                        <td bgcolor=white>
                        <table class = "table2">

                                <tr>
                                <td>작성자</td>
                                <td><input type = text name = name size=60> </td>
                                </tr>

                                <tr>
                                <td>휴대전화</td>
                                <td><input type = text name = name size=60> </td>
                                </tr>

                                <tr>
                                <td>이메일</td>
                                <td><input type = text name = name size=60> </td>
                                </tr>

                                <tr>
                                <td>제목</td>
                                <td><input type = text name = name size=60> </td>
                                </tr>

                                <tr>
                                <td>내용</td>

                                <td><ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor></td>
                                </tr>
        
                                </table>

                                
        
                                <center>
                                <input type = "submit" value="작성">
                                </center>
                        </td>
                        </tr>
                        </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>

<style>
.ck-editor__editable {
    min-height: 300px;
}

.container{
padding-top:90px;
padding-bottom:100px;    
}

</style>