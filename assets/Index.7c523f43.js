import{r as o,i as p,c as s,b as e,F as r,d as g,l as u,m as _,n as h,e as n,t as a,j as i}from"./index.f005a357.js";const b=e("h3",null,"\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC",-1),m={class:"overflow-auto"},y={class:"table"},k=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"ID"),e("th",{scope:"col"},"\u57DF\u540D"),e("th",{scope:"col"},"\u72B6\u6001"),e("th",{scope:"col"},"\u4FEE\u6539\u65F6\u95F4"),e("th",{scope:"col"},"\u521B\u5EFA\u65F6\u95F4"),e("th",{scope:"col"},"\u64CD\u4F5C")])],-1),v={key:0,class:"badge bg-success"},f={key:1,class:"badge bg-warning"},w={key:2,class:"badge bg-danger"},x={key:3,class:"badge bg-danger"},D={key:4,class:"badge bg-secondary"},B=i("\u67E5\u770B"),L={class:"btn-group",role:"group"},N=i("\u65B0\u5EFA"),F={__name:"Index",setup(S){const l=o([]);return o(""),o(""),p.get("/modules/cdn/hosts").then(c=>{l.value=c.data}),(c,V)=>{const d=h("router-link");return n(),s(r,null,[e("div",null,[b,e("div",m,[e("table",y,[k,e("tbody",null,[(n(!0),s(r,null,g(l.value,t=>(n(),s("tr",null,[e("td",null,a(t.host_id),1),e("td",null,a(t.name),1),e("td",null,[e("span",null,[t.status=="running"?(n(),s("span",v,"\u6B63\u5E38")):t.status=="pending"?(n(),s("span",f,"\u7B49\u5F85\u4E2D")):t.status=="deleting"?(n(),s("span",w,"\u5220\u9664\u4E2D")):t.status=="suspended"?(n(),s("span",x,"\u5DF2\u6682\u505C")):(n(),s("span",D,"\u672A\u77E5"))])]),e("td",null,a(new Date(t.updated_at).toLocaleString()),1),e("td",null,a(new Date(t.created_at).toLocaleString()),1),e("td",null,[u(d,{to:{name:"modules.cdn.show",params:{id:t.host_id}}},{default:_(()=>[B]),_:2},1032,["to"])])]))),256))])])])]),e("div",null,[e("div",L,[u(d,{type:"button",class:"btn btn-outline-primary",to:{name:"modules.cdn.create"}},{default:_(()=>[N]),_:1},8,["to"])])])],64)}}};export{F as default};
