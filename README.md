# 🐥Wuri-Duri-Frontend🐥

# 🔨리액트 네이티브 실행 환경 구성 (mac)

+ 1. Homebrew 설치  
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

+ 2. rbenv 설치  
brew install rbenv  
rbenv install 2.7.5   
rbenv global 2.7.5  
rbenv rehash  
gem install bundler  

+ 3. Nodejs 설치  
brew install node

+ 4. Watchman 설치  
brew install watchman

+ 5. React Native CLI 설치  
npm install react-native-cli

+ 6. Xcode 설치  
 https://apps.apple.com/us/app/xcode/id497799835?mt=12  

+ 7. Cocoapods 설치  
 https://cocoapods.org/  
sudo gem install cocoapods

+ 8. JDK 설치  
brew tap AdoptOpenJDK/openjdk  
brew cask install adoptopenjdk8

# 레포지토리 클론
+ vscode를 이용해 git clone을 해주세요

# 해당 폴더로 이동 후 ios simulator 실행 
cd front  
react-native run-ios —simulator= “iPad Air (5th generation)”


