// var t = t || {};

// t.webpackChunkbabytracker_frontend = require("../../bundle.js"), (t.webpackChunkbabytracker_frontend = t.webpackChunkbabytracker_frontend || []).push([ [ 9221 ], {
//     19775: function(t, e, n) {
//         n.g.currentModuleId = "m8cab5c3a", n.g.currentCtor = Component, n.g.currentCtorType = "component", 
//         n.g.currentResourceType = "component", n.g.currentSrcMode = "wx", n(18078), n(10755), 
//         n(5658), n(69944);
//     },
//     18078: function() {
//         Component({
//             options: {
//                 multipleSlots: !0,
//                 addGlobalClass: !0
//             },
//             properties: {
//                 extClass: {
//                     type: String,
//                     value: ""
//                 },
//                 background: {
//                     type: String,
//                     value: "rgba(255, 255, 255, 1)",
//                     observer: "_showChange"
//                 },
//                 backgroundColorTop: {
//                     type: String,
//                     value: "rgba(255, 255, 255, 1)",
//                     observer: "_showChangeBackgroundColorTop"
//                 },
//                 color: {
//                     type: String,
//                     value: "rgba(0, 0, 0, 1)"
//                 },
//                 title: {
//                     type: String,
//                     value: ""
//                 },
//                 searchText: {
//                     type: String,
//                     value: "点我搜索"
//                 },
//                 searchBar: {
//                     type: Boolean,
//                     value: !1
//                 },
//                 back: {
//                     type: Boolean,
//                     value: !1
//                 },
//                 home: {
//                     type: Boolean,
//                     value: !1
//                 },
//                 iconTheme: {
//                     type: String,
//                     value: "black"
//                 },
//                 delta: {
//                     type: Number,
//                     value: 1
//                 }
//             },
//             created: function() {
//                 this.getSystemInfo();
//             },
//             attached: function() {
//                 this.setStyle();
//             },
//             data: {},
//             pageLifetimes: {
//                 show: function() {
//                     getApp().globalSystemInfo.ios && (this.getSystemInfo(), this.setStyle());
//                 },
//                 hide: function() {}
//             },
//             methods: {
//                 setStyle: function(t) {
//                     var e = getApp().globalSystemInfo, n = e.statusBarHeight, a = e.navBarHeight, o = e.capsulePosition, i = e.navBarExtendHeight, r = e.ios, s = e.windowWidth, h = this.data, g = h.back, c = h.home, u = h.title, l = s - o.right, d = s - o.left, p = [ "color: ".concat(this.data.color), "background: ".concat(this.data.background), "height:".concat(a + i, "px"), "padding-top:".concat(n, "px"), "padding-right:".concat(d, "px"), "padding-bottom:".concat(i, "px") ].join(";"), f = [];
//                     f = g && !c || !g && c ? [ "width:".concat(o.width, "px"), "height:".concat(o.height, "px") ].join(";") : g && c || u ? [ "width:".concat(o.width, "px"), "height:".concat(o.height, "px"), "margin-left:".concat(l, "px") ].join(";") : [ "width:auto", "margin-left:0px" ].join(";"), 
//                     "created" === t ? this.data = {
//                         navigationbarinnerStyle: p,
//                         navBarLeft: f,
//                         navBarHeight: a,
//                         capsulePosition: o,
//                         navBarExtendHeight: i,
//                         ios: r
//                     } : this.setData({
//                         navigationbarinnerStyle: p,
//                         navBarLeft: f,
//                         navBarHeight: a,
//                         capsulePosition: o,
//                         navBarExtendHeight: i,
//                         ios: r
//                     });
//                 },
//                 _showChange: function(t) {
//                     this.setStyle();
//                 },
//                 back: function() {
//                     this.triggerEvent("back", {
//                         delta: this.data.delta
//                     });
//                 },
//                 home: function() {
//                     this.triggerEvent("home", {});
//                 },
//                 search: function() {
//                     this.triggerEvent("search", {});
//                 },
//                 getSystemInfo: function() {
//                     var t = getApp();
//                     if (t.globalSystemInfo && !t.globalSystemInfo.ios) return t.globalSystemInfo;
//                     var e, n = wx.getSystemInfoSync(), a = !!(n.system.toLowerCase().search("ios") + 1);
//                     try {
//                         if (!(null !== (e = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null) && e.width && e.top && e.left && e.height)) throw "getMenuButtonBoundingClientRect error";
//                     } catch (r) {
//                         var o = "", i = 96;
//                         "android" === n.platform ? (o = 8, i = 96) : "devtools" === n.platform ? o = a ? 5.5 : 7.5 : (o = 4, 
//                         i = 88), n.statusBarHeight || (n.statusBarHeight = n.screenHeight - n.windowHeight - 20), 
//                         e = {
//                             bottom: n.statusBarHeight + o + 32,
//                             height: 32,
//                             left: n.windowWidth - i - 10,
//                             right: n.windowWidth - 10,
//                             top: n.statusBarHeight + o,
//                             width: i
//                         }, console.log("error", r), console.log("rect", e);
//                     }
//                     var r, s = "";
//                     return n.statusBarHeight ? (r = e.top - n.statusBarHeight, s = n.statusBarHeight + 2 * r + e.height, 
//                     n.navBarExtendHeight = a ? 4 : 0) : (n.statusBarHeight = n.screenHeight - n.windowHeight - 20, 
//                     s = 2 * (e.top - n.statusBarHeight) + e.height, n.statusBarHeight = 0, n.navBarExtendHeight = 0), 
//                     n.navBarHeight = s, n.capsulePosition = e, n.ios = a, t.globalSystemInfo = n, n;
//                 }
//             }
//         });
//     },
//     5658: function() {},
//     69944: function() {},
//     10755: function() {}
// }, function(t) {
//     var e;
//     e = 19775, t(t.s = e);
// } ]);