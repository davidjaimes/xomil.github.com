---
layout: ../layouts/post-layout.astro
title: "macOS: Setup and configure"
date: "Jan 01, 2024"
excerpt: Install Xcode, Homebrew, Oh My Zsh, iTerm2, Miniconda, Sublime Text, and Node.js.
---

## Hush Login
Remove "last login" details from terminal session.
```zsh
touch .hushlogin
```

## Xcode
Install [command line tools](https://developer.apple.com/xcode/). Trigger prompt:
```zsh
gcc
```
Test install:
```zsh
gcc -v
```
Output:
```
Apple clang version 14.0.3 (clang-1403.0.22.14.1)
Target: arm64-apple-darwin22.5.0
Thread model: posix
InstalledDir: /Library/Developer/CommandLineTools/usr/bin
```

## Homebrew

Install command:
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Eval:
```zsh
eval "$(/opt/homebrew/bin/brew shellenv)"
```
Test install:
```zsh
brew doctor
```
Packages:
```shell
brew install cask git wget zsh
```

## Oh My Zsh

Visit [GitHub repository](https://github.com/ohmyzsh/ohmyzsh) for latest install:
```shell
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
zshrc options:
```shell
# Uncomment the following line to disable auto-setting terminal title.
DISABLE_AUTO_TITLE="true"

# HIST_STAMPS="mm/dd/yyyy"
HIST_STAMPS="yyyy-mm-dd"

# Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

# Sublime Text 4
export PATH="/Applications/Sublime Text.app/Contents/SharedSupport/bin:$PATH"
```

## iTerm2

Install:
```zsh
brew install --cask iterm2 spotify
```
Snazzy theme:
```zsh
(curl -Ls https://raw.githubusercontent.com/sindresorhus/iterm2-snazzy/main/Snazzy.itermcolors > /tmp/Snazzy.itermcolors && open /tmp/Snazzy.itermcolors)
```
Preferences:
```
Apperance > General > Theme: Minimal

Apperance > Windows > Hide Scrollbars

Profiles > Colors > Color Presets: Snazzy

Profiles > Text > Font: Space Mono (13pt)

Profiles > Window > Columns: 120

Advanced > Tabs > prominent tab outline: 0.1
```

## Miniconda

Install command:
```zsh
bash Miniconda3-latest-MacOSX-arm64.sh
```
environment.yml:
```yml
name: arm64
dependencies:
  - astropy
  - matplotlib
  - numpy
  - openpyxl
  - pandas
  - pip:
    - jupyterlab
```
Add to .zshrc:
```sh
# Miniconda
conda activate arm64
```

## Sublime Text
Packages to install:
- BracketHighlighter
- Simpler JSX
- Theme - Gravity
- Markdown Preview

Settings text file:
```json
{
	"color_scheme": "Packages/Theme - Gravity/One Dark Gravity.tmTheme",
	"font_size": 13,
	"gravity_highlight_color_blue": true,
	"gravity_tab_font_small": true,
	"gravity_tab_height_short": true,
	"gravity_title_bar": true,
	"ignored_packages":
	[
		"Vintage"
	],
	"open_files_in_new_window": false,
	"theme": "Gravity One.sublime-theme",
	"word_wrap": true
}
```

## Node.js

Visit the [GitHub repository](https://github.com/nvm-sh/nvm) to get most recent version:

Install nvm:
```zsh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
Install node:
```zsh
nvm install node
```
Activate node:
```zsh
nvm use node
```