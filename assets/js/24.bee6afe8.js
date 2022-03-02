(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{389:function(e,t,r){"use strict";r.r(t);var a=r(32),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"command-line-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#command-line-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Command Line Tools")]),e._v(" "),r("p",[r("code",[e._v("/usr/bin/kcarectl")]),e._v(" - Manage KernelCare patches for your kernel.")]),e._v(" "),r("p",[r("code",[e._v("/usr/bin/kcare-uname")]),e._v(" - Print certain system information.")]),e._v(" "),r("h2",{attrs:{id:"kcarectl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kcarectl","aria-hidden":"true"}},[e._v("#")]),e._v(" kcarectl")]),e._v(" "),r("p",[r("code",[e._v("/usr/bin/kcarectl")]),e._v(" - Manage KernelCare patches for your kernel.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th"),e._v(" "),r("th")])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("-i, --info")])]),e._v(" "),r("td",[e._v("Display information about patches installed by KernelCare.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-u, --update")])]),e._v(" "),r("td",[e._v("Download latest patches, and apply them to current kernel.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--smart-update [since 1.6]")])]),e._v(" "),r("td",[e._v("The same as --update, but uses "),r("RouterLink",{attrs:{to:"/config-options/"}},[e._v("UPDATE_POLICY")]),e._v(" to decide where to get patches.")],1)]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--unload")])]),e._v(" "),r("td",[e._v("Unload patches.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--auto-update")])]),e._v(" "),r("td",[e._v("Check if update is needed and update.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--patch-info")])]),e._v(" "),r("td",[e._v("Lists applied patches.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--force [since 2.3]")])]),e._v(" "),r("td",[e._v("When used with update, forces applying the patch even if unable to freeze some threads.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--uname")])]),e._v(" "),r("td",[e._v("Prints safe kernel version.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--license-info")])]),e._v(" "),r("td",[e._v("Output current license info.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--register KEY")])]),e._v(" "),r("td",[e._v("Register using KernelCare Key.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--register-autoretry [since 2.5]")])]),e._v(" "),r("td",[e._v("If registration fails retries registration indefinitely.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--unregister")])]),e._v(" "),r("td",[e._v("Unregister from KernelCare for Key based servers.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--userspace-update [PATCHES]")])]),e._v(" "),r("td",[e._v("Download latest patches and apply them to the corresponding userspace processes. Сan be set so that only certain types of patches are applied.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--test")])]),e._v(" "),r("td",[e._v("Try test builds instead of production builds (deprecated, use --prefix=test instead).")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--prefix")])]),e._v(" "),r("td",[e._v("Patch source prefix, used to test different builds, by downloading builds from a different location, based on prefix (v2.2+)")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--version")])]),e._v(" "),r("td",[e._v("Print KernelCare version.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--import-key PATH")])]),e._v(" "),r("td",[e._v("Import gpg key.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--set-monitoring-key")])]),e._v(" "),r("td",[e._v("Set monitoring key for IP based licenses. 16 to 32 characters, alphanumeric only [version 2.1+]")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--freezer [since 2.3]")])]),e._v(" "),r("td",[e._v("none: don't freeze any threads; full: freeze all threads; smart: freezes only threads that need to be frozen for patching. If option is not selected, best freezer method is chosen automatically.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--check [since 2.4-1]")])]),e._v(" "),r("td",[e._v("Check if new patchset is available, without updating. Exit code 0 means there is a new kernel. 1 when there is no new kernel.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--doctor [since 2.6]")])]),e._v(" "),r("td",[e._v("Send a report to CloudLinux support staff for diagnostics.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--set-patch-type extra")])]),e._v(" "),r("td",[e._v("To enable extra patches.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--set-patch-type free")])]),e._v(" "),r("td",[e._v("To enable free patches.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--set-sticky-patch SET_STICKY_PATCH")])]),e._v(" "),r("td",[e._v("Set patch to stick to date in format DDMMYY or retrieve it from KEY if set to KEY (no support for ePortal). Empty to unstick.   More info at "),r("RouterLink",{attrs:{to:"/sticky-patches/"}},[e._v("Sticky Patches")]),e._v(".")],1)]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--tag COMMAND")])]),e._v(" "),r("td",[e._v("Adds an extra "),r("em",[e._v("Tag")]),e._v(" field for a server. COMMAND is a user-defined parameter. More info at "),r("RouterLink",{attrs:{to:"/kernelcare-enterprise/#managing-servers"}},[e._v("Managing Servers")]),e._v(".")],1)])])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),r("p",[e._v("Currenlty available userspace patch types are "),r("code",[e._v("libs")]),e._v(" and "),r("code",[e._v("qemu")]),e._v(". To apply patches only for shared libraries, use "),r("code",[e._v("--userspace-update libs")]),e._v(".")])]),r("h2",{attrs:{id:"kcare-uname"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kcare-uname","aria-hidden":"true"}},[e._v("#")]),e._v(" kcare-uname")]),e._v(" "),r("p",[e._v("Print certain system information.  With no OPTION, same as "),r("code",[e._v("-s")]),e._v(".")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th"),e._v(" "),r("th")])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("-a, --all")])]),e._v(" "),r("td",[e._v("print all information in the following order, except omit "),r("code",[e._v("-p")]),e._v(" and "),r("code",[e._v("-i")]),e._v(" if unknown")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-s, --kernel-name")])]),e._v(" "),r("td",[e._v("print the kernel name")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-n, --nodename")])]),e._v(" "),r("td",[e._v("print the network node hostname")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-r, --kernel-release")])]),e._v(" "),r("td",[e._v("print the kernel release")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-v, --kernel-version")])]),e._v(" "),r("td",[e._v("print the kernel version")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-m, --machine")])]),e._v(" "),r("td",[e._v("print the machine hardware name")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-p, --processor")])]),e._v(" "),r("td",[e._v("print the processor type or "),r("code",[e._v("unknown")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-i, --hardware-platform")])]),e._v(" "),r("td",[e._v("print the hardware platform or "),r("code",[e._v("unknown")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("-o, --operating-system")])]),e._v(" "),r("td",[e._v("print the operating system")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--help")])]),e._v(" "),r("td",[e._v("display this help and exit")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("--version")])]),e._v(" "),r("td",[e._v("output version information and exit")])])])]),e._v(" "),r("h2",{attrs:{id:"kernelcare-doctor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kernelcare-doctor","aria-hidden":"true"}},[e._v("#")]),e._v(" kernelcare doctor")]),e._v(" "),r("p",[e._v("This tool collects essential information about the KernelCare environment and sends it to the support team.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# kcarectl --doctor\nGenerating report...\nUploading...\nKey: FRWf74Zw11111111.83991334-1111-1111-1111-681ddd653e5f\nPlease, provide above mentioned key to KernelCare Support Team\n\n")])])]),r("p",[e._v("The command generates a report and prints out the ID which could be linked to a support ticket.")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),r("p",[e._v("If there was some connection problem during report uploading, the report will be stored locally as "),r("code",[e._v("/root/cl-report")]),e._v(". This file should be sent to the support team manually.")])])])},[],!1,null,null,null);t.default=o.exports}}]);