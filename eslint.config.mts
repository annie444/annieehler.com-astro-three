import astro from "eslint-plugin-astro"
import reactPlugin from "eslint-plugin-react"
import globals from "globals"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config([
	astro.configs["flat/recommended"],
	astro.configs["flat/jsx-a11y-strict"],
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked
])
