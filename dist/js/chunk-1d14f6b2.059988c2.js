(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d14f6b2"],{"568c":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-content-container"},["tabs"==e._mode?a("b-tabs",{staticStyle:{"margin-bottom":"3rem"}},[a("b-tab",{attrs:{title:"Preview",active:""}},[a("b-container",{staticClass:"preview-container mt-4",attrs:{fluid:""}},[e._t("default")],2)],1),a("b-tab",{attrs:{title:"Code"}},[e._t("code",[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{md:"12",xl:"10"}},[e.templateCode?a("code-container",{attrs:{lang:"html",label:e.templateLabel,code:e.templateCode}}):e._e()],1)],1),a("b-row",[a("b-col",{attrs:{md:"12",xl:"10"}},[a("code-container",{attrs:{lang:e.lang,code:e.code,label:e.codeLabel}})],1)],1)],1)])],2)],1):a("div",{staticClass:"side-by-side",staticStyle:{"margin-bottom":"3rem"}},[a("h3",[e._v("Preview:")]),a("div",{staticClass:"content"},[e._t("default")],2),a("hr",{staticClass:"mt-4 mb-4"}),a("h3",[e._v("Code:")]),e._t("code",[e.templateCode?a("code-container",{attrs:{lang:"html",label:e.templateLabel,code:e.templateCode}}):e._e(),a("code-container",{attrs:{lang:e.lang,code:e.code,label:e.codeLabel}})])],2),a("div",{staticClass:"view-footer"},[a("span",{staticClass:"fa-btn",attrs:{title:"switch view"},on:{click:e.changeView}},[a("font-awesome-icon",{attrs:{icon:e.icon,rotation:e.rotation||0}})],1)])],1)},c=[],l=a("5989"),o=a("b806"),i={name:"demo-content",mixins:[l["a"]],components:{CodeContainer:o["a"]},props:{mode:{type:String,default:"tabs"}},data:function(){return{_mode:null,icon:["far","list-alt"],rotation:0}},methods:{changeView:function(){this._mode="tabs"===this._mode?"side":"tabs",this.setIcon()},setIcon:function(){"tabs"==this._mode?(this.icon=["fas","columns"],this.rotation=270):(this.icon=["far","list-alt"],this.rotation=0)}},beforeMount:function(){this._mode=this.mode},mounted:function(){this.setIcon()},watch:{mode:function(e){this._mode=e}}},n=i,d=(a("deff"),a("2877")),r=Object(d["a"])(n,s,c,!1,null,null,null);t["a"]=r.exports},c83a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("demo-content",{attrs:{lang:"javascript",code:e.code,templateCode:e.tempCode}},[a("b-row",[a("b-col",{attrs:{md:"10",xl:"8"}},[a("b-button",{staticClass:"btn mt-1",on:{click:e.reset}},[e._v("Reset Content")]),a("div",{staticClass:"w-50 mt-4"},[a("div",{staticClass:"text-input-example"},[a("h5",[e._v("Simple Text Input")]),a("b-form-input",{staticClass:"mt-3 mb-3",attrs:{placeholder:"enter message here"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("div",[a("code",[e._v('message: "'+e._s(e.message)+'"')])])],1)]),a("div",{staticClass:"checkbox-boolean mt-5"},[a("h5",[e._v("Checkbox (Boolean)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,s=t.target,c=!!s.checked;if(Array.isArray(a)){var l=null,o=e._i(a,l);s.checked?o<0&&(e.checked=a.concat([l])):o>-1&&(e.checked=a.slice(0,o).concat(a.slice(o+1)))}else e.checked=c}}}),a("label",{staticClass:"ml-3",attrs:{for:"checkbox"}},[a("code",[e._v("checked: "+e._s(e.checked))])])]),a("div",{staticClass:"checkbox-multiple mt-5"},[a("h5",[e._v("Checkbox (Multiple)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedNames,expression:"selectedNames"}],attrs:{type:"checkbox",id:"jack",value:"Jack"},domProps:{checked:Array.isArray(e.selectedNames)?e._i(e.selectedNames,"Jack")>-1:e.selectedNames},on:{change:function(t){var a=e.selectedNames,s=t.target,c=!!s.checked;if(Array.isArray(a)){var l="Jack",o=e._i(a,l);s.checked?o<0&&(e.selectedNames=a.concat([l])):o>-1&&(e.selectedNames=a.slice(0,o).concat(a.slice(o+1)))}else e.selectedNames=c}}}),a("label",{staticClass:"ml-2",attrs:{for:"jack"}},[e._v("Jack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedNames,expression:"selectedNames"}],staticClass:"ml-3",attrs:{type:"checkbox",id:"john",value:"John"},domProps:{checked:Array.isArray(e.selectedNames)?e._i(e.selectedNames,"John")>-1:e.selectedNames},on:{change:function(t){var a=e.selectedNames,s=t.target,c=!!s.checked;if(Array.isArray(a)){var l="John",o=e._i(a,l);s.checked?o<0&&(e.selectedNames=a.concat([l])):o>-1&&(e.selectedNames=a.slice(0,o).concat(a.slice(o+1)))}else e.selectedNames=c}}}),a("label",{staticClass:"ml-2",attrs:{for:"john"}},[e._v("John")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedNames,expression:"selectedNames"}],staticClass:"ml-3",attrs:{type:"checkbox",id:"mike",value:"Mike"},domProps:{checked:Array.isArray(e.selectedNames)?e._i(e.selectedNames,"Mike")>-1:e.selectedNames},on:{change:function(t){var a=e.selectedNames,s=t.target,c=!!s.checked;if(Array.isArray(a)){var l="Mike",o=e._i(a,l);s.checked?o<0&&(e.selectedNames=a.concat([l])):o>-1&&(e.selectedNames=a.slice(0,o).concat(a.slice(o+1)))}else e.selectedNames=c}}}),a("label",{staticClass:"ml-2",attrs:{for:"mike"}},[e._v("Mike")]),a("p",[a("code",[e._v("selectedNames: "+e._s(e.selectedNames))])])]),a("div",{staticClass:"select-example-single mt-5"},[a("h5",[e._v("Select (Single)")]),a("label",{attrs:{for:"selectSingle"}},[e._v("Choose a name:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedName,expression:"selectedName"}],staticStyle:{width:"200px","margin-left":"1rem"},attrs:{id:"selectSingle"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedName=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("choose name")]),a("option",{attrs:{value:"Jack"}},[e._v("Jack")]),a("option",{attrs:{value:"John"}},[e._v("John")]),a("option",{attrs:{value:"Mike"}},[e._v("Mike")])]),a("p",[a("code",[e._v('selectedName: "'+e._s(e.selectedName)+'"')])])]),a("div",{staticClass:"select-example-multiple mt-5"},[a("h5",[e._v("Select (Multiple)")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedNames,expression:"selectedNames"}],staticStyle:{width:"200px"},attrs:{id:"selectMultiple",multiple:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedNames=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("choose name(s)")]),a("option",{attrs:{value:"Jack"}},[e._v("Jack")]),a("option",{attrs:{value:"John"}},[e._v("John")]),a("option",{attrs:{value:"Mike"}},[e._v("Mike")])]),a("p",[a("code",[e._v("selectedNames: "+e._s(e.selectedNames))])])]),a("div",{staticClass:"radio-example mt-5"},[a("h5",[e._v("Radio Example")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedName,expression:"selectedName"}],attrs:{type:"radio",id:"jack",value:"Jack"},domProps:{checked:e._q(e.selectedName,"Jack")},on:{change:function(t){e.selectedName="Jack"}}}),a("label",{staticClass:"ml-2",attrs:{for:"jack"}},[e._v("Jack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedName,expression:"selectedName"}],staticClass:"ml-3",attrs:{type:"radio",id:"john",value:"John"},domProps:{checked:e._q(e.selectedName,"John")},on:{change:function(t){e.selectedName="John"}}}),a("label",{staticClass:"ml-2",attrs:{for:"John"}},[e._v("John")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedName,expression:"selectedName"}],staticClass:"ml-3",attrs:{type:"radio",id:"mike",value:"Mike"},domProps:{checked:e._q(e.selectedName,"Mike")},on:{change:function(t){e.selectedName="Mike"}}}),a("label",{staticClass:"ml-2",attrs:{for:"mike"}},[e._v("Mike")]),a("p",[a("code",[e._v('selectedName: "'+e._s(e.selectedName)+'"')])])])],1)],1)],1)},c=[],l=a("568c"),o=a("472e"),i={name:"getting-started",components:{DemoContent:l["a"]},data:function(){return{message:"",checked:!1,selectedName:null,selectedNames:[],code:o["k"],tempCode:o["l"]}},methods:{reset:function(){this.message="",this.checked=!1,this.selectedName=null,this.selectedNames=[]}},mounted:function(){}},n=i,d=a("2877"),r=Object(d["a"])(n,s,c,!1,null,null,null);t["default"]=r.exports},deff:function(e,t,a){"use strict";var s=a("ff72"),c=a.n(s);c.a},ff72:function(e,t,a){}}]);