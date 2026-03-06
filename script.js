const topics = {

monday:[
["산","https://picsum.photos/300?1"],
["강","https://picsum.photos/300?2"],
["나무","https://picsum.photos/300?3"],
["꽃","https://picsum.photos/300?4"],
["숲","https://picsum.photos/300?5"],
["바다","https://picsum.photos/300?6"],
["돌","https://picsum.photos/300?7"],
["하늘","https://picsum.photos/300?8"],
["구름","https://picsum.photos/300?9"],
["풀","https://picsum.photos/300?10"]
],

tuesday:[
["붕어","https://picsum.photos/300?11"],
["잉어","https://picsum.photos/300?12"],
["메기","https://picsum.photos/300?13"],
["송어","https://picsum.photos/300?14"],
["피라미","https://picsum.photos/300?15"],
["가물치","https://picsum.photos/300?16"],
["향어","https://picsum.photos/300?17"],
["쏘가리","https://picsum.photos/300?18"],
["동자개","https://picsum.photos/300?19"],
["참붕어","https://picsum.photos/300?20"]
],

wednesday:[
["밥","https://picsum.photos/300?21"],
["김치","https://picsum.photos/300?22"],
["라면","https://picsum.photos/300?23"],
["만두","https://picsum.photos/300?24"],
["국","https://picsum.photos/300?25"],
["불고기","https://picsum.photos/300?26"],
["비빔밥","https://picsum.photos/300?27"],
["떡","https://picsum.photos/300?28"],
["잡채","https://picsum.photos/300?29"],
["된장찌개","https://picsum.photos/300?30"]
],

thursday:[
["개","https://picsum.photos/300?31"],
["고양이","https://picsum.photos/300?32"],
["소","https://picsum.photos/300?33"],
["말","https://picsum.photos/300?34"],
["돼지","https://picsum.photos/300?35"],
["닭","https://picsum.photos/300?36"],
["토끼","https://picsum.photos/300?37"],
["양","https://picsum.photos/300?38"],
["사슴","https://picsum.photos/300?39"],
["오리","https://picsum.photos/300?40"]
],

friday:[
["컵","https://picsum.photos/300?41"],
["의자","https://picsum.photos/300?42"],
["시계","https://picsum.photos/300?43"],
["안경","https://picsum.photos/300?44"],
["신발","https://picsum.photos/300?45"],
["우산","https://picsum.photos/300?46"],
["가방","https://picsum.photos/300?47"],
["전화기","https://picsum.photos/300?48"],
["책","https://picsum.photos/300?49"],
["연필","https://picsum.photos/300?50"]
],

saturday:[
["자동차","https://picsum.photos/300?51"],
["버스","https://picsum.photos/300?52"],
["기차","https://picsum.photos/300?53"],
["자전거","https://picsum.photos/300?54"],
["비행기","https://picsum.photos/300?55"],
["배","https://picsum.photos/300?56"],
["택시","https://picsum.photos/300?57"],
["지하철","https://picsum.photos/300?58"],
["트럭","https://picsum.photos/300?59"],
["오토바이","https://picsum.photos/300?60"]
],

sunday:[
["눈","https://picsum.photos/300?61"],
["비","https://picsum.photos/300?62"],
["단풍","https://picsum.photos/300?63"],
["벚꽃","https://picsum.photos/300?64"],
["낙엽","https://picsum.photos/300?65"],
["햇빛","https://picsum.photos/300?66"],
["구름","https://picsum.photos/300?67"],
["바람","https://picsum.photos/300?68"],
["겨울","https://picsum.photos/300?69"],
["여름","https://picsum.photos/300?70"]
]

}

const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

const today=new Date().getDay()

const topic=topics[days[today]]

document.getElementById("topicTitle").innerText="오늘 주제"

const game=document.getElementById("game")

topic.forEach(item=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`

<img src="${item[1]}" onclick="showWord(this)">

<div class="word">${item[0]}</div>

`

game.appendChild(card)

})

function showWord(img){

const word=img.nextElementSibling

word.style.display="block"

}