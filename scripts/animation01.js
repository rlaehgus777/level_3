// animation01.js
// item1에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
/* 변수 */
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('img');

/* 변수테스트 */
console.log(item1, item1Img);

/* 이벤트 */
item1.addEventListener('mouseover',item1ImgSrc);
item1.addEventListener('mouseout', item1ImgSrcOut);

/* 함수 */
function item1ImgSrc(){
    item1Img.src = 'https://image.msscdn.net/thumbnails/images/goods_img/20190322/991339/991339_17138316859815_big.jpg?w=1200';
}
function item1ImgSrcOut(){
    item1Img.src='https://image.msscdn.net/thumbnails/images/goods_img/20190328/998051/998051_17192106437781_big.jpg?w=1200';
}
// -----------------------------------------------------------------------------------
// 변수생성
const sale1 = document.querySelector('.sale');
const saleImg = document.querySelector('.sale .photo img')

//변수검사
console.log(sale1, saleImg);

//이벤트생성
sale1.addEventListener('mouseover',saleImgSrc);
sale1.addEventListener('mouseout',saleImgDefault);

//실행함수생성
function saleImgSrc(){
    saleImg.src = 'https://image.msscdn.net/thumbnails/images/goods_img/20240112/3791990/3791990_17786555178382_big.jpg?w=1200';
}
function saleImgDefault(){
    saleImg.src = 'https://image.msscdn.net/thumbnails/images/goods_img/20240112/3791988/3791988_17810732996166_big.jpg?w=1200';
}