(this["webpackJsonpshopify-pre-order"]=this["webpackJsonpshopify-pre-order"]||[]).push([[1],{395:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return s}));var n=a(56),i=function(e){return e.profiles},r=Object(n.a)((function(e){return e.profiles.profilesById}),(function(e){return Object.values(e)})),l=Object(n.a)(i,(function(e){return e.profileModal})),c=Object(n.a)(i,(function(e){return e.loading})),o=Object(n.a)(i,(function(e){return e.selectedProfiles})),s=Object(n.a)(i,(function(e){return e.sort}))},397:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a(129),i=function(e){return e.title.includes("Default Title")},r=function(e,t){var a=n.a.getState().auth.headers["X-Shop-Domain"],i="https://".concat(a);if(t){var r=e,l=r.id,c=r.product_id;i+="/admin/products/".concat(c,"/variants/").concat(l)}else{var o=e.id;i+="/admin/products/".concat(o)}return i},l=function(e){var t="";return(e||0===e)&&(e=parseFloat(String(e)).toFixed(2),t="$".concat(e)),t}},401:function(e,t,a){"use strict";var n=a(104),i="products.settings.modal",r=Object(n.a)({saveAction:{id:"".concat(i,".action.save"),defaultMessage:"Save"},cancelAction:{id:"".concat(i,".action.cancel"),defaultMessage:"Cancel"},assignProfileLabel:{id:"".concat(i,".assignProfileLabel"),defaultMessage:"Profile:"},nameLabel:{id:"".concat(i,".name.label"),defaultMessage:"Profile Name:"},applySettingsProductWarning:{id:"".concat(i,".applySettingsProductWarning"),defaultMessage:"The product (all its variants) will receive the following settings:"},applySettingsVariantWarning:{id:"".concat(i,".applySettingsVariantWarning"),defaultMessage:"The variant will receive the following settings:"},buttonTextLabel:{id:"".concat(i,".button.TextLabel"),defaultMessage:"Button Text:"},buttonMessageLabel:{id:"".concat(i,".button.MessageLabel"),defaultMessage:"Button Message:"},priceSettingsLabel:{id:"".concat(i,".PriceSettingsLabel"),defaultMessage:"Price settings:"},priceSettingsKeepSameLabel:{id:"".concat(i,".PriceSettingsKeepSameLabel"),defaultMessage:"Keep same"},priceSettingsIncreaseLabel:{id:"".concat(i,".PriceSettingsIncreaseLabel"),defaultMessage:"Increase"},priceSettingsDecreaseLabel:{id:"".concat(i,".PriceSettingsDecreaseLabel"),defaultMessage:"Decrease"},shopifyProductPriceLabel:{id:"".concat(i,".shopifyProductPriceLabel"),defaultMessage:"Original product price:"},shopifyVariantPriceLabel:{id:"".concat(i,".shopifyVariantPriceLabel"),defaultMessage:"Original variant price:"},preOrderPriceLabel:{id:"".concat(i,".preOrderPriceLabel"),defaultMessage:"Pre-order price:"},preorderLimitLabel:{id:"".concat(i,".PreorderLimitLabel"),defaultMessage:"Pre-order quantity limit:"},preorderNoLimitsLabel:{id:"".concat(i,".PreorderNoLimitsLabel"),defaultMessage:"No Limit"},activationDateLabel:{id:"".concat(i,".ActivationDateLabel"),defaultMessage:"Pre-order is active:"},activationDateActiveNowLabel:{id:"".concat(i,".ActivationDateActiveNowLabel"),defaultMessage:"Active now"},activationDateSetStartTimeLabel:{id:"".concat(i,".ActivationDateSetStartTimeLabel"),defaultMessage:"Set Future Start Time"},activationDateSetStartTimeStartDateLabel:{id:"".concat(i,".ActivationDateSetStartTimeStartDateLabel"),defaultMessage:"Start Date"},activationDateSetStartTimeEndDateLabel:{id:"".concat(i,".ActivationDateSetStartTimeEndDateLabel"),defaultMessage:"End Date"},availabilityDateLabel:{id:"".concat(i,".availabilityDateLabel"),defaultMessage:"Display Estimated Availability Date:"},availabilityDateAnytimeLabel:{id:"".concat(i,".availabilityDateAnytimeLabel"),defaultMessage:"Do not display"},availabilityDateCustomLabel:{id:"".concat(i,".availabilityDateCustomLabel"),defaultMessage:"Display:"}});t.a=r},406:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"d",(function(){return y})),a.d(t,"g",(function(){return E})),a.d(t,"b",(function(){return B})),a.d(t,"c",(function(){return G})),a.d(t,"e",(function(){return W})),a.d(t,"f",(function(){return K})),a.d(t,"h",(function(){return $}));var n=a(11),i=a(6),r=a(39),l=a(123),c=a(106),o=a(571),s=a(0),u=a.n(s),d=a(416),v=a(396),b=a.n(v),m={width:"min-content",padding:"1rem",height:"99%"};function f(e){var t=e.start,a=e.end;return{start:t,end:null!==a&&void 0!==a?a:t}}function p(e){return{month:e.getMonth(),year:e.getFullYear()}}var g,y,E,_=function(e){var t=e.onChange,a=e.disabled,i=e.disclosure,v=e.icon,g=e.label,y=e.disableDatesAfter,E=e.disableDatesBefore,_=e.start,S=e.end,O=e.allowRange,h=e.open,j=e.error,P=void 0===j?null:j,M=e.onOpenChange,D=Object(s.useCallback)((function(){M(!h)}),[h,M]),L=_,N=Object(s.useState)(p(null!==L&&void 0!==L?L:new Date)),C=Object(n.a)(N,2),A=C[0],x=A.month,w=A.year,k=C[1];Object(s.useEffect)((function(){k(p(null!==L&&void 0!==L?L:new Date))}),[L]);var T=Object(s.useState)(f({start:L,end:S})),I=Object(n.a)(T,2),F=I[0],V=I[1];Object(s.useEffect)((function(){V(f({start:L,end:S}))}),[L,S]);var B=Object(s.useCallback)((function(e,t){return k({month:e,year:t})}),[]),G=Object(s.useCallback)((function(e){V(e),t(e)}),[t]),W=u.a.createElement("span",{className:b()("DataPicker__Activator",{"DataPicker__Activator--error":P})},u.a.createElement(r.a,{onClick:D,disabled:a,disclosure:i,icon:v},L?Object(d.a)(L,"MMM d, Y"):"Select date..."));return u.a.createElement(l.a,{vertical:!0},u.a.createElement(l.a.Item,null,g),u.a.createElement(l.a.Item,null,u.a.createElement(c.a,{active:!a&&h,activator:W,onClose:D},u.a.createElement("div",{className:"DataPicker-Popover_Wrapper",style:m},u.a.createElement(o.a,{month:x,year:w,onChange:G,onMonthChange:B,selected:F.start&&F,disableDatesBefore:E,disableDatesAfter:y,allowRange:O})))))},S=a(58),O=a(575),h=a(576),j=a(553),P=a(87),M=a(554),D=a(20),L=a(374),N=a(560),C=a(401),A=a(557),x=a(419),w=a(446),k=a(445),T=a(444);!function(e){e.Now="now",e.Setted="setted"}(g||(g={})),function(e){e.NoDisplay="noDisplay",e.Display="display"}(y||(y={})),function(e){e.Amount="amount",e.Percent="percent",e.None="none"}(E||(E={}));var I=function(e,t){var a=Object(x.a)(null!==t&&void 0!==t?t:new Date);return(null!==e&&void 0!==e?e:a).getTime()<=a.getTime()?a:e},F=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(s.useCallback)((function(t){var a=/\d|,|\./;if(e&&(a=/\d/),!t.ctrlKey&&1===t.key.length&&!a.test(t.key))return t.preventDefault(),!1}),[])},V=function(e){return e.replace(/^0+/,"")},B=function(e){var t=e.fields,a=e.mode,i=e.setMode,r=(0,Object(S.d)().formatDictionary)(C.a),l=Object(s.useState)(),c=Object(n.a)(l,2),o=c[0],d=c[1],v=Object(s.useState)(),b=Object(n.a)(v,2),m=b[0],f=b[1],p=Object(s.useState)(!1),y=Object(n.a)(p,2),E=y[0],j=y[1],P=Object(s.useState)(!1),M=Object(n.a)(P,2),D=M[0],L=M[1],N=Object(A.a)(new Date,1),x=[t.start_date,t.end_date];Object(s.useEffect)((function(){var e,a=I(t.start_date.value);f(a);var n=t.end_date.value?I(t.end_date.value):void 0;(null===(e=n)||void 0===e?void 0:e.getTime())===(null===a||void 0===a?void 0:a.getTime())&&(n=void 0),d(n)}),[].concat(x));var w,k,T=Object(s.useCallback)((function(e){var a=e.start;t.start_date.onChange(a),f(a),j(!1)}),[t.start_date]),F=Object(s.useCallback)((function(e){var a=e.start;t.end_date.onChange(a),d(a),L(!1)}),[]);a===g.Setted?w=null===(k=t.start_date.allErrors)||void 0===k?void 0:k[0]:t.start_date.error="";var V=Object(s.useCallback)((function(e){var a=!e;return u.a.createElement(O.a.Group,null,u.a.createElement(_,{label:r.activationDateSetStartTimeStartDateLabel,start:t.start_date.value,disclosure:!0,disableDatesBefore:N,error:w,disableDatesAfter:o,disabled:a,open:E,onChange:T,onOpenChange:j}),u.a.createElement(_,Object.assign({label:r.activationDateSetStartTimeEndDateLabel,start:t.end_date.value,disclosure:!0,disableDatesBefore:m},t.end_date,{disabled:a,open:D,onChange:F,onOpenChange:L})))}),[t,E,D,w]),B=Object(s.useCallback)((function(e){var t=e[0];i(t)}),[i,x]);return u.a.createElement("div",null,u.a.createElement(h.a,{title:"",choices:[{label:r.activationDateActiveNowLabel,value:g.Now},{label:r.activationDateSetStartTimeLabel,value:g.Setted,renderChildren:V}],selected:[a],onChange:B}),w?u.a.createElement(q,{error:w}):null)},G=function(e){var t=e.fields,a=e.isStartDateEnabled,i=e.mode,r=e.setMode,l=(0,Object(S.d)().formatDictionary)(C.a),c=Object(s.useState)(!1),o=Object(n.a)(c,2),d=o[0],v=o[1],b=Object(s.useCallback)((function(e){var a=e.start;t.availability_date.onChange(a),v(!1)}),[]),m=I(t.availability_date.value,a?t.start_date.value:void 0),f=Object(T.a)();m&&Object(k.a)(Object(w.a)([m,f]),f)&&(m=f);var p=Object(s.useCallback)((function(e){var a=!e;return u.a.createElement(O.a.Group,null,u.a.createElement(_,{start:t.availability_date.value,disableDatesBefore:m,disclosure:!0,disabled:a,open:d,onChange:b,onOpenChange:v}))}),[t,d,m]);return u.a.createElement(h.a,{title:"",choices:[{label:l.availabilityDateAnytimeLabel,value:y.NoDisplay},{label:l.availabilityDateCustomLabel,value:y.Display,renderChildren:p}],selected:[i],onChange:function(e){return r(e[0])}})},W=function(e){var t,a,n=e.fields,i=e.mode,r=e.setMode,l=(0,Object(S.d)().formatDictionary)(C.a),c=Object(s.useCallback)((function(e){var t=n.inventory_limit;t.onChange(V(e)),t.runValidation()}),[n.inventory_limit]),o=F(!0),d=Object(s.useCallback)((function(e){var t=!e;return t&&(n.inventory_limit.error=""),u.a.createElement("div",{onKeyDown:o},u.a.createElement(j.a,Object.assign({disabled:t,label:"",min:"1",type:"number"},n.inventory_limit,{onChange:c})))}),[n.inventory_limit]);i===E.Amount&&(t=null===(a=n.inventory_limit.allErrors)||void 0===a?void 0:a[0]);return u.a.createElement("div",{className:"InventoryLimit-Selector"},u.a.createElement(h.a,{title:"",choices:[{label:l.preorderNoLimitsLabel,value:E.None},{label:"",value:E.Amount,renderChildren:d}],selected:[i],onChange:function(e){return r(e[0])}}),t?u.a.createElement(q,{error:t}):null)},K=function(e){e.shopifyPrice;var t=e.fields,a=e.mode,n=e.setMode,l=(0,Object(S.d)().formatDictionary)(C.a),c=[t.price_change_value,t.price_increase,t.price_decrease],o=t.price_change_value;a===i.PriceSettingsMode.Increase&&(o=t.price_increase),a===i.PriceSettingsMode.Decrease&&(o=t.price_decrease);var d=Object(s.useCallback)((function(e){var t=V(e);o.onChange(t),o.runValidation(t)}),[o]);Object(s.useEffect)((function(){o.runValidation(o.value)}),[o.value,t.price_type.value]);var v,m,f,p,g=F(),y=Object(s.useCallback)((function(e,n){return function(l){var c=!l,o=t.price_type.value,s=t.price_change_value,v=function(e){return l?e.value:""},m=v(t.price_change_value);a===i.PriceSettingsMode.Increase&&(s=t.price_increase,m=v(t.price_increase)),a===i.PriceSettingsMode.Decrease&&(s=t.price_decrease,m=v(t.price_decrease)),c&&(s.error="");return u.a.createElement("div",{className:b()("priceSettings",{"priceSettings--error":!c&&Boolean(e)})},u.a.createElement(P.a,{segmented:!0},u.a.createElement("div",{onKeyDown:g},u.a.createElement(j.a,Object.assign({disabled:c,label:"",type:"number",min:"0",step:1},s,{error:"",onChange:d,onBlur:function(){return s.runValidation(m)},value:String(m)}))),n?u.a.createElement(r.a,{disabled:c},"$"):u.a.createElement(M.a,Object.assign({label:"",disabled:c,options:[{label:"$",value:E.Amount},{label:"%",value:E.Percent}]},t.price_type,{value:o}))))}}),[].concat(c,[t.price_type,a,d])),_=Object(s.useCallback)((function(e){c.forEach((function(e){return e.reset()})),n(e[0])}),[n]);a===i.PriceSettingsMode.Value&&(v=null===(m=t.price_change_value.allErrors)||void 0===m?void 0:m[0]);a===i.PriceSettingsMode.Increase&&(v=null===(f=t.price_increase.allErrors)||void 0===f?void 0:f[0]);a===i.PriceSettingsMode.Decrease&&(v=null===(p=t.price_decrease.allErrors)||void 0===p?void 0:p[0]);var O=function(e){var t;return null!==(t=v)&&void 0!==t?t:""};return u.a.createElement("div",null,u.a.createElement(h.a,{title:"",choices:[{label:l.priceSettingsKeepSameLabel,value:i.PriceSettingsMode.Same},{label:"",value:i.PriceSettingsMode.Value,renderChildren:y(O(t.price_change_value),!0)},{label:l.priceSettingsIncreaseLabel,value:i.PriceSettingsMode.Increase,renderChildren:y(O(t.price_increase))},{label:l.priceSettingsDecreaseLabel,value:i.PriceSettingsMode.Decrease,renderChildren:y(O(t.price_decrease))}],selected:[a],onChange:_}),v?u.a.createElement(q,{error:v}):null)},q=function(e){var t=e.error;return u.a.createElement("div",{className:"Polaris-Labelled__Error"},u.a.createElement("div",{className:"Polaris-InlineError"},u.a.createElement("div",{className:"Polaris-InlineError__Icon"},u.a.createElement(D.a,{source:L.a})),t))},$=u.a.memo((function(e){var t=e.title,a=e.withError;return u.a.createElement("span",{style:{display:"flex"}},t,a?u.a.createElement("span",{className:"Polaris-InlineError",style:{marginLeft:"0.5rem"}},u.a.createElement(D.a,{source:N.a})):null)}));u.a.memo((function(e){e.title,e.withError;return u.a.createElement("span",{style:{display:"flex"}},"xxx")}))},407:function(e,t,a){},417:function(e,t,a){"use strict";a.d(t,"a",(function(){return V}));var n=a(5),i=a(0),r=a.n(i),l=a(575),c=a(237),o=a(223),s=a(576),u=a(554),d=a(553),v=a(58),b=a(401),m=(a(407),a(406)),f=a(447),p=a.n(f),g=a(89),y=a(449),E=a(8),_=a(11),S=a(6),O=a(420),h=function(e,t,a){return Object(O.validator)((function(a){return Number(a)>=e&&Number(a)<=t}))(a)},j=a(395),P=a(26),M=a(416),D=a(418),L=function(e){switch(e){case 0:case null:case void 0:return m.g.None;default:return m.g.Amount}},N=function(e,t){return null===t&&null===e?S.PriceSettingsMode.Unstated:null===t||void 0===t||e===S.PriceSettingsMode.Same||""===e?S.PriceSettingsMode.Same:e===S.PriceType.SpecificValue?S.PriceSettingsMode.Value:1/Number(t)<0?S.PriceSettingsMode.Decrease:1/Number(t)>0?S.PriceSettingsMode.Increase:S.PriceSettingsMode.Same},C=function(e){switch(e){case"":case null:case void 0:return m.a.Now;default:return m.a.Setted}},A=function(e){switch(e){case"":case null:case void 0:return m.d.NoDisplay;default:return m.d.Display}};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object(O.useField)({value:e,validates:t},a)}var w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=void 0;return e&&(n=Object(D.a)(e)),Object(O.useField)({value:n,validates:t},a)};function k(e,t){switch(e){case S.PriceSettingsMode.Increase:case S.PriceSettingsMode.Decrease:return t==m.g.Amount?S.PriceType.Amount:S.PriceType.Percent;case S.PriceSettingsMode.Value:return S.PriceType.SpecificValue;default:return S.PriceType.Same}}var T=function(e){return Object(M.a)(e,"yyyy-MM-dd")+"T00:00:00Z"},I=function(e){var t,a,n=e.settings,r=e.error,l=e.forSettings,c=e.forAppSettings,o=e.onSubmit,s=e.onChange,u=e.priceShopify,d=Object(i.useState)(n),v=Object(_.a)(d,2),b=v[0],f=v[1],M=Object(i.useState)(n),D=Object(_.a)(M,2),I=D[0],F=D[1],V=Object(i.useMemo)((function(){return{inventory:L(null===I||void 0===I?void 0:I.inventory_limit),price:N(null===I||void 0===I?void 0:I.price_type,null===I||void 0===I?void 0:I.price_change_value),activation:C(null===I||void 0===I?void 0:I.start_date),availability:A(null===I||void 0===I?void 0:I.availability_date)}}),[I]),B=Object(i.useState)(null),G=Object(_.a)(B,2),W=G[0],K=G[1];Object(i.useEffect)((function(){r&&"string"!==typeof r&&r.data?K(Object(E.a)({},r.data)):K(null)}),[r]);var q=Object(i.useState)(V.inventory),$=Object(_.a)(q,2),Y=$[0],Z=$[1],z=Object(i.useState)("false"),J=Object(_.a)(z,2),R=J[0],Q=J[1],U=Object(P.e)(j.c),X=Object(i.useState)(String(null===(t=U[0])||void 0===t?void 0:t.id)),H=Object(_.a)(X,2),ee=H[0],te=H[1],ae=Object(i.useMemo)((function(){return U.map((function(e){var t;return{label:null!==(t=e.name)&&void 0!==t?t:"",value:String(e.id)}}))}),[U]),ne=Object(i.useState)(V.price),ie=Object(_.a)(ne,2),re=ie[0],le=ie[1],ce=Object(i.useState)(V.activation),oe=Object(_.a)(ce,2),se=oe[0],ue=oe[1],de=Object(i.useState)(V.availability),ve=Object(_.a)(de,2),be=ve[0],me=ve[1],fe=(null===b||void 0===b?void 0:b.price)&&Math.abs(Number(b.price)),pe=null!==(a=(null===b||void 0===b?void 0:b.price_shopify)&&Math.abs(Number(b.price_shopify)))&&void 0!==a?a:u;Object(i.useEffect)((function(){le(N(null===I||void 0===I?void 0:I.price_type,null===I||void 0===I?void 0:I.price_change_value)),Z(L(null===I||void 0===I?void 0:I.inventory_limit)),ue(C(null===I||void 0===I?void 0:I.start_date)),me(A(null===I||void 0===I?void 0:I.availability_date))}),[I]),Object(i.useEffect)((function(){F(b)}),[b]),Object(i.useEffect)((function(){var e;"undefined"===ee&&te(String(null===(e=U[0])||void 0===e?void 0:e.id))}),[U]),Object(i.useEffect)((function(){Y!==m.g.Amount&&Pe.inventory_limit.reset()}),[Y]);var ge=Object(O.positiveNumericString)("Must be a positive number"),ye=function(e,t){return Object(O.validator)((function(t){return e.test(t)}),{skipOnEmpty:!1})(t)},Ee=Object(O.validator)((function(e){return se===m.a.Now||Boolean(e)}),{skipOnEmpty:!1})("Start date is required"),_e=Object(O.validator)((function(e){var t=!1,a=Number(e);return Pe.price_type.value===m.g.Percent?a>100&&(t=!0):a>(null!==pe&&void 0!==pe?pe:1/0)&&(t=!0),!t}),{skipOnEmpty:!1})("You cannot reduce the price less than the original price"),Se=Object(i.useCallback)((function(e){var t;return Math.abs(+String(V.price===(null!==e&&void 0!==e?e:V.price)&&null!==(t=null===I||void 0===I?void 0:I.price_change_value)&&void 0!==t?t:0)).toString()}),[I]),Oe=x(function(e){switch(e){case S.PriceType.SpecificValue:return S.PriceSettingsMode.Value;case S.PriceType.Amount:return m.g.Amount;case S.PriceType.Percent:return m.g.Percent;default:return m.g.Amount}}(null===I||void 0===I?void 0:I.price_type)),he={name:x(null===I||void 0===I?void 0:I.name,[Object(O.notEmpty)("Profile Name is required"),Object(O.lengthMoreThan)(2,"Profile Name must be at least 3 characters")]),button_text:x(null===I||void 0===I?void 0:I.button_text,[Object(O.notEmpty)("Button Text is required"),ye(/^[a-zA-Z0-9-\s]+$/,"Button Text should only be letters, numbers, hyphens or spaces.")]),button_message:x(null===I||void 0===I?void 0:I.button_message,[Object(O.notEmpty)("Button Message is required"),ye(/^[a-zA-Z0-9-\s]+$/,"Button Message should only be letters, numbers, hyphens or spaces.")]),price_change_value:x(Se(),[ge]),price_increase:x(Se(S.PriceSettingsMode.Increase),[ge]),price_decrease:x(Se(S.PriceSettingsMode.Decrease),[ge,_e],[Oe.value,pe]),price_type:Oe,inventory_limit:x((null===I||void 0===I?void 0:I.inventory_limit)?String(null===I||void 0===I?void 0:I.inventory_limit):"1",[h(1,999,"Set Quantity limit to any value between 1 and 999")]),start_date:w(null===I||void 0===I?void 0:I.start_date,[Ee],[se]),end_date:w(null===I||void 0===I?void 0:I.end_date),availability_date:w(null===I||void 0===I?void 0:I.availability_date)};l?delete he.name:c?(delete he.name,delete he.start_date,delete he.end_date,delete he.availability_date):delete he.availability_date;var je=Object(O.useForm)({fields:he,onSubmit:function(e){return Object(y.a)(p.a.mark((function t(){var a,n,i,r,l,c,u,d;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(E.a)({},e),l=r.price_increase,c=r.price_decrease,(u=Object(g.a)(r,["price_increase","price_decrease"])).price_type=k(re,e.price_type),re===S.PriceSettingsMode.Increase&&(u.price_change_value=l),re===S.PriceSettingsMode.Decrease&&(u.price_change_value="-"+c),re===S.PriceSettingsMode.Same&&(u.price_change_value=""),Y===m.g.None?u.inventory_limit="":void 0===e.inventory_limit&&(u.inventory_limit="0"),se===m.a.Now?(u.start_date="",u.end_date=""):(u.start_date=e.start_date&&T(e.start_date),u.end_date=e.end_date&&T(e.end_date)),"availability_date"in u&&(be===m.d.NoDisplay?u.availability_date="":u.availability_date=e.availability_date&&T(e.availability_date)),u.start_date=null!==(a=u.start_date)&&void 0!==a?a:"",u.end_date=null!==(n=u.end_date)&&void 0!==n?n:"",u.availability_date=null!==(i=u.availability_date)&&void 0!==i?i:"",s?s(u):o&&o(u),!((d=[]).length>0)){t.next=15;break}return t.abrupt("return",{status:"fail",errors:d});case 15:return t.abrupt("return",{status:"success"});case 16:case"end":return t.stop()}}),t)})))()}}),Pe=je.fields,Me=je.submit,De=je.reset,Le=je.dirty,Ne=Object(i.useCallback)((function(e){var t="true"===Object(_.a)(e,1)[0];Q(t?"true":"false");var a=I;if(t){var n=U.find((function(e){return String(e.id)===ee}));n&&(a=n)}else a=b;F(a)}),[b,U,I]),Ce=Object(i.useCallback)((function(e){var t=U.find((function(t){return String(t.id)===e}));t&&(te(e),F(t))}),[b,U,I]);if(Le&&W)K(null);else if(W&&"string"!==typeof W){var Ae=W.errors;Ae&&(Object.keys(Ae).forEach((function(e){e in Pe&&(Pe[e].error=Ae[e][0])})),Pe.price_type.error="")}var xe=Object(i.useCallback)((function(){Me()}),[Pe]),we=Object(O.reduceFields)(Pe,(function(e,t){var a;return Boolean(null===(a=t.allErrors)||void 0===a?void 0:a.length)||e}),!1);return{fields:Pe,setSettings:f,price:fe,shopifyPrice:pe,resetForm:function(){De(),Z(V.inventory),le(V.price),ue(V.activation),Q("false")},handleOnSubmit:xe,anyError:we,applyProfile:R,handleApplyProfile:Ne,profilesOptions:ae,handleSelectProfile:Ce,selectedProfile:ee,priceMode:re,setPriceMode:le,inventoryLimitMode:Y,setInventoryLimitMode:Z,activationMode:se,setActivationMode:ue,availabilityMode:be,setAvailabilityMode:me}},F=a(397);function V(e){var t=e.forSettings,a=e.forAppSettings,i=e.onChange,f=e.isVariant,p=e.preorderStatusFromList,g=(0,Object(v.d)().formatDictionary)(b.a),y=I(e),E=y.fields,_=y.setSettings,O=y.price,h=y.shopifyPrice,j=y.resetForm,P=y.handleOnSubmit,M=y.anyError,D=y.applyProfile,L=y.handleApplyProfile,N=y.profilesOptions,C=y.handleSelectProfile,A=y.selectedProfile,x=y.priceMode,w=y.setPriceMode,k=y.inventoryLimitMode,T=y.setInventoryLimitMode,V=y.activationMode,B=y.setActivationMode,G=y.availabilityMode,W=y.setAvailabilityMode;r.a.useEffect((function(){i&&P()}),[].concat(Object(n.a)(Object.values(E).map((function(e){return e.value}))),[x,k,V,G]));var K=!p||p===S.PreorderStatus.Disabled,q=r.a.useCallback((function(e){e.stopPropagation()}),[]),$=r.a.createElement(l.a,null,r.a.createElement("div",{className:"form--modal",onTouchStart:q},t?r.a.createElement("div",{className:"modalForm apllyProfile"},r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.assignProfileLabel))),r.a.createElement(s.a,{title:"",selected:[D],onChange:L,choices:[{label:"",value:"true",renderChildren:function(e){return r.a.createElement(u.a,{label:"",disabled:!e,options:N,onChange:C,value:A})}},{label:"Set custom settings",value:"false"}]})),r.a.createElement("div",{className:"topWarning"},r.a.createElement(c.a,null,f?g.applySettingsVariantWarning:g.applySettingsProductWarning))):null,r.a.createElement("div",{className:"disableBox"},"false"===D?null:r.a.createElement("div",{className:"disableBox__overlay"}),r.a.createElement("div",{className:"modalForm"},t||a?null:r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.nameLabel))),r.a.createElement("div",{className:"flex-top"},r.a.createElement(d.a,Object.assign({label:"",type:"text"},E.name)))),r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.buttonTextLabel))),r.a.createElement("div",{className:"flex-top"},r.a.createElement(d.a,Object.assign({label:"",type:"text"},E.button_text)))),r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.buttonMessageLabel))),r.a.createElement("div",{className:"flex-top"},r.a.createElement(d.a,Object.assign({label:"",type:"text"},E.button_message)))),t?r.a.createElement(r.a.Fragment,null,null==h?null:r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,f?g.shopifyVariantPriceLabel:g.shopifyProductPriceLabel))),r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,Object(F.a)(h))))),"true"===D||K||null==O?null:r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.preOrderPriceLabel))),r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,Object(F.a)(O)))))):null,r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.priceSettingsLabel))),r.a.createElement(m.f,{shopifyPrice:h,fields:E,mode:x,setMode:w})),r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.preorderLimitLabel))),r.a.createElement(m.e,{fields:E,mode:k,setMode:T}))),a?null:r.a.createElement("div",{className:"modalForm modalForm__Columned"},r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.activationDateLabel))),r.a.createElement(m.b,{fields:E,mode:V,setMode:B}))),!t||a?null:r.a.createElement("div",{className:"modalForm modalForm__Columned"},r.a.createElement(l.a.Group,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex-top"},r.a.createElement(o.a,null,g.availabilityDateLabel))),r.a.createElement(m.c,{fields:E,isStartDateEnabled:V===m.a.Setted,mode:G,setMode:W}))))));return{resetForm:j,handleOnSubmit:P,anyError:M,form:$,setSettings:_}}}}]);
//# sourceMappingURL=1.d14b676f.chunk.js.map