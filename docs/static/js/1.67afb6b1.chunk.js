(this["webpackJsonpshopify-pre-order"]=this["webpackJsonpshopify-pre-order"]||[]).push([[1],{387:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return s}));var n=a(65),i=function(e){return e.profiles},r=Object(n.a)((function(e){return e.profiles.profilesById}),(function(e){return Object.values(e)})),l=Object(n.a)(i,(function(e){return e.profileModal})),c=Object(n.a)(i,(function(e){return e.loading})),o=Object(n.a)(i,(function(e){return e.selectedProfiles})),s=Object(n.a)(i,(function(e){return e.sort}))},389:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a(126),i=function(e){return e.title.includes("Default Title")},r=function(e,t){var a=n.a.getState().auth.headers["X-Shop-Domain"],i="https://".concat(a);if(t){var r=e,l=r.id,c=r.product_id;i+="/admin/products/".concat(c,"/variants/").concat(l)}else{var o=e.id;i+="/admin/products/".concat(o)}return i},l=function(e){var t="";return(e||0===e)&&(e=parseFloat(String(e)).toFixed(2),t="$".concat(e)),t}},393:function(e,t,a){"use strict";var n=a(99),i="products.settings.modal",r=Object(n.a)({saveAction:{id:"".concat(i,".action.save"),defaultMessage:"Save"},cancelAction:{id:"".concat(i,".action.cancel"),defaultMessage:"Cancel"},assignProfileLabel:{id:"".concat(i,".assignProfileLabel"),defaultMessage:"Profile:"},nameLabel:{id:"".concat(i,".name.label"),defaultMessage:"Profile Name:"},applySettingsProductWarning:{id:"".concat(i,".applySettingsProductWarning"),defaultMessage:"The product (all its variants) will receive the following settings:"},applySettingsVariantWarning:{id:"".concat(i,".applySettingsVariantWarning"),defaultMessage:"The variant will receive the following settings:"},buttonTextLabel:{id:"".concat(i,".button.TextLabel"),defaultMessage:"Button Text:"},buttonMessageLabel:{id:"".concat(i,".button.MessageLabel"),defaultMessage:"Button Message:"},priceSettingsLabel:{id:"".concat(i,".PriceSettingsLabel"),defaultMessage:"Price settings:"},priceSettingsKeepSameLabel:{id:"".concat(i,".PriceSettingsKeepSameLabel"),defaultMessage:"Keep same"},priceSettingsIncreaseLabel:{id:"".concat(i,".PriceSettingsIncreaseLabel"),defaultMessage:"Increase"},priceSettingsDecreaseLabel:{id:"".concat(i,".PriceSettingsDecreaseLabel"),defaultMessage:"Decrease"},shopifyProductPriceLabel:{id:"".concat(i,".shopifyProductPriceLabel"),defaultMessage:"Original product price:"},shopifyVariantPriceLabel:{id:"".concat(i,".shopifyVariantPriceLabel"),defaultMessage:"Original variant price:"},preOrderPriceLabel:{id:"".concat(i,".preOrderPriceLabel"),defaultMessage:"Pre-order price:"},preorderLimitLabel:{id:"".concat(i,".PreorderLimitLabel"),defaultMessage:"Pre-order quantity limit:"},preorderNoLimitsLabel:{id:"".concat(i,".PreorderNoLimitsLabel"),defaultMessage:"No Limit"},activationDateLabel:{id:"".concat(i,".ActivationDateLabel"),defaultMessage:"Pre-order is active:"},activationDateActiveNowLabel:{id:"".concat(i,".ActivationDateActiveNowLabel"),defaultMessage:"Active now"},activationDateSetStartTimeLabel:{id:"".concat(i,".ActivationDateSetStartTimeLabel"),defaultMessage:"Set Future Start Time"},activationDateSetStartTimeStartDateLabel:{id:"".concat(i,".ActivationDateSetStartTimeStartDateLabel"),defaultMessage:"Start Date"},activationDateSetStartTimeEndDateLabel:{id:"".concat(i,".ActivationDateSetStartTimeEndDateLabel"),defaultMessage:"End Date"},availabilityDateLabel:{id:"".concat(i,".availabilityDateLabel"),defaultMessage:"Display Estimated Availability Date:"},availabilityDateAnytimeLabel:{id:"".concat(i,".availabilityDateAnytimeLabel"),defaultMessage:"Do not display"},availabilityDateCustomLabel:{id:"".concat(i,".availabilityDateCustomLabel"),defaultMessage:"Display:"}});t.a=r},398:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"d",(function(){return y})),a.d(t,"g",(function(){return E})),a.d(t,"b",(function(){return B})),a.d(t,"c",(function(){return G})),a.d(t,"e",(function(){return W})),a.d(t,"f",(function(){return K})),a.d(t,"h",(function(){return $}));var n=a(10),i=a(6),r=a(36),l=a(120),c=a(101),o=a(558),s=a(0),u=a.n(s),d=a(408),v=a(388),b=a.n(v),m={width:"min-content",padding:"1rem",height:"99%"};function f(e){var t=e.start,a=e.end;return{start:t,end:null!==a&&void 0!==a?a:t}}function p(e){return{month:e.getMonth(),year:e.getFullYear()}}var g,y,E,S=function(e){var t=e.onChange,a=e.disabled,i=e.disclosure,v=e.icon,g=e.label,y=e.disableDatesAfter,E=e.disableDatesBefore,S=e.start,_=e.end,O=e.allowRange,h=e.open,j=e.error,P=void 0===j?null:j,M=e.onOpenChange,D=Object(s.useCallback)((function(){M(!h)}),[h,M]),L=S,N=Object(s.useState)(p(null!==L&&void 0!==L?L:new Date)),C=Object(n.a)(N,2),A=C[0],x=A.month,w=A.year,k=C[1];Object(s.useEffect)((function(){k(p(null!==L&&void 0!==L?L:new Date))}),[L]);var T=Object(s.useState)(f({start:L,end:_})),I=Object(n.a)(T,2),F=I[0],V=I[1];Object(s.useEffect)((function(){V(f({start:L,end:_}))}),[L,_]);var B=Object(s.useCallback)((function(e,t){return k({month:e,year:t})}),[]),G=Object(s.useCallback)((function(e){V(e),t(e)}),[t]),W=u.a.createElement("span",{className:b()("DataPicker__Activator",{"DataPicker__Activator--error":P})},u.a.createElement(r.a,{onClick:D,disabled:a,disclosure:i,icon:v},L?Object(d.a)(L,"MMM d, Y"):"Select date..."));return u.a.createElement(l.a,{vertical:!0},u.a.createElement(l.a.Item,null,g),u.a.createElement(l.a.Item,null,u.a.createElement(c.a,{active:!a&&h,activator:W,onClose:D},u.a.createElement("div",{className:"DataPicker-Popover_Wrapper",style:m},u.a.createElement(o.a,{month:x,year:w,onChange:G,onMonthChange:B,selected:F.start&&F,disableDatesBefore:E,disableDatesAfter:y,allowRange:O})))))},_=a(55),O=a(562),h=a(563),j=a(541),P=a(84),M=a(542),D=a(20),L=a(366),N=a(548),C=a(393),A=a(545),x=a(411),w=a(438),k=a(437),T=a(436);!function(e){e.Now="now",e.Setted="setted"}(g||(g={})),function(e){e.NoDisplay="noDisplay",e.Display="display"}(y||(y={})),function(e){e.Amount="amount",e.Percent="percent",e.None="none"}(E||(E={}));var I=function(e,t){var a=Object(x.a)(null!==t&&void 0!==t?t:new Date);return(null!==e&&void 0!==e?e:a).getTime()<=a.getTime()?a:e},F=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(s.useCallback)((function(t){var a=/\d|,|\./;if(e&&(a=/\d/),!t.ctrlKey&&1===t.key.length&&!a.test(t.key))return t.preventDefault(),!1}),[])},V=function(e){return e.replace(/^0+/,"")},B=function(e){var t=e.fields,a=e.mode,i=e.setMode,r=(0,Object(_.d)().formatDictionary)(C.a),l=Object(s.useState)(),c=Object(n.a)(l,2),o=c[0],d=c[1],v=Object(s.useState)(),b=Object(n.a)(v,2),m=b[0],f=b[1],p=Object(s.useState)(!1),y=Object(n.a)(p,2),E=y[0],j=y[1],P=Object(s.useState)(!1),M=Object(n.a)(P,2),D=M[0],L=M[1],N=Object(A.a)(new Date,1),x=[t.start_date,t.end_date];Object(s.useEffect)((function(){var e,a=I(t.start_date.value);f(a);var n=t.end_date.value?I(t.end_date.value):void 0;(null===(e=n)||void 0===e?void 0:e.getTime())===(null===a||void 0===a?void 0:a.getTime())&&(n=void 0),d(n)}),[].concat(x));var w,k,T=Object(s.useCallback)((function(e){var a=e.start;t.start_date.onChange(a),f(a),j(!1)}),[t.start_date]),F=Object(s.useCallback)((function(e){var a=e.start;t.end_date.onChange(a),d(a),L(!1)}),[]);a===g.Setted?w=null===(k=t.start_date.allErrors)||void 0===k?void 0:k[0]:t.start_date.error="";var V=Object(s.useCallback)((function(e){var a=!e;return u.a.createElement(O.a.Group,null,u.a.createElement(S,{label:r.activationDateSetStartTimeStartDateLabel,start:t.start_date.value,disclosure:!0,disableDatesBefore:N,error:w,disableDatesAfter:o,disabled:a,open:E,onChange:T,onOpenChange:j}),u.a.createElement(S,Object.assign({label:r.activationDateSetStartTimeEndDateLabel,start:t.end_date.value,disclosure:!0,disableDatesBefore:m},t.end_date,{disabled:a,open:D,onChange:F,onOpenChange:L})))}),[t,E,D,w]),B=Object(s.useCallback)((function(e){var t=e[0];i(t)}),[i,x]);return u.a.createElement("div",null,u.a.createElement(h.a,{title:"",choices:[{label:r.activationDateActiveNowLabel,value:g.Now},{label:r.activationDateSetStartTimeLabel,value:g.Setted,renderChildren:V}],selected:[a],onChange:B}),w?u.a.createElement(q,{error:w}):null)},G=function(e){var t=e.fields,a=e.isStartDateEnabled,i=e.mode,r=e.setMode,l=(0,Object(_.d)().formatDictionary)(C.a),c=Object(s.useState)(!1),o=Object(n.a)(c,2),d=o[0],v=o[1],b=Object(s.useCallback)((function(e){var a=e.start;t.availability_date.onChange(a),v(!1)}),[]),m=I(t.availability_date.value,a?t.start_date.value:void 0),f=Object(T.a)();m&&Object(k.a)(Object(w.a)([m,f]),f)&&(m=f);var p=Object(s.useCallback)((function(e){var a=!e;return u.a.createElement(O.a.Group,null,u.a.createElement(S,{start:t.availability_date.value,disableDatesBefore:m,disclosure:!0,disabled:a,open:d,onChange:b,onOpenChange:v}))}),[t,d,m]);return u.a.createElement(h.a,{title:"",choices:[{label:l.availabilityDateAnytimeLabel,value:y.NoDisplay},{label:l.availabilityDateCustomLabel,value:y.Display,renderChildren:p}],selected:[i],onChange:function(e){return r(e[0])}})},W=function(e){var t=e.fields,a=e.mode,n=e.setMode,i=(0,Object(_.d)().formatDictionary)(C.a),r=Object(s.useCallback)((function(e){var a=t.inventory_limit;a.onChange(V(e)),a.runValidation()}),[t.inventory_limit]),l=F(!0),c=Object(s.useCallback)((function(e){var a=!e;return a&&(t.inventory_limit.error=""),u.a.createElement("div",{onKeyDown:l},u.a.createElement(j.a,Object.assign({disabled:a,label:"",min:"1",type:"number"},t.inventory_limit,{onChange:r})))}),[t.inventory_limit]);return u.a.createElement(h.a,{title:"",choices:[{label:i.preorderNoLimitsLabel,value:E.None},{label:"",value:E.Amount,renderChildren:c}],selected:[a],onChange:function(e){return n(e[0])}})},K=function(e){e.shopifyPrice;var t=e.fields,a=e.mode,n=e.setMode,l=(0,Object(_.d)().formatDictionary)(C.a),c=[t.price_change_value,t.price_increase,t.price_decrease],o=t.price_change_value;a===i.PriceSettingsMode.Increase&&(o=t.price_increase),a===i.PriceSettingsMode.Decrease&&(o=t.price_decrease);var d=Object(s.useCallback)((function(e){var t=V(e);o.onChange(t),o.runValidation(t)}),[o]);Object(s.useEffect)((function(){o.runValidation(o.value)}),[o.value,t.price_type.value]);var v,m,f,p,g=F(),y=Object(s.useCallback)((function(e,n){return function(l){var c=!l,o=t.price_type.value,s=t.price_change_value,v=function(e){return l?e.value:""},m=v(t.price_change_value);a===i.PriceSettingsMode.Increase&&(s=t.price_increase,m=v(t.price_increase)),a===i.PriceSettingsMode.Decrease&&(s=t.price_decrease,m=v(t.price_decrease)),c&&(s.error="");return u.a.createElement("div",{className:b()("priceSettings",{"priceSettings--error":!c&&Boolean(e)})},u.a.createElement(P.a,{segmented:!0},u.a.createElement("div",{onKeyDown:g},u.a.createElement(j.a,Object.assign({disabled:c,label:"",type:"number",min:"0",step:1},s,{error:"",onChange:d,onBlur:function(){return s.runValidation(m)},value:String(m)}))),n?u.a.createElement(r.a,{disabled:c},"$"):u.a.createElement(M.a,Object.assign({label:"",disabled:c,options:[{label:"$",value:E.Amount},{label:"%",value:E.Percent}]},t.price_type,{value:o}))))}}),[].concat(c,[t.price_type,a,d])),S=Object(s.useCallback)((function(e){c.forEach((function(e){return e.reset()})),n(e[0])}),[n]);a===i.PriceSettingsMode.Value&&(v=null===(m=t.price_change_value.allErrors)||void 0===m?void 0:m[0]);a===i.PriceSettingsMode.Increase&&(v=null===(f=t.price_increase.allErrors)||void 0===f?void 0:f[0]);a===i.PriceSettingsMode.Decrease&&(v=null===(p=t.price_decrease.allErrors)||void 0===p?void 0:p[0]);var O=function(e){var t;return null!==(t=v)&&void 0!==t?t:""};return u.a.createElement("div",null,u.a.createElement(h.a,{title:"",choices:[{label:l.priceSettingsKeepSameLabel,value:i.PriceSettingsMode.Same},{label:"",value:i.PriceSettingsMode.Value,renderChildren:y(O(t.price_change_value),!0)},{label:l.priceSettingsIncreaseLabel,value:i.PriceSettingsMode.Increase,renderChildren:y(O(t.price_increase))},{label:l.priceSettingsDecreaseLabel,value:i.PriceSettingsMode.Decrease,renderChildren:y(O(t.price_decrease))}],selected:[a],onChange:S}),v?u.a.createElement(q,{error:v}):null)},q=function(e){var t=e.error;return u.a.createElement("div",{className:"Polaris-Labelled__Error"},u.a.createElement("div",{className:"Polaris-InlineError"},u.a.createElement("div",{className:"Polaris-InlineError__Icon"},u.a.createElement(D.a,{source:L.a})),t))},$=u.a.memo((function(e){var t=e.title,a=e.withError;return u.a.createElement("span",{style:{display:"flex"}},t,a?u.a.createElement("span",{className:"Polaris-InlineError",style:{marginLeft:"0.5rem"}},u.a.createElement(D.a,{source:N.a})):null)}));u.a.memo((function(e){e.title,e.withError;return u.a.createElement("span",{style:{display:"flex"}},"xxx")}))},399:function(e,t,a){},409:function(e,t,a){"use strict";a.d(t,"a",(function(){return V}));var n=a(5),i=a(0),r=a.n(i),l=a(562),c=a(232),o=a(218),s=a(563),u=a(542),d=a(541),v=a(55),b=a(393),m=(a(399),a(398)),f=a(439),p=a.n(f),g=a(86),y=a(441),E=a(9),S=a(10),_=a(6),O=a(412),h=function(e,t,a){return Object(O.validator)((function(a){return Number(a)>=e&&Number(a)<=t}))(a)},j=a(387),P=a(29),M=a(408),D=a(410),L=function(e){switch(e){case 0:case null:case void 0:return m.g.None;default:return m.g.Amount}},N=function(e,t){return null===t&&null===e?_.PriceSettingsMode.Unstated:null===t||void 0===t||e===_.PriceSettingsMode.Same||""===e?_.PriceSettingsMode.Same:e===_.PriceType.SpecificValue?_.PriceSettingsMode.Value:1/Number(t)<0?_.PriceSettingsMode.Decrease:1/Number(t)>0?_.PriceSettingsMode.Increase:_.PriceSettingsMode.Same},C=function(e){switch(e){case"":case null:case void 0:return m.a.Now;default:return m.a.Setted}},A=function(e){switch(e){case"":case null:case void 0:return m.d.NoDisplay;default:return m.d.Display}};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object(O.useField)({value:e,validates:t},a)}var w=function(e){switch(e){case _.PriceType.SpecificValue:return _.PriceSettingsMode.Value;case _.PriceType.Amount:return m.g.Amount;case _.PriceType.Percent:return m.g.Percent;default:return m.g.Amount}},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=void 0;return e&&(n=Object(D.a)(e)),Object(O.useField)({value:n,validates:t},a)};function T(e,t){switch(e){case _.PriceSettingsMode.Increase:case _.PriceSettingsMode.Decrease:return t==m.g.Amount?_.PriceType.Amount:_.PriceType.Percent;case _.PriceSettingsMode.Value:return _.PriceType.SpecificValue;default:return _.PriceType.Same}}var I=function(e){return Object(M.a)(e,"yyyy-MM-dd")+"T00:00:00Z"},F=a(389);function V(e){var t=e.forSettings,a=e.forAppSettings,f=e.onChange,M=e.isVariant,D=e.preorderStatusFromList,V=(0,Object(v.d)().formatDictionary)(b.a),B=function(e){var t,a,n=e.settings,r=e.error,l=e.forSettings,c=e.forAppSettings,o=e.onSubmit,s=e.onChange,u=e.priceShopify,d=Object(i.useState)(n),v=Object(S.a)(d,2),b=v[0],f=v[1],M=Object(i.useState)(n),D=Object(S.a)(M,2),F=D[0],V=D[1],B=Object(i.useMemo)((function(){return{inventory:L(null===F||void 0===F?void 0:F.inventory_limit),price:N(null===F||void 0===F?void 0:F.price_type,null===F||void 0===F?void 0:F.price_change_value),activation:C(null===F||void 0===F?void 0:F.start_date),availability:A(null===F||void 0===F?void 0:F.availability_date)}}),[F]),G=Object(i.useState)(null),W=Object(S.a)(G,2),K=W[0],q=W[1];Object(i.useEffect)((function(){r&&"string"!==typeof r&&r.data?q(Object(E.a)({},r.data)):q(null)}),[r]);var $=Object(i.useState)(B.inventory),J=Object(S.a)($,2),R=J[0],Y=J[1],Q=Object(i.useState)("false"),U=Object(S.a)(Q,2),X=U[0],Z=U[1],z=Object(P.e)(j.c),H=Object(i.useState)(String(null===(t=z[0])||void 0===t?void 0:t.id)),ee=Object(S.a)(H,2),te=ee[0],ae=ee[1],ne=Object(i.useMemo)((function(){return z.map((function(e){var t;return{label:null!==(t=e.name)&&void 0!==t?t:"",value:String(e.id)}}))}),[z]),ie=Object(i.useState)(B.price),re=Object(S.a)(ie,2),le=re[0],ce=re[1],oe=Object(i.useState)(B.activation),se=Object(S.a)(oe,2),ue=se[0],de=se[1],ve=Object(i.useState)(B.availability),be=Object(S.a)(ve,2),me=be[0],fe=be[1],pe=(null===b||void 0===b?void 0:b.price)&&Math.abs(Number(b.price)),ge=null!==(a=(null===b||void 0===b?void 0:b.price_shopify)&&Math.abs(Number(b.price_shopify)))&&void 0!==a?a:u;Object(i.useEffect)((function(){ce(N(null===F||void 0===F?void 0:F.price_type,null===F||void 0===F?void 0:F.price_change_value)),Y(L(null===F||void 0===F?void 0:F.inventory_limit)),de(C(null===F||void 0===F?void 0:F.start_date)),fe(A(null===F||void 0===F?void 0:F.availability_date))}),[F]),Object(i.useEffect)((function(){V(b)}),[b]),Object(i.useEffect)((function(){var e;"undefined"===te&&ae(String(null===(e=z[0])||void 0===e?void 0:e.id))}),[z]),Object(i.useEffect)((function(){R!==m.g.Amount&&je.inventory_limit.reset()}),[R]);var ye=Object(O.positiveNumericString)("Must be a positive number"),Ee=Object(O.validator)((function(e){return ue===m.a.Now||Boolean(e)}),{skipOnEmpty:!1})("Start date is required"),Se=Object(O.validator)((function(e){var t=!1,a=Number(e);return je.price_type.value===m.g.Percent?a>100&&(t=!0):a>(null!==ge&&void 0!==ge?ge:1/0)&&(t=!0),!t}),{skipOnEmpty:!1})("you cannot reduce the price less than the original price"),_e=Object(i.useCallback)((function(e){var t;return Math.abs(+String(B.price===(null!==e&&void 0!==e?e:B.price)&&null!==(t=null===F||void 0===F?void 0:F.price_change_value)&&void 0!==t?t:0)).toString()}),[F]),Oe={name:x(null===F||void 0===F?void 0:F.name,[Object(O.notEmpty)("Profile Name is required"),Object(O.lengthMoreThan)(2,"Profile Name must be at least 3 characters")]),button_text:x(null===F||void 0===F?void 0:F.button_text,[Object(O.notEmpty)("Button Text is required")]),button_message:x(null===F||void 0===F?void 0:F.button_message,[Object(O.notEmpty)("Button Message is required")]),price_change_value:x(_e(),[ye]),price_increase:x(_e(_.PriceSettingsMode.Increase),[ye]),price_decrease:x(_e(_.PriceSettingsMode.Decrease),[ye,Se],[null===F||void 0===F?void 0:F.price_type,null===F||void 0===F?void 0:F.price_change_value,ge]),price_type:x(w(null===F||void 0===F?void 0:F.price_type)),inventory_limit:x((null===F||void 0===F?void 0:F.inventory_limit)?String(null===F||void 0===F?void 0:F.inventory_limit):"1",[h(1,999,"Set Quantity limit to any value between 1 and 999")]),start_date:k(null===F||void 0===F?void 0:F.start_date,[Ee],[ue]),end_date:k(null===F||void 0===F?void 0:F.end_date),availability_date:k(null===F||void 0===F?void 0:F.availability_date)};l?delete Oe.name:c?(delete Oe.name,delete Oe.start_date,delete Oe.end_date,delete Oe.availability_date):delete Oe.availability_date;var he=Object(O.useForm)({fields:Oe,onSubmit:function(e){return Object(y.a)(p.a.mark((function t(){var a,n,i,r,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Object(E.a)({},e),n=a.price_increase,i=a.price_decrease,(r=Object(g.a)(a,["price_increase","price_decrease"])).price_type=T(le,e.price_type),le===_.PriceSettingsMode.Increase&&(r.price_change_value=n),le===_.PriceSettingsMode.Decrease&&(r.price_change_value="-"+i),le===_.PriceSettingsMode.Same&&(r.price_change_value=""),R===m.g.None?r.inventory_limit="":void 0===e.inventory_limit&&(r.inventory_limit="0"),ue===m.a.Now?(r.start_date="",r.end_date=""):(r.start_date=e.start_date&&I(e.start_date),r.end_date=e.end_date&&I(e.end_date)),"availability_date"in r&&(me===m.d.NoDisplay?r.availability_date="":r.availability_date=e.availability_date&&I(e.availability_date)),s?s(r):o&&o(r),!((l=[]).length>0)){t.next=12;break}return t.abrupt("return",{status:"fail",errors:l});case 12:return t.abrupt("return",{status:"success"});case 13:case"end":return t.stop()}}),t)})))()}}),je=he.fields,Pe=he.submit,Me=he.reset,De=he.dirty,Le=Object(i.useCallback)((function(e){var t="true"===Object(S.a)(e,1)[0];Z(t?"true":"false");var a=F;if(t){var n=z.find((function(e){return String(e.id)===te}));n&&(a=n)}else a=b;V(a)}),[b,z,F]),Ne=Object(i.useCallback)((function(e){var t=z.find((function(t){return String(t.id)===e}));t&&(ae(e),V(t))}),[b,z,F]);if(De&&K)q(null);else if(K&&"string"!==typeof K){var Ce=K.errors;Ce&&(Object.keys(Ce).forEach((function(e){e in je&&(je[e].error=Ce[e][0])})),je.price_type.error="")}var Ae=Object(i.useCallback)((function(){Pe()}),[je]),xe=Object(O.reduceFields)(je,(function(e,t){var a;return Boolean(null===(a=t.allErrors)||void 0===a?void 0:a.length)||e}),!1);return{fields:je,setSettings:f,price:pe,shopifyPrice:ge,resetForm:function(){Me(),Y(B.inventory),ce(B.price),de(B.activation),Z("false")},handleOnSubmit:Ae,anyError:xe,applyProfile:X,handleApplyProfile:Le,profilesOptions:ne,handleSelectProfile:Ne,selectedProfile:te,priceMode:le,setPriceMode:ce,inventoryLimitMode:R,setInventoryLimitMode:Y,activationMode:ue,setActivationMode:de,availabilityMode:me,setAvailabilityMode:fe}}(e),G=B.fields,W=B.setSettings,K=B.price,q=B.shopifyPrice,$=B.resetForm,J=B.handleOnSubmit,R=B.anyError,Y=B.applyProfile,Q=B.handleApplyProfile,U=B.profilesOptions,X=B.handleSelectProfile,Z=B.selectedProfile,z=B.priceMode,H=B.setPriceMode,ee=B.inventoryLimitMode,te=B.setInventoryLimitMode,ae=B.activationMode,ne=B.setActivationMode,ie=B.availabilityMode,re=B.setAvailabilityMode;r.a.useEffect((function(){f&&J()}),[].concat(Object(n.a)(Object.values(G).map((function(e){return e.value}))),[z,ee,ae,ie]));var le=!D||D===_.PreorderStatus.Disabled,ce=r.a.useCallback((function(e){e.stopPropagation()}),[]),oe=r.a.createElement(l.a,null,r.a.createElement("div",{className:"form--modal",onTouchStart:ce},t?r.a.createElement("div",{className:"modalForm apllyProfile"},r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.assignProfileLabel))),r.a.createElement(s.a,{title:"",selected:[Y],onChange:Q,choices:[{label:"",value:"true",renderChildren:function(e){return r.a.createElement(u.a,{label:"",disabled:!e,options:U,onChange:X,value:Z})}},{label:"Set custom settings",value:"false"}]})),r.a.createElement("div",{className:"topWarning"},r.a.createElement(c.a,null,M?V.applySettingsVariantWarning:V.applySettingsProductWarning))):null,r.a.createElement("div",{className:"disableBox"},"false"===Y?null:r.a.createElement("div",{className:"disableBox__overlay"}),r.a.createElement("div",{className:"modalForm"},t||a?null:r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.nameLabel))),r.a.createElement("div",{className:"flex-top"},r.a.createElement(d.a,Object.assign({label:"",type:"text"},G.name)))),r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.buttonTextLabel))),r.a.createElement("div",{className:"flex-top"},r.a.createElement(d.a,Object.assign({label:"",type:"text"},G.button_text)))),r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.buttonMessageLabel))),r.a.createElement("div",{className:"flex-top"},r.a.createElement(d.a,Object.assign({label:"",type:"text"},G.button_message)))),t?r.a.createElement(r.a.Fragment,null,null==q?null:r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,M?V.shopifyVariantPriceLabel:V.shopifyProductPriceLabel))),r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,Object(F.a)(q))))),"true"===Y||le||null==K?null:r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.preOrderPriceLabel))),r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,Object(F.a)(K)))))):null,r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.priceSettingsLabel))),r.a.createElement(m.f,{shopifyPrice:q,fields:G,mode:z,setMode:H})),r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.preorderLimitLabel))),r.a.createElement(m.e,{fields:G,mode:ee,setMode:te}))),a?null:r.a.createElement("div",{className:"modalForm modalForm__Columned"},r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.activationDateLabel))),r.a.createElement(m.b,{fields:G,mode:ae,setMode:ne}))),!t||a?null:r.a.createElement("div",{className:"modalForm modalForm__Columned"},r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,V.availabilityDateLabel))),r.a.createElement(m.c,{fields:G,isStartDateEnabled:ae===m.a.Setted,mode:ie,setMode:re}))))));return{resetForm:$,handleOnSubmit:J,anyError:R,form:oe,setSettings:W}}}}]);
//# sourceMappingURL=1.67afb6b1.chunk.js.map