dev:
	yarn
	gatsby develop -H $(HOSTNAME)

deploy:
	now --team=scampersand
