const demoRestaurants = [
  {id:1,name:'鸡会算命饭档',type:'rice',typeName:'马来西亚餐 · 海南鸡饭',mapQuery:'Hainanese chicken rice',price:9.5,distance:1.2,minutes:5,art:'chicken-rice',dish:'海南鸡饭 RM9.50'},
  {id:2,name:'椰香饭堂',type:'malay',typeName:'马来餐 · 椰浆饭',price:8,distance:2.1,minutes:8,art:'nasi-lemak',dish:'椰浆饭 RM8.00'},
  {id:3,name:'云吞面王',type:'noodles',typeName:'面食 · 云吞面',price:10,distance:3.4,minutes:10,art:'noodles',dish:'云吞面 RM10.00'},
  {id:4,name:'照烧丼饭屋',type:'japanese',typeName:'日式料理 · 丼饭',price:18,distance:4.8,minutes:13,art:'donburi',dish:'鸡肉蔬菜丼饭 RM18.00'},
  {id:5,name:'巨无霸汉堡店',type:'western',typeName:'西餐 · 汉堡',price:22,distance:6.2,minutes:16,art:'burger',dish:'经典牛肉汉堡 RM22.00'},
  {id:6,name:'香脆咖喱角铺',type:'indian',typeName:'印度餐 · 咖喱角',price:7.5,distance:2.8,minutes:9,art:'curry-puff',dish:'香脆咖喱角套餐 RM7.50'},
  {id:7,name:'杂菜饭配料研究所',type:'rice',typeName:'马来西亚餐 · 杂菜饭',mapQuery:'economy rice',price:11,distance:1.9,minutes:7,art:'rice-meal',dish:'杂菜饭 RM11.00'},
  {id:8,name:'轻食沙拉屋',type:'healthy',typeName:'健康餐 · 轻食套餐',price:16,distance:5.6,minutes:15,art:'salad',dish:'鸡胸沙拉套餐 RM16.00'},
  {id:9,name:'清蒸海鲜坊',type:'seafood',typeName:'海鲜 · 清蒸',price:24,distance:7.1,minutes:18,art:'fish',dish:'清蒸鲈鱼 RM24.00'},
  {id:10,name:'草莓奶酪屋',type:'dessert',typeName:'甜品 · 茶点',price:12,distance:3.9,minutes:12,art:'cake',dish:'草莓奶酪 RM12.00'},
  {id:11,name:'三明治咖啡馆',type:'cafe',typeName:'咖啡馆 · 轻食',price:19,distance:8.4,minutes:21,art:'sandwich',dish:'三明治套餐 RM19.00'},
  {id:12,name:'热锅火锅店',type:'hotpot',typeName:'火锅 · 火锅拼盘',price:27,distance:9.4,minutes:22,art:'hotpot',dish:'火锅拼盘 RM27.00'},
  {id:13,name:'招牌炒面档',type:'noodles',typeName:'面食 · 炒面',price:13,distance:4.1,minutes:11,art:'fried-noodles',dish:'招牌炒面 RM13.00'},
  {id:14,name:'养生蔬食铺',type:'healthy',typeName:'健康餐 · 素食',price:17,distance:6.8,minutes:17,art:'veggie-meal',dish:'养生蔬食套餐 RM17.00'},
  {id:15,name:'烧烤海盗店',type:'western',typeName:'西餐 · 烧烤',price:26,distance:7.8,minutes:20,art:'bbq',dish:'烧烤拼盘 RM26.00'},
  {id:16,name:'冰柠茶铺',type:'dessert',typeName:'甜品 · 冰饮',price:11,distance:2.6,minutes:8,art:'lemon-tea',dish:'冰柠茶 RM11.00'},
  {id:17,name:'虾到你回头面馆',type:'noodles',typeName:'马来西亚面食 · 虾面',mapQuery:'prawn mee',price:12,distance:1.5,minutes:6,art:'noodles',dish:'福建虾面 RM12.00'},
  {id:18,name:'咖喱面面俱到',type:'noodles',typeName:'马来西亚面食 · 咖喱面',mapQuery:'curry mee',price:11.5,distance:2.3,minutes:8,art:'noodles',dish:'咖喱面 RM11.50'},
  {id:19,name:'炒粿条不粘锅档',type:'noodles',typeName:'马来西亚面食 · 炒粿条',mapQuery:'char kway teow',price:10,distance:3.1,minutes:10,art:'fried-noodles',dish:'炒粿条 RM10.00'},
  {id:20,name:'辣椒板面冒汗屋',type:'noodles',typeName:'马来西亚面食 · 辣椒板面',mapQuery:'chili pan mee',price:10.5,distance:2.7,minutes:9,art:'noodles',dish:'辣椒板面 RM10.50'},
  {id:21,name:'粿条汤暖胃铺',type:'noodles',typeName:'马来西亚面食 · 粿条汤',mapQuery:'kway teow soup',price:9.5,distance:4.2,minutes:12,art:'noodles',dish:'粿条汤 RM9.50'},
  {id:22,name:'肉骨茶骨气食堂',type:'chinese',typeName:'马来西亚餐 · 肉骨茶',mapQuery:'bak kut teh',price:18,distance:5.2,minutes:15,art:'hotpot',dish:'肉骨茶 RM18.00'},
  {id:23,name:'麻辣烫辣么开心',type:'hotpot',typeName:'火锅 · 麻辣烫',mapQuery:'malatang',price:15,distance:2.9,minutes:10,art:'hotpot',dish:'麻辣烫 RM15.00'},
  {id:24,name:'泰香炒饭铺',type:'thai',typeName:'泰式料理 · 泰国炒饭',mapQuery:'Thai fried rice',price:13,distance:6.1,minutes:17,art:'rice-meal',dish:'泰国炒饭 RM13.00'},
  {id:25,name:'打抛猪饭香迷糊',type:'thai',typeName:'泰式料理 · 猪肉碎饭',mapQuery:'Thai basil pork rice',price:14,distance:7.3,minutes:19,art:'rice-meal',dish:'泰式猪肉碎饭 RM14.00'},
  {id:26,name:'鱼鲜米粉汤',type:'noodles',typeName:'马来西亚面食 · 鱼肉米粉',mapQuery:'fish soup bee hoon',price:14,distance:8.2,minutes:21,art:'noodles',dish:'鱼肉米粉 RM14.00'},
  {id:27,name:'Mee Siam 欢喜档',type:'noodles',typeName:'马来西亚面食 · Mee Siam',mapQuery:'mee siam',price:9.5,distance:3.7,minutes:11,art:'fried-noodles',dish:'Mee Siam RM9.50'}
];
let visibleRestaurants = [...demoRestaurants];
let userPosition = null;
let livePlacesSearch = false;
let placesLoading = false;
let placesError = false;
let placesNoResults = false;
let placesSearchId = 0;
let placesLocationName = '';
let restaurantsExpanded = false;
let nearbyPlacesCache = [];
let nearbyCacheCenter = null;
let nearbyCacheRadius = 0;
const geocodeCache = new Map();
let radiusSearchTimer = null;
const overpassEndpoints = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.private.coffee/api/interpreter'
];
let lastGeocodeTime = 0;
const $ = (id) => document.getElementById(id);
const money = (value) => `RM${value.toFixed(2)}`;
const escapeHtml = (value) => value.replace(/[&<>"']/g, character=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
function mapsSearchUrl(item) {
  if(item.actual&&item.osmType&&item.osmId){
    return `https://www.openstreetmap.org/${encodeURIComponent(item.osmType)}/${encodeURIComponent(item.osmId)}`;
  }
  const query = item.mapQuery || item.typeName;
  return `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${query} Malaysia`)}`;
}
function distanceBetween(lat1, lon1, lat2, lon2) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const latitudeDelta = radians(lat2 - lat1);
  const longitudeDelta = radians(lon2 - lon1);
  const value = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(longitudeDelta / 2) ** 2;
  const boundedValue=Math.min(1,Math.max(0,value));
  return 6371 * 2 * Math.atan2(Math.sqrt(boundedValue), Math.sqrt(1 - boundedValue));
}
const cuisineLabels = {
  chinese:'中餐', chinese_malaysian:'马来西亚华人料理', malaysian:'马来西亚料理',
  malay:'马来料理', indonesian:'印尼料理', indian:'印度料理', thai:'泰国料理',
  japanese:'日本料理', korean:'韩国料理', burger:'汉堡 / 快餐', pizza:'披萨',
  italian:'意大利料理', western:'西餐', noodles:'面食', ramen:'拉面',
  hotpot:'火锅', steamboat:'火锅', seafood:'海鲜', vegetarian:'素食',
  salad:'沙拉 / 轻食', bakery:'烘焙', dessert:'甜品', coffee_shop:'咖啡馆'
};
const cuisineFilters = {
  chinese:['chinese','chinese_malaysian'],
  malay:['malay','malaysian'],
  indian:['indian'],
  thai:['thai'],
  western:['burger','pizza','italian','western'],
  japanese:['japanese','ramen','sushi'],
  noodles:['noodles','ramen','udon','soba','pasta'],
  rice:['rice','malaysian','malay','indonesian'],
  hotpot:['hotpot','steamboat','sichuan'],
  healthy:['vegetarian','vegan','salad'],
  seafood:['seafood','fish'],
  dessert:['dessert','cake','ice_cream','bakery'],
  cafe:['coffee','cafe']
};
function getOsmTypeName(tags) {
  const cuisine=(tags.cuisine||'').split(';').map(value=>value.trim().toLowerCase()).filter(Boolean);
  const known=cuisine.map(value=>cuisineLabels[value]).find(Boolean);
  if(known)return known;
  if(tags.shop==='bakery')return '烘焙店';
  return ({restaurant:'餐厅',fast_food:'快餐',food_court:'美食中心',cafe:'咖啡馆',ice_cream:'冰淇淋 / 甜品'})[tags.amenity]||'餐饮地点';
}
function getOsmArtwork(tags) {
  const text=`${tags.cuisine||''} ${tags.name||''}`.toLowerCase();
  if(/rice|malay|malaysian|indonesian/.test(text))return 'rice-meal';
  if(/burger|fast_food/.test(text))return 'burger';
  if(/seafood|fish/.test(text))return 'fish';
  if(/cafe|coffee|bakery|dessert/.test(text))return 'sandwich';
  return 'noodles';
}
function getOsmCoordinates(element) {
  const latitude=element.lat??element.center?.lat;
  const longitude=element.lon??element.center?.lon;
  return Number.isFinite(latitude)&&Number.isFinite(longitude)?{lat:latitude,lon:longitude}:null;
}
function toOsmRestaurant(element,position) {
  const coords=getOsmCoordinates(element);
  if(!coords)return null;
  const tags=element.tags||{};
  const name=(tags.name||tags['name:en']||tags['name:zh']||'').trim()||'未命名餐饮地点';
  const typeName=getOsmTypeName(tags);
  return {
    id:`${element.type}/${element.id}`,
    osmType:element.type,
    osmId:element.id,
    name,
    type:tags.cuisine||tags.amenity||'restaurant',
    typeName,
    price:null,
    distance:distanceBetween(position.lat,position.lng,coords.lat,coords.lon),
    lat:coords.lat,
    lon:coords.lon,
    osmTags:tags,
    formattedAddress:[tags['addr:street'],tags['addr:suburb'],tags['addr:city']].filter(Boolean).join(', '),
    art:getOsmArtwork(tags),
    dish:typeName,
    actual:true
  };
}
function placeMatchesCuisine(place,type) {
  if(!type)return true;
  const tags=place.osmTags||{};
  const values=(tags.cuisine||'').toLowerCase().split(';').map(value=>value.trim());
  const keywords=cuisineFilters[type]||[];
  if(keywords.some(keyword=>values.some(value=>value.includes(keyword))))return true;
  if(type==='cafe')return tags.amenity==='cafe';
  if(type==='dessert')return tags.amenity==='ice_cream'||tags.shop==='bakery';
  if(type==='western')return tags.amenity==='fast_food'&&/burger|pizza/.test(tags.cuisine||'');
  return false;
}
const artwork = {
  'chicken-rice': '<ellipse cx="150" cy="127" rx="76" ry="12" fill="#d58a48" opacity=".18"/><ellipse cx="150" cy="116" rx="79" ry="33" fill="#fffdf8"/><ellipse cx="150" cy="112" rx="65" ry="24" fill="#f3e7d3"/><path d="M108 112c2-17 18-31 42-31s40 14 42 31c-10 12-27 18-42 18s-32-6-42-18" fill="url(#rice-chicken-rice)"/><g fill="#fff" opacity=".95"><circle cx="127" cy="101" r="3"/><circle cx="140" cy="94" r="3"/><circle cx="155" cy="99" r="3"/><circle cx="169" cy="92" r="3"/><circle cx="179" cy="105" r="3"/></g><path d="M89 82c0-15 12-27 27-27 10 0 17 5 21 13l9 23c3 9-4 18-14 18H107c-10 0-18-9-18-19z" fill="url(#gold-chicken-rice)"/><path d="M96 80c4-11 13-16 22-16 8 0 13 4 17 11l-20 21z" fill="#ffe0a0"/><path d="M107 74l4 4m9-7 4 5m-18 17 4 3" stroke="#fff0c8" stroke-width="4" stroke-linecap="round"/><circle cx="204" cy="96" r="9" fill="url(#green-chicken-rice)"/><circle cx="216" cy="105" r="8" fill="url(#green-chicken-rice)"/><circle cx="203" cy="113" r="7" fill="#579653"/>',
  'nasi-lemak': '<ellipse cx="150" cy="127" rx="76" ry="12" fill="#d58a48" opacity=".18"/><ellipse cx="150" cy="116" rx="79" ry="33" fill="#fffdf8"/><ellipse cx="150" cy="112" rx="64" ry="23" fill="#f5e8d0"/><path d="M117 115c0-19 13-34 34-34 20 0 34 15 34 34-13 9-23 13-34 13-12 0-23-4-34-13" fill="url(#rice-nasi-lemak)"/><g fill="#fff"><circle cx="135" cy="94" r="3"/><circle cx="151" cy="89" r="3"/><circle cx="166" cy="96" r="3"/><circle cx="177" cy="106" r="3"/></g><ellipse cx="109" cy="105" rx="18" ry="13" fill="#fffdf4"/><circle cx="109" cy="105" r="8" fill="#ffc94e"/><path d="M183 88c12 2 21 11 22 22-8 9-18 10-28 3z" fill="url(#pink-nasi-lemak)"/><path d="M190 92l8 5m-13 1 11 6" stroke="#ffdfc8" stroke-width="3" stroke-linecap="round"/><path d="M126 120c8 2 13 2 20 0" stroke="#7ca45b" stroke-width="5" stroke-linecap="round"/>',
  noodles: '<path d="M133 53c-12-11 8-15 0-26m28 27c-11-12 9-15 1-27" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".75"/><ellipse cx="150" cy="126" rx="78" ry="13" fill="#c17a42" opacity=".2"/><path d="M74 81h152l-14 42c-5 16-22 25-62 25s-57-9-62-25z" fill="url(#bowl-noodles)"/><path d="M83 84h134l-12 35c-5 13-22 20-55 20s-50-7-55-20z" fill="url(#gold-noodles)"/><ellipse cx="150" cy="84" rx="76" ry="23" fill="url(#bowl-noodles)"/><ellipse cx="150" cy="83" rx="65" ry="17" fill="url(#gold-noodles)"/><path d="M103 82c9-16 21 14 31-2s18 13 28-2 17 13 28-1" fill="none" stroke="#fff0bd" stroke-width="7" stroke-linecap="round"/><path d="M110 91c9-14 18 11 28-2s18 11 28-2 16 10 26-1" fill="none" stroke="#ffe1a0" stroke-width="5" stroke-linecap="round"/><ellipse cx="119" cy="72" rx="16" ry="18" fill="url(#rice-noodles)"/><circle cx="119" cy="72" r="8" fill="#ffb332"/><path d="M151 68c11-8 24-5 30 4l-7 11h-27z" fill="url(#green-noodles)"/><circle cx="174" cy="92" r="8" fill="url(#pink-noodles)"/><path d="M102 95h96" stroke="#ffca72" stroke-width="3" opacity=".72"/>',
  donburi: '<ellipse cx="150" cy="127" rx="75" ry="12" fill="#c17a42" opacity=".18"/><path d="M75 83h150l-13 40c-5 16-24 25-62 25s-57-9-62-25z" fill="#ee7b59"/><path d="M86 86h128l-10 34c-5 12-22 19-54 19s-49-7-54-19z" fill="#fff4df"/><ellipse cx="150" cy="84" rx="75" ry="23" fill="#fffdf8"/><ellipse cx="150" cy="84" rx="64" ry="16" fill="#fff7e7"/><path d="M105 80c4-11 18-14 27-6 7 6 4 18-8 21-10 3-23-3-19-15" fill="#e8955c"/><path d="M143 79c4-12 18-15 27-7 8 7 3 18-8 21-11 3-22-3-19-14" fill="#f0a36b"/><path d="M178 78c5-10 17-11 23-3 5 8-2 17-12 18-10 1-17-7-11-15" fill="#e88954"/><path d="M118 99c8-11 18-10 24-1m27-1c8-9 16-8 22 1" stroke="#6da968" stroke-width="7" stroke-linecap="round"/><circle cx="150" cy="75" r="10" fill="#ffcf54"/>',
  burger: '<ellipse cx="150" cy="128" rx="70" ry="12" fill="#bb7040" opacity=".18"/><path d="M82 103c1-29 25-49 68-49s67 20 68 49z" fill="#efa24e"/><path d="M88 94c10-20 31-31 62-31s52 11 62 31" fill="none" stroke="#ffd28a" stroke-width="8" stroke-linecap="round"/><g fill="#fff1bc"><ellipse cx="125" cy="76" rx="3" ry="5"/><ellipse cx="151" cy="69" rx="3" ry="5"/><ellipse cx="176" cy="79" rx="3" ry="5"/></g><path d="M82 102h136l-8 13c-16 9-26-8-42 0s-26 8-40 0-27 8-40 0z" fill="#72b965"/><path d="M88 114h124l-8 15H96z" fill="#6d3930"/><path d="M92 127h116l-10 14H102z" fill="#f7cb59"/><path d="M91 137h118c-6 14-22 21-59 21s-53-7-59-21" fill="#e99a47"/><path d="M103 141c9 8 21 10 47 10s38-2 47-10" fill="none" stroke="#ffc975" stroke-width="5" stroke-linecap="round"/>',
  'curry-puff': '<ellipse cx="150" cy="128" rx="72" ry="12" fill="#bd7745" opacity=".18"/><path d="M81 116c15-37 47-63 81-65 25-1 48 17 54 42 4 18-7 31-27 32l-86 5c-17 1-27-4-22-14" fill="#e99548"/><path d="M91 110c18-28 44-45 71-48 21-2 39 12 45 30-11-6-20-4-29 3-9 8-14 19-28 22l-58 4c-9 0-12-4-1-11" fill="#ffd17c"/><path d="M84 117c28 10 70 12 114 2" fill="none" stroke="#bf6e3c" stroke-width="7" stroke-linecap="round"/><path d="M104 108l7 6m5-12 7 7m7-13 7 7m7-12 7 6m7-10 7 5" stroke="#f3b55e" stroke-width="4" stroke-linecap="round"/><path d="M127 86c8-7 21-10 31-8" fill="none" stroke="#fff0c8" stroke-width="5" stroke-linecap="round"/>',
  'rice-meal': '<ellipse cx="150" cy="127" rx="77" ry="12" fill="#c17a42" opacity=".18"/><ellipse cx="150" cy="113" rx="80" ry="32" fill="#fffdf8"/><ellipse cx="150" cy="109" rx="65" ry="23" fill="#f5e8d0"/><path d="M106 111c3-17 18-30 44-30 25 0 41 13 44 30-13 12-29 17-44 17s-31-5-44-17" fill="#fff9eb"/><g fill="#fff"><circle cx="124" cy="100" r="3"/><circle cx="137" cy="92" r="3"/><circle cx="153" cy="98" r="3"/><circle cx="169" cy="92" r="3"/><circle cx="179" cy="104" r="3"/></g><path d="M91 91c7-15 21-17 29-8 8 8 2 21-10 23-12 2-25-3-19-15" fill="#e99a54"/><path d="M173 94c9-13 23-12 28-3s-3 19-15 19c-10 0-19-6-13-16" fill="#79b969"/><circle cx="198" cy="99" r="7" fill="#e87962"/><path d="M105 116c8 4 14 4 20 0m55 2c8 3 13 2 19-2" stroke="#5d9c58" stroke-width="4" stroke-linecap="round"/>',
  salad: '<ellipse cx="150" cy="127" rx="77" ry="12" fill="#a96e42" opacity=".18"/><ellipse cx="150" cy="109" rx="79" ry="34" fill="#fffdf8"/><ellipse cx="150" cy="105" rx="64" ry="25" fill="#cfe6a4"/><path d="M104 108c0-21 16-34 32-26 9-15 28-13 32 2 16-7 31 5 27 21-4 17-25 23-47 23-25 0-44-5-44-20" fill="#75b96b"/><path d="M115 103c6-11 15-12 21-2m24-12c-1 11 5 16 14 17m-53 12c8-8 15-8 22-1" fill="none" stroke="#b6d982" stroke-width="5" stroke-linecap="round"/><circle cx="125" cy="96" r="8" fill="#ed7660"/><circle cx="166" cy="108" r="8" fill="#ed7660"/><path d="M144 86c7-8 17-5 19 3s-6 14-15 11c-8-3-9-9-4-14" fill="#f2bc64"/><path d="M185 92c8-5 15 0 13 7-2 8-12 10-17 4" fill="#f4c778"/>',
  fish: '<ellipse cx="150" cy="127" rx="76" ry="12" fill="#bd7745" opacity=".18"/><ellipse cx="150" cy="113" rx="79" ry="32" fill="#fffdf8"/><ellipse cx="150" cy="109" rx="65" ry="23" fill="#e7f2e7"/><path d="M89 108c20-28 71-33 111-5-17 27-65 37-111 5m108-5 21-16v42l-21-17" fill="#f5a46e"/><path d="M101 107c23-16 63-20 91-4m-87 13c27 11 58 8 82-2" fill="none" stroke="#ffd5aa" stroke-width="5" stroke-linecap="round"/><circle cx="112" cy="105" r="3" fill="#7a493d"/><path d="M142 87l10-7m8 6 9-8m-8 48 9 7" stroke="#75ad69" stroke-width="5" stroke-linecap="round"/><path d="M184 99c-8-9-11-15-9-21 10 2 16 8 17 17" fill="#83b878"/><path d="M97 91c-9-9-11-15-7-22 9 4 14 10 14 18" fill="#83b878"/>',
  cake: '<ellipse cx="150" cy="128" rx="71" ry="11" fill="#bd7745" opacity=".17"/><path d="M90 100h120v36c0 12-10 19-22 19h-76c-12 0-22-7-22-19z" fill="#f5a7a5"/><path d="M90 100c0-12 25-20 60-20s60 8 60 20-25 19-60 19-60-7-60-19" fill="#fff3e8"/><path d="M95 101c16 10 30-4 45 4s28-5 42 1 19-2 25-6" fill="none" stroke="#ffcfb8" stroke-width="8" stroke-linecap="round"/><path d="M101 121c13 7 26-5 39 1s26 0 39 3 18-2 25-5" fill="none" stroke="#fff0e2" stroke-width="6" stroke-linecap="round"/><path d="M138 77c-8-14 2-24 12-19 10-10 24 1 18 14-5 9-19 12-30 5" fill="#ee6170"/><path d="M154 65c2-8 7-13 14-15" fill="none" stroke="#6caa65" stroke-width="5" stroke-linecap="round"/><circle cx="113" cy="97" r="4" fill="#ffc4b5"/><circle cx="185" cy="97" r="4" fill="#ffc4b5"/>',
  sandwich: '<ellipse cx="150" cy="128" rx="75" ry="12" fill="#bd7745" opacity=".18"/><path d="M82 113l56-45c8-6 17-6 24 0l56 45-18 15H100z" fill="#e9a553"/><path d="M94 109l48-35c5-4 11-4 16 0l47 35-13 9h-85z" fill="#fff1ca"/><path d="M92 111c17-7 23 8 38 1s25 9 40 1 25 6 37 0l-7 15c-16 8-26-6-40 1s-25-5-39 1-22-3-35-2z" fill="#72b96c"/><path d="M98 122h99l-5 14h-89z" fill="#e96d62"/><path d="M99 136h91c-4 11-17 17-45 17s-42-6-46-17" fill="#efb765"/><path d="M105 138c12 5 27 6 40 6s27-1 39-6" fill="none" stroke="#ffe0a0" stroke-width="4" stroke-linecap="round"/>',
  hotpot: '<ellipse cx="150" cy="128" rx="76" ry="12" fill="#bd7745" opacity=".18"/><path d="M83 79h134l-10 46c-4 17-22 25-57 25s-53-8-57-25z" fill="#e36b52"/><path d="M93 84h114l-8 38c-4 12-20 18-49 18s-45-6-49-18z" fill="#f4a54d"/><ellipse cx="150" cy="82" rx="67" ry="20" fill="#fff4dc"/><ellipse cx="150" cy="82" rx="57" ry="14" fill="#f1a04d"/><path d="M117 80c-3-10 7-17 16-12 7-9 19-4 18 5 0 9-11 13-23 12m24-7c1-10 13-14 19-7 8-3 15 4 11 12-5 7-17 6-25 2" fill="#79b66b"/><circle cx="126" cy="78" r="6" fill="#f17b68"/><circle cx="181" cy="83" r="6" fill="#f2d05c"/><path d="M111 67c-7-8-6-13 0-18m27 16c-6-8-5-13 1-19m27 18c-6-8-5-13 1-19" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".72"/><path d="M76 78h149" stroke="#7b4034" stroke-width="7" stroke-linecap="round"/>',
  'fried-noodles': '<ellipse cx="150" cy="127" rx="77" ry="12" fill="#bd7745" opacity=".18"/><ellipse cx="150" cy="111" rx="79" ry="32" fill="#fffdf8"/><ellipse cx="150" cy="108" rx="65" ry="23" fill="#f2d8aa"/><path d="M100 108c9-21 19 20 30-1s19 18 30-2 17 17 29-2" fill="none" stroke="#e59b48" stroke-width="7" stroke-linecap="round"/><path d="M103 116c9-19 18 16 29-1s18 15 29-2 17 15 27-2" fill="none" stroke="#f4b75e" stroke-width="6" stroke-linecap="round"/><path d="M109 95c8-10 17-8 22 0m42-8c8-7 16-5 18 3m-77 30c5-7 11-8 17-4" fill="none" stroke="#6fa963" stroke-width="7" stroke-linecap="round"/><circle cx="128" cy="89" r="5" fill="#ed7460"/><circle cx="180" cy="105" r="5" fill="#ed7460"/><path d="M159 87l9-10" stroke="#75ae66" stroke-width="5" stroke-linecap="round"/>',
  'veggie-meal': '<ellipse cx="150" cy="127" rx="77" ry="12" fill="#bd7745" opacity=".18"/><ellipse cx="150" cy="112" rx="79" ry="32" fill="#fffdf8"/><ellipse cx="150" cy="108" rx="64" ry="22" fill="#f4e7cf"/><path d="M105 110c0-20 16-31 28-21 8-14 26-11 28 3 13-9 28 0 25 14-4 15-20 22-43 22-24 0-38-6-38-18" fill="#78b76c"/><path d="M112 108c8-9 16-8 21 0m32-18c-2 8 2 14 10 16m-40 10c6-7 12-7 18-1" fill="none" stroke="#c5df8d" stroke-width="5" stroke-linecap="round"/><path d="M143 91c8-8 19-3 18 5-1 8-11 12-19 7-7-4-6-9 1-12" fill="#f0c66e"/><path d="M181 101c8-8 18-4 17 4-1 7-10 10-17 6-7-3-6-7 0-10" fill="#ed8267"/><circle cx="119" cy="94" r="7" fill="#82c278"/><circle cx="192" cy="113" r="6" fill="#ed7460"/>',
  bbq: '<ellipse cx="150" cy="127" rx="75" ry="12" fill="#bd7745" opacity=".18"/><path d="M85 109h130c-8 20-31 29-65 29s-57-9-65-29" fill="#fff5df"/><path d="M92 111c13 10 21-8 34 2s21-8 34 2 21-8 33 2" fill="none" stroke="#73a95d" stroke-width="7" stroke-linecap="round"/><path d="M98 103l15-22 19 8-10 20zm42 7 12-28 20 4-7 25zm42-2 7-23 20 3-2 24z" fill="#e98751"/><path d="M104 102l11-16m42 19 9-18m38 19 5-16" stroke="#ffc078" stroke-width="4" stroke-linecap="round"/><path d="M91 112l117 7" stroke="#d7a268" stroke-width="5" stroke-linecap="round"/>',
  'lemon-tea': '<ellipse cx="150" cy="130" rx="58" ry="10" fill="#b87949" opacity=".18"/><path d="M110 61h80l-7 65c-2 12-11 18-33 18s-31-6-33-18z" fill="#fff0d6" opacity=".92"/><path d="M116 88h68l-5 37c-2 8-10 12-29 12s-27-4-29-12z" fill="#e8a34c"/><path d="M119 99h62l-3 24c-2 8-9 11-28 11s-26-3-28-11z" fill="#f4c96b"/><path d="M144 59l4-22" stroke="#f28a55" stroke-width="6" stroke-linecap="round"/><path d="M163 47l9-12" stroke="#f28a55" stroke-width="5" stroke-linecap="round"/><circle cx="180" cy="65" r="20" fill="#ffdf72"/><circle cx="180" cy="65" r="13" fill="#fff2b0"/><path d="M180 54v22m-11-11h22" stroke="#ffc84e" stroke-width="3"/><circle cx="135" cy="111" r="4" fill="#8f5838"/><circle cx="153" cy="122" r="4" fill="#8f5838"/><circle cx="169" cy="108" r="4" fill="#8f5838"/>'
};
let foodArtId = 0;
function renderFoodArt(type, label) {
  const instanceId = `${type}-${++foodArtId}`;
  const mealArtwork = (artwork[type] || artwork.noodles).replaceAll(`-${type}`, `-${instanceId}`);
  return `<svg class="food-art" viewBox="0 0 300 180" role="img" aria-label="${escapeHtml(label)}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="art-bg-${instanceId}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff5e8"/><stop offset="1" stop-color="#ffdfc2"/></linearGradient><linearGradient id="bowl-${instanceId}" x1="0" y1="0" x2=".2" y2="1"><stop stop-color="#8f4b39"/><stop offset=".48" stop-color="#63352f"/><stop offset="1" stop-color="#38232a"/></linearGradient><linearGradient id="rice-${instanceId}" x1=".2" y1="0" x2=".7" y2="1"><stop stop-color="#fffef5"/><stop offset="1" stop-color="#f0dfc0"/></linearGradient><linearGradient id="gold-${instanceId}" x1=".15" y1="0" x2=".8" y2="1"><stop stop-color="#ffd982"/><stop offset=".58" stop-color="#f5aa50"/><stop offset="1" stop-color="#d87539"/></linearGradient><linearGradient id="green-${instanceId}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#b8db7f"/><stop offset=".65" stop-color="#77b365"/><stop offset="1" stop-color="#4f8d52"/></linearGradient><linearGradient id="pink-${instanceId}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffb5a2"/><stop offset="1" stop-color="#e86b68"/></linearGradient><filter id="food-shadow-${instanceId}" x="-30%" y="-30%" width="160%" height="180%"><feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/><feOffset dy="4" result="offset"/><feComponentTransfer><feFuncA type="linear" slope=".18"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="300" height="180" rx="16" fill="url(#art-bg-${instanceId})"/><circle cx="150" cy="88" r="67" fill="#fff9f0" opacity=".48"/><path d="M43 40l4 9 9 4-9 4-4 9-4-9-9-4 9-4zM252 65l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#ffc168" opacity=".8"/><g transform="translate(-9 -6) scale(1.06)" filter="url(#food-shadow-${instanceId})">${mealArtwork}</g></svg>`;
}
document.querySelectorAll('.food-float[data-art]').forEach(element=>{
  element.innerHTML=renderFoodArt(element.dataset.art,element.dataset.label);
});
function renderRestaurants(items) {
  const budget = $('budget').value === '' ? null : Number($('budget').value);
  $('restaurantGrid').innerHTML = items.map(r => {
    if (r.actual) {
      return `<article class="restaurant-card"><div class="restaurant-image">${renderFoodArt(r.art,r.typeName)}<span class="demo-label">食物示意插画</span></div><div class="restaurant-body"><h3 class="restaurant-name">${escapeHtml(r.name)}</h3><div class="restaurant-type">${escapeHtml(r.typeName)}</div><div class="price-line"><strong class="place-price-level">价格和营业状态未提供</strong></div><div class="meta-row"><span>⌖ 距离约 ${r.distance.toFixed(1)} km（直线）</span></div>${r.formattedAddress ? `<div class="meta-row place-address"><span>${escapeHtml(r.formattedAddress)}</span></div>` : ''}<div class="card-bottom"><span class="budget-tag unknown">OpenStreetMap</span><a class="map-link" href="${escapeHtml(mapsSearchUrl(r))}" target="_blank" rel="noopener noreferrer">查看地图 ↗</a></div></div></article>`;
    }
    const tag = budget === null
      ? '<span class="budget-tag unknown">未设定预算</span>'
      : r.price <= budget
        ? '<span class="budget-tag">✓ 预算内</span>'
        : '<span class="budget-tag unknown">超出预算</span>';
    return `<article class="restaurant-card"><div class="restaurant-image">${renderFoodArt(r.art || 'noodles',r.dish)}<span class="demo-label">示范资料</span></div><div class="restaurant-body"><h3 class="restaurant-name">${escapeHtml(r.name)}</h3><div class="restaurant-type">${escapeHtml(r.typeName)}</div><div class="price-line"><strong>${money(r.price)}</strong><span>／每人参考价</span></div><div class="meta-row"><span>⌖ 距离约 ${r.distance.toFixed(1)} km</span><span>🚗 约 ${r.minutes} 分钟</span></div><div class="meta-row"><span>🍽 ${escapeHtml(r.dish)}</span></div><div class="card-bottom">${tag}<a class="map-link" href="${mapsSearchUrl(r)}" target="_blank" rel="noopener">示范搜索 ↗</a></div></div></article>`;
  }).join('');
  $('emptyState').classList.toggle('hidden', items.length > 0);
  $('restaurantGrid').classList.toggle('hidden', items.length === 0);
  $('emptyState').querySelector('h3').textContent = placesLoading
    ? '正在认真寻找附近美食…'
    : placesError
      ? '免费地图查询服务暂时无法载入'
      : placesNoResults
        ? '这个范围内暂时没有找到地图登记的餐饮地点'
        : livePlacesSearch
          ? '没有找到符合条件的餐饮地点'
    : '价钱那么低，找不到东西吃啦！';
  $('emptyState').querySelector('p').textContent = placesLoading
    ? '正在查找 OpenStreetMap 地图资料，请稍等。'
    : placesError
      ? '免费的公开地图查询服务可能繁忙或暂时无法连接，请稍后重试。'
      : placesNoResults
        ? '地图资料可能不完整；试试扩大公里数、换个地点或清除料理筛选。'
        : livePlacesSearch
          ? '试试清除料理筛选或换个地点；也可以用转盘随机抽正餐。'
    : '可以考虑吃同事的饭，哈哈哈哈。';
  const canExpand = items.length > 2;
  if (!canExpand) restaurantsExpanded = false;
  $('restaurantGrid').classList.toggle('is-collapsed', canExpand && !restaurantsExpanded);
  $('restaurantMore').classList.toggle('hidden', !canExpand);
  $('restaurantMoreButton').setAttribute('aria-expanded', String(restaurantsExpanded));
  $('restaurantMoreText').textContent = restaurantsExpanded
    ? '收起餐厅列表'
    : `展开更多餐厅（还有 ${items.length - 2} 家）`;
  $('restaurantMoreButton').querySelector('.restaurant-more-icon').textContent = restaurantsExpanded ? '⌃' : '⌄';
  $('resultSummary').textContent = placesLoading
    ? `正在搜索「${placesLocationName}」${$('radius').value} 公里内的真实美食…`
    : placesError
      ? '免费地图查询服务暂时无法载入。'
        : livePlacesSearch
          ? `在「${placesLocationName}」${$('radius').value} 公里内找到 ${items.length} 个地图餐饮地点${budget !== null ? ' · 地图没有餐点价格，预算暂不筛掉结果' : ''}`
    : `找到 ${items.length} 个示范选择 · 搜索范围 ${$('radius').value} 公里`;
  $('mapAttribution').classList.toggle('hidden',!livePlacesSearch||placesLoading||placesError||items.length===0);
  [...$('sort').options].forEach(option=>{
    option.disabled=livePlacesSearch&&['price','price-desc','time','time-desc'].includes(option.value);
  });
  if(livePlacesSearch&&['price','price-desc','time','time-desc'].includes($('sort').value)){
    $('sort').value='distance';
  }
}
function search() {
  if (livePlacesSearch) {
    if(userPosition)searchNearbyPlaces(userPosition,placesLocationName);
    else searchByAddress();
    return;
  }
  const type = $('cuisine').value;
  const budget = $('budget').value === '' ? null : Number($('budget').value);
  const radius = Number($('radius').value);
  visibleRestaurants = demoRestaurants.filter(r => (!type || r.type === type) && r.distance <= radius && (budget === null || r.price <= budget));
  restaurantsExpanded = false;
  placesSearchId+=1;
  livePlacesSearch=false;
  placesLoading=false;
  placesError=false;
  placesNoResults=false;
  $('resultsNotice').innerHTML = '<span>ⓘ</span> 餐厅、价格和距离目前都是示范资料，不代表真实附近商家；输入地点或使用定位，可查询 OpenStreetMap 登记的餐饮地点。';
  $('mapAttribution').classList.add('hidden');
  sortResults();
  if(wheelMode==='nearby')syncNearbyWheelItems();
}
function sortResults() {
  const sort = $('sort').value;
  const sorted = [...visibleRestaurants];
  if (sort === 'price') sorted.sort((a,b)=>(a.price ?? 0)-(b.price ?? 0));
  if (sort === 'price-desc') sorted.sort((a,b)=>(b.price ?? 0)-(a.price ?? 0));
  if (sort === 'distance') sorted.sort((a,b)=>a.distance-b.distance);
  if (sort === 'distance-desc') sorted.sort((a,b)=>b.distance-a.distance);
  if (sort === 'time') sorted.sort((a,b)=>a.minutes-b.minutes);
  if (sort === 'time-desc') sorted.sort((a,b)=>b.minutes-a.minutes);
  renderRestaurants(sorted);
}
$('searchBtn').addEventListener('click',search);
$('sort').addEventListener('change', sortResults);
$('cuisine').addEventListener('change',()=>{
  if(livePlacesSearch&&userPosition&&!placesLoading)applyNearbyPlaceFilters();
});
$('radius').addEventListener('change',()=>{
  if(livePlacesSearch&&userPosition){
    clearTimeout(radiusSearchTimer);
    radiusSearchTimer=setTimeout(()=>searchNearbyPlaces(userPosition,placesLocationName),300);
  }
});
$('restaurantMoreButton').addEventListener('click', () => {
  restaurantsExpanded = !restaurantsExpanded;
  sortResults();
});
document.querySelectorAll('[data-budget]').forEach(btn => btn.addEventListener('click',()=>{$('budget').value=btn.dataset.budget;document.querySelectorAll('[data-budget]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');search();}));
$('clearBudget').addEventListener('click',()=>{$('budget').value='';document.querySelectorAll('[data-budget]').forEach(b=>b.classList.remove('active'));search();});
$('resetFilters').addEventListener('click',()=>{
  $('cuisine').value='';
  $('budget').value='';
  $('radius').value='25';
  placesSearchId+=1;
  livePlacesSearch=false;
  userPosition=null;
  nearbyPlacesCache=[];
  nearbyCacheCenter=null;
  nearbyCacheRadius=0;
  placesLoading=false;
  placesError=false;
  placesNoResults=false;
  $('locationStatus').textContent='筛选已清除，可查看示范推荐或搜索 OpenStreetMap。';
  $('locateBtn').disabled=false;
  $('searchLocationBtn').disabled=false;
  $('searchBtn').disabled=false;
  search();
});
$('locateBtn').addEventListener('click',()=>{
  placesSearchId+=1;
  const lookupId=placesSearchId;
  if(!navigator.geolocation){
    $('locationStatus').textContent='此浏览器不支持定位，请输入城市、地区或地址搜索。';
    $('locateBtn').disabled=false;
    $('searchLocationBtn').disabled=false;
    $('searchBtn').disabled=false;
    return;
  }
  nearbyPlacesCache=[];
  nearbyCacheCenter=null;
  nearbyCacheRadius=0;
  $('locationStatus').textContent='正在请求位置权限…';
  navigator.geolocation.getCurrentPosition(pos=>{
    if (lookupId !== placesSearchId) return;
    searchNearbyPlaces({lat:pos.coords.latitude,lng:pos.coords.longitude},'当前位置');
  },err=>{
    if (lookupId !== placesSearchId) return;
    $('locationStatus').textContent=err.code===1
      ?'你没有允许定位；可以输入城市、地区或地址，在网页内搜索附近美食。'
      :'暂时无法取得位置；可以输入城市、地区或地址，在网页内搜索附近美食。';
    $('locateBtn').disabled=false;
    $('searchLocationBtn').disabled=false;
    $('searchBtn').disabled=false;
  },{enableHighAccuracy:true,timeout:15000,maximumAge:60000});
});
async function searchNearbyPlaces(position, locationName, requestId=++placesSearchId) {
  const radiusKm=Number($('radius').value);
  placesLocationName=locationName;
  userPosition=position;
  livePlacesSearch=true;
  if(nearbyCacheCenter
    &&distanceBetween(position.lat,position.lng,nearbyCacheCenter.lat,nearbyCacheCenter.lng)<0.05
    &&nearbyCacheRadius>=radiusKm){
    placesLoading=false;
    placesError=false;
    applyNearbyPlaceFilters();
    return;
  }
  placesLoading=true;
  placesError=false;
  placesNoResults=false;
  visibleRestaurants=[];
  restaurantsExpanded=false;
  $('locationStatus').textContent=`正在搜索「${locationName}」${radiusKm} 公里内的真实美食…`;
  $('resultsNotice').innerHTML='<span>ⓘ</span> 正在向免费的 OpenStreetMap 公共查询服务查询。你输入的地点或授权后的坐标会发送给该服务；服务繁忙时可稍后重试。';
  $('locateBtn').disabled=true;
  $('searchLocationBtn').disabled=true;
  $('searchBtn').disabled=true;
  sortResults();
  if(wheelMode==='nearby')syncNearbyWheelItems();
  try{
    const response=await fetchOsmRestaurants(position,radiusKm);
    if(requestId!==placesSearchId)return;
    nearbyPlacesCache=response
      .map(place=>toOsmRestaurant(place,position))
      .filter(place=>place&&place.distance<=radiusKm);
    nearbyCacheCenter={...position};
    nearbyCacheRadius=radiusKm;
    placesLoading=false;
    placesError=false;
    applyNearbyPlaceFilters();
  }catch(error){
    if(requestId!==placesSearchId)return;
    placesLoading=false;
    placesError=true;
    placesNoResults=false;
    visibleRestaurants=[];
    $('locationStatus').textContent='OpenStreetMap 公共查询服务暂时无法连接；请稍后重试。';
    $('resultsNotice').innerHTML='<span>ⓘ</span> 免费的 OpenStreetMap 查询服务可能繁忙、限流或被当前网络阻挡。没有用示范资料冒充附近地点；可稍后重试。';
    console.error('Unable to query nearby OpenStreetMap restaurants:',error);
    sortResults();
    if(wheelMode==='nearby')syncNearbyWheelItems();
  }finally{
    if(requestId===placesSearchId){
      $('locateBtn').disabled=false;
      $('searchLocationBtn').disabled=false;
      $('searchBtn').disabled=false;
    }
  }
}
function applyNearbyPlaceFilters() {
  const radiusKm=Number($('radius').value);
  const cuisine=$('cuisine').value;
  visibleRestaurants=nearbyPlacesCache
    .filter(place=>place.distance<=radiusKm&&placeMatchesCuisine(place,cuisine))
    .sort((a,b)=>a.distance-b.distance);
  placesNoResults=visibleRestaurants.length===0;
  $('locationStatus').textContent=placesNoResults
    ?`「${placesLocationName}」${radiusKm} 公里内没有找到符合筛选的地图餐饮地点；地图资料可能不完整。`
    :`在「${placesLocationName}」${radiusKm} 公里内找到 ${visibleRestaurants.length} 个地图餐饮地点。`;
  $('resultsNotice').innerHTML='<span>ⓘ</span> 地点资料来自 OpenStreetMap 贡献者；登记情况不完整，结果不代表该区域全部餐厅。距离为直线估算，地图没有餐点价格或实时营业状态；预算筛选不会影响结果。点店名地图链接可查看 OSM 地点。';
  sortResults();
  if(wheelMode==='nearby')syncNearbyWheelItems();
}
async function fetchOsmRestaurants(position,radiusKm) {
  const query=`[out:json][timeout:25];(nwr(around:${Math.round(radiusKm*1000)},${position.lat},${position.lng})["amenity"~"^(restaurant|fast_food|cafe|food_court)$"];nwr(around:${Math.round(radiusKm*1000)},${position.lat},${position.lng})["shop"="bakery"];);out tags center;`;
  let lastError;
  for(const endpoint of overpassEndpoints){
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),12000);
    try{
      const url=`${endpoint}?data=${encodeURIComponent(query)}`;
      const response=await fetch(url,{signal:controller.signal,headers:{Accept:'application/json'}});
      if(!response.ok)throw new Error(`Overpass returned HTTP ${response.status}`);
      const result=await response.json();
      if(!Array.isArray(result.elements))throw new Error('Overpass response did not contain an elements list.');
      return result.elements;
    }catch(error){
      lastError=error;
      console.warn(`OpenStreetMap query endpoint failed (${endpoint}):`,error);
    }finally{
      clearTimeout(timeout);
    }
  }
  const failure=new Error('All OpenStreetMap query endpoints failed.');
  failure.cause=lastError;
  throw failure;
}
async function searchByAddress() {
  const address = $('locationInput').value.trim();
  if (!address) {
    $('locationStatus').textContent = '请先输入城市、地区或地址，例如：Taman Molek、KLCC。';
    $('locationInput').focus();
    return;
  }
  const requestId=++placesSearchId;
  placesLocationName=address;
  livePlacesSearch=true;
  placesLoading=true;
  placesError=false;
  placesNoResults=false;
  userPosition=null;
  nearbyPlacesCache=[];
  nearbyCacheCenter=null;
  nearbyCacheRadius=0;
  visibleRestaurants=[];
  restaurantsExpanded=false;
  $('locationStatus').textContent=`正在识别地点「${address}」…`;
  $('resultsNotice').innerHTML='<span>ⓘ</span> 正在使用免费的 OpenStreetMap Nominatim 识别地点，再搜索附近餐饮地点。输入内容会发送给公开地图查询服务。';
  $('locateBtn').disabled=true;
  $('searchLocationBtn').disabled=true;
  $('searchBtn').disabled=true;
  sortResults();
  if(wheelMode==='nearby')syncNearbyWheelItems();
  try{
    const cacheKey=address.toLocaleLowerCase();
    let match=geocodeCache.get(cacheKey);
    if(!match){
      const wait=Math.max(0,1100-(Date.now()-lastGeocodeTime));
      if(wait)await new Promise(resolve=>setTimeout(resolve,wait));
      lastGeocodeTime=Date.now();
      const params=new URLSearchParams({q:address,format:'jsonv2',limit:'1',countrycodes:'my'});
      const response=await fetch(`https://nominatim.openstreetmap.org/search?${params}`,{headers:{Accept:'application/json','Accept-Language':'zh,en'}});
      if(!response.ok)throw new Error(`Nominatim returned HTTP ${response.status}`);
      const matches=await response.json();
      match=matches.find(place=>Number.isFinite(Number(place.lat))&&Number.isFinite(Number(place.lon)));
      if(match)geocodeCache.set(cacheKey,match);
    }
    if(requestId!==placesSearchId)return;
    if(!match){
      placesLoading=false;
      placesNoResults=true;
      $('locationStatus').textContent=`OpenStreetMap 找不到「${address}」这个地点；请试试更完整的地址。`;
      $('resultsNotice').innerHTML='<span>ⓘ</span> 无法识别输入地点；地图资料可能没有收录该地名。请使用更完整地址，或授权设备定位。';
      sortResults();
      if(wheelMode==='nearby')syncNearbyWheelItems();
      return;
    }
    const position={lat:Number(match.lat),lng:Number(match.lon)};
    const resolvedName=match.display_name||address;
    await searchNearbyPlaces(position,resolvedName,requestId);
  }catch(error){
    if(requestId!==placesSearchId)return;
    placesLoading=false;
    placesError=true;
    $('locationStatus').textContent='OpenStreetMap 地点识别服务暂时无法使用；请稍后重试或授权设备定位。';
    $('resultsNotice').innerHTML='<span>ⓘ</span> 免费的 OpenStreetMap 地点查询服务可能繁忙、限流或被当前网络阻挡。';
    console.error('Unable to resolve the requested location with OpenStreetMap:',error);
    sortResults();
    if(wheelMode==='nearby')syncNearbyWheelItems();
  }finally{
    if(requestId===placesSearchId){
      $('locateBtn').disabled=false;
      $('searchLocationBtn').disabled=false;
      $('searchBtn').disabled=false;
    }
  }
}
$('searchLocationBtn').addEventListener('click', searchByAddress);
$('locationInput').addEventListener('keydown',event=>{
  if(event.key==='Enter'){
    event.preventDefault();
    searchByAddress();
  }
});
let spinning=false;
let wheelMode='custom';
let nearbyWheelItems=[];
let malaysianWheelItems=[];
let wheelRotation=0;
const wheelColors=['#ff9c4d','#ffc078','#f47a36','#ffb15e','#f28c55','#ffd08a','#ee8550','#ffad72'];
const malaysianFoods=[
  '海南鸡饭','椰浆饭炸鸡','咖喱鸡椰浆饭','杂菜饭','Nasi Kandar 炸鸡饭',
  '肉骨茶配饭','印度香饭 Biryani','牛肉仁当饭','砂煲鸡饭',
  '虾面','咖喱面','辣椒板面','云吞面','福建炒面','炒粿条','叻沙','Mee Siam',
  '甘榜炒饭','Mamak 炒面','泰式打抛猪肉饭','泰式鸡肉炒河粉 Pad Thai',
  '泰式绿咖喱鸡饭','日式豚骨拉面','日式炸鸡咖喱饭','日式牛肉饭 Gyudon',
  '韩式拌饭 Bibimbap','韩式烤牛肉饭 Bulgogi','韩式泡菜锅配饭',
  '炸鸡套餐配饭','牛肉汉堡套餐','Nasi Ayam Penyet 炸鸡饭',
  'Nasi Goreng Pattaya 泰式蛋包饭','咖喱鱼头饭','印度炒面 Maggi Goreng',
  '印度煎饼鸡肉咖喱','福建虾面','怡保芽菜鸡饭','炒米粉',
  '泰式菠萝炒饭','日式乌冬面','韩式炸酱面','韩式炸鸡配饭'
];
function getCustomWheelItems() {
  return $('customWheelItems').value.split(/[,\n，、]+/).map(item=>item.trim()).filter(Boolean).map(label=>({label}));
}
function getWheelItems() {
  if(wheelMode==='custom')return getCustomWheelItems();
  if(wheelMode==='malaysian')return malaysianWheelItems;
  return nearbyWheelItems;
}
function updateWheelGraphic() {
  const items=getWheelItems();
  const segments=$('wheelSegments');
  if(!items.length){
    $('wheelGraphic').style.background='conic-gradient(#ff9c4d 0 25%,#ffc078 25% 50%,#f47a36 50% 75%,#ffb15e 75%)';
    segments.innerHTML='';
    return;
  }
  const slice=360/items.length;
  const stops=items.map((item,index)=>{
    const start=index*slice;
    const end=(index+1)*slice;
    return `${wheelColors[index%wheelColors.length]} ${start}deg ${end}deg`;
  });
  $('wheelGraphic').style.background=`conic-gradient(${stops.join(',')})`;
  segments.innerHTML=items.map((item,index)=>{
    const angle=(-90+(index+.5)*slice)*Math.PI/180;
    const x=50+Math.cos(angle)*34;
    const y=50+Math.sin(angle)*34;
    const label=items.length>10?`${index+1}`:item.label;
    return `<span class="wheel-segment-label" style="left:${x}%;top:${y}%">${escapeHtml(label)}</span>`;
  }).join('');
}
function updateWheelHint() {
  const count=getCustomWheelItems().length;
  $('customWheelHint').textContent=count<2?'至少输入 2 个选项，转盘才更有悬念。':count>10?`已添加 ${count} 个选项。转盘显示编号，顺序对应你输入的顺序。`:`已添加 ${count} 个选项，可以转盘啦！`;
}
function setWheelMode(mode) {
  wheelMode=mode;
  const modes=[
    ['custom','customModeBtn','customWheelPanel'],
    ['nearby','nearbyModeBtn','nearbyWheelPanel'],
    ['malaysian','malaysianModeBtn','malaysianWheelPanel']
  ];
  modes.forEach(([key,buttonId,panelId])=>{
    const active=mode===key;
    $(buttonId).classList.toggle('active',active);
    $(buttonId).setAttribute('aria-selected',String(active));
    $(panelId).classList.toggle('hidden',!active);
  });
  $('wheelResult').textContent=mode==='custom'
    ?'输入选项或加入当前推荐，开始抽签吧！'
    :mode==='malaysian'
      ?'随机加入 30 种饱腹正餐，再开始转盘吧！'
      :'把当前列表中的餐厅加入转盘；请先在上方搜索附近真实地点，或使用示范推荐。';
  if(mode==='custom'||mode==='malaysian')updateWheelGraphic();
  else syncNearbyWheelItems();
}
function randomizeMalaysianWheelItems() {
  const shuffled=[...malaysianFoods];
  for(let index=shuffled.length-1;index>0;index--){
    const swapIndex=Math.floor(Math.random()*(index+1));
    [shuffled[index],shuffled[swapIndex]]=[shuffled[swapIndex],shuffled[index]];
  }
  malaysianWheelItems=shuffled.slice(0,30).map(label=>({label}));
  $('malaysianWheelSummary').textContent=`已随机加入 ${malaysianWheelItems.length} 种午餐 / 晚餐正餐：${malaysianWheelItems.map((item,index)=>`${index+1}. ${item.label}`).join('、')}`;
  if(wheelMode==='malaysian')updateWheelGraphic();
  $('wheelResult').textContent='30 种饱腹正餐已加入转盘，看看今天的好运会选中什么！';
}
function syncNearbyWheelItems() {
  nearbyWheelItems=visibleRestaurants.map(restaurant=>({
    label:restaurant.name,
    name:restaurant.name,
    typeName:restaurant.typeName,
    dish:restaurant.dish,
    price:restaurant.price,
    art:restaurant.art,
    actual:restaurant.actual,
    lat:restaurant.lat,
    lon:restaurant.lon,
    mapQuery:restaurant.mapQuery,
    distance:restaurant.distance
  }));
  $('wheelNearbySummary').textContent=nearbyWheelItems.length
    ?`已加入 ${nearbyWheelItems.length} 个当前${nearbyWheelItems.some(item=>item.actual)?'地点':'示范选择'}：${nearbyWheelItems.map((item,index)=>`${index+1}. ${item.name}`).join('、')}`
    :'目前列表没有餐厅；请搜索附近真实地点，或切换回示范推荐。';
  if(wheelMode==='nearby')updateWheelGraphic();
}
function closeWinnerDialog() {
  $('winnerOverlay').classList.add('hidden');
  $('celebrationLayer').replaceChildren();
}
function celebrateWinner(item, mode) {
  const isRestaurant=mode==='nearby';
  $('winnerIcon').classList.toggle('has-art',isRestaurant);
  $('winnerIcon').innerHTML=isRestaurant?renderFoodArt(item.art,item.dish):'🍜';
  $('winnerName').textContent=isRestaurant?item.name:item.label;
  const dish=isRestaurant?item.dish.replace(/\s*RM[\d.]+\s*$/,''):'';
  $('winnerDescription').textContent=isRestaurant
    ? item.actual
      ? `${item.typeName} · 距离约 ${item.distance.toFixed(1)} km（直线估算），价格请查看店家资料。`
      : `${dish} · ${money(item.price)}／人`
    : '今天就决定吃这个，开动吧！';
  const mapButton=$('winnerMapBtn');
  mapButton.classList.toggle('hidden',!isRestaurant);
  if(isRestaurant){
    mapButton.href=mapsSearchUrl(item);
    mapButton.textContent=item.actual?'在 OpenStreetMap 查看这家店 ↗':'在地图搜索这个餐点 ↗';
  }else{
    mapButton.removeAttribute('href');
  }
  $('winnerOverlay').classList.remove('hidden');
  $('closeWinnerBtn').focus();
  const colors=['#ff7a1a','#ffbd59','#f46f78','#77b96c','#68b8d0','#bb8bd8'];
  const confetti=Array.from({length:90},(_,index)=>{
    const piece=document.createElement('span');
    piece.className='confetti-piece';
    piece.style.left=`${Math.random()*100}%`;
    piece.style.backgroundColor=colors[index%colors.length];
    piece.style.setProperty('--fall-duration',`${2.2+Math.random()*1.8}s`);
    piece.style.setProperty('--fall-delay',`${Math.random()*.65}s`);
    piece.style.setProperty('--fall-distance',`${65+Math.random()*45}vh`);
    piece.style.setProperty('--confetti-drift',`${Math.random()*180-90}px`);
    piece.style.setProperty('--confetti-spin',`${Math.random()*900-450}deg`);
    $('celebrationLayer').appendChild(piece);
    return piece;
  });
  window.setTimeout(()=>confetti.forEach(piece=>piece.remove()),5000);
}
$('customModeBtn').addEventListener('click',()=>setWheelMode('custom'));
$('nearbyModeBtn').addEventListener('click',()=>setWheelMode('nearby'));
$('malaysianModeBtn').addEventListener('click',()=>setWheelMode('malaysian'));
$('randomMalaysianBtn').addEventListener('click',randomizeMalaysianWheelItems);
$('customWheelItems').addEventListener('input',()=>{
  updateWheelHint();
  if(wheelMode==='custom')updateWheelGraphic();
});
$('syncWheelBtn').addEventListener('click',()=>{
  syncNearbyWheelItems();
  if(nearbyWheelItems.length)$('wheelResult').textContent=`已把 ${nearbyWheelItems.length} 个当前餐厅放进转盘！`;
});
$('closeWinnerBtn').addEventListener('click',closeWinnerDialog);
$('winnerConfirmBtn').addEventListener('click',closeWinnerDialog);
$('winnerOverlay').addEventListener('click',event=>{
  if(event.target===$('winnerOverlay'))closeWinnerDialog();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&!$('winnerOverlay').classList.contains('hidden'))closeWinnerDialog();
});
function startWheelSpin() {
  if(spinning)return;
  const modeAtSpin=wheelMode;
  const items=getWheelItems();
  if(wheelMode==='custom'&&items.length<2){
    $('wheelResult').textContent='再多写至少一个想吃的选项，转盘才转得起来哦！';
    $('customWheelItems').focus();
    return;
  }
  if(!items.length){
    $('wheelResult').textContent=wheelMode==='nearby'
      ?'附近列表还没有餐厅；请先搜索附近地点或查看示范推荐。'
      :'请先随机加入 30 种饱腹正餐，再开始转盘。';
    return;
  }
  spinning=true;
  $('spinBtn').disabled=true;
  $('spinBtn').textContent='转盘进行中…';
  $('wheelCenter').disabled=true;
  $('wheelCenter').setAttribute('aria-label','转盘进行中');
  $('wheelCenter').innerHTML='转盘<br>中…';
  const chosenIndex=Math.floor(Math.random()*items.length);
  const chosen=items[chosenIndex];
  const slice=360/items.length;
  wheelRotation+=1800+Math.floor(Math.random()*720)+360-(chosenIndex+.5)*slice;
  $('wheelGraphic').style.transform=`rotate(${wheelRotation}deg)`;
  $('wheelGraphic').querySelector('.wheel-center').style.transform=`translate(-50%,-50%) rotate(${-wheelRotation}deg)`;
  setTimeout(()=>{
    $('wheelResult').textContent=modeAtSpin==='nearby'
      ? chosen.actual
        ? `🎉 今天就去：${chosen.name} · ${chosen.distance.toFixed(1)} km`
        : `🎉 今天就吃：${chosen.name} · ${money(chosen.price)}／人`
      :`🎉 今天就吃：${chosen.label}`;
    celebrateWinner(chosen,modeAtSpin);
    $('spinBtn').disabled=false;
    $('spinBtn').innerHTML='再转一次 <span>↗</span>';
    $('wheelCenter').disabled=false;
    $('wheelCenter').setAttribute('aria-label','再转一次');
    $('wheelCenter').innerHTML='再转<br>一次';
    spinning=false;
  },3600);
}
$('spinBtn').addEventListener('click',startWheelSpin);
$('wheelCenter').addEventListener('click',startWheelSpin);
updateWheelHint();
search();
syncNearbyWheelItems();
