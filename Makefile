dev:
	yarn
	gatsby develop -H $(HOSTNAME)

deploy: images
	now --team=scampersand

IMAGES = $(patsubst src/assets/%,src/images/%,$(shell find src/assets -type f))

images: $(IMAGES)

reimages:
	rm -f $(IMAGES)
	$(MAKE) images

src/images/%.png: src/assets/%.png
	mkdir -p $(dir $@)
	convert $^ -trim +repage $@

.PHONY: dev deploy images reimages
