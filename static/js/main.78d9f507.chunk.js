(this.webpackJsonpmkmetalarchive=this.webpackJsonpmkmetalarchive||[]).push([[0],{100:function(e,n,t){e.exports=t(132)},105:function(e,n,t){},106:function(e,n,t){},132:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(25),c=t.n(l),u=(t(105),t(106),t(136)),o=t(166),i=t(137),s=t(8),m=t.n(s),p=t(13),d=t(22),f=t(35),y=t.n(f),b=function(e){return"/mkmetalarchive/data/"+e},h=function(){var e=Object(p.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(b("data.json")),e.next=3,y.a.get(b("data.json"));case 3:return n=e.sent.data,e.abrupt("return",x(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(m.a.mark((function e(n){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(b("data.json"));case 2:return t=e.sent.data,a=t.find((function(e){return e.id==n})),e.next=6,y.a.get(b(a.linkToData));case 6:return r=e.sent.data,e.abrupt("return",Promise.resolve(r));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(m.a.mark((function e(n){var t,a,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(b("data.json"));case 2:return t=e.sent.data,a=t.find((function(e){return e.id==n})),e.next=6,y.a.get(b(a.linkToData));case 6:return r=e.sent.data,e.next=9,x(r.albums);case 9:return l=e.sent,e.abrupt("return",Promise.resolve(l));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(m.a.mark((function e(n,t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n);case 2:return a=e.sent,r=a.find((function(e){return e.id==t})),e.abrupt("return",Promise.resolve(r));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark((function e(n){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],n.forEach((function(e){t.push(y.a.get(b(e.linkToData)).then((function(e){a.push(e.data)})))})),e.next=5,Promise.all(t);case 5:return e.abrupt("return",Promise.resolve(a));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=Object(d.b)({name:"band-store",initialState:{allBands:[],displayBands:[]},reducers:{setAllBands:function(e,n){e.allBands=n.payload},setDisplayBands:function(e,n){e.displayBands=n.payload}}}),w=P.actions,j=(w.setAllBands,w.setDisplayBands),O=t(20),k=t(151),N=t(152),B=t(153),I=t(154),S=t(155),A=t(156),C=function(e){return r.a.createElement(k.a,null,r.a.createElement(N.a,{size:"medium"},e.headers.length?r.a.createElement(B.a,null,r.a.createElement(I.a,null,e.headers.map((function(e){return r.a.createElement(S.a,{key:e.title},e.title)})))):null,r.a.createElement(A.a,null,e.data.map((function(n,t){return e.rowRenderer(n)})))))},D=t(160),R=t(161),T=t(12),F=t(33),H="/",M="/band/:bandName",J="/band/:bandName/album/:albumName",L=t(157),W=t(158),z=t(159),K=function(e){return r.a.createElement(L.a,{style:{margin:"10px",padding:"10px"}},e.logo?r.a.createElement(W.a,{style:{height:"200px"},image:e.logo}):null,r.a.createElement(z.a,null,e.bandName))},U=Object(O.c)((function(e){return{gridData:e.bandList.displayBands}}),(function(e){return{getAllBands:function(){e(function(){var e=Object(p.a)(m.a.mark((function e(n,t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:a=e.sent,n(j(a)),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())}}}))((function(e){return r.a.useEffect((function(){e.getAllBands()}),[]),r.a.createElement(D.a,{container:!0},e.gridData.map((function(e){var n=Object(T.d)(M,{bandName:e.id});return r.a.createElement(D.a,{key:e.id,item:!0,md:3,xs:6},r.a.createElement(R.a,{component:F.b,to:n},r.a.createElement(K,{bandName:e.name,logo:e.logo})))})))})),$=t(162),q=Object(d.b)({name:"album-page-store",initialState:{},reducers:{setAlbum:function(e,n){e.album=n.payload}}}),G=q.actions.setAlbum,Q=t(53),V=t.n(Q),X=t(56),Y=Object(d.b)({name:"player-store",initialState:{playlist:[],isPlaying:!1,currentPlayingIndex:0},reducers:{setPlaylist:function(e,n){e.playlist=n.payload},setIsPlaying:function(e,n){e.isPlaying=n.payload},setCurrentPlayingIndex:function(e,n){e.currentPlayingIndex=n.payload}}}),Z=Y.actions,_=Z.setPlaylist,ee=Z.setIsPlaying,ne=Z.setCurrentPlayingIndex,te=t(38),ae=t.n(te),re=Object(O.c)((function(e){return{album:e.albumPage.album}}),(function(e){return{init:function(n,t){e(function(e,n){return function(){var t=Object(p.a)(m.a.mark((function t(a,r){var l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e,n);case 2:l=t.sent,console.log(l),a(G(l));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n,t))},onSongPlay:function(n,t){e(function(e,n){return function(){var t=Object(p.a)(m.a.mark((function t(a,r){var l,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=e.indexOf(n),c=e.slice(l),a(_(c)),a(ne(0));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n,t))}}}))((function(e){r.a.useEffect((function(){e.init(e.match.params.bandName,e.match.params.albumName)}),[]);return e.album&&console.log("props",e.album),r.a.createElement(r.a.Fragment,null,e.album?r.a.createElement(o.a,null,r.a.createElement(i.a,null,e.album.name),r.a.createElement(C,{headers:[{title:"name"},{title:"length"},{title:""}],rowRenderer:function(n){return r.a.createElement(I.a,{key:n.id},r.a.createElement(S.a,null,n.name),r.a.createElement(S.a,null,ae.a.utc(1e3*n.lenght).format("mm:ss")),r.a.createElement(S.a,null,r.a.createElement($.a,{onClick:function(){e.onSongPlay(e.album.songs,n)}},r.a.createElement(V.a,null))))},data:e.album.songs})):null)})),le=Object(d.b)({name:"band-page-store",initialState:{albums:[]},reducers:{setBand:function(e,n){e.band=n.payload},setAlbums:function(e,n){e.albums=n.payload}}}),ce=le.actions,ue=ce.setBand,oe=ce.setAlbums,ie=Object(O.c)((function(e){return{band:e.bandPage.band,albums:e.bandPage.albums}}),(function(e){return{init:function(n){e(function(e){return function(){var n=Object(p.a)(m.a.mark((function n(t,a){var r,l;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e);case 2:return r=n.sent,n.next=5,x(r.albums);case 5:l=n.sent,t(ue(r)),t(oe(l));case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(n))}}}))((function(e){r.a.useEffect((function(){e.init(e.match.params.bandName)}),[]);return r.a.createElement(r.a.Fragment,null,e.band?r.a.createElement(o.a,null,r.a.createElement(i.a,null,e.band.name),r.a.createElement(C,{headers:[{title:"name"},{title:"year"},{title:"length"}],rowRenderer:function(n){var t=Object(T.d)(J,{bandName:e.match.params.bandName,albumName:n.id});return console.log(t),r.a.createElement(I.a,{key:n.id},r.a.createElement(S.a,null,r.a.createElement(R.a,{component:F.b,to:t},n.name)),r.a.createElement(S.a,null,n.year),r.a.createElement(S.a,null,ae.a.utc(1e3*n.length).format("mm:ss")))},data:e.albums})):null)})),se=t(167),me=t(168),pe=t(163),de=t(93),fe=(t(131),t(91)),ye=t.n(fe),be=Object(O.c)((function(e){var n=function(){if(0!=e.player.playlist.length)return 1==e.player.playlist.length?e.player.playlist[0]:e.player.playlist[e.player.currentPlayingIndex]},t=n();return console.log("CurentPlay: ",t),{currentPlay:n(),playlist:e.player.playlist,isPlaying:e.player.isPlaying,playingIndex:e.player.currentPlayingIndex}}),(function(e){return{setIsPlaying:function(n){e(ee(n))},onNext:function(){e(function(){var e=Object(p.a)(m.a.mark((function e(n,t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t().player.currentPlayingIndex+1,t().player.playlist.length>a&&(console.log(a),n(ne(a)));case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())},onPrevious:function(){e(function(){var e=Object(p.a)(m.a.mark((function e(n,t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=t().player.currentPlayingIndex-1)>=0&&n(ne(a));case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())},onSongPlaylistPlay:function(n){e(function(e){return function(){var n=Object(p.a)(m.a.mark((function n(t,a){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a().player.playlist.indexOf(e),t(ne(r));case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(n))}}}))((function(e){return r.a.createElement(r.a.Fragment,null,0!=e.playlist.length?r.a.createElement(u.a,{style:{position:"fixed",bottom:0,left:0,width:"100%",maxHeight:"100%",borderTop:"1px black"}},r.a.createElement(i.a,null,e.currentPlay?e.currentPlay.name:""),r.a.createElement(se.a,null,r.a.createElement(me.a,{expandIcon:e.playlist.length<=1?null:r.a.createElement(ye.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(de.a,{autoPlay:!0,src:e.currentPlay?e.currentPlay.playUrl:"",showSkipControls:e.playlist.length>1,onClickNext:e.onNext,onClickPrevious:e.onPrevious,onEnded:e.onNext,onPlay:function(e){return console.log("onPlay")}})),r.a.createElement(pe.a,{style:{maxHeight:"400px"}},r.a.createElement(o.a,{style:{overflow:"auto",width:"100%",maxHeight:"inherit"}},r.a.createElement(C,{data:e.playlist,headers:[],rowRenderer:function(n){return r.a.createElement(I.a,{selected:e.playlist.indexOf(n)==e.playingIndex},r.a.createElement(S.a,null,n.name),r.a.createElement(S.a,null,ae.a.utc(1e3*n.lenght).format("mm:ss")),r.a.createElement(S.a,null,r.a.createElement($.a,{onClick:function(){e.onSongPlaylistPlay(n)}},r.a.createElement(V.a,null))))}}))))):null)}));var he=function(){return r.a.createElement(F.a,null,r.a.createElement(u.a,null,r.a.createElement(o.a,{pb:"120px"},r.a.createElement(i.a,{align:"center",variant:"h2"},"MK Metal Archive"),r.a.createElement(T.a,{exact:!0,path:H,component:U}),r.a.createElement(T.a,{exact:!0,path:M,component:ie}),r.a.createElement(T.a,{exact:!0,path:J,component:re})),r.a.createElement(be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=t(17),Ee=t(94),ve=t(23),xe=t(77),Pe=t(55),we={bandList:P.reducer,bandPage:le.reducer,albumPage:q.reducer,player:Y.reducer};function je(e){return Object(ve.c)(Object(Ee.a)({},we,{router:Object(Pe.b)(e)}))}var Oe=function(e){var n=[].concat(Object(X.a)(Object(d.c)()),[Object(xe.a)(e)]);return Object(d.a)({reducer:je(e),middleware:n})},ke=t(164),Ne=t(92),Be=Object(Ne.a)({palette:{type:"dark"}}),Ie=Object(ge.a)({basename:window.location.host}),Se=Oe(Ie);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O.a,{store:Se},r.a.createElement(Pe.a,{history:Ie},r.a.createElement(ke.a,{theme:Be},r.a.createElement(he,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.78d9f507.chunk.js.map