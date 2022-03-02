(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{365:function(e,t,a){"use strict";a.r(t);var r=a(32),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"firewall-and-proxy-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-and-proxy-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Firewall and Proxy Settings")]),e._v(" "),a("h2",{attrs:{id:"patching-servers-through-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patching-servers-through-firewall","aria-hidden":"true"}},[e._v("#")]),e._v(" Patching servers through firewall")]),e._v(" "),a("p",[e._v("As long as your servers have access to the Internet, even behind NAT —  you will be able to use KernelCare patch server without any problems.")]),e._v(" "),a("p",[e._v("Generally, KernelCare requires connection to only two servers for a proper work:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cln.cloudlinux.com\npatches.kernelcare.com\n")])])]),a("p",[e._v("An additional address is used for KernelCare agent installation/update:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("repo.cloudlinux.com\n")])])]),a("p",[a("img",{attrs:{src:"/images/patchingthroughfirewall.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"patching-servers-through-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patching-servers-through-proxy","aria-hidden":"true"}},[e._v("#")]),e._v(" Patching servers through proxy")]),e._v(" "),a("p",[e._v("If your servers don't have direct Internet access but can gain access to the Internet using proxy, the configuration is not that different. KernelCare can pick up standard environment variables for a proxy.")]),e._v(" "),a("p",[e._v("Make sure you have environment settings for proxy setup, and everything else will be the same as if servers were directly connected to the Internet:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# export http_proxy=http://proxy.domain.com:port\n# export https_proxy=http://proxy.domain.com:port\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("Settings defined by "),a("code",[e._v("export")]),e._v(" are case-insensitive, so the example above could be as follows:")])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# export HTTP_PROXY=http://proxy.domain.com:port\n# export HTTPS_PROXY=http://proxy.domain.com:port\n")])])]),a("p",[e._v("You can define these settings in the KernelCare config "),a("code",[e._v("/etc/sysconfig/kcare/kcare.conf")]),e._v(".")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cat /etc/sysconfig/kcare/kcare.conf\nAUTO_UPDATE=True\nHTTPS_PROXY=http://myproxy.com:59794\n")])])]),a("p",[e._v("If you define these settings in the config, you don't need to export them each "),a("code",[e._v("kcarectl")]),e._v(" launch and don't need to edit cron jobs.")]),e._v(" "),a("p",[e._v("All "),a("code",[e._v("kcarectl")]),e._v(" launches will be aware of proxy settings from the config. In this case, you need to set proxy settings only once.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/patchingthroughproxy.png",alt:""}})])])},[],!1,null,null,null);t.default=s.exports}}]);