<template>
<div class="container">
  <div class="row">
    <div class="col">
    </div>
        <div class="col-md-8">
                    <div class="card" style="padding:30px">
                        <div class="card-body">
                            <div class="row">
                                <h4>회원가입</h4>

                                <div class="AddWrap">
                                <form>
                                    <table class="tbAdd">

                                    <!-- <colgroup>
                                        <col width="100%" />
                                        <col width="*" />
                                    </colgroup> -->

                                     <colgroup>
                                        <col style="width: 15%">
                                        <col style="width: 30%">
                                        <col style="width: 30%">
                                    </colgroup>

                                    <tr>
                                        <th style="padding-left:10px"><font color="red">*</font>아이디</th>
                                        <td><input type="text"></td>
                                        
                                    </tr>
                                    <tr>
                                        <th style="padding-left:10px"><font color="red">*</font>닉네임</th>
                                        <td><input type="text"></td>
                                    </tr>
                                    <tr>
                                        <th style="padding-left:10px"><font color="red">*</font>비밀번호</th>
                                        <td><input type="text"></td>
                                    </tr>
                                    <tr>
                                        <th style="padding-left:10px"><font color="red">*</font>비밀번호 확인</th>
                                        <td><input type="text"></td>
                                    </tr>
                                    <tr>
                                        <th style="padding-left:10px">이름</th>
                                        <td><input type="text"></td>
                                    </tr>
                                    <tr>
                                        <th style="padding-left:10px">전화번호</th>
                                        <td><input type="text"></td>
                                    </tr>
                                    <tr>
                                        <th style="padding-left:10px">주소</th>
                                        <td><input type="text"></td>
                                    </tr>
                                    </table>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        <div class="col" style="width: 100rem;">
        </div>
        </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .tbAdd{border-top:1px solid rgb(211, 211, 211);}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
    
    th {
        background: rgb(235, 234, 234);
        
    }

</style>