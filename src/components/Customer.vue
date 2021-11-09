<template>
 <div class="main">
        <div class="banner" >
           <h2 class="banner-text">고객센터</h2>
        </div><br/>   

    <div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="list-group">
                    <a class="list-group-item list-group-item-action disabled">고객센터</a>
                    <a href="./customer" class="list-group-item list-group-item-action">문의하기</a>
                    <a href="./board" class="list-group-item list-group-item-action">문의게시판</a>
                    <a href="./Faq" class="list-group-item list-group-item-action">자주묻는질문</a> 
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
        
                                </table><br/>
                            
                                
        
                                <center>
                                <input type="submit" class="btn" value="등록하기">
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

<style scoped>
.ck-editor__editable {
    min-height: 500px;
}

.container{
padding-bottom:100px;    
}

.banner{
    background-color:#ffcdd22f;
     width:100%;
     height:250px;
}
.banner-text{
 text-align: center;
 padding-top:150px;
  color: #000;

}
.btn {
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 15px;
  background: #f5b3ba;
  padding: 6px 9px 3px 9px;
  text-decoration: none;
}

.btn:hover {
  background: #ffcdd2;
  text-decoration: none;
}


</style>