dev:
	yarn
	gatsby develop -H $(HOSTNAME)

deploy: images
	now --team=scampersand

# pngs are converted directly
IMAGES = $(patsubst src/assets/%,src/images/%,$(shell find src/assets -name '*.png'))

# these images require special conversions
IMAGES += src/images/clients/18f.png \
	  src/images/clients/appsembler.png \
	  src/images/clients/gw.png \
	  src/images/clients/princeton-university-press.png \
	  src/images/clients/tizra.png

images: $(IMAGES)

reimages:
	rm -f $(IMAGES)
	$(MAKE) images

src/images/%.png: src/assets/%.png
	mkdir -p $(dir $@)
	convert $^ -trim +repage $@

src/images/%.svg: src/assets/%.svg
	mkdir -p $(dir $@)
	cp $^ $@

src/images/clients/%.png: src/assets/clients/%.png
	mkdir -p $(dir $@)
	convert $^ -normalize -colorspace Gray -trim -transparent white +repage $@

# I have no idea why -negate is needed here, but without it, the jpg is
# inverted during converstion.
src/images/clients/gw.png: src/assets/clients/gw.jpg
	mkdir -p $(dir $@)
	convert $^ -colorspace Gray -negate -normalize -transparent white +repage $@

src/images/clients/%.png: src/assets/clients/%.svg
	mkdir -p $(dir $@)
	t=$$(mktemp -t tmp.XXXXXXXX.png) && \
	  inkscape -z --export-background-opacity=1 --export-width=1024 $^ --export-png="$$t" && \
	  convert "$$t" -colorspace Gray -normalize -level 50x100% -trim -transparent white +repage $@ && \
	  rm -f "$$t"

.PHONY: dev deploy images reimages
