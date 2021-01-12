(this["webpackJsonpshopify-pre-order"]=this["webpackJsonpshopify-pre-order"]||[]).push([[9],{293:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return j})),n.d(t,"b",(function(){return p})),n.d(t,"j",(function(){return g})),n.d(t,"l",(function(){return E})),n.d(t,"k",(function(){return y}));var a=n(12),r=n(82),c=n(298),i=n(61),u=n(0),l=n(31),o=function(e){return e.products},s=Object(i.a)((function(e){return e.products.productsById}),(function(e){return e.products.variantsById}),(function(e,t){return Object.keys(e).map((function(n){var i=e[n],u=i.variants,l=Object(r.a)(i,["variants"]),o=!1,s=Object(a.a)({},l),f=u.reduce((function(e,n){var a=t[n];return e[n]=a,Object(c.c)(a)||(o=o||a.enabled!==l.enabled),e}),{});return Object(a.a)({variants:f,different:o},s)}))})),f=Object(i.a)(o,(function(e){return e.selectedProducts})),d=Object(i.a)(o,(function(e){return e.loading})),b=Object(i.a)(o,(function(e){return e.settingsModal})),m=Object(i.a)(o,(function(e){return e.assignProfileModal})),O=(Object(i.a)(b,(function(e){return e.loading})),Object(i.a)(b,(function(e){return e.error})),Object(i.a)(b,(function(e){return e.open}))),v=Object(i.a)(o,(function(e){return e.pageInfo})),j=Object(i.a)(o,(function(e){return e.sort})),p=Object(i.a)((function(e){return e.products.filters.availiability}),(function(e){return e.products.filters.status}),(function(e){return e.products.filters.query}),(function(e,t,n){return{availiability:e,status:t,query:n}})),g=function(e,t){var n=Object(u.useMemo)((function(){return function(e,t){return Object(i.a)(s,(function(e){return e.products.variantsById}),(function(n,a){return t?a[e]:n.find((function(t){return t.id===e}))}))}(e,t)}),[e,t]);return Object(l.e)(n)},E=function(e){var t=Object(u.useMemo)((function(){return function(e){return Object(i.a)((function(e){return e.products.unfoldedProductsIds}),(function(t){return t.includes(e)}))}(e)}),[e]);return Object(l.e)(t)},y=function(e){var t=Object(u.useMemo)((function(){return function(e){return Object(i.a)((function(e){return e.products.productsById}),(function(e){return e.products.selectedProducts.variantsIds}),(function(t,n){return t[e].variants.filter((function(e){return n.includes(e)}))}))}(e)}),[e]);return Object(l.e)(t)}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(12),r=n(0),c=n.n(r),i=n(31),u=n(302),l=n(294),o=n(17),s=n(123),f=Object(s.a)({createProfileTitle:{id:"".concat("products.list.item",".createProfileTitle"),defaultMessage:"Add Profile"},updateProfileTitle:{id:"".concat("products.list.item",".updateProfileTitle"),defaultMessage:"Profile {title} Settings"}}),d=n(87);function b(e){var t,n=Object(i.d)(),s=Object(d.c)().fmt,b=Object(i.e)(l.b),m=Object(r.useCallback)((function(){n(Object(o.k)(!0))}),[n]),O=Object(r.useCallback)((function(e){var t,r;n(Object(o.o)(Object(a.a)(Object(a.a)({},e),{},{id:null!==(t=null===(r=b.data)||void 0===r?void 0:r.id)&&void 0!==t?t:""})))}),[b]),v=c.a.useMemo((function(){return function(t){var n=t.onClick;return c.a.createElement(e.activator,{onClick:function(){n(),m()}})}}),[]),j=s(f.createProfileTitle),p=s(f.updateProfileTitle,{title:b.data?'"'.concat(null===(t=b.data)||void 0===t?void 0:t.name,'"'):""}),g=b.loading||b.data?p:j;return c.a.createElement(u.a,Object.assign({activator:v,onSubmit:O},b,{settings:b.data,title:g}))}},301:function(e,t,n){},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(9),r=n(0),c=n.n(r),i=n(31),u=n(282),l=n(148),o=n(87),s=n(303),f=(n(315),n(293)),d=n(314),b=n(7),m=n(335);function O(e){var t=e.loading,n=e.settings,O=e.onSubmit,v=e.forSettings,j=e.title,p=e.error,g=e.isVariant,E=e.priceShopify,y=Object(r.useState)(!1),S=Object(a.a)(y,2),C=S[0],P=S[1],h=Object(i.e)(f.d),k=Object(i.d)();Object(r.useEffect)((function(){h||P(!1)}),[h]),Object(r.useEffect)((function(){D(n)}),[n]);var M=(0,Object(o.c)().formatDictionary)(s.a),I=Object(m.a)({onSubmit:O,settings:n,error:p,forSettings:v,isVariant:g,priceShopify:E}),N=I.resetForm,A=I.handleOnSubmit,x=I.anyError,F=I.form,D=I.setSettings,T=function(){N(),k(Object(b.r)(!1)),w()},w=Object(r.useCallback)((function(){return P(!C)}),[C]),V=c.a.createElement(e.activator,{onClick:w});return c.a.createElement(u.a,{activator:V,open:C,loading:t,onClose:T,title:c.a.createElement(d.h,{title:j,withError:x}),primaryAction:{content:M.saveAction,onAction:A,disabled:t},secondaryActions:[{content:M.cancelAction,onAction:T,disabled:t}]},c.a.createElement(u.a.Section,null,c.a.createElement(l.a,{vertical:!0},c.a.createElement(l.a.Item,null,F),c.a.createElement(l.a.Item,null))))}},328:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(68),i=n(72),u=n(191),l=n(148),o=n(6),s=n(533),f=n(534),d=(n(301),n(300)),b=n(31),m=n(17);t.a=function(e){var t=e.item,n=e.noActions,O=t.id,v=t.name,j=t.inventory_limit,p=t.price_type,g=t.price_change_value,E=Object(b.d)(),y=Object(a.useCallback)((function(){return E(Object(m.b)(t))}),[t]),S=function(e,t){var n=t&&Number(t),a="Keep Same",r="";if(!n&&e!==o.PriceType.Same&&0!==n)return"Error";if(n||0===n){switch(!0){case n<0:a="Decrease by",n=Math.abs(n);break;case n>0:a="Increase by"}switch(e){case o.PriceType.Amount:r=" $"+n.toFixed(2);break;case o.PriceType.Percent:r=" "+String(n)+"%";break;case o.PriceType.SpecificValue:a="Set to $"+String(n.toFixed(2)),r=""}}return"".concat(a).concat(r)}(p,g),C=function(e){return e?"Max ".concat(e):"Unlimited"}(j),P=Object(a.useCallback)((function(){E(Object(m.e)(t.id))}),[t,E]),h=r.a.useMemo((function(){return function(e){var t=e.onClick;return r.a.createElement(c.a,{onClick:function(e){e.stopPropagation(),t(),P()},icon:s.a})}}),[]);return r.a.createElement("div",{className:"flexContainer"},r.a.createElement("div",{className:"flexItem"},r.a.createElement(i.a,{variation:"strong"},O)),n?null:r.a.createElement("div",{className:"flexItem flexWide flexAlignCenter"},r.a.createElement(i.a,{variation:"strong"},v)),r.a.createElement("div",{className:"flexItem flexWide forNarrowBadge"},r.a.createElement(i.a,{variation:"strong"},r.a.createElement("div",null,"Assigned to"," ",r.a.createElement(u.a,{status:"attention"},String(0))," ","products"))),r.a.createElement("div",{className:"flexItem flexWide flexSubdued"},r.a.createElement(i.a,{variation:"subdued"},r.a.createElement("span",{className:"subdued"},r.a.createElement("span",null,"Price change:"),r.a.createElement("span",null,S)))),r.a.createElement("div",{className:"flexItem flexWide flexSubdued"},r.a.createElement(i.a,{variation:"subdued"},r.a.createElement("span",{className:"subdued"},r.a.createElement("span",null,"Inventory limit:"),r.a.createElement("span",null,C)))),n?null:r.a.createElement("div",{className:"flexItem flexWide flexAlignEnd"},r.a.createElement(l.a,null,r.a.createElement(d.a,{activator:h}),r.a.createElement(c.a,{onClick:y,icon:f.a}))))}},542:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(68),i=n(541),u=n(537),l=n(148),o=n(131),s=n(31),f=n(294),d=n(123),b="profiles.list",m=Object(d.a)({sortByName:{id:"".concat(b,".sort.ByName"),defaultMessage:"Name A to Z"},resourceNameSingular:{id:"".concat(b,".resourceName.singular"),defaultMessage:"profile"},resourceNamePlural:{id:"".concat(b,".resourceName.plural"),defaultMessage:"profiles"},filterPriceChange:{id:"".concat(b,".filters.PriceChange"),defaultMessage:"Price change"},filterPriceChangeSame:{id:"".concat(b,".filters.PriceChangeSame"),defaultMessage:"Same"},filterPriceChangeSpecific:{id:"".concat(b,".filters.PriceChangeSpecific"),defaultMessage:"Specific"},filterPriceChangeIncrease:{id:"".concat(b,".filters.PriceChangeIncrease"),defaultMessage:"Increase"},filterPriceChangeDecrease:{id:"".concat(b,".filters.PriceChangeDecrease"),defaultMessage:"Decrease"}}),O=n(87),v=n(7),j=n(17),p=n(180),g=n(167),E=n(98),y=n(181);var S=n(539),C=n(6);function P(e){return Array.isArray(e)?0===e.length:""===e||null==e}var h=function(){var e,t=Object(a.useState)("DATE_MODIFIED_DESC"),n=(e=t,Object(p.a)(e)||Object(g.a)(e)||Object(E.a)(e)||Object(y.a)(),Object(a.useCallback)((function(e,t){var n={filterValue:{filter:e,value:t}},a=e===C.Filter.Query?v.k:v.j;c(a(n))}),[])),c=Object(s.d)(),i=(0,Object(O.c)().formatDictionary)(m),u="",l="",o="",f=Object(a.useCallback)((function(){return n(C.Filter.Availiability,"")}),[]),d=Object(a.useCallback)((function(){return n(C.Filter.Status,"")}),[]),b=Object(a.useCallback)((function(e){return n(C.Filter.Query,e)}),[]),j=Object(a.useCallback)((function(){return n(C.Filter.Query,"")}),[]),h=Object(a.useCallback)((function(){f(),j()}),[j,f]),k=[{label:i.filterPriceChangeSame,value:C.PriceSettingsMode.Same},{label:i.filterPriceChangeSpecific,value:C.PriceSettingsMode.Value},{label:i.filterPriceChangeIncrease,value:C.PriceSettingsMode.Increase},{label:i.filterPriceChangeDecrease,value:C.PriceSettingsMode.Decrease}];function M(e,t){switch(e){case C.Filter.Status:return"".concat(function(e){var n;return null===(n=e.find((function(e){return e.value===t})))||void 0===n?void 0:n.label}(k));case C.Filter.Availiability:default:return t}}var I=[];return P(l)||I.push({key:C.Filter.Status,label:M(C.Filter.Status,l),onRemove:d}),P(u)||I.push({key:C.Filter.Availiability,label:M(C.Filter.Availiability,u),onRemove:f}),r.a.createElement(S.a,{queryValue:o,filters:[],appliedFilters:I,onQueryChange:b,onQueryClear:j,onClearAll:h})},k=n(527),M=n(328),I=function(){};var N=function(e){var t=e.id,n=e.name;return r.a.createElement(k.a,{id:t,onClick:I,accessibilityLabel:"View details for ".concat(n)},r.a.createElement(M.a,{item:e}))},A=n(300);t.default=function(){var e=Object(a.useCallback)((function(e){t(Object(v.y)(JSON.parse(e)))}),[]),t=Object(s.d)(),n=(0,Object(O.c)().formatDictionary)(m),d=Object(s.e)(f.c),b=(Object(s.e)(f.d),Object(s.e)(f.a)),p=Object(s.e)(f.e);Object(a.useCallback)((function(e){t(Object(j.l)(e))}),[]);r.a.useEffect((function(){t(Object(j.h)())}),[]);var g=r.a.useRef([]),E=r.a.useMemo((function(){return function(e){var t=e.onClick;return r.a.createElement(c.a,{primary:!0,onClick:t},"Add Profile")}}),[]),y=Object(a.useMemo)((function(){return r.a.createElement(A.a,{activator:E})}),[g,p]),S=r.a.createElement(i.a,null,r.a.createElement(i.a.Section,null,r.a.createElement(u.a,{alternateTool:y,filterControl:d.length&&r.a.createElement(h,null),loading:b,sortOptions:g.current,sortValue:JSON.stringify(p),onSortChange:e,resourceName:{singular:n.resourceNameSingular,plural:n.resourceNamePlural},items:d,renderItem:N,emptyState:y})));return r.a.createElement(r.a.Fragment,null,d?S:r.a.createElement(l.a,{distribution:"center"},r.a.createElement(o.a,{accessibilityLabel:"Spinner example",size:"large",color:"teal"})))}}}]);
//# sourceMappingURL=9.51cb815c.chunk.js.map