(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{186:function(e,t,r){Promise.resolve().then(r.bind(r,8212))},8212:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(7437),s=r(4124),i=r(2265),n=r(7138),o=r(8433);function d(){let e=o.Z.instance,t=s.Z.instance,[r,d]=(0,i.useState)([]),[l,c]=(0,i.useState)(e.getConfig().currentProfile);return(0,i.useEffect)(()=>{let r=async()=>{var r;let a=(null===(r=e.getCurrentProfile())||void 0===r?void 0:r.stops)||[],s=a.map(e=>"".concat(+e.number));d((await t.getDepartures(...s)).filter(e=>{let t=+e.number,r=a.find(e=>+e.number===t);return!!r&&r.lines.includes(e.line)}))},a=setInterval(r,1e4);return r(),()=>clearInterval(a)},[t,l,e]),(0,a.jsxs)("div",{className:"min-w-full",children:[(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("form",{className:"m-w-sm mx-auto grow mr-2",children:(0,a.jsx)("select",{id:"activeProfile",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",value:l,onChange:t=>{c(t.target.value),e.getConfig().currentProfile=t.target.value,e.saveConfig()},children:e.getConfig().profiles.map(e=>(0,a.jsx)("option",{value:e.uuid,children:e.name},e.uuid))})}),(0,a.jsxs)("div",{className:"inline-flex rounded-md shadow-sm",role:"group",children:[(0,a.jsx)(n.default,{href:"/config/edit",type:"button",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",children:"Edytuj"}),e.getConfig().profiles.length>1&&(0,a.jsx)("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",onClick:()=>{e.removeCurrentProfile(),c(e.getConfig().currentProfile)},children:"Usuń"}),(0,a.jsx)(n.default,{href:"/config/new",type:"button",className:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white",children:"Nowy"})]})]}),(0,a.jsxs)("table",{className:"border-collapse border border-slate-500 my-3 min-w-full",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left",children:"Linia"}),(0,a.jsx)("th",{className:"border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left",children:"Kierunek"}),(0,a.jsx)("th",{className:"border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left",children:"Przystanek"}),(0,a.jsx)("th",{className:"border border-slate-300 dark:border-slate-600 font-semibold p-2 md:p-4 text-slate-900 dark:text-slate-200 text-left",children:"Odjazd"})]})}),(0,a.jsx)("tbody",{children:r.map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400",children:(0,a.jsx)("h3",{children:e.line})}),(0,a.jsx)("td",{className:"border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400",children:e.direction}),(0,a.jsx)("td",{className:"border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400",children:e.name}),(0,a.jsxs)("td",{className:"border border-slate-300 dark:border-slate-700 p-2 md:p-4 text-gray-900 dark:text-slate-400",children:[e.departure,(0,a.jsx)("br",{className:"hidden md:block"}),(0,a.jsx)("small",{className:"hidden md:inline-block",children:new Date(e.timeToDeparture).toLocaleString()})]})]},t))})]})]})}},8433:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let a={profiles:[{uuid:"07ab72c4-183a-4e6c-ad98-32bd63086730",name:"Do szkoły",stops:[{id:41997,name:"Waryńskiego - Kolejowa",street:"Waryńskiego",latitude:"49.6054",longitude:"20.6954",number:"00171",direction:0,stop_line_id:113776,lines:["9","11","13","17","18","24","43","47","49","52"],direction_desc:{9:"Bohater\xf3w Orła Białego => Rynek",11:"Przysietnica => Rynek.",13:"Konarskiego => Konarskiego",17:"Jana Pawła II => Barska",18:"Żeleźnikowa Wielka => Roszkowice",24:"Stary Sącz - Osiedle Słoneczne => Rynek",43:"Moszczenica => Rynek",47:"",49:"",52:""}},{id:41484,name:"Grottgera - Zielona",street:null,latitude:"49.6023",longitude:"20.6945",number:"02272",direction:1,stop_line_id:114203,lines:["17"],direction_desc:{17:"Jana Pawła II => Barska"}},{id:41614,name:"Zielona - WSB",street:"Zielona ",latitude:"49.6009",longitude:"20.6921",number:"00961",direction:1,stop_line_id:114202,lines:["17","27"],direction_desc:{17:"Jana Pawła II => Barska",27:"Piątkowa Łęg Granica => Dw.MPK. "}}]},{uuid:"41a65a08-dca8-401e-b7a8-129832cee211",name:"Ze szkoły",stops:[{id:42230,name:"Rynek",street:"Rynek",latitude:"49.6255",longitude:"20.6918",number:"00081",direction:1,stop_line_id:113693,lines:["14","15","17","27","41","25"],direction_desc:{5:"Dw.MPK stan.1 => Tarnowska",7:"Sucharskiego => Sucharskiego",14:"Wola Wyżna => Dw.MPK",15:"Mszalnica => Dw.MPK",17:" Barska => Jana Pawła II",18:"Żeleźnikowa Wielka => Roszkowice",25:"Mystk\xf3w Most => Ogrodowa",27:"Piątkowa Łęg Granica => Dw.MPK. ",28:"Węgierska Galeria Sandecja => Roszkowice",31:"Dw.MPK stan.1 => Zabełcze - Gaj",35:"Jamnica => Rynek",41:"Osiedle Helena => Magazynowa",42:" Dw.MPK stan.1 => Osiedle Helena",101:"Stramki => Prażmowskiego."}}]},{uuid:"f59583cd-7339-4ffc-9371-0be2095ec036",name:"Basen",stops:[{id:42239,name:"Aleja Batorego - Dw. PKP",street:"Aleja Batorego",latitude:"49.6082",longitude:"20.7016",number:"00015",direction:1,stop_line_id:114343,lines:["23"],direction_desc:{23:"Sucharskiego => Sucharskiego",25:"Ogrodowa => Mystk\xf3w Most",27:"Piątkowa Łęg Granica => Dw.MPK. "}},{id:41997,name:"Waryńskiego - Kolejowa",street:"Waryńskiego",latitude:"49.6054",longitude:"20.6954",number:"00171",direction:0,stop_line_id:113776,lines:["9","11","13","17","18","24","43","47","49","52"],direction_desc:{9:"Bohater\xf3w Orła Białego => Rynek",11:"Przysietnica => Rynek.",13:"Konarskiego => Konarskiego",17:"Jana Pawła II => Barska",18:"Żeleźnikowa Wielka => Roszkowice",24:"Stary Sącz - Osiedle Słoneczne => Rynek",43:"Moszczenica => Rynek",47:"",49:"",52:""}}]}],currentProfile:"f59583cd-7339-4ffc-9371-0be2095ec036"};var s,i=r(920);class n{static get instance(){return n._instance||(n._instance=new n),n._instance}static set storage(e){n._storage=e}getConfig(){return this.config}saveConfig(){var e;null===(e=n._storage)||void 0===e||e.setItem(n.storageKey,JSON.stringify(this.config))}getProfile(e){return this.config.profiles.find(t=>t.uuid===e)}getCurrentProfile(){return this.getProfile(this.config.currentProfile)}removeCurrentProfile(){this.config.profiles.splice(this.config.profiles.findIndex(e=>e.uuid===this.config.currentProfile),1),this.config.currentProfile=this.config.profiles[0].uuid,this.saveConfig()}createProfile(e,t){let r={uuid:n.generateUuid(),name:e,stops:t};return this.config.profiles.push(r),r}static generateUuid(){return(0,i.Z)()}constructor(){var e;let t=(null===(e=n._storage)||void 0===e?void 0:e.getItem(n.storageKey))||null;this.config=null===t?a:JSON.parse(t)}}n._storage=null===(s=r.g)||void 0===s?void 0:s.localStorage,n.storageKey="ns_mpk_board_config"},4124:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});class a{async fetchData(){let e=await fetch(this.url);this.data=await e.json()}async getData(){return null===this.data&&await this.fetchData(),this.data}constructor(e){this.url=e,this.data=null}}class s extends a{async getDepartures(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let a=await this.getData(),s=new Date().getTime();return a.st.filter(e=>t.includes(e.nr)).reduce((e,t)=>{var r;return null===(r=t.sd)||void 0===r||r.forEach(r=>{e.push({name:t.nm,number:t.nr,direction:r.di,line:r.li,departure:r.de,timeToDeparture:this.timeToDeparture(s,r.de)})}),e},[]).sort((e,t)=>e.timeToDeparture-t.timeToDeparture)}async getFreshDepartures(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return await this.fetchData(),this.getDepartures(...t)}timeToDeparture(e,t){if(">>"===t)return e;if(t.match(/^\d+min/))return e+6e4*parseInt(t);if(!t.match(/^\d+:\d+$/))return e;{let[r,a]=t.split(":").map(e=>parseInt(e)),s=new Date(e);return s.setHours(r),s.setMinutes(a),s.getTime()}}constructor(){super(s.departuresUrl)}}s.departuresUrl="https://www.mpk.nowysacz.pl/jsonStops/stops.json";class i extends a{async getActiveLines(){return this.getData()}getLineStops(e){return[...e.stops,...e.stops1].map(t=>({...t,lines:[e.name],direction_desc:{[e.name]:e["desc".concat(t.direction?"1":"2")].replace(/^([^,]+).*?,\s*([^,]+)$/,"$1 => $2").replace(/^ => $/,"")}}))}async getStops(){if(0===this.stops.length){let e=await this.getData();this.stops=e.lines.reduce((e,t)=>(this.getLineStops(t).forEach(t=>{let r=e.find(e=>e.id===t.id);r?(r.lines=[...r.lines||[],...t.lines||[]],r.direction_desc={...r.direction_desc,...t.direction_desc}):e.push({...t})}),e),[]).sort((e,t)=>e.name.localeCompare(t.name))}return this.stops}constructor(){super(i.activeStopsUrl),this.stops=[]}}i.activeStopsUrl="https://www.mpk.nowysacz.pl/wp-json/mpk/v1/timetable/active";class n{static get instance(){return n._instance||(n._instance=new n),n._instance}async getStopsForSelect(e){let t=await this.stopsDataSource.getStops();return e&&(t=t.filter(t=>"".concat(t.name," ").concat(t.street).toLowerCase().includes(e.toLowerCase()))),t.reduce((e,t)=>{let r=[];for(let e in t.direction_desc)r.push("".concat(e).concat(t.direction_desc[e]?": "+t.direction_desc[e]:""));return e[t.number]="".concat(t.name," (").concat(r.join(", "),")"),e},{})}async getStopById(e){let t=(await this.stopsDataSource.getStops()).find(t=>t.number===e);return console.log(t),t}async getDepartures(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.departuresDataSource.getFreshDepartures(...t)}constructor(){this.departuresDataSource=new s,this.stopsDataSource=new i}}}},function(e){e.O(0,[922,971,23,744],function(){return e(e.s=186)}),_N_E=e.O()}]);