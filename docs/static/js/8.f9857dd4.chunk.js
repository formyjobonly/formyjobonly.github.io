(this["webpackJsonpshopify-pre-order"]=this["webpackJsonpshopify-pre-order"]||[]).push([[8],{419:function(e,t,a){"use strict";a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"h",(function(){return b})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return v})),a.d(t,"e",(function(){return O})),a.d(t,"i",(function(){return p})),a.d(t,"b",(function(){return g})),a.d(t,"j",(function(){return j})),a.d(t,"l",(function(){return E})),a.d(t,"k",(function(){return y}));var n=a(8),i=a(98),r=a(148),l=a(36),c=a(0),o=a(17),u=function(e){return e.products},s=Object(l.a)((function(e){return e.products.productsById}),(function(e){return e.products.variantsById}),(function(e,t){return Object.keys(e).map((function(a){var l=e[a],c=l.variants,o=Object(i.a)(l,["variants"]),u=!1,s=!1,d=Object(n.a)({},o),f=c.reduce((function(e,a){var n=t[a];return e[a]=n,Object(r.c)(n)||(u=u||n.enabled!==o.enabled),s=s||n.profile_id!==o.profile_id,e}),{});return Object(n.a)({variants:f,different:u,differentProfile:s},d)}))})),d=Object(l.a)(u,(function(e){return e.selectedProducts})),f=Object(l.a)(u,(function(e){return e.loading})),b=Object(l.a)(u,(function(e){return e.settingsModal})),m=Object(l.a)(u,(function(e){return e.assignProfileModal})),v=(Object(l.a)(b,(function(e){return e.loading})),Object(l.a)(b,(function(e){return e.error})),Object(l.a)(b,(function(e){return e.open}))),O=Object(l.a)(u,(function(e){return e.pageInfo})),p=Object(l.a)(u,(function(e){return e.sort})),g=Object(l.a)((function(e){return e.products.filters.availiability}),(function(e){return e.products.filters.status}),(function(e){return e.products.filters.query}),(function(e,t,a){return{availiability:e,status:t,query:a}})),j=function(e,t){var a=Object(c.useMemo)((function(){return function(e,t){return Object(l.a)(s,(function(e){return e.products.variantsById}),(function(a,n){return t?n[e]:a.find((function(t){return t.id===e}))}))}(e,t)}),[e,t]);return Object(o.e)(a)},E=function(e){var t=Object(c.useMemo)((function(){return function(e){return Object(l.a)((function(e){return e.products.unfoldedProductsIds}),(function(t){return t.includes(e)}))}(e)}),[e]);return Object(o.e)(t)},y=function(e){var t=Object(c.useMemo)((function(){return function(e){return Object(l.a)((function(e){return e.products.productsById}),(function(e){return e.products.selectedProducts.variantsIds}),(function(t,a){return t[e].variants.filter((function(e){return a.includes(e)}))}))}(e)}),[e]);return Object(o.e)(t)}},422:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(8),i=a(0),r=a.n(i),l=a(17),c=a(424),o=a(417),u=a(18),s=a(104),d="products.list.item",f=Object(s.b)({createProfileTitle:{id:"".concat(d,".createProfileTitle"),defaultMessage:"Add Profile"},updateProfileTitle:{id:"".concat(d,".updateProfileTitle"),defaultMessage:"Profile {title} Settings"},copyOfProfileTitle:{id:"".concat(d,".copyOfProfileTitle"),defaultMessage:"Copy of "},newProfileTitle:{id:"".concat(d,".newProfileTitle"),defaultMessage:"New Profile"}}),b=a(60),m=a(421);function v(e){var t,a,s=Object(l.d)(),d=Object(b.e)().fmt,v=Object(l.e)(o.c),O=Object(l.e)(m.a),p=Object(i.useCallback)((function(){s(Object(u.n)(!0))}),[s]),g=Object(i.useCallback)((function(t){var a,i;s(Object(u.r)(Object(n.a)(Object(n.a)({},t),{},{id:e.duplicate?"":null!==(a=null===(i=v.data)||void 0===i?void 0:i.id)&&void 0!==a?a:""})))}),[v,e.duplicate]),j=r.a.useMemo((function(){return function(t){var a=t.onClick;return r.a.createElement(e.activator,{onClick:function(){a(),p()}})}}),[]),E=d(f.createProfileTitle),y=d(f.updateProfileTitle,{title:v.data?'"'.concat(null===(t=v.data)||void 0===t?void 0:t.name,'"'):""}),S=v.loading||v.data&&!e.duplicate?y:E,A=v.data?Object(n.a)({},v.data):Object(n.a)(Object(n.a)({},O),{},{name:d(f.newProfileTitle),inventory_limit:Number(null!==(a=null===O||void 0===O?void 0:O.inventory_limit)&&void 0!==a?a:0)});return e.duplicate&&v.data&&v.data.name&&(A.name=d(f.copyOfProfileTitle)+A.name),r.a.createElement(c.a,Object.assign({activator:j,onSubmit:g},v,{settings:A,title:S}))}},423:function(e,t,a){},424:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(11),i=a(0),r=a.n(i),l=a(17),c=a(253),o=a(131),u=a(60),s=a(425),d=(a(431),a(419)),f=a(429),b=a(6),m=a(442);function v(e){var t=e.loading,a=e.settings,v=e.onSubmit,O=e.forSettings,p=e.title,g=e.isVariant,j=e.priceShopify,E=e.preorderStatusFromList,y=e.footer,S=e.error,A=Object(i.useState)(!1),k=Object(n.a)(A,2),P=k[0],h=k[1],C=Object(l.e)(d.d),I=Object(l.d)();Object(i.useEffect)((function(){C||h(!1)}),[C]),Object(i.useEffect)((function(){w(a)}),[a]);var M=(0,Object(u.e)().formatDictionary)(s.a),x=Object(m.a)({onSubmit:v,settings:a,error:S,forSettings:O,isVariant:g,priceShopify:j,preorderStatusFromList:E}),N=x.resetForm,_=x.handleOnSubmit,F=x.anyError,T=x.form,w=x.setSettings,B=function(){N(),I(Object(b.s)(!1)),D()},D=Object(i.useCallback)((function(){return h(!P)}),[P]),L=r.a.createElement(e.activator,{onClick:D});return r.a.createElement(c.a,{activator:L,open:P,loading:t,onClose:B,title:r.a.createElement(f.h,{title:p,withError:F}),footer:y,primaryAction:{content:M.saveAction,onAction:_,disabled:t},secondaryActions:[{content:M.cancelAction,onAction:B,disabled:t}]},r.a.createElement(c.a.Section,null,r.a.createElement(o.a,{vertical:!0},r.a.createElement(o.a.Item,null,T),r.a.createElement(o.a.Item,null))))}},434:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(48),l=a(89),c=a(240),o=a(131),u=a(7),s=a(588),d=a(589),f=a(590),b=(a(423),a(422)),m=a(17),v=a(18),O=(a(435),a(60)),p=a(53);t.a=function(e){var t=e.item,a=e.noActions,g=(t.id,t.name),j=t.inventory_limit,E=t.price_type,y=t.is_default,S=t.price_change_value,A=Object(m.d)(),k=Object(n.useCallback)((function(){return A(Object(v.b)(t))}),[t]),P=function(){var e=Object(O.e)().getPriceString;return Object(m.e)(p.b),function(t,a){var n=a&&Number(a),i="Keep Same",r="";if(!n&&t!==u.PriceType.Same&&0!==n)return"Error";if(n||0===n){switch(!0){case n<0:i="Decrease by",n=Math.abs(n);break;case n>0:i="Increase by"}switch(t){case u.PriceType.Amount:r=e(n);break;case u.PriceType.Percent:r=" "+String(n)+"%";break;case u.PriceType.SpecificValue:i="Set to ".concat(e(n)),r=""}}return"".concat(i," ").concat(r)}}()(E,S),h=function(e){return e?"Max ".concat(e):"Unlimited"}(j),C=Object(n.useCallback)((function(){A(Object(v.e)(t.id))}),[t,A]),I=i.a.useMemo((function(){return function(e){var t=e.onClick;return i.a.createElement(r.a,{onClick:function(e){e.stopPropagation(),t(),C()},icon:s.a})}}),[]),M=i.a.useMemo((function(){return function(e){var t=e.onClick;return i.a.createElement(r.a,{onClick:function(e){e.stopPropagation(),t(),C()},icon:d.a})}}),[]);return i.a.createElement("div",{className:"flexContainer"},a?null:i.a.createElement("div",{className:"flexItem flexItem__name flexWide"},i.a.createElement(l.a,{variation:"strong"},g)),i.a.createElement("div",{className:"flexItem flexItem__count flexWide forNarrowBadge"},i.a.createElement(l.a,{variation:"strong"},i.a.createElement("div",{className:"countBadge"},"Assigned to"," ",i.a.createElement(c.a,{status:"attention"},String(0))," ","products"))),i.a.createElement("div",{className:"flexItem flexItem__priceChangeText flexWide flexSubdued"},i.a.createElement(l.a,{variation:"subdued"},i.a.createElement("span",{className:"subdued"},i.a.createElement("span",null,"Price change:"),i.a.createElement("span",null,P)))),i.a.createElement("div",{className:"flexItem flexItem__inventoryLimitText flexWide flexSubdued"},i.a.createElement(l.a,{variation:"subdued"},i.a.createElement("span",{className:"subdued"},i.a.createElement("span",null,"Inventory limit:"),i.a.createElement("span",null,h)))),a?null:i.a.createElement("div",{className:"flexItem flexItem__updateProfileActivator  flexWide flexAlignEnd"},i.a.createElement(o.a,null,i.a.createElement(b.a,{duplicate:!0,activator:M}),y?null:i.a.createElement(b.a,{activator:I}),y?null:i.a.createElement(r.a,{onClick:k,icon:f.a}))))}},435:function(e,t,a){},469:function(e,t,a){},502:function(e,t,a){},592:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(576),r=a(131),l=a(94),c=a(48),o=a(577),u=a(593),s=a(138),d=a(17),f=a(0),b=a.n(f),m=a(7),v=a(6),O=a(104),p="products.list",g=Object(O.b)({sortByName:{id:"".concat(p,".sort.ByName"),defaultMessage:"Name A to Z"},inventoryLeftAscending:{id:"".concat(p,".sort.ByInventoryLeftAscending"),defaultMessage:"Inventory Left ascending"},resourceNameSingular:{id:"".concat(p,".resourceName.singular"),defaultMessage:"product"},resourceNamePlural:{id:"".concat(p,".resourceName.plural"),defaultMessage:"products"},filterStatus:{id:"".concat(p,".filters.Status"),defaultMessage:"Pre-order Status"},filterStatusActivated:{id:"".concat(p,".filters.StatusActivated"),defaultMessage:"Pre-order Activated"},filterStatusScheduled:{id:"".concat(p,".filters.StatusScheduled"),defaultMessage:"Pre-order Scheduled"},filterPreordered:{id:"".concat(p,".filters.Preordered"),defaultMessage:"Currently Active Pre-Order Product"},filterAvailiability:{id:"".concat(p,".filters.Availiability"),defaultMessage:"Availiability"},filterAvailiabilityInStock:{id:"".concat(p,".filters.AvailiabilityInStock"),defaultMessage:"In Stock"},filterAvailiabilitySoldOut:{id:"".concat(p,".filters.AvailiabilitySoldOut"),defaultMessage:"Sold Out"},bulkActionsAssignProfile:{id:"".concat(p,".bulkActions.AssignProfile"),defaultMessage:"Assign Profile"},bulkActionsUnassignProfile:{id:"".concat(p,".bulkActions.AssignProfile"),defaultMessage:"Unassign Profile"},bulkActionsEnable:{id:"".concat(p,".bulkActions.Enable"),defaultMessage:"Enable Pre-Order"},bulkActionsDisable:{id:"".concat(p,".bulkActions.Disable"),defaultMessage:"Disable Pre-Order"}}),j=a(60),E=a(419),y=a(417),S=a(403),A=a(404),k=a(579),P=a(580),h=a(8),C=(a(469),function(e){var t=e.enabled,a=e.id,n=e.onColor,i=e.onChange;return b.a.createElement("div",{className:"react-switch-box"},b.a.createElement("input",{checked:t,onChange:i,className:"react-switch-checkbox",id:"react-switch-new-"+a,type:"checkbox"}),b.a.createElement("label",{style:{background:t?n:""},className:"react-switch-label",htmlFor:"react-switch-new-"+a},b.a.createElement("span",{className:"react-switch-button"})))}),I=f.createElement("path",{d:"M4 10c0-1.294.416-2.49 1.115-3.471l8.356 8.356A5.961 5.961 0 0 1 10 16c-3.309 0-6-2.691-6-6zm12 0c0 1.294-.416 2.49-1.115 3.471L6.529 5.115A5.961 5.961 0 0 1 10 4c3.309 0 6 2.691 6 6zM2 10c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8z"}),M=function(e){return f.createElement("svg",Object.assign({viewBox:"0 0 20 20"},e),I)},x=f.createElement("path",{fillRule:"evenodd",d:"M9.027 0a1 1 0 0 0-.99.859l-.37 2.598A6.993 6.993 0 0 0 5.742 4.57l-2.437-.98a1 1 0 0 0-1.239.428L.934 5.981a1 1 0 0 0 .248 1.287l2.066 1.621a7.06 7.06 0 0 0 0 2.222l-2.066 1.621a1 1 0 0 0-.248 1.287l1.132 1.962a1 1 0 0 0 1.239.428l2.438-.979a6.995 6.995 0 0 0 1.923 1.113l.372 2.598a1 1 0 0 0 .99.859h2.265a1 1 0 0 0 .99-.859l.371-2.598a6.995 6.995 0 0 0 1.924-1.112l2.438.978a1 1 0 0 0 1.238-.428l1.133-1.962a1 1 0 0 0-.249-1.287l-2.065-1.621a7.063 7.063 0 0 0 0-2.222l2.065-1.621a1 1 0 0 0 .249-1.287l-1.133-1.962a1 1 0 0 0-1.239-.428l-2.437.979a6.994 6.994 0 0 0-1.924-1.113L12.283.86a1 1 0 0 0-.99-.859H9.027zm1.133 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}),N=function(e){return f.createElement("svg",Object.assign({viewBox:"0 0 20 20"},e),x)},_=a(586),F=a(587),T=a(23),w=a(89),B=a(240),D=Object(O.b)({activatingOn:{id:"".concat("preorderStatusBadge",".activatingOn"),defaultMessage:"Activating on {time}"}}),L=Object(O.b)({active:{id:"".concat("preorderStatusBadge",".active"),defaultMessage:"Pre-order Active"},enabled:{id:"".concat("preorderStatusBadge",".enabled"),defaultMessage:"Pre-order Enabled"},disabled:{id:"".concat("preorderStatusBadge",".disabled"),defaultMessage:"Pre-order Disabled"},different:{id:"".concat("preorderStatusBadge",".different"),defaultMessage:"Different for Variants"}}),V=a(200),W=a(443);var z=function(e){var t=e.item,a=e.different,n="",i={status:void 0},r=Object(j.e)(),l=r.fmt,c=(0,r.formatDictionary)(L);if("undefined"!==typeof a&&a)n=c.different,i.status="warning";else if(t.enabled)switch(t.preorder_status){case m.PreorderStatus.Enabled:t.preorder_activating_start_date?(i.status="attention",n=l(D.activatingOn,{time:Object(V.a)(Object(W.a)(t.preorder_activating_start_date),"MMM d, Y")})):(n=c.enabled,i.status="info");break;case m.PreorderStatus.Activated:n=c.active,i.status="success";break;default:n=c.disabled}else n=c.disabled;return b.a.createElement(B.a,i,n)},J=(a(423),a(420)),Q=a.n(J),R=a(424),U=Object(O.b)({productTitle:{id:"".concat("products.list.item",".productTitle"),defaultMessage:' Product "{title}" Pre-order Settings'},variantTitle:{id:"".concat("products.list.item",".variantTitle"),defaultMessage:' Variant "{title}" Pre-order Settings'}}),q=a(11),H=a(112),K=a(600);var Y=a(199),Z=a(444);var G=function(e){var t=e.callback,a=e.valueField,i=void 0===a?"id":a,r=e.labelField,l=void 0===r?"name":r,o=e.disabled,u=e.title,s=e.disclosure,d=e.icon,m=e.renderAfter,v=e.selection,O=e.buttonText,p=e.tooltipText,g=Object(f.useState)(null!==v&&void 0!==v?v:[""]),j=Object(q.a)(g,2),E=j[0],y=j[1];Object(f.useEffect)((function(){y(Object(n.a)(null!==v&&void 0!==v?v:[]))}),[v]);var S,A=Object(f.useState)(!1),k=Object(q.a)(A,2),P=k[0],h=k[1],C=Object(f.useCallback)((function(e){e.stopPropagation(),h(!P)}),[P]),I=Object(f.useCallback)((function(){h(!1)}),[P]),M=Object(f.useCallback)((function(e,a){y(e),t(e),I()}),[t]),x=e.items?Object.values(e.items):[],N=x.map((function(e){return{value:e[null!==i&&void 0!==i?i:""]||e.id,label:e[null!==l&&void 0!==l?l:""]||e.name}}));if(E.length&&x.length){var _=x.find((function(e){return e[i]===E[0]}));S=_?_[l]:"Error"}else"subdued",S=u;S=null!==O&&void 0!==O?O:S;var F=null!==p&&void 0!==p?p:S,T=Object(f.useMemo)((function(){return b.a.createElement(Y.a,{content:F,preferredPosition:"above"},b.a.createElement(c.a,{disabled:o,onClick:C,disclosure:s,fullWidth:!0,icon:d},S))}),[F,o,C,s,d,S]);return b.a.createElement(Z.a,{active:P,activator:T,onClose:I},b.a.createElement(H.a.Section,null,x.length?b.a.createElement(K.a,{title:"",onChange:M,choices:N,selected:E,disabled:o}):null,m&&m()))},X=a(422);var $=function(e){var t,a=e.disabled,i=e.item,r=e.isVariant,l=(Object(j.e)().formatDictionary,Object(d.d)()),o=Object(d.e)(y.d),u=i.profile_id,s=Object(f.useMemo)((function(){return u?[u]:[]}),[i]),m=b.a.useMemo((function(){return function(e){var t=e.onClick;return b.a.createElement(c.a,{plain:!0,onClick:function(e){e.stopPropagation(),t()}},"Add Profile")}}),[]),O=b.a.useMemo((function(){return b.a.createElement("div",{style:{marginTop:"1rem"}},b.a.createElement(X.a,{activator:m}))}),[m]),p=Object(f.useCallback)((function(){return O}),[O]),g=Object(f.useCallback)((function(e){var t=Object(q.a)(e,1)[0];l(null===t?Object(v.E)({id:t,item:i}):Object(v.a)({id:t,item:i}))}),[i]),E=b.a.useMemo((function(){return u?[{id:null,name:"No Profile"}].concat(Object(n.a)(o)):o}),[u,o]);r||i.differentProfile&&(t="Different for variants");var S=null;return a&&(S="Activate the pre-order first"),b.a.useMemo((function(){return b.a.createElement(G,{items:E,selection:s,disabled:Boolean(a),callback:g,title:"No Profile",buttonText:t,tooltipText:S,disclosure:!0,renderAfter:p})}),[E,s,a,S,p])},ee={color:"red",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"};var te=function(e){var t,a,n=e.id,i=e.variantsExist,r=e.isVariant,l=Object(E.j)(n,Boolean(r)),o=l.title,u=l.enabled,s=l.preorder_status,O=l,p=O.images,g=O.variants,S=r||i||!g?null:Object.values(g)[0],A=l,k=A.price,P=A.price_shopify,I=S?S.price_shopify:P,x=(Object(d.e)(y.d),Object(d.e)(E.h)),B=Object(h.a)({},x.data),D=Object(E.l)(n),L=Object(j.e)(),V=L.fmt,W=L.getPriceString,J=Object(d.d)(),q=Object(f.useCallback)((function(e){e.stopPropagation()}),[]),H=Object(f.useCallback)((function(e){e.stopPropagation(),J(Object(v.B)({id:n,unfolded:!D}))}),[n,D,J]),K=s===m.PreorderStatus.Disabled,Y=Object(f.useCallback)((function(){J(Object(v.A)({id:n,enabled:!u,isVariant:r}))}),[n,u,r,J]),Z=(Object(f.useCallback)((function(){J(Object(v.A)({id:n,enabled:!u,isVariant:r}))}),[n,u,r,J]),Object(f.useCallback)((function(e){J(Object(v.w)({items:[Object(h.a)({productId:r?l.product_id:l.id},r?{variantId:l.id}:null)],settings:e}))}),[n,u,r,J])),G=Object(f.useCallback)((function(){var e=r?l.id:S?S.id:void 0,t=r?l.product_id:l.id;J(Object(v.s)(!0)),J(Object(v.j)({variantId:e,productId:t}))}),[r,l,S,J]),X=null!==(t=null===p||void 0===p||null===(a=p[0])||void 0===a?void 0:a.src)&&void 0!==t?t:"/img/no_image.jpg",te=X?b.a.createElement("img",{className:"imageItem",src:X}):b.a.createElement("span",{className:"imageItem"},b.a.createElement(T.a,{source:M,color:"inkLight"})),ae=Q()("flexItem","flexAlignEnd",r?"variantPrice":"price"),ne=Q()("profilesWrapper",{"profilesWrapper--disabled":!1}),ie=b.a.useMemo((function(){return function(e){var t=e.onClick;return b.a.createElement(c.a,{primary:"34663225786535"===n,icon:N,onClick:function(e){e.stopPropagation(),t(),G()}})}}),[u,r,l,S]),re=V(r?U.variantTitle:U.productTitle,{title:l.title});return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"flexContainer"},b.a.createElement("div",{className:"flexItem propsWrapper"},b.a.createElement("div",{className:"flexItem image"},te),b.a.createElement("div",{className:"flexItem title"},b.a.createElement(w.a,{variation:"strong"},o)),b.a.createElement("div",{className:ae},b.a.createElement(w.a,{variation:"strong"},r&&!K?W(k):null,S&&!K?W(S.price):null))),b.a.createElement("div",{className:"flexItem actionsWrapper"},b.a.createElement("div",{className:"flexItem flexItem__chevrone flexWide flexAlignEnd"},i?b.a.createElement(c.a,{onClick:H,ariaExpanded:D,ariaControls:"basic-collapsible"+n,icon:D?F.a:_.a}):b.a.createElement("div",{className:"collapsibleSpan"})),b.a.createElement("div",{className:"flexItem flexItem__settings"},b.a.createElement("div",{onClick:q},b.a.createElement(R.a,Object.assign({forSettings:!0,title:re,footer:b.a.createElement("div",{style:ee},"Price will be automatically updated whenever price is changed on shopify store"),activator:ie,onSubmit:Z,item:l,isVariant:Boolean(r)},x,{settings:B,priceShopify:I,preorderStatusFromList:s})))),b.a.createElement("div",{className:"flexItem flexItem__profilesWrapper"},b.a.createElement("div",{className:ne,onClick:q},b.a.createElement($,{disabled:!u,item:l,isVariant:r}))),b.a.createElement("div",{className:"flexItem flexItem__badge flexWide"},b.a.createElement("div",null,b.a.createElement(z,{item:l,different:l.different}))),b.a.createElement("div",{className:"flexItem flexItem__switcher"},b.a.createElement("div",{onClick:q},b.a.createElement(C,{enabled:u,id:n,onChange:Y,onColor:"#5b69c2"}))))))},ae=a(148);var ne=function(e){var t=e.items,a=e.productId,n=Object.values(t),i=Object(E.l)(a),r=Object(E.k)(a),l=Object(d.d)(),c=Object(f.useCallback)((function(e){l(Object(v.u)({selected:e,productId:a}))}),[a]),o=Q()("variantsContainer",{unfolded:i});return b.a.createElement("div",{className:o},b.a.createElement(k.a,{open:i,id:"basic-collapsible"+e.productId},b.a.createElement(u.a,{selectable:!0,selectedItems:r,onSelectionChange:c,resourceName:{singular:"product variant",plural:"product variants"},items:n,renderItem:function(e){var t=e.id,a=Object(ae.b)(e,!0);return b.a.createElement(P.a,{id:t,url:a},b.a.createElement(te,{id:e.id,isVariant:!0}))}})))};var ie=function(e){var t=e.id,a=e.title,n=e.variants,i=Object.values(n)[0],r=!Object(ae.c)(i),l=Object(ae.b)(e);return b.a.createElement(b.a.Fragment,null,b.a.createElement(P.a,{id:t,url:l,accessibilityLabel:"View details for ".concat(a)},b.a.createElement(te,{id:e.id,variantsExist:r})),r&&b.a.createElement(ne,{items:n,productId:t}))},re=a(595);function le(e){return Array.isArray(e)?0===e.length:""===e||null==e}var ce=function(){var e=Object(d.e)(E.b),t=Object(f.useCallback)((function(e,t){var n={filterValue:{filter:e,value:t}},i=e===m.Filter.Query?v.l:v.k;a(i(n))}),[]),a=Object(d.d)(),n=(0,Object(j.e)().formatDictionary)(g),i=(n.filterStatusActivated,m.FilterStatus.Activated,n.filterStatusScheduled,m.FilterStatus.Scheduled,[{label:n.filterAvailiabilityInStock,value:m.FilterAvailiability.InStock},{label:n.filterAvailiabilitySoldOut,value:m.FilterAvailiability.SoldOut},{label:n.filterPreordered,value:m.FilterAvailiability.Preordered}]),r=b.a.useMemo((function(){return e.availiability?[e.availiability]:[]}),[e.availiability]);return b.a.createElement(b.a.Fragment,null,b.a.createElement(G,{items:i,labelField:"label",valueField:"value",disabled:!1,callback:function(e){return t("availiability",e[0])},title:n.filterAvailiability,selection:r,disclosure:!0}))},oe=function(){var e=Object(d.e)(E.b),t=Object(f.useCallback)((function(e,t){var n={filterValue:{filter:e,value:t}},i=e===m.Filter.Query?v.l:v.k;a(i(n))}),[]),a=Object(d.d)(),n=(0,Object(j.e)().formatDictionary)(g),i=Object(f.useCallback)((function(){return t(m.Filter.Availiability,"")}),[]),r=Object(f.useCallback)((function(){return t(m.Filter.Status,"")}),[]),l=Object(f.useCallback)((function(){return t(m.Filter.Query,"")}),[]),c=Object(f.useCallback)((function(){i(),l()}),[l,i]),o=[{label:n.filterStatusActivated,value:m.FilterStatus.Activated},{label:n.filterStatusScheduled,value:m.FilterStatus.Scheduled}],u=[{label:n.filterAvailiabilityInStock,value:m.FilterAvailiability.InStock},{label:n.filterAvailiabilitySoldOut,value:m.FilterAvailiability.SoldOut},{label:n.filterPreordered,value:m.FilterAvailiability.Preordered}],s=[{key:"availiability",label:n.filterAvailiability,filter:b.a.createElement(K.a,{title:n.filterAvailiability,titleHidden:!0,choices:u,selected:[e.availiability],onChange:function(e){return t("availiability",e[0])}}),shortcut:!0}];function O(e,t){var a=function(e){var a;return null===(a=e.find((function(e){return e.value===t})))||void 0===a?void 0:a.label};switch(e){case m.Filter.Status:return"".concat(a(o));case m.Filter.Availiability:return"".concat(n.filterAvailiability,": ").concat(a(u));default:return t}}var p=[];return le(e.status)||p.push({key:m.Filter.Status,label:O(m.Filter.Status,e.status),onRemove:r}),le(e.availiability)||p.push({key:m.Filter.Availiability,label:O(m.Filter.Availiability,e.availiability),onRemove:i}),b.a.createElement(re.a,{queryValue:e.query,filters:s,appliedFilters:p,onQueryChange:function(e){return t(m.Filter.Query,e)},onQueryClear:l,onClearAll:c})},ue=Object(O.b)({assignProfileTitleToProduct:{id:"".concat("products.list.item",".assignProfileTitleToProduct"),defaultMessage:"Assign profile to product {title}"}}),se=Object(O.b)({assignProfileTitle:{id:"".concat("products.list.item",".assignProfileTitle"),defaultMessage:"Multiple Products Settings"},saveAction:{id:"".concat("products.list.item",".action.save"),defaultMessage:"Assign"},cancelAction:{id:"".concat("products.list.item",".action.save"),defaultMessage:"Cancel"}}),de=a(253),fe=a(578),be=a(434);a(502);function me(){var e,t,a=Object(d.d)(),n=Object(j.e)(),l=n.fmt,c=(0,n.formatDictionary)(se),o=Object(d.e)(E.a),u=o.open,s=o.loading,m=o.data,O=Object(d.e)(y.d),p=Object(f.useState)(null===m||void 0===m||null===(e=m.product)||void 0===e?void 0:e.id),g=Object(q.a)(p,2),S=g[0],A=g[1],k=Object(f.useCallback)((function(){A(""),S&&a(Object(v.a)({id:S}))}),[S]),P=Object(f.useCallback)((function(){A(""),a(Object(v.h)())}),[]),h=Object(f.useCallback)((function(e,t){A(t)}),[]),C=m?l(ue.assignProfileTitleToProduct,{title:'"'.concat((null===(t=m.product)||void 0===t?void 0:t.title)||"Untitled",'"')}):c.assignProfileTitle;return b.a.createElement(de.a,{open:u,loading:s,onClose:P,title:C,primaryAction:{content:c.saveAction,onAction:k,disabled:!S||s},secondaryActions:[{content:c.cancelAction,onAction:P,disabled:s}]},b.a.createElement("div",{className:"assignProfileModal"},b.a.createElement(i.a.Section,null,O.map((function(e){var t=S===e.id;return b.a.createElement("div",{key:e.id,className:Q()("radioSection__selectable",{"radioSection__selectable--checked":t}),onClick:function(){return h(!0,e.id)}},b.a.createElement(de.a.Section,null,b.a.createElement(r.a,{vertical:!0,spacing:"extraLoose"},b.a.createElement(r.a.Item,null,b.a.createElement("label",{htmlFor:e.id},b.a.createElement(fe.a,{label:"",checked:t,id:e.id,name:"accounts"}),e.name)),b.a.createElement(r.a.Item,null,b.a.createElement("div",{style:{marginLeft:"3rem"}},b.a.createElement(be.a,{noActions:!0,item:e}))))))})))))}t.default=function(){var e=Object(f.useCallback)((function(e){t(Object(v.z)(JSON.parse(e)))}),[]),t=Object(d.d)(),a=(0,Object(j.e)().formatDictionary)(g),O=Object(d.e)(E.f),p=(Object(d.e)(y.d),Object(d.e)(E.g)),k=Object(d.e)(E.c),P=Object(d.e)(E.i),h=Object(d.e)(E.e),C=function(e){var t=Object(d.d)();return Object(f.useMemo)((function(){return[{content:e.bulkActionsAssignProfile,onAction:function(){return t(Object(v.r)())}},{content:e.bulkActionsUnassignProfile,onAction:function(){return t(Object(v.E)())}},{content:e.bulkActionsEnable,onAction:function(){return t(Object(v.d)())}},{content:e.bulkActionsDisable,onAction:function(){return t(Object(v.d)(!1))}}]}),[])}(a);b.a.useEffect((function(){t(Object(v.k)())}),[]);var I=Object(f.useCallback)((function(e){t(Object(v.t)({productsIds:e,variantsIds:[]}))}),[O]),M=Object(f.useCallback)((function(e){t(Object(v.v)(e))}),[]),x=O,N=b.a.useRef([{label:a.sortByName,value:JSON.stringify({field:m.SortField.Title,dir:m.SortDir.Asc})},{label:a.inventoryLeftAscending,value:JSON.stringify({field:m.SortField.Inventory,dir:m.SortDir.Asc})}]),_=b.a.createElement(i.a.Section,null,b.a.createElement(r.a,{distribution:"center"},b.a.createElement(l.a,{segmented:!0},b.a.createElement(c.a,{disabled:!h.hasPreviousPage,icon:S.a,onClick:function(){return M(m.PageDirection.Before)}}),b.a.createElement(c.a,{disabled:!h.hasNextPage,icon:A.a,onClick:function(){return M(m.PageDirection.After)}})))),F=(Object(f.useMemo)((function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{marginRight:"1rem"}},b.a.createElement(o.a,{label:"Sort by",labelInline:!0,options:N.current,value:JSON.stringify(P),onChange:e})),b.a.createElement(ce,null))}),[N,P]),Object(f.useMemo)((function(){return b.a.createElement(oe,null)}),[])),T=b.a.createElement(i.a,null,b.a.createElement(i.a.Section,null,b.a.createElement(u.a,{filterControl:F,selectedItems:p.all?"All":[].concat(Object(n.a)(p.productsIds),Object(n.a)(p.variantsIds)),onSelectionChange:I,selectable:!0,loading:k,promotedBulkActions:C,sortOptions:N.current,sortValue:JSON.stringify(P),onSortChange:e,resourceName:{singular:a.resourceNameSingular,plural:a.resourceNamePlural},items:x,renderItem:ie})),x&&x.length?_:null);return b.a.createElement("div",{className:"productsList__wrapper"},O.length||!k?b.a.createElement(b.a.Fragment,null,T,b.a.createElement(me,null)):b.a.createElement("div",{style:{marginTop:"-2rem"}},b.a.createElement(r.a,{distribution:"center"},b.a.createElement(s.a,{accessibilityLabel:"Spinner example",size:"large",color:"teal"}))))}}}]);
//# sourceMappingURL=8.f9857dd4.chunk.js.map