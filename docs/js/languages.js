export default [
	{
		key: "ar",
		displayName: "Arabic",
		own: "العربية",
	},
	{
		key: "en",
		displayName: "English",
		own: "English"
	},
	{
		key: "fr",
		displayName: "French",
		own: "Français",
	},
	{
		key: "hu",
		displayName: "Hungarian",
		own: "magyarul",
	},
	{
		key: "nl",
		displayName: "Dutch",
		own: "Nederlands",
	},
	{
		key: "tr",
		displayName: "Turkish",
		own: "Türkçe",
	},
	{
		key: "zh",
		displayName: "Chinese",
		own: "中文",
	},
].sort((a, b) => a.displayName.localeCompare(b.displayName));;