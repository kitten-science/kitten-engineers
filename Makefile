.PHONY: default build clean docs git-hook pretty lint test run

default: build

build: lib output

clean:
	rm --force --recursive lib node_modules output tsconfig.tsbuildinfo

docs:
	@echo "This project has no documentation."

git-hook:
	echo "make pretty" > .git/hooks/pre-commit

pretty: node_modules
	npm exec -- biome check --write --no-errors-on-unmatched
	npm pkg fix

lint: node_modules
	npm exec -- biome check .
	npm exec -- tsc --noEmit

test:
	@echo "Kitten Engineers test in production."


node_modules:
	npm install

lib: node_modules
	npm exec -- tsc --build

output: node_modules
	npm exec -- vite --config vite.config.userscript.js build

.PHONY: injectable
injectable: node_modules
	npm exec -- vite --config vite.config.inject.js build

.PHONY: userscript
userscript: node_modules
	npm exec -- vite --config vite.config.userscript.js build
	MINIFY=true npm exec -- vite --config vite.config.userscript.js build
