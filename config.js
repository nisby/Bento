// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Matteo',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'bdae41622e7655ea3aeffb0c15aa9a60', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '43.764',
	defaultLongitude: '13.147',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://reddit.com',
		},
		{
			id: '2',
			name: 'Navidrome',
			icon: 'disc-3',
			link: 'https://music.nisby44.duckdns.org/app/#/album/all?sort=name&order=ASC&filter={}',
		},
		{
			id: '3',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '4',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '5',
			name: 'Feedly',
			icon: 'rss',
			link: 'https://feedly.com/i/my',		
		},
		{
			id: '6',
			name: 'twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'tenda',
			icon: 'router',
			link: 'http://tendawifi.com/',
		},
		{
			id: '2',
			name: 'casaOS',
			icon:'server',
			link: 'http://192.168.0.177/#/',
		},
		{
			id: '3',
			name: 'Mastodon',
			icon: 'book-open-text',
			link: 'https://mastodon.social/home',
		},
		{
			id: '4',
			name:' voyager',
			icon: 'rocket',
			link: 'https://vger.app/posts/lemmy.world/home',
		},
		{
			id: '5',
			name: 'Settings',
			icon: 'cog',
			link: 'https://github.com/nisby/Bento/edit/master/config.js',
		},
		{
			id: '6',
			name: 'calcio',
			icon: 'trophy',
			link: 'https://calcio.skin/streaming-gratis-calcio-1.php',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'server',
			id: '1',
			links: [
				{
					name: 'CasaOS',
					link: 'http://192.168.0.177:90/',
				},
				{
					name: 'AdGuard Home',
					link: 'http://192.168.0.177:3032/',
				},
				{
					name: 'Gitea',
					link: 'https://git.nisby44.duckdns.org/matteo/myfiles',
				},
				{
					name: 'Router',
					link: 'http://tendawifi.com/',
				},
			],
		},
		{
			icon: 'library-big',
			id: '2',
			links: [
				{
					name: 'Family Link',
					link: 'https://familylink.google.com/m',
				},
				{
					name: 'Mastodon',
					link: 'https://mastodon.social/home',
				},
				{
					name: 'Footbal Live',
					link: 'https://calcio.skin/streaming-gratis-calcio-1.php',
				},
				{
					name: 'Home Page Settings',
					link: 'https://github.com/nisby/Bento/edit/master/config.js',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
