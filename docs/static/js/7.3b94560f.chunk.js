(this["webpackJsonpshopify-pre-order"]=this["webpackJsonpshopify-pre-order"]||[]).push([[7],{486:function(e,t,a){},487:function(e,t,a){},488:function(e,t,a){},489:function(e,t,a){},553:function(e,t,a){},554:function(e,t,a){},555:function(e,t,a){},577:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a(0),l=a.n(r),c=a(8),o=a(428),i=a(40),s=a(408),u=a(144),b=a(19);a(486);function m(){var e=Object(b.e)(s.a),t=Object(b.d)(),a=Object(r.useCallback)((function(){return Object(c.a)(Object(c.a)({},e),{},{inventory_limit:+e.inventory_limit})}),[e]),n=Object(r.useCallback)((function(e){t(Object(i.e)(e))}),[]),m=Object(o.a)({onChange:n,settings:a(),forAppSettings:!0}),f=(m.resetForm,m.handleOnSubmit,m.anyError,m.setSettings),d=m.form;return l.a.useEffect((function(){f(a())}),[e,f]),l.a.createElement("div",{className:"defaultProfileSetttings"},l.a.createElement(u.a,{size:"large"},"New Profile Create Settings"),l.a.createElement("div",{className:"defaultProfileSetttings__form"},d))}var f=a(124),d=(a(487),10),v=50,_=function(e){var t=Number(e);return isNaN(t)||t<d?t=d:t>v&&(t=v),t.toString()},E=function(e){if(!e)return"";e.color;var t=e.background_color,a=(e.border_color,e.font_family,e.font_size,e.font_weight,e.text_decoration,e.font_style,e.border_radius,e.border_width,"");return Object.keys(e).forEach((function(t){var n=t.replace("_","-"),r=e[t];"font-size"===n&&(r=_(e.font_size.slice(0,-2))+"px"),a+="".concat(n,": ").concat(r,"; ")})),a+="border-color: ".concat(t)},g=[{label:"Theme Default",value:"inherit"},{label:"Arial",value:"Arial, sans-serif"},{label:"Geneva",value:"Geneva, Tahoma, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Times",value:"Times, Times New Roman, serif"},{label:"Verdana",value:"Verdana, sans-serif"}],p=a(560),O=(a(488),a(9)),h=(a(489),a(558)),j=a(107),C=function(e){e.enabled;var t=e.color,a=e.onChange,n=e.children,c=Object(r.useState)(!1),o=Object(O.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(t),b=Object(O.a)(u,2),m=b[0],f=b[1];Object(r.useEffect)((function(){f(t)}),[t]);var d=Object(r.useCallback)((function(){s(!i)}),[i]),v=Object(r.useCallback)((function(e){var t=Math.floor(255*e.rgb.a).toString(16),n=e.hex+(1===t.length?"0".concat(t):t);f(n),a(n)}),[i]),_=(Object(r.useCallback)((function(e){}),[i]),l.a.createElement("div",{className:"colorPicker__opener",onClick:d},n,l.a.createElement("div",{className:"colorPicker__colorBox",style:{backgroundColor:m}})));return l.a.createElement("div",{className:"colorPicker"},l.a.createElement(j.a,{active:i,activator:_,onClose:d},l.a.createElement(h.a,{color:m,onChange:v})))},k=a(22),y=a(561),N=a(89),x=a(559),S=a(571),T=a(385),w=a(574);a(553);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var R=l.a.createElement("g",{transform:"translate(-5.000000,21.000000) scale(0.09,-0.09)",stroke:"none"},l.a.createElement("path",{d:"M104 203 c4 -10 -3 -27 -21 -45 l-27 -28 37 -38 37 -37 37 38 37 37 -44 45 c-46 46 -67 57 -56 28z m49 -51 c15 -16 14 -17 -23 -17 -37 0 -38 1 -23 17 9 10 19 18 23 18 4 0 14 -8 23 -18z"}),l.a.createElement("path",{d:"M206 103 c-12 -12 -6 -43 9 -43 8 0 15 9 15 19 0 21 -13 34 -24 24z"})),I=function(e){var t=e.svgRef,a=e.title,n=P(e,["svgRef","title"]);return l.a.createElement("svg",z({width:"20pt",height:"20pt",viewBox:"0 0 20 20",preserveAspectRatio:"xMidYMid meet",ref:t},n),a?l.a.createElement("title",null,a):null,R)},A=l.a.forwardRef((function(e,t){return l.a.createElement(I,z({svgRef:t},e))})),M=(a.p,a(554),function(e){e.enabled;var t=e.value,a=e.onChange,n=e.children,c=Object(r.useCallback)((function(e){a(!t)}),[t,a]);return l.a.createElement("label",{className:"custom-checkbox"},l.a.createElement("input",{type:"checkbox",checked:t,onChange:c}),l.a.createElement("div",{className:"custom-checkbox__content"},n))});function D(e){e.enabled;var t=e.settings,a=e.onChange,c=Object(r.useCallback)((function(e){return a({color:e})}),[]),o=Object(r.useCallback)((function(e){return a({background_color:e})}),[]),i=Object(r.useCallback)((function(e){return a({font_family:e})}),[]),s=t.font_size.slice(0,-2),u=Object(r.useCallback)((function(e){var t=_(e)+"px";a({font_size:t})}),[a]),b=Object(r.useCallback)((function(){var e="".concat(Number(s)-1);u(e)}),[s]),m=Object(r.useCallback)((function(){var e="".concat(Number(s)+1);u(e)}),[s]),E=Object(r.useCallback)((function(e){a({font_size:e+"px"})}),[s]),p=Object(r.useCallback)((function(){var e=_(s)+"px";a({font_size:e})}),[s]),O=Object(r.useCallback)((function(){var e="bold"===t.font_weight?"normal":"bold";a({font_weight:e})}),[t.font_weight,a]),h=Object(r.useCallback)((function(){var e="italic"===t.font_style?"normal":"italic";a({font_style:e})}),[t.font_style,a]),j=Object(r.useCallback)((function(){var e="underline"===t.text_decoration?"none":"underline";a({text_decoration:e})}),[t.text_decoration,a]);return l.a.createElement("div",{className:"styleToolbar"},l.a.createElement(f.a,null,l.a.createElement(f.a.Item,null,l.a.createElement(f.a,null,l.a.createElement("div",{className:"styleToolbar__colorPicker"},l.a.createElement(C,{color:t.color,onChange:c},l.a.createElement(k.a,{color:"inkLighter",source:S.a}))),l.a.createElement("div",{className:"styleToolbar__colorPicker"},l.a.createElement(C,{color:t.background_color,onChange:o},l.a.createElement("div",{className:"styleToolbar__backgroundIcon"},l.a.createElement(A,null)))),l.a.createElement("div",{className:"styleToolbar__fontSelector"},l.a.createElement(y.a,{label:"",options:g,onChange:i,value:t.font_family})),l.a.createElement("div",{className:"styleToolbar__fontSize"},l.a.createElement(N.a,{segmented:!0},l.a.createElement(n.a,{icon:l.a.createElement(k.a,{color:"inkLighter",source:T.a}),onClick:b,disabled:Number(s)===d}),l.a.createElement(x.a,{label:"",onChange:E,onBlur:p,value:s}),l.a.createElement(n.a,{disabled:Number(s)===v,icon:l.a.createElement(k.a,{color:"inkLighter",source:w.a}),onClick:m}))))),l.a.createElement(f.a.Item,null,l.a.createElement(f.a,null,l.a.createElement("div",{className:"styleToolbar__fontStyleGroup"},l.a.createElement("div",{className:"styleToolbar__fontWeight"},l.a.createElement(M,{value:"bold"===t.font_weight,onChange:O},l.a.createElement("span",{className:"styleToolbar__fontWeightContent"},"B"))),l.a.createElement("div",{className:"styleToolbar__fontStyle"},l.a.createElement(M,{value:"italic"===t.font_style,onChange:h},l.a.createElement("span",{className:"styleToolbar__fontStyleContent"},"I"))),l.a.createElement("div",{className:"styleToolbar__textDecoration"},l.a.createElement(M,{value:"underline"===t.text_decoration,onChange:j},l.a.createElement("span",{className:"styleToolbar__textDecorationContent"},"U"))))))))}var G=a(406),B=a.n(G);function L(e){var t=e.settings,a=e.selected,c=e.title,o=e.area,s=e.buttonText,m=e.buttonMessage,d=Object(b.d)(),v=Object(r.useCallback)((function(e){d(Object(i.i)({area:o,part:e}))}),[o]),_=Object(r.useCallback)((function(e){d(Object(i.f)({style:e,area:o}))}),[o]),g=Object(r.useCallback)((function(){d(Object(i.g)(o))}),[o]),O=Object(r.useRef)(null);Object(r.useEffect)((function(){O.current.setAttribute("style",E(t.button))}),[t.button]);var h=Object(r.useRef)(null);Object(r.useEffect)((function(){h.current.setAttribute("style",E(t.hover))}),[t.hover]);var j=Object(r.useRef)(null);return Object(r.useEffect)((function(){j.current.setAttribute("style",E(t.hover))}),[t.hover]),l.a.createElement("div",{className:"buttonConfigurator"},l.a.createElement(p.a,{title:l.a.createElement(u.a,{size:"small"},c)},l.a.createElement(p.a.Section,{fullWidth:!0},l.a.createElement("div",{className:"buttonConfigurator__content"},l.a.createElement(f.a,{vertical:!0},l.a.createElement(f.a.Item,null,l.a.createElement("div",{className:"buttonConfigurator__toolbar"},l.a.createElement(D,{settings:t[a],onChange:_}))),l.a.createElement(f.a.Item,null,l.a.createElement("div",{className:"buttonConfigurator__buttons"},l.a.createElement("div",{className:"buttonConfigurator__button buttonConfigurator__button-Self"},l.a.createElement("div",{className:"pre-order-button-box pre-order-button-box__hover pre-order-button-box__top"},l.a.createElement("button",{type:"submit",onClick:function(){return v("button")}},l.a.createElement("span",{className:"pre-order-button__self",ref:O},s),l.a.createElement("span",{className:"pre-order-button__hover",ref:j},s)),l.a.createElement("span",{className:"pre-order-button__message"},m))),l.a.createElement("p",null,"Hover view:"),l.a.createElement("div",{className:"buttonConfigurator__button buttonConfigurator__button-Hover"},l.a.createElement("button",{ref:h,onClick:function(){return v("hover")}},s)),l.a.createElement("div",{className:B()("buttonConfigurator__button-Default",{"buttonConfigurator__button-Default--hidden":!1})},l.a.createElement(n.a,{plain:!0,onClick:g},"Reset template to default")))))))))}function W(){var e,t,a=Object(b.d)(),n=Object(b.e)(s.a),c=Object(b.e)(s.d),o=Object(b.e)(s.e);Object(b.e)(s.b),Object(b.e)(s.c),Object(r.useCallback)((function(e){a(Object(i.f)(e))}),[]);return l.a.createElement("div",{className:"designSettings"},l.a.createElement(u.a,{size:"large"},"Design"),l.a.createElement(f.a,null,l.a.createElement(f.a.Item,null,l.a.createElement(L,{title:"Pre-order Experience Configurator",area:"preorder",settings:c,selected:o,buttonText:null!==(e=null===n||void 0===n?void 0:n.button_text)&&void 0!==e?e:"Pre-order",buttonMessage:null!==(t=null===n||void 0===n?void 0:n.button_message)&&void 0!==t?t:"Pre-order"}))))}a(555),t.default=function(){var e=Object(b.d)(),t=Object(b.e)(s.a),a=Object(r.useCallback)((function(){e(Object(i.j)())}),[]);return l.a.useEffect((function(){return e(Object(i.b)()),function(){e(Object(i.h)())}}),[]),t?l.a.createElement("div",{className:"appSettings"},l.a.createElement("div",{className:"appSettings__section"},l.a.createElement(W,null)),l.a.createElement("div",{className:"appSettings__section"},l.a.createElement(m,null)),l.a.createElement("div",{className:"appSettings__section"},l.a.createElement(n.a,{primary:!0,onClick:a},"Save"))):null}}}]);
//# sourceMappingURL=7.3b94560f.chunk.js.map