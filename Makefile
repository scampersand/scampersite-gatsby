dev:
	yarn
	gatsby develop -H $(HOSTNAME)

deploy: images
	now --team=scampersand
	now --team=scampersand alias

# pngs are converted directly
IMAGES = $(patsubst src/assets/%,src/images/%,$(shell find src/assets -name '*.png'))

# these images require special conversions
IMAGES += src/images/clients/18f.png \
	  src/images/clients/appsembler.png \
	  src/images/clients/gw.png \
	  src/images/clients/princeton-university-press.png \
	  src/images/clients/tizra.png

images:
	mkdir -p src/images/{clients,projects}
	$(MAKE) $(IMAGES)

reimages:
	rm -f $(IMAGES)
	$(MAKE) images

src/images/%.png: src/assets/%.png
	convert $^ -trim +repage $@

src/images/%.svg: src/assets/%.svg
	cp $^ $@

src/images/clients/%.png: src/assets/clients/%.png
	convert $^ -normalize -colorspace Gray -trim -transparent white +repage $@

# I have no idea why -negate is needed here, but without it, the jpg is
# inverted during converstion.
src/images/clients/gw.png: src/assets/clients/gw.jpg
	convert $^ -colorspace Gray -negate -normalize -transparent white +repage $@

# convert will call out to inkscape automatically if we don't do it ahead
# of time, but we get more control over the result this way. Also,
# sometimes when convert calls inkscape, it blows up.
src/images/clients/%.png: src/assets/clients/%.svg
	t=$$(mktemp -t tmp.XXXXXXXX.png) && \
	  inkscape -z --export-background-opacity=1 --export-width=1024 $^ --export-png="$$t" && \
	  convert "$$t" -colorspace Gray -normalize -level 50x100% -trim -transparent white +repage $@ && \
	  rm -f "$$t"

src/images/clients/tizra.png: src/assets/clients/tizra.svg
	t=$$(mktemp -t tmp.XXXXXXXX.png) && \
	  inkscape -z --export-background-opacity=1 --export-width=1024 $^ --export-png="$$t" && \
	  convert "$$t" -colorspace Gray -normalize -level 50x100% -trim -transparent white -bordercolor none -border 15%x +repage $@ && \
	  rm -f "$$t"

.PHONY: dev deploy images reimages
