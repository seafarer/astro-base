interface BaseSchemaProps {
	siteName: string
	canonicalURL: string
	title: string
	description: string
	logo?: string
	image?: string
	address?: {
		streetAddress: string
		addressLocality: string
		addressRegion: string
		postalCode: string
		addressCountry: string
	}
	telephone?: string
	sameAs?: string[] // Social media profiler
}

export function generateBaseSchema({
	siteName,
	canonicalURL,
	title,
	description,
	logo,
	image,
	address,
	telephone,
	sameAs
}: BaseSchemaProps) {
	const baseSchema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${canonicalURL}#organization`,
				name: siteName,
				url: canonicalURL,
				logo: logo ? { '@type': 'ImageObject', url: logo } : undefined,
				image: image ? { '@type': 'ImageObject', url: image } : undefined,
				description: description,
				address: address
					? {
							'@type': 'PostalAddress',
							...address
						}
					: undefined,
				telephone: telephone,
				sameAs: sameAs
			},
			{
				'@type': 'WebSite',
				'@id': `${canonicalURL}#website`,
				url: canonicalURL,
				name: siteName,
				description: description,
				publisher: {
					'@id': `${canonicalURL}#organization`
				}
			},
			{
				'@type': 'WebPage',
				'@id': canonicalURL,
				url: canonicalURL,
				name: title,
				isPartOf: {
					'@id': `${canonicalURL}#website`
				},
				about: {
					'@id': `${canonicalURL}#organization`
				},
				description: description
			}
		]
	}

	return baseSchema
}
