(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{393:function(t,e,a){"use strict";a.r(e);var s=a(32),o=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"disabling-some-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-some-patches","aria-hidden":"true"}},[t._v("#")]),t._v(" Disabling Some Patches")]),t._v(" "),a("p",[t._v("Some patches might affect the work of the system, and we created a way to disable them.")]),t._v(" "),a("p",[t._v("This is done via "),a("code",[t._v("sysctl")]),t._v(" command.")]),t._v(" "),a("p",[t._v("When new patchset loads, KernelCare sysctl options get reset. To prevent that we added a file:")]),t._v(" "),a("p",[a("code",[t._v("/etc/sysconfig/kcare/sysctl.conf")])]),t._v(" "),a("p",[t._v("Options in this file will be loaded automatically on new patchset load.")]),t._v(" "),a("p",[t._v("To disable loading this options, specify:")]),t._v(" "),a("p",[a("code",[t._v("LOAD_KCARE_SYSCTL=0")]),t._v(" in "),a("code",[t._v("/etc/sysconfig/kcare/kcare.conf")])]),t._v(" "),a("p",[t._v("To disable the patch, set the corresponding kcare option to "),a("code",[t._v("1")]),t._v(".")]),t._v(" "),a("p",[t._v("Patches that can be disabled:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Patch")]),t._v(" "),a("td",[a("em",[t._v("sysctl")]),t._v(" option")])]),t._v(" "),a("tr",[a("td",[t._v("CVE-2015-5157")]),t._v(" "),a("td",[t._v("kcare_modify_ldt")])])])])])},[],!1,null,null,null);e.default=o.exports}}]);