import nightwind from "nightwind/helper"
import { Button } from "~/ui/button"
import { Moon, Sun } from "lucide-react"
import { useDarkMode } from "~/hooks/useDarkMode"

export default function ThemeToggle() {
	const isDark = useDarkMode()

	return (
		<Button
			variant="outline"
			size="icon"
			className="ml-auto cursor-pointer rounded-full"
			onClick={() => nightwind.toggle()}
			aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
		>
			{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</Button>
	)
}
