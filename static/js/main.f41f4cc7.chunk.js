(this["webpackJsonppodcast-react-app"]=this["webpackJsonppodcast-react-app"]||[]).push([[0],{102:function(e,t,a){e.exports=a(161)},107:function(e,t,a){},109:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),i=a(184),l=(a(107),a(34)),s=a.n(l),d=a(54),u=a(55),m=a(56),p=a(64),f=a(63),h=(a(109),a(178)),E=a(91),g=a.n(E),v=a(181),y=a(182),F=a(175),b=a(176),x=function(e){var t=e.suggestion,a=e.onSuggestionClick;return r.a.createElement(F.a,{style:{width:"30vw"},onClick:function(){return a(t)}},r.a.createElement(b.a,{primary:t}))},C=a(177),S=a(179),T=a(180),k=a(65),N=a(79),j=a(95),O=a.n(j),w=function(e){var t=e.food,a=e.addFood,n=Object(C.a)({details:{width:"50%"},icon:{color:"green"}})();return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(S.a,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(T.a,{className:n.details},r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"}," ".concat(t.calories," calories"))),r.a.createElement(N.a,{"aria-label":"delete",onClick:function(){a(t)}},r.a.createElement(O.a,{className:n.icon}))))},q=function(e){var t=e.food,a=e.typing,n=e.addFood;return""===e.searchTerm?r.a.createElement("h2",null,"Type out a food item to add!"):void 0===t||a?null:t.length<1?r.a.createElement("h2",null,"Couldn't find a food item with that name"):r.a.createElement(h.a,{item:!0,container:!0,style:{justifyContent:"center",maxWidth:"750px"},spacing:1},r.a.createElement(w,{addFood:n,key:t.id,food:t}))},A=a(44),I=a.n(A),_=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchTerm:e,typing:""!==n.state.searchTerm}),n.autocompleteFood(e)},n.handleSubmit=function(){var e=n.state.searchTerm,t=n.props.onFormSubmit;n.setState({typing:!1}),t(e)},n.autocompleteFood=function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.length>0&&("a8ca87da","234285a1a06cedc063e96ce6c802fb9e",I.a.get("https://api.edamam.com/auto-complete?q=".concat(t,"&limit=5&app_id=").concat("a8ca87da","&app_key=").concat("234285a1a06cedc063e96ce6c802fb9e")).then((function(e){n.setState({suggestions:e.data})})).catch((function(e){console.log("autocorrect error")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onSuggestionClick=function(e){e=e.toString().replace(/[^a-zA-Z0-9]/g," "),n.setState({searchTerm:e,suggestions:[]});var t=n.props.onFormSubmit;n.setState({typing:!1}),t(e)},n.state={searchTerm:"",suggestions:[],typing:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.suggestions,n=t.searchTerm,o=t.typing,c=this.props,i=c.food,l=c.addFood,s=o?a.map((function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{suggestion:t,onSuggestionClick:e.onSuggestionClick}),n!==a.length-1&&r.a.createElement(v.a,null))})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{value:this.state.searchTerm,onChange:this.handleChange,onRequestSearch:this.handleSubmit,onCancelSearch:function(){e.setState({searchTerm:""})}}),r.a.createElement(y.a,null,s),r.a.createElement(q,{food:i,addFood:l,typing:o,searchTerm:n}))}}]),a}(r.a.Component),B=function(e){var t=e.addedFoods,a=0,n=0,o=0,c=0,i=0,l=0,s=0,d=0;return t.length>=1&&(a=t.reduce((function(e,t){return e+t.calories}),0),n=t.reduce((function(e,t){return e+("PROCNT"in t.totalNutrients?t.totalNutrients.PROCNT.quantity:0)}),0),o=t.reduce((function(e,t){return e+("CHOCDF"in t.totalNutrients?t.totalNutrients.CHOCDF.quantity:0)}),0),c=t.reduce((function(e,t){return e+("FAT"in t.totalNutrients?t.totalNutrients.FAT.quantity:0)}),0),i=t.reduce((function(e,t){return e+("FASAT"in t.totalNutrients?t.totalNutrients.FASAT.quantity:0)}),0),l=t.reduce((function(e,t){return e+("CHOLE"in t.totalNutrients?t.totalNutrients.CHOLE.quantity:0)}),0),s=t.reduce((function(e,t){return e+("NA"in t.totalNutrients?t.totalNutrients.NA.quantity:0)}),0),d=t.reduce((function(e,t){return e+("FIBTG"in t.totalNutrients?t.totalNutrients.FIBTG.quantity:0)}),0)),r.a.createElement(S.a,{style:{backgroundColor:"#DEFDE0"}},r.a.createElement(T.a,null,r.a.createElement(k.a,{variant:"h5",noWrap:!0},"Totals"),r.a.createElement(h.a,{container:!0,style:{justifyContent:"left"},spacing:2},r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Calories:"),r.a.createElement(k.a,{variant:"h5"},+a.toFixed(3))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Protein (g):"),r.a.createElement(k.a,{variant:"h5"},+n.toFixed(3))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Carbohydrates (g):"),r.a.createElement(k.a,{variant:"h5"},+o.toFixed(3))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Cholestrol (mg):"),r.a.createElement(k.a,{variant:"h5"},+l.toFixed(3))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Fats (g):"),r.a.createElement(k.a,{variant:"h5"},+c.toFixed(3))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Saturated Fats (g):"),r.a.createElement(k.a,{variant:"h5"},+i.toFixed(3))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Sodium (mg):"),r.a.createElement(k.a,{variant:"h5"},+s.toFixed(3))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(k.a,{variant:"subtitle1"},"Fibers (g):"),r.a.createElement(k.a,{variant:"h5"},+d.toFixed(3))))))},H=a(183),D=a(96),R=a.n(D),P=function(e){var t=e.food,a=(e.addFood,e.key),n=e.removeFood;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{style:{width:"30vw"}},r.a.createElement(b.a,{primary:t.name,secondary:"".concat(t.calories," calories")}),r.a.createElement(H.a,null,r.a.createElement(N.a,{edge:"end","aria-label":"delete",onClick:function(){n(a)}},r.a.createElement(R.a,{style:{color:"red"}})))))},Y=function(e){var t=e.addedFoods,a=e.removeFood;if(t.length<1)return r.a.createElement(S.a,{style:{height:"60vh"}},r.a.createElement(T.a,null,r.a.createElement(k.a,{variant:"h5"},"Your Foods"),r.a.createElement(h.a,{container:!0,style:{justifyContent:"center",marginTop:"30px"},spacing:3},r.a.createElement(k.a,{variant:"subtitle1",style:{color:"gray"}},"You have no added foods"),":")));var n=t.map((function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{key:n,food:e,removeFood:a}),n===t.length-1||r.a.createElement(v.a,null))}));return r.a.createElement(S.a,{style:{height:"60vh"}},r.a.createElement(T.a,null,r.a.createElement(k.a,{variant:"h5",style:{marginBottom:"10px"}},"Your Foods"),r.a.createElement(h.a,{container:!0,style:{justifyContent:"center",maxHeight:"50vh",overflow:"auto"},spacing:3},r.a.createElement(y.a,null,n))))},G=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).searchFood=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,r,o,c,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="a8ca87da",r="234285a1a06cedc063e96ce6c802fb9e",o="https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=".concat(t,"&app_id=").concat(a,"&app_key=").concat(r),e.next=5,I.a.get(o);case 5:if(c=e.sent,console.log(c.data),i=[],console.log(c.data),0===c.data.parsed.length){e.next=16;break}return e.next=12,I.a.post("https://api.edamam.com/api/food-database/v2/nutrients?app_id=".concat(a,"&app_key=").concat(r),{ingredients:[{quantity:1,measureURI:void 0===c.data.parsed[0].measure?"null":c.data.parsed[0].measure.uri,foodId:c.data.parsed[0].food.foodId}]});case 12:l=e.sent,(i=l.data).name=c.data.parsed[0].food.label,i.id=c.data.parsed[0].food.foodId;case 16:n.setState({food:i});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.addFood=function(e){var t=n.state.addedFoods;t.push(e),n.setState({addedFoods:t})},n.removeFood=function(e){var t=n.state.addedFoods;t.splice(e,1),n.setState({addedFoods:t})},n.state={food:void 0,addedFoods:[]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.food,a=e.addedFoods;return r.a.createElement(h.a,{style:{justifyContent:"center"},container:!0,spacing:0},r.a.createElement(h.a,{item:!0,xs:10},r.a.createElement(h.a,{item:!0,container:!0,spacing:3,style:{justifyContent:"center"}},r.a.createElement(h.a,{item:!0,xs:4,style:{marginTop:"10px"}},r.a.createElement(_,{onFormSubmit:this.searchFood,food:t,addFood:this.addFood})),r.a.createElement(h.a,{item:!0,xs:8,style:{marginTop:"10px"}},r.a.createElement(Y,{addedFoods:a,removeFood:this.removeFood})))),r.a.createElement("div",{style:{position:"fixed",bottom:"0"}},r.a.createElement(B,{style:{position:"fixed",bottom:"0"},addedFoods:a})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null),r.a.createElement(G,null)),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.f41f4cc7.chunk.js.map