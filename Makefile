.PHONY: install-dependencies quero-boot-startup

quero-boot-startup: install-dependencies
	bash -c "source npm-token-register.sh && npm run dev"

install-dependencies:
	npm install


