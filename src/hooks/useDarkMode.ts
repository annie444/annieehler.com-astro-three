import { useState, useEffect } from "react"

export class ClassWatcher {
	private class: string
	private element: HTMLElement
	private observer: MutationObserver
	private classAddedCallback: () => void
	private classRemovedCallback: () => void
	private lastClassState: boolean = false

	constructor(
		element: HTMLElement,
		className: string,
		classAddedCallback: () => void,
		classRemovedCallback: () => void,
		initialState: boolean | (() => boolean) | null = null
	) {
		this.element = element
		this.class = className
		this.classAddedCallback = classAddedCallback
		this.classRemovedCallback = classRemovedCallback
		if (initialState === null) {
			this.lastClassState = this.element.classList.contains(this.class)
		} else if (typeof initialState === "boolean") {
			this.lastClassState = initialState
		} else if (typeof initialState === "function") {
			this.lastClassState = initialState()
		}

		this.init()
	}

	private init() {
		this.observer = new MutationObserver(this.mutationCallback)
		this.observe()
	}

	private observe() {
		this.observer.observe(this.element, {
			attributes: true,
			attributeFilter: ["class"]
		})
	}

	private mutationCallback = (mutations: MutationRecord[]) => {
		for (const mutation of mutations) {
			if (
				mutation.type === "attributes" &&
				mutation.attributeName === "class" &&
				mutation.target instanceof HTMLElement
			) {
				let currentClassState = mutation.target.classList.contains(this.class)
				if (this.lastClassState !== currentClassState) {
					this.lastClassState = currentClassState
					if (currentClassState) {
						this.classAddedCallback()
					} else {
						this.classRemovedCallback()
					}
				}
			}
		}
	}

	public disconnect() {
		this.observer.disconnect()
	}
}

export function useDarkMode(): boolean {
	const [isDark, setIsDark] = useState<boolean>()

	useEffect(() => {
		const initalState = () => {
			const darkClass = document.documentElement.classList.contains("dark")
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
			console.log(`Media state: ${mediaQuery.matches}`)
			console.log(`Dark class state: ${darkClass}`)
			return mediaQuery.matches || darkClass
		}

		setIsDark(initalState())

		// Check initial state
		const classWatcher = new ClassWatcher(
			document.documentElement,
			"dark",
			() => {
				setIsDark(true)
			},
			() => {
				setIsDark(false)
			},
			initalState
		)

		return () => {
			classWatcher.disconnect()
		}
	}, [])

	return isDark
}
