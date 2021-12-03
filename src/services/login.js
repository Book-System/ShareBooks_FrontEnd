import axios from 'axios';

const kakaoHeader = {
    'Authorization': 'ff5bbb00d34b57ec405c8897bb0fe7f2', //adminkey
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};
const getKakaoToken = async (code) => {
    console.log('loginWithKakao');
    try {
        const data = {
            grant_type: 'authorization_code',
            client_id: '85f5e8836e37ba020d38d78c784c9b30', //RestApi key
            redirect_uri: 'http://localhost:8080/kakaologin',
            code: code,
        };
        const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
        const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, {
            headers: kakaoHeader
        });
        console.log('카카오 토큰', result);
        return result;
    } catch (e) {
        return e;
    }
};

const getKakaoUserInfo = async () => {
    let data = '';
    await window.Kakao.API.request({
        url: "/v2/user/me",
        success: function(response) {
            data = response;
        },
        fail: function(error) {
            console.log(error);
        },
    });
    console.log('카카오 계정 정보', data);
    return data;
}

export {
    getKakaoToken,
    getKakaoUserInfo,


};