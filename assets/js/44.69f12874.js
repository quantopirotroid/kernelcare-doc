(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{397:function(e,t,a){"use strict";a.r(t);var r=a(32),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kcare-nexpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kcare-nexpose","aria-hidden":"true"}},[e._v("#")]),e._v(" Kcare-nexpose")]),e._v(" "),a("p",[e._v("このスクリプトはNexposeによって検出されたがKernelCareによってパッチされた脆弱性を例外としてマークします。")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("注記")]),a("p",[e._v("Nexposeを初めて使用する場合、設定方法と操作方法に関する "),a("a",{attrs:{href:"https://nexpose.help.rapid7.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("オフィシャルドキュメント"),a("OutboundLink")],1),e._v(" を読んでください。")])]),a("h2",{attrs:{id:"インストール"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#インストール","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),a("h3",{attrs:{id:"yumリポジトリから"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yumリポジトリから","aria-hidden":"true"}},[e._v("#")]),e._v(" yumリポジトリから")]),e._v(" "),a("p",[e._v("kcare-nexposeをインストールするには、EL6の最小イメージから始めてください。:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cat > /etc/yum.repos.d/kcare-eportal.repo <<EOL\n[kcare-eportal]\nname=kcare-eportal\nbaseurl=https://repo.eportal.kernelcare.com/x86_64/\ngpgkey=https://repo.cloudlinux.com/kernelcare-debian/6/conf/kcaredsa_pub.gpg\nenabled=1\ngpgcheck=1\nEOL\n")])])]),a("p",[e._v("kcare-nexposeをインストールするには、次のコマンドを実行してください。:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum install kcare-nexpose\n")])])]),a("p"),e._v(" "),a("h3",{attrs:{id:"githubから"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#githubから","aria-hidden":"true"}},[e._v("#")]),e._v(" GitHubから")]),e._v(" "),a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git clone https://github.com/cloudlinux/kcare-nexpose.git\n$ cd kcare-nexpose/\n$ python setup.py install\n$ pip install -r REQUIREMENTS\n")])])]),a("h2",{attrs:{id:"仕組み"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕組み","aria-hidden":"true"}},[e._v("#")]),e._v(" 仕組み")]),e._v(" "),a("p",[e._v("このスクリプトは、KernelCare（KernelCare ePortalまたはKernelCareパッチサーバからダウンロード）によって適用されたパッチに関連するCVEを発見し、Nexposeの脆弱性スキャナレポートから除外します。スクリプトはNexposeでこの例外を承認できます（承認したくない場合はスクリプト設定で "),a("code",[e._v("is_approve")]),e._v(" を "),a("code",[e._v("false")]),e._v(" に設定します）。また、前回のスクリプト実行で残った古い例外を削除することもできます（スクリプト設定で "),a("code",[e._v("delete_old")]),e._v(" を "),a("code",[e._v("true")]),e._v(" に設定します）。")]),e._v(" "),a("p",[e._v("まずNexposeでレポートを生成し（下記のサポートされているレポートタイプを参照）、設定ファイルでそれを指定する必要があります。また他のいくつかの "),a("RouterLink",{attrs:{to:"/kcare-nexpose/#yaml-config-file-description"}},[e._v("パラメータ")]),e._v(" を指定する必要があります。:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cp /usr/local/etc/kcare-nexpose.yml.template /usr/local/etc/kcare-nexpose.yml\n$ vim /usr/local/etc/kcare-nexpose.yml\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("注記")]),a("p",[e._v("NexposeのIPアドレスとKernelCare ePortalのIPアドレスは同じである必要があります。 NexposeとKernelCare ePortalを別々のインスタンスで使用する場合はNexposeとKernelCare ePortalがローカルホスト（127.0.0.1）を使用していないことを確認してください。そうでなければkcare-nexposeはNexposeとKernelCare ePortalからのIPアドレスを分析するだけなので、脆弱性を誤ってマークする可能性があります。CLNライセンスサーバで使用されている場合、スクリプトはNATの背後にあるサーバとそれらのホスト名で照合することで機能します。")])]),a("p"),e._v(" "),a("h3",{attrs:{id:"サポートされているレポートタイプ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#サポートされているレポートタイプ","aria-hidden":"true"}},[e._v("#")]),e._v(" サポートされているレポートタイプ")]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("注記")]),a("p",[e._v("レポートを作成する前に "),a("a",{attrs:{href:"https://nexpose.help.rapid7.com/docs/what-is-a-site",target:"_blank",rel:"noopener noreferrer"}},[e._v("site"),a("OutboundLink")],1),e._v(" と "),a("a",{attrs:{href:"https://nexpose.help.rapid7.com/docs/selecting-a-scan-engine-for-a-site",target:"_blank",rel:"noopener noreferrer"}},[e._v("scan"),a("OutboundLink")],1),e._v(" を設定したことを確認してください。")])]),a("p",[a("em",[e._v("raw-xml-v2")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/nexpose-xml2_zoom70.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"起動方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起動方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 起動方法")]),e._v(" "),a("p",[e._v("kcare-nexpose runを起動するには次のコマンドを実行します。:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kcare-nexpose -c /usr/local/etc/kcare-nexpose.yml\n")])])]),a("h2",{attrs:{id:"yaml設定ファイルの説明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml設定ファイルの説明","aria-hidden":"true"}},[e._v("#")]),e._v(" YAML設定ファイルの説明")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Nexpose section\nnexpose:\n \n# Host to connect with Nexpose Security Console\n host: 192.168.100.100\n \n # Port to connect with Nexpose Security Console\n port: 3780\n \n # Username to auth with Nexpose Security Console\n username: admin\n \n # Password to auth with Nexpose Security Console\n password: hup^r37kZc72MjY}=ox?WTQ\n \n # Report name which will be analyzed for look up related CVE with kernelcare ePortal\n report-name: kernelcare\n \n # Change this to \'true\' if you want the script to automatically mark\n # vulnerabilities as exceptions, so they don\'t show up in the report\n is_approve: true\n \n # If you want to delete old exceptions. If it is false, old exceptions will not be deleted\n delete_old: true\n \n format: raw-xml-v2\n \n# License and patch server section\npatch-server:\n \n # URL to connect to Kernelcare ePortal\n # For kernelcare ePortal use "https://<kernel-care-eportal-domain-name-or-ip>/admin/api/kcare/patchset/"\n # For licenses issued by CLN, use "https://cln.cloudlinux.com/api/kcare/patchset.json?key="\n server: https://cln.cloudlinux.com/api/kcare/patchset.json?key=\n \n # Server for patch sets\n # For patch sets from Kernelcare ePortal server use domain name\n # (or IP address)\n # patches-info: https://<kernel-care-eportal-domain-name-or-ip>\n \n # For patch sets from the central KernelCare patch server\n patches-info: https://patches.kernelcare.com/\n \n # List of KernelCare license keys\n keys:\n   - 0G0996952sTtCU4z\n   - hx5LO1n49zY5jp6B\n')])])])])},[],!1,null,null,null);t.default=s.exports}}]);