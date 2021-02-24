(this["webpackJsonpshopify-pre-order"]=this["webpackJsonpshopify-pre-order"]||[]).push([[9],{526:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return O})),n.d(t,"i",(function(){return v})),n.d(t,"b",(function(){return j})),n.d(t,"j",(function(){return g})),n.d(t,"l",(function(){return y})),n.d(t,"k",(function(){return E}));var a=n(8),r=n(96),c=n(529),i=n(60),u=n(0),l=n(25),o=function(e){return e.products},s=Object(i.a)((function(e){return e.products.productsById}),(function(e){return e.products.variantsById}),(function(e,t){return Object.keys(e).map((function(n){var i=e[n],u=i.variants,l=Object(r.a)(i,["variants"]),o=!1,s=Object(a.a)({},l),f=u.reduce((function(e,n){var a=t[n];return e[n]=a,Object(c.c)(a)||(o=o||a.enabled!==l.enabled),e}),{});return Object(a.a)({variants:f,different:o},s)}))})),f=Object(i.a)(o,(function(e){return e.selectedProducts})),d=Object(i.a)(o,(function(e){return e.loading})),b=Object(i.a)(o,(function(e){return e.settingsModal})),m=Object(i.a)(o,(function(e){return e.assignProfileModal})),p=(Object(i.a)(b,(function(e){return e.loading})),Object(i.a)(b,(function(e){return e.error})),Object(i.a)(b,(function(e){return e.open}))),O=Object(i.a)(o,(function(e){return e.pageInfo})),v=Object(i.a)(o,(function(e){return e.sort})),j=Object(i.a)((function(e){return e.products.filters.availiability}),(function(e){return e.products.filters.status}),(function(e){return e.products.filters.query}),(function(e,t,n){return{availiability:e,status:t,query:n}})),g=function(e,t){var n=Object(u.useMemo)((function(){return function(e,t){return Object(i.a)(s,(function(e){return e.products.variantsById}),(function(n,a){return t?a[e]:n.find((function(t){return t.id===e}))}))}(e,t)}),[e,t]);return Object(l.e)(n)},y=function(e){var t=Object(u.useMemo)((function(){return function(e){return Object(i.a)((function(e){return e.products.unfoldedProductsIds}),(function(t){return t.includes(e)}))}(e)}),[e]);return Object(l.e)(t)},E=function(e){var t=Object(u.useMemo)((function(){return function(e){return Object(i.a)((function(e){return e.products.productsById}),(function(e){return e.products.selectedProducts.variantsIds}),(function(t,n){return t[e].variants.filter((function(e){return n.includes(e)}))}))}(e)}),[e]);return Object(l.e)(t)}},530:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(8),r=n(0),c=n.n(r),i=n(25),u=n(532),l=n(527),o=n(21),s=n(111),f="products.list.item",d=Object(s.a)({createProfileTitle:{id:"".concat(f,".createProfileTitle"),defaultMessage:"Add Profile"},updateProfileTitle:{id:"".concat(f,".updateProfileTitle"),defaultMessage:"Profile {title} Settings"},copyOfProfileTitle:{id:"".concat(f,".copyOfProfileTitle"),defaultMessage:"Copy of "}}),b=n(62);function m(e){var t,n=Object(i.d)(),s=Object(b.d)().fmt,f=Object(i.e)(l.b),m=Object(r.useCallback)((function(){n(Object(o.k)(!0))}),[n]),p=Object(r.useCallback)((function(t){var r,c;n(Object(o.o)(Object(a.a)(Object(a.a)({},t),{},{id:e.duplicate?"":null!==(r=null===(c=f.data)||void 0===c?void 0:c.id)&&void 0!==r?r:""})))}),[f,e.duplicate]),O=c.a.useMemo((function(){return function(t){var n=t.onClick;return c.a.createElement(e.activator,{onClick:function(){n(),m()}})}}),[]),v=s(d.createProfileTitle),j=s(d.updateProfileTitle,{title:f.data?'"'.concat(null===(t=f.data)||void 0===t?void 0:t.name,'"'):""}),g=f.loading||f.data&&!e.duplicate?j:v,y=Object(a.a)({},f.data);return e.duplicate&&f.data&&f.data.name&&(y.name=s(d.copyOfProfileTitle)+y.name),c.a.createElement(u.a,Object.assign({activator:O,onSubmit:p},f,{settings:y,title:g}))}},531:function(e,t,n){},532:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(11),r=n(0),c=n.n(r),i=n(25),u=n(295),l=n(131),o=n(62),s=n(533),f=(n(539),n(526)),d=n(538),b=n(7),m=n(549);function p(e){var t=e.loading,n=e.settings,p=e.onSubmit,O=e.forSettings,v=e.title,j=e.isVariant,g=e.priceShopify,y=e.preorderStatusFromList,E=e.footer,S=e.error,C=Object(r.useState)(!1),P=Object(a.a)(C,2),h=P[0],k=P[1],I=Object(i.e)(f.d),M=Object(i.d)();Object(r.useEffect)((function(){I||k(!1)}),[I]),Object(r.useEffect)((function(){D(n)}),[n]);var x=(0,Object(o.d)().formatDictionary)(s.a),N=Object(m.a)({onSubmit:p,settings:n,error:S,forSettings:O,isVariant:j,priceShopify:g,preorderStatusFromList:y}),A=N.resetForm,F=N.handleOnSubmit,_=N.anyError,T=N.form,D=N.setSettings,w=function(){A(),M(Object(b.r)(!1)),B()},B=Object(r.useCallback)((function(){return k(!h)}),[h]),V=c.a.createElement(e.activator,{onClick:B});return c.a.createElement(u.a,{activator:V,open:h,loading:t,onClose:w,title:c.a.createElement(d.h,{title:v,withError:_}),footer:E,primaryAction:{content:x.saveAction,onAction:F,disabled:t},secondaryActions:[{content:x.cancelAction,onAction:w,disabled:t}]},c.a.createElement(u.a.Section,null,c.a.createElement(l.a,{vertical:!0},c.a.createElement(l.a.Item,null,T),c.a.createElement(l.a.Item,null))))}},540:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(43),i=n(87),u=n(282),l=n(131),o=n(6),s=n(695),f=n(696),d=n(697),b=(n(531),n(530)),m=n(25),p=n(21);n(541);t.a=function(e){var t=e.item,n=e.noActions,O=(t.id,t.name),v=t.inventory_limit,j=t.price_type,g=t.price_change_value,y=Object(m.d)(),E=Object(a.useCallback)((function(){return y(Object(p.b)(t))}),[t]),S=function(e,t){var n=t&&Number(t),a="Keep Same",r="";if(!n&&e!==o.PriceType.Same&&0!==n)return"Error";if(n||0===n){switch(!0){case n<0:a="Decrease by",n=Math.abs(n);break;case n>0:a="Increase by"}switch(e){case o.PriceType.Amount:r=" $"+n.toFixed(2);break;case o.PriceType.Percent:r=" "+String(n)+"%";break;case o.PriceType.SpecificValue:a="Set to $"+String(n.toFixed(2)),r=""}}return"".concat(a).concat(r)}(j,g),C=function(e){return e?"Max ".concat(e):"Unlimited"}(v),P=Object(a.useCallback)((function(){y(Object(p.e)(t.id))}),[t,y]),h=r.a.useMemo((function(){return function(e){var t=e.onClick;return r.a.createElement(c.a,{onClick:function(e){e.stopPropagation(),t(),P()},icon:s.a})}}),[]),k=r.a.useMemo((function(){return function(e){var t=e.onClick;return r.a.createElement(c.a,{onClick:function(e){e.stopPropagation(),t(),P()},icon:f.a})}}),[]);return r.a.createElement("div",{className:"flexContainer"},n?null:r.a.createElement("div",{className:"flexItem flexItem__name flexWide"},r.a.createElement(i.a,{variation:"strong"},O)),r.a.createElement("div",{className:"flexItem flexItem__count flexWide forNarrowBadge"},r.a.createElement(i.a,{variation:"strong"},r.a.createElement("div",{className:"countBadge"},"Assigned to"," ",r.a.createElement(u.a,{status:"attention"},String(0))," ","products"))),r.a.createElement("div",{className:"flexItem flexItem__priceChangeText flexWide flexSubdued"},r.a.createElement(i.a,{variation:"subdued"},r.a.createElement("span",{className:"subdued"},r.a.createElement("span",null,"Price change:"),r.a.createElement("span",null,S)))),r.a.createElement("div",{className:"flexItem flexItem__inventoryLimitText flexWide flexSubdued"},r.a.createElement(i.a,{variation:"subdued"},r.a.createElement("span",{className:"subdued"},r.a.createElement("span",null,"Inventory limit:"),r.a.createElement("span",null,C)))),n?null:r.a.createElement("div",{className:"flexItem flexItem__updateProfileActivator  flexWide flexAlignEnd"},r.a.createElement(l.a,null,r.a.createElement(b.a,{duplicate:!0,activator:k}),r.a.createElement(b.a,{activator:h}),r.a.createElement(c.a,{onClick:E,icon:d.a}))))}},541:function(e,t,n){},707:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),i=n(705),u=n(700),l=n(131),o=n(163),s=n(25),f=n(527),d=n(111),b="profiles.list",m=Object(d.a)({sortByName:{id:"".concat(b,".sort.ByName"),defaultMessage:"Name A to Z"},resourceNameSingular:{id:"".concat(b,".resourceName.singular"),defaultMessage:"profile"},resourceNamePlural:{id:"".concat(b,".resourceName.plural"),defaultMessage:"profiles"},filterPriceChange:{id:"".concat(b,".filters.PriceChange"),defaultMessage:"Price change"},filterPriceChangeSame:{id:"".concat(b,".filters.PriceChangeSame"),defaultMessage:"Same"},filterPriceChangeSpecific:{id:"".concat(b,".filters.PriceChangeSpecific"),defaultMessage:"Specific"},filterPriceChangeIncrease:{id:"".concat(b,".filters.PriceChangeIncrease"),defaultMessage:"Increase"},filterPriceChangeDecrease:{id:"".concat(b,".filters.PriceChangeDecrease"),defaultMessage:"Decrease"}}),p=n(62),O=n(7),v=n(21),j=n(217),g=n(214),y=n(116),E=n(218);var S=n(702),C=n(6);function P(e){return Array.isArray(e)?0===e.length:""===e||null==e}var h=function(){var e,t=Object(a.useState)("DATE_MODIFIED_DESC"),n=(e=t,Object(j.a)(e)||Object(g.a)(e)||Object(y.a)(e)||Object(E.a)(),Object(a.useCallback)((function(e,t){var n={filterValue:{filter:e,value:t}},a=e===C.Filter.Query?O.k:O.j;c(a(n))}),[])),c=Object(s.d)(),i=(0,Object(p.d)().formatDictionary)(m),u="",l="",o="",f=Object(a.useCallback)((function(){return n(C.Filter.Availiability,"")}),[]),d=Object(a.useCallback)((function(){return n(C.Filter.Status,"")}),[]),b=Object(a.useCallback)((function(e){return n(C.Filter.Query,e)}),[]),v=Object(a.useCallback)((function(){return n(C.Filter.Query,"")}),[]),h=Object(a.useCallback)((function(){f(),v()}),[v,f]),k=[{label:i.filterPriceChangeSame,value:C.PriceSettingsMode.Same},{label:i.filterPriceChangeSpecific,value:C.PriceSettingsMode.Value},{label:i.filterPriceChangeIncrease,value:C.PriceSettingsMode.Increase},{label:i.filterPriceChangeDecrease,value:C.PriceSettingsMode.Decrease}];function I(e,t){switch(e){case C.Filter.Status:return"".concat(function(e){var n;return null===(n=e.find((function(e){return e.value===t})))||void 0===n?void 0:n.label}(k));case C.Filter.Availiability:default:return t}}var M=[];return P(l)||M.push({key:C.Filter.Status,label:I(C.Filter.Status,l),onRemove:d}),P(u)||M.push({key:C.Filter.Availiability,label:I(C.Filter.Availiability,u),onRemove:f}),r.a.createElement(S.a,{queryValue:o,filters:[],appliedFilters:M,onQueryChange:b,onQueryClear:v,onClearAll:h})},k=n(688),I=n(540),M=function(){};var x=function(e){var t=e.id,n=e.name;return r.a.createElement(k.a,{id:t,onClick:M,accessibilityLabel:"View details for ".concat(n)},r.a.createElement(I.a,{item:e}))},N=n(530);t.default=function(){var e=Object(a.useCallback)((function(e){t(Object(O.y)(JSON.parse(e)))}),[]),t=Object(s.d)(),n=(0,Object(p.d)().formatDictionary)(m),d=Object(s.e)(f.c),b=(Object(s.e)(f.d),Object(s.e)(f.a)),j=Object(s.e)(f.e);Object(a.useCallback)((function(e){t(Object(v.l)(e))}),[]);r.a.useEffect((function(){t(Object(v.h)())}),[]);var g=r.a.useRef([]),y=r.a.useMemo((function(){return function(e){var t=e.onClick;return r.a.createElement(c.a,{primary:!0,onClick:t},"Add Profile")}}),[]),E=Object(a.useMemo)((function(){return r.a.createElement(N.a,{activator:y})}),[g,j]),S=r.a.createElement(i.a,null,r.a.createElement(i.a.Section,null,r.a.createElement(u.a,{alternateTool:E,filterControl:d.length&&r.a.createElement(h,null),loading:b,sortOptions:g.current,sortValue:JSON.stringify(j),onSortChange:e,resourceName:{singular:n.resourceNameSingular,plural:n.resourceNamePlural},items:d,renderItem:x,emptyState:E})));return r.a.createElement("div",{className:"profilesList__wrapper"},d?S:r.a.createElement(l.a,{distribution:"center"},r.a.createElement(o.a,{accessibilityLabel:"Spinner example",size:"large",color:"teal"})))}}}]);
//# sourceMappingURL=9.7cd2a1b6.chunk.js.map