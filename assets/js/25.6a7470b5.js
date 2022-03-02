(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{390:function(e,t,o){"use strict";o.r(t);var r=o(32),a=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"config-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#config-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Config Options")]),e._v(" "),o("p",[e._v("kcarectl behavior can be configured using "),o("code",[e._v("/etc/sysconfig/kcare/kcare.conf")])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th"),e._v(" "),o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("AUTO_UPDATE=YES|NO")])]),e._v(" "),o("td",[o("code",[e._v("YES")]),e._v(" - enable auto-update; "),o("code",[e._v("NO")]),e._v(" - disable auto-update.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("chkconfig kcare off")])]),e._v(" "),o("td",[e._v("Disable auto-update after restart.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("PATCH_METHOD=normal|nofreeze|smart")])]),e._v(" "),o("td",[o("code",[e._v("Normal")]),e._v(" - (default) use freezer;"),o("br"),o("code",[e._v("Nofreeze")]),e._v(" - don't use freezer to freeze processes;"),o("br"),e._v(" "),o("code",[e._v("Smart")]),e._v(" - smart freezer freezes only threads that need to be frozen for patching [kernelcare 2.3+].")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("PATCH_SERVER")])]),e._v(" "),o("td",[e._v("Server to use to download patches.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("REGISTRATION_URL")])]),e._v(" "),o("td",[e._v("Licensing server.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("PREFIX=prefix")])]),e._v(" "),o("td",[e._v("Patch source prefix, used to test different builds, by downloading builds from a different location, based on prefix (v2.2+)")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("UPDATE_POLICY=REMOTE|LOCAL|LOCAL_FIRST [since 1.6]")])]),e._v(" "),o("td",[e._v("Depending on the policy, on server startup, use:"),o("br"),o("code",[e._v("REMOTE")]),e._v(" - (default) patches from patch server."),o("br"),o("code",[e._v("LOCAL")]),e._v(" - only locally cached patches, if none cached (caching is done automatically) - do nothing."),o("br"),o("code",[e._v("LOCAL_FIRST")]),e._v(" - see if locally cached patches exist, and load them. If not, try getting them from remote server.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("IGNORE_UNKNOWN_KERNEL=True|False")]),e._v(" "),o("code",[e._v("[since 2.5-4]")])]),e._v(" "),o("td",[e._v("Don't provide notification if unknown kernel on auto-update.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("LOAD_KCARE_SYSCTL [since 2.7-1]")])]),e._v(" "),o("td",[e._v("Controls if "),o("code",[e._v("/etc/sysconfig/kcare/sysctl.conf")]),e._v(" will be loaded on patchset load. True by default.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("--set-patch-type extra")])]),e._v(" "),o("td",[e._v("To enable extra patches.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("--set-patch-type free")])]),e._v(" "),o("td",[e._v("To enable free patches.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("STICKY_PATCH=KEY")])]),e._v(" "),o("td",[e._v("Retrieve sticky patch from "),o("code",[e._v("KEY")]),e._v(" (see CLN, Key Edit); not supported for IP based servers or ePortal.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("STICKY_PATCH=DDMMYY")])]),e._v(" "),o("td",[e._v("Stick patch to a particular date. More info at "),o("RouterLink",{attrs:{to:"/sticky-patches/"}},[e._v("Sticky Patches")]),e._v(" .")],1)]),e._v(" "),o("tr",[o("td",[o("code",[e._v("REPORT_FQDN=True|False")])]),e._v(" "),o("td",[e._v("Force using Fully Qualified Domain as a hostname. False by default.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("FORCE_GID=N")])]),e._v(" "),o("td",[e._v("Use this group ID for symlink protection patch. By default, it's 48 (default Apache user GID) or 99 ("),o("code",[e._v("nobody")]),e._v(" user)")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("USERSPACE_PATCHES=libs,qemu")])]),e._v(" "),o("td",[e._v("Define which userspace patches will be applyed by default")])])])])])},[],!1,null,null,null);t.default=a.exports}}]);