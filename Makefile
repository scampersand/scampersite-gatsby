SHELL = /bin/bash
GHP_REMOTE = git@github.com:scampersand/scampersand.github.io

dev:
	yarn
	gatsby develop -H $(HOSTNAME)

build: images
	yarn build

deploy: build
	$(MAKE) _deploy_ghp

_deploy_ghp:
	cd public && \
	    if [[ ! -d .git ]]; then \
		git init && \
		git remote add origin $(GHP_REMOTE); \
	    fi && \
	    git fetch --depth=1 origin master && \
	    git reset origin/master && \
	    git add -A && \
	    if git status --porcelain | grep -q .; then \
		git commit -m deploy; \
	    fi && \
	    git branch -u origin/master && \
	    git push

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

BLACK_ON_WHITE = -negate
BORDER =
LEVEL = 40,90

src/images/clients/ada.png: LEVEL = 60,90
src/images/clients/appsembler.png: LEVEL = 60,90
src/images/clients/gw.png: LEVEL = 50,90
src/images/clients/princeton-university-press.png: LEVEL = 60,90
src/images/clients/tizra.png: BORDER = -bordercolor none -border 15%x
src/images/clients/tizra.png: LEVEL = 50,90

src/images/clients/gw.png: src/assets/clients/gw.jpg
	convert $^ -colorspace Gray -background white -negate -level $(LEVEL)% -trim -negate -alpha Shape $(BLACK_ON_WHITE) $(BORDER) +repage $@

src/images/clients/%.png: src/assets/clients/%.png
	convert $^ -colorspace Gray -background white -level $(LEVEL)% -trim -negate -alpha Shape $(BLACK_ON_WHITE) $(BORDER) +repage $@

src/images/clients/%.png: src/assets/clients/%.svg
	t=$$(mktemp -t tmp.XXXXXXXX.png) && \
	  inkscape -z --export-background='#ffffff' --export-width=1024 --export-png="$$t" $^ && \
	  convert "$$t" -colorspace Gray -background white -level $(LEVEL)% -trim -negate -alpha Shape $(BLACK_ON_WHITE) $(BORDER) +repage $@ && \
	  rm -f "$$t"

.PHONY: build dev images reimages
.PHONY: deploy _deploy_ghp
