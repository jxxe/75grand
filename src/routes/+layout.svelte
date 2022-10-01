<script>
	import '../app.css';
	import LoadingBar from '$lib/LoadingBar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import InstallBanner from '$lib/InstallBanner.svelte';
</script>

<svelte:head>
	<!-- Cloudflare Analytics -->
	{@html `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "95b0b57d0b294cb89538e62da2048418"}'></script>`}

	<!-- iOS PWA Attributes -->
	<link rel="manifest" href="/files/pwa/app.webmanifest">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="75grand">
	
	<!-- iOS Splash Screens -->
	<link rel="apple-touch-icon" href="/files/pwa/icon.png">
	<link rel="apple-touch-startup-image" href="/files/pwa/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)">
	<link rel="apple-touch-startup-image" href="/files/pwa/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)">
	<link rel="apple-touch-startup-image" href="/files/pwa/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)">
	<link rel="apple-touch-startup-image" href="/files/pwa/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)">
	<link rel="apple-touch-startup-image" href="/files/pwa/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)">
	<link rel="apple-touch-startup-image" href="/files/pwa/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)">
	<link rel="apple-touch-startup-image" href="/files/pwa/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)">
	<link rel="apple-touch-startup-image" href="/files/pwa/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)">
	<link rel="apple-touch-startup-image" href="/files/pwa/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)">
	<link rel="apple-touch-startup-image" href="/files/pwa/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)">
</svelte:head>

<LoadingBar/>
<InstallBanner/>

<div class="grid lg:grid-cols-[350px,1fr] grid-rows-[max-content,1fr] lg:grid-rows-none min-h-screen">
	<Sidebar/>

	<div class="w-full bg-gray-100">
		<slot/>
	</div>
</div>