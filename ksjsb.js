<!DOCTYPE html>
<html lang="zh-cn">

<head>
    <meta charset="utf-8">
    <title>
        ImmortalWrt - 文件传输
        - LuCI</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta name="format-detection" content="telephone=no, email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="x5-fullscreen" content="true">
    <meta name="full-screen" content="yes">
    <meta name="x5-page-mode" content="app">
    <meta name="browsermode" content="application">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="msapplication-TileColor" content="#5e72e4">
    <meta name="application-name" content="ImmortalWrt - LuCI">
    <meta name="apple-mobile-web-app-title" content="ImmortalWrt - LuCI">
    <link rel="apple-touch-icon" sizes="60x60" href="/luci-static/argon/icon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/luci-static/argon/icon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/luci-static/argon/icon/apple-icon-144x144.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/luci-static/argon/icon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/luci-static/argon/icon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/luci-static/argon/icon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/luci-static/argon/icon/favicon-16x16.png">
    <link rel="manifest" href="/luci-static/argon/icon/manifest.json"  crossorigin="use-credentials">
    <meta name="msapplication-TileColor" content="#5e72e4">
    <meta name="msapplication-TileImage" content="/luci-static/argon/icon/ms-icon-144x144.png">
    <meta name="theme-color" content="#5e72e4">
    <link rel="stylesheet" href="/luci-static/argon/css/cascade.css?v=2.2.9.4">
    <style title="text/css">
        
            @media (prefers-color-scheme: dark) {
                body{background:#1e1e1e;color:#cccccc}.login-page .login-container .login-form{background-color:#1e1e1e;-webkit-backdrop-filter:blur(var(--blur-radius-dark));backdrop-filter:blur(var(--blur-radius-dark));background-color:rgba(0, 0, 0, var(--blur-opacity-dark))}.login-page .login-container .login-form .brand{color:#adb5bd}.login-page .login-container .login-form .form-login .input-group::before{color:#adb5bd}.login-page .login-container .login-form .form-login .input-group input{background-color:transparent !important;color:#adb5bd;border-bottom:#adb5bd 1px solid !important;border-radius:0 !important;border-top:none !important;border-left:none !important;border-right:none !important;box-shadow:none}.login-page .login-container .login-form .form-login .cbi-button-apply{background-color:#483d8b !important;background-color:var(--dark-primary) !important}.login-page .login-container .login-form .form-login .cbi-button-apply:hover,.login-page .login-container .login-form .form-login .cbi-button-apply:focus{opacity:.9}header::after{background-color:#1e1e1e !important}.main .main-left{background-color:#333333 !important;box-shadow:0 0 .5rem 0 rgba(0,0,0,0.15)}.main .main-left .sidenav-header .brand{color:#ccc}.main .main-left .nav .slide .slide-menu .active a{color:#cccccc}.main .main-left .nav .slide .slide-menu .active a::after{background-color:#cccccc !important}.main .main-left .nav .slide .slide-menu li a{color:#cccccc}.main .main-left .nav .slide .slide-menu li a:hover{background:none !important}.main .main-left .nav .slide .menu.active{background-color:#483d8b !important;background-color:var(--dark-primary) !important;color:#cccccc !important}.main .main-left .nav .slide .menu.active a::after{background-color:#cccccc !important}.main .main-left .nav li a{color:#cccccc !important}.main .main-left .nav li a:hover{background-color:#483d8b !important;background-color:var(--dark-primary) !important;color:#cccccc !important}.main .main-left::-webkit-scrollbar-thumb{background-color:#252526 !important}.main .main-left::-webkit-scrollbar-track{background-color:#333}.main .main-right{background-color:#1e1e1e}h2{color:#ccc;background:#333333}h3{color:#ccc;border-bottom:0;background:#333333}a:-webkit-any-link{color:-webkit-link;cursor:pointer;color:#483d8b;color:var(--dark-primary)}input:-webkit-autofill{background-color:#3c3c3c !important}.cbi-value-field .cbi-input-apply,.cbi-button-apply,.cbi-button-edit{color:#fff !important;background-color:#483d8b !important;background-color:var(--dark-primary) !important;border-color:#483d8b !important;border-color:var(--dark-primary) !important}.cbi-section em{color:#ccc}header.bg-primary{background-color:#1e1e1e !important}.cbi-map-descr{color:#ccc}.cbi-section{background:none;box-shadow:0 0 .5rem 0 rgba(0,0,0,0.35)}.panel-title{color:#ccc;background-color:#333333;border-bottom:0px}div>table>tbody>tr:nth-of-type(2n),div>.table>.tr:nth-of-type(2n){background-color:#252526}table>tbody>tr>td,table>tfoot>tr>td,table>thead>tr>td{color:#ccc}fieldset>table>tbody>tr:nth-of-type(2n){background-color:#252526}table>tbody>tr>td,table>tfoot>tr>td,table>thead>tr>td{border-top:1px solid #252526}#swaptotal>div>div,#swapfree>div>div,#memfree>div>div,#membuff>div>div,#conns>div>div,#memtotal>div>div{background-color:#32325d !important}#swaptotal>div>div>div>small,#swapfree>div>div>div>small,#memfree>div>div>div>small,#membuff>div>div>div>small,#conns>div>div>div>small,#memtotal>div>div>div>small{color:#ccc !important}.node-system-packages>.main .cbi-section-node:first-child .cbi-value-last{line-height:1.8em}.node-system-packages>.main .cbi-section-node:first-child .cbi-value-last div[style="margin:3px 0; width:300px; height:10px; border:1px solid #000000; background-color:#80C080"]{border:1px solid #999999 !important;background-color:transparent !important}.node-system-packages>.main .cbi-section-node:first-child .cbi-value-last div[style="margin:3px 0; width:300px; height:10px; border:1px solid #000000; background-color:#80C080"] div{background-color:#32325d !important}table>tbody>tr>th,table>tfoot>tr>th,table>thead>tr>th{background-color:#252526;border-bottom:black 1px solid !important}tr>td,tr>th,.tr>.td,.tr>.th,.cbi-section-table-row::before,#cbi-wireless>#wifi_assoclist_table>.tr:nth-child(2){border-top:0}.cbi-rowstyle-2{background-color:#1e1e1e}.cbi-rowstyle-1{background-color:#252526}.cbi-rowstyle-2 .cbi-button-up,.cbi-rowstyle-2 .cbi-button-down,body:not(.Interfaces) .cbi-rowstyle-2:first-child{background-color:#666 !important}.cbi-section>h3:first-child,.panel-title,h3{color:#ccc;border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0}h4{background-color:#1e1e1f}.cbi-progressbar{position:relative;min-width:170px;height:20px;margin:6px 0;border:thin solid #999;background:transparent;border-radius:.2rem;overflow:hidden}.cbi-progressbar div{background-color:#32325d !important}.cbi-section-table .cbi-section-table-titles .cbi-section-table-cell{background-color:#1e1e1f}.cbi-button{color:#ccc !important;background-color:#483d8b;background-color:var(--dark-primary)}.cbi-section-node{background:none;border-radius:0 0 .375rem .375rem;padding:0rem}abbr{color:#5e72e4}div>table>tbody>tr:nth-of-type(2n),div>.table>.tbody>.tr:nth-of-type(2n){background-color:#252526}#content_syslog{box-shadow:0 0 .5rem 0 rgba(0,0,0,0.35)}#syslog{color:#ccc;background-color:#1e1e1e}#iwsvg,#iwsvg2,#bwsvg{overflow:hidden;box-shadow:0 0 .5rem 0 rgba(0,0,0,0.35);background-color:#1e1e1e !important}.tabs{background-color:#252526}.tabs>li[class~="active"]>a{color:#ccc}.tabs>li[class~="active"],.tabs>li:hover{border-bottom:.18751rem solid #483d8b;border-bottom:.18751rem solid var(--dark-primary);color:#ccc;background-color:#181819}.cbi-tabmenu>li>a,.tabs>li>a{color:#ccc}.cbi-tabmenu>li>a:hover,.tabs>li>a:hover{color:#ccc}.cbi-tabmenu>li{background:#2d2d2d}.cbi-tabmenu li[class~="cbi-tab"] a{color:#ccc}.cbi-tabmenu>li:hover{color:#ccc;background:#2d2d2d}.cbi-tabmenu>li[class~="cbi-tab"]{background-color:#181819}.cbi-tabcontainer>.cbi-value:nth-of-type(2n){background-color:#252526}.cbi-value-title{color:#ccc}select,input{color:#ccc;background-color:transparent !important;border:1px solid #252526;box-shadow:none}select:not([multiple="multiple"]):focus,input:focus{border-color:#483d8b !important;border-color:var(--dark-primary) !important;outline:0}select{background-color:#1e1e1e !important}#cbi-dropbear h2,#cbi-dropbear .cbi-map-descr,#cbi-dropbear .cbi-map-descr abbr,#cbi-rc h2,#cbi-rc .cbi-map-descr,#cbi-distfeedconf h2,#cbi-distfeedconf .cbi-map-descr,#cbi-customfeedconf h2,#cbi-customfeedconf .cbi-map-descr,#cbi-download h2,#cbi-filelist h2{color:#ccc !important}.cbi-value-field>ul>li .ifacebadge{background-color:#3c3c3c}.cbi-section-descr{color:#ccc}.cbi-input-textarea{background-color:#1e1e1e;color:#ccc}.cbi-section-remove:nth-of-type(2n),.cbi-section-node:nth-of-type(2n){background-color:#1e1e1e}.node-system-packages>.main table tr td:nth-last-child(1){color:#ccc}.cbi-section-node .cbi-value{padding:1rem 1rem .3rem 1rem}.ifacebox{background-color:none;border:1px solid #1e1e1e}.ifacebox-head{color:#666}.ifacebox-body{background-color:#333}.zonebadge strong{color:#333}.zonebadge>.ifacebadge{background-color:#3c3c3c}div.cbi-value var,td.cbi-value-field var{color:#5e72e4}#diag-rc-output>pre{color:#ccc;background-color:#1e1e1e}.node-services-vssr .block{background-color:#3c3c3c !important;box-shadow:0 0 .5rem 0 rgba(0,0,0,0.35)}.node-services-vssr .block h4{color:#ccc !important}.node-services-vssr .status-bar{color:#ccc;box-shadow:0 0 .5rem 0 rgba(0,0,0,0.35);background-color:#1e1e1e}.node-services-vssr .cbi-section-table-row{color:#ccc;background-color:#3c3c3c !important;box-shadow:0 0 5px 0 rgba(0,0,0,0.35)}.node-services-vssr .cbi-section-table-row.fast{background:#483d8b !important;background:var(--dark-primary) !important;color:#fff}.node-services-vssr .ssr-button{color:#ccc}.node-services-vssr .incon:nth-child(2){border-right:#1e1e1e 1px solid}#xhr_poll_status>.label.success{color:#ccc !important;background-color:darkolivegreen !important}.notice{background-color:#483d8b !important;background-color:var(--dark-primary) !important}.cbi-input-find,.cbi-input-save,.cbi-button-add,.cbi-button-save,.cbi-button-find,.cbi-input-reload,.cbi-button-reload{color:#fff !important;background:darkolivegreen !important;border-color:darkolivegreen !important}.cbi-button-reset,.cbi-input-remove{color:#fff !important;background-color:darkorange !important;border-color:darkorange !important}.cbi-page-actions .cbi-button-apply,.cbi-section-actions .cbi-button-edit,.cbi-button-edit.important,.cbi-button-apply.important,.cbi-button-reload.important,.cbi-button-action.important{border:1px #483d8b solid !important;border:1px var(--dark-primary) solid !important}.btn[value="Dismiss"],.cbi-button[value="Terminate"],.cbi-button[value="Reset"],.cbi-button[value="Disabled"],.cbi-button[onclick^="iface_reconnect"],.cbi-button[onclick="handleReset(event)"],.cbi-button-neutral[value="Disable"]{font-weight:normal;color:#fff;border:thin solid darkorange !important;background-color:darkorange !important}fieldset[id^="cbi-apply-"]{background-color:#333333}#detail-bubble>div{border:1px solid #ccc;border-radius:2px;padding:5px;background:#252525}.ifacebox-head.active{background-color:#32325d !important}header .fill .status span[data-style="active"]{color:#ccc !important;background-color:darkolivegreen !important}#cbi-wireless .td,#cbi-network .tr:first-child>.td,.table[width="100%"]>.tr:first-child>.td,[data-page="admin-network-diagnostics"] .tr>.td,.tr.table-titles>.th,.tr.cbi-section-table-titles>.th{background-color:#252526;border-bottom:black 1px solid !important}.network-status-table .ifacebox-body .ifacebadge{background-color:#252526;border-bottom:0;box-shadow:none}td>.ifacebadge,.td>.ifacebadge{background-color:#483d8b;background-color:var(--dark-primary);border:0}.btn.danger,.cbi-section-remove>.cbi-button,.cbi-button-remove,.cbi-button-reset,.cbi-button-negative,.cbi-button[value="Stop"],.cbi-button[value="Kill"],.cbi-button[onclick="reboot(this)"],.cbi-button-neutral[value="Restart"]{border:thin solid darkorange !important;background-color:darkorange !important}.cbi-section,.cbi-section-error,#iptables,.Firewall form,#cbi-network>.cbi-section-node,#cbi-wireless>.cbi-section-node,#cbi-wireless>#wifi_assoclist_table,[data-tab-title],[data-page^="admin-system-admin"]:not(.node-main-login) .cbi-map:not(#cbi-dropbear),[data-page="admin-system-opkg"] #maincontent>.container{background:#1e1e1e !important;box-shadow:0 0 .5rem 0 rgba(0,0,0,0.35)}div[style="width:100%;height:300px;border:1px solid #000;background:#fff"]{background:transparent !important}[data-page="admin-system-admin"] .cbi-map h2,[data-page="admin-system-admin-password"] .cbi-map h2,[data-page="admin-system-admin"] .cbi-map .cbi-map-descr,[data-page="admin-system-admin-password"] .cbi-map .cbi-map-descr{color:#ccc}[data-page="admin-system-flash"] .modal label>input[type="checkbox"]{top:-0.35rem}[data-page="admin-system-flash"] .modal .btn{white-space:normal !important;background-color:darkseagreen}[data-page="admin-system-flash"] .modal .alert-message{background-color:transparent !important}[data-page="admin-system-flash"] .modal .danger{border:thin solid darkorange !important;background-color:darkorange !important}.cbi-value input[type="password"]+.cbi-button-neutral{background-color:#483d8b !important;background-color:var(--dark-primary) !important}.btn,button,select,input,.cbi-dropdown{border:1px solid #3c3c3c !important}.cbi-dropdown .preview{color:#ccc}.cbi-section-table-row{background-color:#1e1e1e !important}.modal{background-color:#1e1e1e}.cbi-button-positive{color:#fff !important;background-color:darkolivegreen !important}[data-page="admin-system-flash"] legend{color:#ccc}.logout:before{color:#adb5bd !important}.cbi-dropdown[open]{border-color:#483d8b !important;border-color:var(--dark-primary) !important}.cbi-dropdown[open]>ul.dropdown{background:#252526 !important;color:#ccc !important;box-shadow:none;border:1px solid #3c3c3c !important}.cbi-dropdown[open]>ul.dropdown li{color:#ccc;border-bottom:1px solid #3c3c3c !important}.cbi-dropdown[open]>ul.dropdown>li[selected]{background-color:#483d8b !important;background-color:var(--dark-primary) !important;border-bottom:1px solid #3c3c3c !important}.cbi-dropdown[open]>ul.dropdown>li.focus{background:#483d8b;background:var(--dark-primary);outline:none}.ifacebadge{background-color:#333333}.cbi-dynlist>.item>span{border:1px solid #3c3c3c !important}.cbi-page-actions .cbi-button-apply,.cbi-section-actions .cbi-button-edit,.cbi-button-edit,.cbi-button-apply,.cbi-button-reload,.cbi-button-action,.cbi-button[value="Submit"],.cbi-button[value="Upload"],.cbi-button[value$="Apply"],.cbi-button[onclick="addKey(event)"]{background:#483d8b !important;background:var(--dark-primary) !important}.btn.primary,.cbi-page-actions .cbi-button-save,.cbi-page-actions .cbi-button-apply+.cbi-button-save,.cbi-button-add,.cbi-button-save,.cbi-button-positive,.cbi-button-link,.cbi-button[value="Enable"],.cbi-button[value="Scan"],.cbi-button[value^="Back"],.cbi-button-neutral[onclick="handleConfig(event)"]{background:#483d8b;background:var(--dark-primary)}[data-page="admin-system-opkg"] h2{color:#ccc !important}@media screen and (max-width:480px){.node-status-iptables>.main div>.cbi-map>form{background-color:#1e1e1e;box-shadow:0 0 .5rem 0 rgba(0,0,0,0.35)}}
            }
        </style>
	<link rel="shortcut icon" href="/luci-static/argon/favicon.ico">
	<script src="/luci-static/argon/js/polyfill.min.js?v=2.2.9.4"></script>
	<script src="/cgi-bin/luci/admin/translations/zh-cn?v=git-22.131.46782-077ad07"></script>
	<script src="/luci-static/resources/cbi.js?v=git-22.131.46782-077ad07"></script>
	<script src="/luci-static/resources/luci.js?v=git-22.131.46782-077ad07"></script>
	<script src="/luci-static/argon/js/jquery.min.js?v=3.5.1"></script>
</head>

<body
	class="lang_zh-cn FileTransfer logged-in"
	data-page="admin-system-filetransfer">

	<div class="main">
		<div class="main-left" id="mainmenu" style="display:none">
			<div class="sidenav-header d-flex align-items-center">
				<a class="brand" href="#">ImmortalWrt</a>
				<div class="ml-auto">
					<!-- Sidenav toggler -->
					<div class="sidenav-toggler d-none d-xl-block active" data-action="sidenav-unpin"
						data-target="#sidenav-main">
						<div class="sidenav-toggler-inner">
							<i class="sidenav-toggler-line"></i>
							<i class="sidenav-toggler-line"></i>
							<i class="sidenav-toggler-line"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-right">
			<header class="bg-primary">
				<div class="fill">
					<div class="container">
						<div class="flex1">
							<a class="showSide"></a>
							<a class="brand" href="#">ImmortalWrt</a>
						</div>
						<div class="status" id="indicators"></div>
					</div>
				</div>
			</header>
			<div class="darkMask"></div>
			<div id="maincontent">
				<div class="container"><div class="alert-message error">
						<h4>未设置密码！</h4>
						<p>尚未设置密码。请为 root 用户设置密码以保护主机并启用。
						</p>
						
					</div><noscript>
						<div class="alert-message error">
							<h4>需要 JavaScript！</h4>
							<p>必须开启浏览器的 JavaScript 支持，否则 LuCI 无法正常工作。</p>
						</div>
					</noscript>

					<div id="tabmenu" style="display:none"></div>


<script type="text/javascript" src="/luci-static/resources/promis.min.js?v=git-22.131.46782-077ad07"></script>
<script type="text/javascript" src="/luci-static/resources/luci.js?v=git-22.131.46782-077ad07"></script>
<script type="text/javascript">
	L = new LuCI({"apply_rollback":90,"resource":"\/luci-static\/resources","media":"\/luci-static\/argon","documentroot":"\/www","pathinfo":"\/admin\/system\/filetransfer","apply_display":1.5,"requestpath":["admin","system","filetransfer"],"ubuspath":"\/ubus\/","scriptname":"\/cgi-bin\/luci","dispatchpath":["admin","system","filetransfer"],"sessionid":"51c68048e61bc0db7c6b9a128be4225b","token":"890c5fc6474afbac8a572c23342999dd","apply_timeout":5,"apply_holdoff":4,"nodespec":{"satisfied":true,"action":{"post":{"cbi.submit":true},"type":"form","path":"updownload"},"order":89,"readonly":false,"depends":{"acl":["luci-app-filetransfer"]},"title":"FileTransfer"},"pollinterval":5});
</script>
<form method="post" enctype="multipart/form-data" action="/cgi-bin/luci/admin/system/filetransfer">
			<input type="hidden" name="token" value="890c5fc6474afbac8a572c23342999dd" />
			<input type="hidden" name="cbi.submit" value="1" /><div class="cbi-map" id="cbi-upload"><h2 name="content">上传</h2><div class="cbi-section">
	
	<div class="cbi-section-descr">将文件上传到'/tmp/upload/'</div>
	<div class="cbi-section-node">
		<div id="cbi-upload-0xffffb9c72e40">
			<div class="cbi-value" id="cbi-upload-1-" data-index="1" data-depends="[]">

	<label class="cbi-value" style="display:inline-block; width: 130px" for="ulfile">选择本地文件：</label>
	<input class="cbi-input-file" style="width: 400px" type="file" id="ulfile" name="ulfile" />
	<input type="submit" class="cbi-button cbi-input-apply" name="upload" value="上传" />
		</div>

<div class="cbi-value cbi-value-last" id="cbi-upload-1-" data-index="2" data-depends="[]">

<span style="color: red">

</span>
		</div>


		</div>
		
	</div>
</div></div></form>

<script type="text/javascript">cbi_init();</script>
<form method="post" enctype="multipart/form-data" action="/cgi-bin/luci/admin/system/filetransfer">
			<input type="hidden" name="token" value="890c5fc6474afbac8a572c23342999dd" />
			<input type="hidden" name="cbi.submit" value="1" /><div class="cbi-map" id="cbi-download"><h2 name="content">下载到本地</h2><div class="cbi-section">
	
	<div class="cbi-section-descr">下载文件</div>
	<div class="cbi-section-node">
		<div id="cbi-download-0xffffb98824a0">
			<div class="cbi-value" id="cbi-download-1-" data-index="1" data-depends="[]">

	<label class="cbi-value" style="display:inline-block; width: 130px" for="dlfile">路由上目录</label>
	<input class="cbi-input-file" style="width: 400px" type="text" id="dlfile" name="dlfile" />
	<input type="submit" class="cbi-button cbi-input-apply" name="download" value="下载到本地" />
		</div>

<div class="cbi-value cbi-value-last" id="cbi-download-1-" data-index="2" data-depends="[]">

<span style="color: red">

</span>
		</div>


		</div>
		
	</div>
</div></div></form>

<script type="text/javascript">cbi_init();</script>
<form method="post" enctype="multipart/form-data" action="/cgi-bin/luci/admin/system/filetransfer">
			<input type="hidden" name="token" value="890c5fc6474afbac8a572c23342999dd" />
			<input type="hidden" name="cbi.submit" value="1" /><div class="cbi-map" id="cbi-filelist"><h2 name="content">上传文件列表</h2><!-- tblsection -->
<div class="cbi-section cbi-tblsection" id="cbi-table-table">
	<div class="cbi-section-descr"></div>
	<table class="table cbi-section-table"><tr class="tr cbi-section-table-titles anonymous"><th class="th cbi-section-table-cell" data-widget="dvalue">文件名</th><th class="th cbi-section-table-cell" data-widget="dvalue">修改时间</th><th class="th cbi-section-table-cell" data-widget="dvalue">模式字符串</th><th class="th cbi-section-table-cell" data-widget="dvalue">大小</th><th class="th cbi-section-table-cell" data-widget="button">移除</th><th class="th cbi-section-table-cell" data-widget="other_button">安装</th></tr><tr class="tr cbi-section-table-row cbi-rowstyle-1" id="cbi-table-1"><td class="td cbi-value-field" data-name="name" data-widget="dvalue" data-title="文件名">
<div id="cbi-table-1-name" data-index="" data-depends="[]">


raw_ksjsb_ksjsb.js
<input type="hidden" id="cbid.table.1.name" value="raw_ksjsb_ksjsb.js" />
</div>
</td>


<td class="td cbi-value-field" data-name="mtime" data-widget="dvalue" data-title="修改时间">
<div id="cbi-table-1-mtime" data-index="" data-depends="[]">


2022-05-14 16:35:57
<input type="hidden" id="cbid.table.1.mtime" value="2022-05-14 16:35:57" />
</div>
</td>


<td class="td cbi-value-field" data-name="modestr" data-widget="dvalue" data-title="模式字符串">
<div id="cbi-table-1-modestr" data-index="" data-depends="[]">


rw-r--r--
<input type="hidden" id="cbid.table.1.modestr" value="rw-r--r--" />
</div>
</td>


<td class="td cbi-value-field" data-name="size" data-widget="dvalue" data-title="大小">
<div id="cbi-table-1-size" data-index="" data-depends="[]">


29786
<input type="hidden" id="cbid.table.1.size" value="29786" />
</div>
</td>


<td class="td cbi-value-field" data-name="remove" data-widget="button" data-title="移除">
<div id="cbi-table-1-remove" data-index="" data-depends="[]">


	
		<input class="btn cbi-button cbi-button-remove" type="submit" name="cbid.table.1.remove" id="cbid.table.1.remove" value="移除" />
	
</div>
</td>


<td class="td cbi-value-field" data-name="install" data-widget="other_button" data-title="安装">
<div id="cbi-table-1-install" data-index="" data-depends="[]">


	
		<input class="cbi-button cbi-input-apply" style="display: none" type="submit" name="cbid.table.1.install" id="cbid.table.1.install" value="安装" />
	
</div>
</td>


</tr></table>

	</div>
<!-- /tblsection --></div></form>

<script type="text/javascript">cbi_init();</script>

</div>
<footer class="mobile-hide">
	<div>
		<a class="luci-link" href="https://github.com/openwrt/luci">Powered by LuCI Master (git-22.131.46782-077ad07)</a> /
						<a href="https://github.com/jerrykuku/luci-theme-argon">ArgonTheme v2.2.9.4</a> /
						ImmortalWrt SNAPSHOT R22.5.1 unknown
		<ul class="breadcrumb pull-right" id="modemenu" style="display:none"></ul>
	</div>
</footer>
</div>
</div>
<script>
	// thanks for Jo-Philipp Wich <jow@openwrt.org>
	var luciLocation = ["admin","system","filetransfer"];
	var winHeight = $(window).height();
	$(window).resize(function () {
		var winWidth = $(window).width()
		if(winWidth < 600){
			var newHeight = $(this).height();
			var keyboradHeight = newHeight - winHeight;
			$(".ftc").css("bottom", keyboradHeight + 30);
		}
	})
</script>
<script type="text/javascript">L.require('menu-argon')</script>
</body>
</html>

