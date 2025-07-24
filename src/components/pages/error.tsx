import FuzzyText from "~/components/canvas/FuzzyText"
import type { FuzzyTextProps } from "~/components/canvas/FuzzyText"

type FuzzyTextAttributes = Omit<FuzzyTextProps, "children">

export interface ErrorPageProps {
	header: {
		text: string
		attrs: FuzzyTextAttributes
	}
	footer: {
		text: string
		attrs: FuzzyTextAttributes
	}
}

export default function ErrorPage({ header, footer }: ErrorPageProps) {
	return (
		<div className="pointer-events-auto mx-auto flex w-full max-w-[80vw] flex-1 flex-col space-y-10">
			<FuzzyText {...header.attrs}>{header.text}</FuzzyText>
			<FuzzyText {...footer.attrs}>{footer.text}</FuzzyText>
		</div>
	)
}
