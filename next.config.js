/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		concurrentFeatures: true,
		serverComponents: true,
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Content-Security-Policy",
						value: "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src *; connect-src 'self' raider.io;",
						//Content-Security-Policy: default-src 'self' *.raider.io *.worldofwarcraft.com
					},
				],
			},
		];
	},
};
