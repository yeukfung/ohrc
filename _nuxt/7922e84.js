(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{427:function(t,e,n){var content=n(432);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("1a0e5308",content,!0,{sourceMap:!1})},431:function(t,e,n){"use strict";n(427)},432:function(t,e,n){var r=n(53)(!1);r.push([t.i,".badge{cursor:pointer}.btn{margin:0 3px}.facet-title{margin-top:25px;margin-bottom:5px;border-bottom:1px solid #ddd;color:#4c5470}",""]),t.exports=r},569:function(t,e,n){var content=n(574);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("43a47452",content,!0,{sourceMap:!1})},571:function(t,e,n){"use strict";n.r(e);n(3),n(8),n(103),n(4),n(133);var r=n(570),o=n.n(r),c={props:["rows","configuration"],data:function(){var t={},e=this.configuration.aggregations;return Object.keys(e).map((function(n){if(n){var r=e[n].initValue?e[n].initValue:[];t[n]=r}})),{query:"",filters:t,itemsJsInstance:{}}},computed:{searchResult:function(){if(console.log("doing search"),console.log(this.filters),console.log("before search"),console.log(this.rows),this.rows.length>0){var t=this.itemsJsInstance.search({per_page:100,query:this.query,filters:this.filters});return console.log("after search"),this.$emit("searchResultUpdated",t.data.items,this.filters),t}console.log("detected rows = 0");var e=this.itemsJsInstance.search({per_page:100,query:this.query,filters:[]});return console.log("after search"),this.$emit("searchResultUpdated",e.data.items,this.filters),e}},watch:{rows:function(t,e){t!==e&&(this.itemsJsInstance=o()(t,this.configuration))}},created:function(){this.itemsJsInstance=o()(this.rows,this.configuration)},mounted:function(){if(this.configuration.initValue)for(var t in console.log("processing init values"),this.configuration.initValue)this.pick("message_tags",this.configuration.initValue[t])},methods:{getFacetLabel:function(t){return t.title},pick:function(t,e){this.filters[t]?(console.log("picking "+e),this.filters[t].push(e)):this.filters[t]=[e]},isSelected:function(t,e){return!(!this.filters||!this.filters[t])&&this.filters[t].indexOf(e)>=0},unselectBucket:function(t,e){this.filters[t]=this.filters[t].filter((function(t){return t!==e}))},getBucketLabel:function(t){return t.key+" ("+t.doc_count+")"},reset:function(){var t={};this.optionList&&this.optionList.aggregations&&Object.keys(this.optionList.aggregations).map((function(e){t[e]=[]})),this.filters=t,this.query=""}}},l=(n(431),n(43)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h4",[t._v("Current Filter")]),t._v(" "),t._l(Object.keys(t.filters),(function(e){return n("div",{key:e},t._l(t.filters[e],(function(r){return n("button",{key:r,staticClass:"btn btn-sm btn-warning",on:{click:function(n){return t.unselectBucket(e,r)}}},[t._v("\n        X "+t._s(r)+"\n      ")])})),0)}))],2),t._v(" "),n("br"),t._v(" "),n("div",t._l(t.searchResult.data.aggregations,(function(e){return n("div",{key:e.name,attrs:{dense:""}},[n("h4",{staticClass:"facet-title"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),t._l(e.buckets,(function(r){return n("div",{key:r.key},[r.doc_count>0&&!t.isSelected(e.name,r.key)?n("div",[t._v("\n          "+t._s(r.key)+" ("+t._s(r.doc_count)+")\n          "),n("span",{staticClass:"badge badge-secondary",on:{click:function(n){return t.pick(e.name,r.key)}}},[t._v("\n            Select\n          ")])]):t._e()])}))],2)})),0)])}),[],!1,null,null,null);e.default=component.exports},572:function(t,e,n){var map={"./af":434,"./af.js":434,"./ar":435,"./ar-dz":436,"./ar-dz.js":436,"./ar-kw":437,"./ar-kw.js":437,"./ar-ly":438,"./ar-ly.js":438,"./ar-ma":439,"./ar-ma.js":439,"./ar-sa":440,"./ar-sa.js":440,"./ar-tn":441,"./ar-tn.js":441,"./ar.js":435,"./az":442,"./az.js":442,"./be":443,"./be.js":443,"./bg":444,"./bg.js":444,"./bm":445,"./bm.js":445,"./bn":446,"./bn-bd":447,"./bn-bd.js":447,"./bn.js":446,"./bo":448,"./bo.js":448,"./br":449,"./br.js":449,"./bs":450,"./bs.js":450,"./ca":451,"./ca.js":451,"./cs":452,"./cs.js":452,"./cv":453,"./cv.js":453,"./cy":454,"./cy.js":454,"./da":455,"./da.js":455,"./de":456,"./de-at":457,"./de-at.js":457,"./de-ch":458,"./de-ch.js":458,"./de.js":456,"./dv":459,"./dv.js":459,"./el":460,"./el.js":460,"./en-au":461,"./en-au.js":461,"./en-ca":462,"./en-ca.js":462,"./en-gb":463,"./en-gb.js":463,"./en-ie":464,"./en-ie.js":464,"./en-il":465,"./en-il.js":465,"./en-in":466,"./en-in.js":466,"./en-nz":467,"./en-nz.js":467,"./en-sg":468,"./en-sg.js":468,"./eo":469,"./eo.js":469,"./es":470,"./es-do":471,"./es-do.js":471,"./es-mx":472,"./es-mx.js":472,"./es-us":473,"./es-us.js":473,"./es.js":470,"./et":474,"./et.js":474,"./eu":475,"./eu.js":475,"./fa":476,"./fa.js":476,"./fi":477,"./fi.js":477,"./fil":478,"./fil.js":478,"./fo":479,"./fo.js":479,"./fr":480,"./fr-ca":481,"./fr-ca.js":481,"./fr-ch":482,"./fr-ch.js":482,"./fr.js":480,"./fy":483,"./fy.js":483,"./ga":484,"./ga.js":484,"./gd":485,"./gd.js":485,"./gl":486,"./gl.js":486,"./gom-deva":487,"./gom-deva.js":487,"./gom-latn":488,"./gom-latn.js":488,"./gu":489,"./gu.js":489,"./he":490,"./he.js":490,"./hi":491,"./hi.js":491,"./hr":492,"./hr.js":492,"./hu":493,"./hu.js":493,"./hy-am":494,"./hy-am.js":494,"./id":495,"./id.js":495,"./is":496,"./is.js":496,"./it":497,"./it-ch":498,"./it-ch.js":498,"./it.js":497,"./ja":499,"./ja.js":499,"./jv":500,"./jv.js":500,"./ka":501,"./ka.js":501,"./kk":502,"./kk.js":502,"./km":503,"./km.js":503,"./kn":504,"./kn.js":504,"./ko":505,"./ko.js":505,"./ku":506,"./ku.js":506,"./ky":507,"./ky.js":507,"./lb":508,"./lb.js":508,"./lo":509,"./lo.js":509,"./lt":510,"./lt.js":510,"./lv":511,"./lv.js":511,"./me":512,"./me.js":512,"./mi":513,"./mi.js":513,"./mk":514,"./mk.js":514,"./ml":515,"./ml.js":515,"./mn":516,"./mn.js":516,"./mr":517,"./mr.js":517,"./ms":518,"./ms-my":519,"./ms-my.js":519,"./ms.js":518,"./mt":520,"./mt.js":520,"./my":521,"./my.js":521,"./nb":522,"./nb.js":522,"./ne":523,"./ne.js":523,"./nl":524,"./nl-be":525,"./nl-be.js":525,"./nl.js":524,"./nn":526,"./nn.js":526,"./oc-lnc":527,"./oc-lnc.js":527,"./pa-in":528,"./pa-in.js":528,"./pl":529,"./pl.js":529,"./pt":530,"./pt-br":531,"./pt-br.js":531,"./pt.js":530,"./ro":532,"./ro.js":532,"./ru":533,"./ru.js":533,"./sd":534,"./sd.js":534,"./se":535,"./se.js":535,"./si":536,"./si.js":536,"./sk":537,"./sk.js":537,"./sl":538,"./sl.js":538,"./sq":539,"./sq.js":539,"./sr":540,"./sr-cyrl":541,"./sr-cyrl.js":541,"./sr.js":540,"./ss":542,"./ss.js":542,"./sv":543,"./sv.js":543,"./sw":544,"./sw.js":544,"./ta":545,"./ta.js":545,"./te":546,"./te.js":546,"./tet":547,"./tet.js":547,"./tg":548,"./tg.js":548,"./th":549,"./th.js":549,"./tk":550,"./tk.js":550,"./tl-ph":551,"./tl-ph.js":551,"./tlh":552,"./tlh.js":552,"./tr":553,"./tr.js":553,"./tzl":554,"./tzl.js":554,"./tzm":555,"./tzm-latn":556,"./tzm-latn.js":556,"./tzm.js":555,"./ug-cn":557,"./ug-cn.js":557,"./uk":558,"./uk.js":558,"./ur":559,"./ur.js":559,"./uz":560,"./uz-latn":561,"./uz-latn.js":561,"./uz.js":560,"./vi":562,"./vi.js":562,"./x-pseudo":563,"./x-pseudo.js":563,"./yo":564,"./yo.js":564,"./zh-cn":565,"./zh-cn.js":565,"./zh-hk":566,"./zh-hk.js":566,"./zh-mo":567,"./zh-mo.js":567,"./zh-tw":568,"./zh-tw.js":568};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=572},573:function(t,e,n){"use strict";n(569)},574:function(t,e,n){var r=n(53)(!1);r.push([t.i,".media-container{padding:2px;float:left;height:200px}.media-container img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;max-width:200px;height:100%}.case{border:1px solid #ccc;padding:20px;margin-bottom:15px}.msg{padding:10px;font-size:14px}.badge{margin:0 3px}.cta{margin-top:30px;padding-top:30px;margin-bottom:15px}.time{font-size:12px;font-weight:700;font-style:italic;color:#666}.clearfix{clear:both}.row.no-margin{margin:0}",""]),t.exports=r},589:function(t,e,n){"use strict";n.r(e);n(3),n(11),n(26),n(18),n(4),n(28),n(12),n(22),n(10);var r=n(426),o=n.n(r),c={data:function(){return{cases:[],configuration:{searchableFields:["message","message_tags"],sortings:{name_asc:{field:"updated_time",order:"desc"}},aggregations:{brands:{title:"Brand",size:200},engines:{title:"Engine",size:200},models:{title:"Models",size:200},chassis:{title:"Chassis",size:200},message_tags:{title:"Tags",size:200}},initValue:this.$route.query.tags?("#"+this.$route.query.tags).split(",").join(",#").split(","):[]},items:[],filter:{}}},created:function(){var t=["#e82","#e70","#e83","#e85","#e46m3","#e87","#e90","#e91","#e92","#e93","#f20","#f30","#w207","#w204","#w212"],e=["#n54","#n52","#n46","#s54","#m271evo","#porsche911"],n=["#bmw","#mercedes"],r=["#x5","#330i","#335i","#135i"],o=this;this.$http.$get("https://dev.bimmerdiag.com/strapi/cases?source=facebook").then((function(data){var c=[];data.forEach((function(element){var o=[],l=[],d=[],m=[],f=[];if(element.rawdata.message_tags&&element.rawdata.message_tags.length>0&&element.rawdata.message_tags.forEach((function(c){var j=c.name;t.indexOf(j.toLowerCase())>=0?l.push(j):n.indexOf(j.toLowerCase())>=0?d.push(j):e.indexOf(j.toLowerCase())>=0?m.push(j):r.indexOf(j.toLowerCase())>=0?f.push(j):o.push(c.name)})),element.rawdata.chassis=l,element.rawdata.engines=m,element.rawdata.models=f,element.rawdata.brands=d,element.rawdata.message_tags=o,element.rawdata.message&&element.rawdata.message.indexOf("#")>=0){var j=element.rawdata.message.substring(0,element.rawdata.message.indexOf("#"));console.log("cleaning msg"+j),element.rawdata.message=j}c.push(element.rawdata)})),o.cases=c}))},mounted:function(){var t=this.$route.query.tags;console.log(t)},methods:{formatDate:function(t,e){return o()(t).format(e)},viewFullstory:function(t){console.log(t),window.open(t.permalink_url,"_blank")},searchResultUpdated:function(t,filter){this.items=t,this.filter=filter},resolveBadgeColor:function(t){return this.filter.message_tags&&this.filter.message_tags.indexOf(t)>=0?"badge-primary":"badge-secondary"},format:function(t){return t?t.toString().replace(/\n/g,"<br/>"):t}}},l=(n(573),n(43)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-full"},[n("b-alert",{staticClass:"text-center",attrs:{variant:"success",show:""}},[t._v("This page will display all the cases discussed in facebook, with dynamic\n    filtering feature, please choose a topic that interest u under\n    message_tags on the left")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-3 col-4"},[n("items-js-facets",{attrs:{rows:t.cases,configuration:t.configuration},on:{searchResultUpdated:t.searchResultUpdated}})],1),t._v(" "),n("div",{staticClass:"col-lg-10 col-md-9 col-8"},[n("div",{staticClass:"row no-margin"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"col-lg-6 col-md-6 col-12"},[n("div",{staticClass:"case"},[n("div",{staticClass:"time text-right"},[t._v("\n              "+t._s(t.formatDate(e.updated_time,"DD MMM YYYY"))+"\n            ")]),t._v(" "),n("div",{staticClass:"tags"},t._l(e.message_tags,(function(e,r){return n("span",{key:r,staticClass:"badge",class:t.resolveBadgeColor(e)},[t._v(t._s(e))])})),0),t._v(" "),n("div",{staticClass:"msg",domProps:{innerHTML:t._s(t.format(e.message))}}),t._v(" "),e.attachments&&e.attachments.data?n("div",{staticClass:"imgs"},t._l(e.attachments.data,(function(img,e){return n("div",{key:e},[img.subattachments&&img.subattachments.data?n("div",t._l(img.subattachments.data,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"media-container"},[e&&e.media&&e.media.image?n("img",{staticClass:"img-thumbnail",attrs:{src:e.media.image.src}}):t._e()])])})),0):n("div",[n("div",{staticClass:"media-container"},[n("a",{attrs:{href:img.media.source,target:"_blank"}},[img&&img.media&&img.media.image?n("img",{staticClass:"img-thumbnail",attrs:{src:img.media.image.src}}):t._e()])])])])})),0):t._e(),t._v(" "),n("div",{staticClass:"cta text-center clearfix"},[n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(n){return t.viewFullstory(e)}}},[t._v("\n                View Full Story\n              ")])])])])})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemsJsFacets:n(571).default})}}]);