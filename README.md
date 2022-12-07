# 🐥Wuri-Duri-Frontend🐥

# 🔨리액트 네이티브 실행 환경 구성 (mac)

+ Homebrew 설치  
~~~
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
~~~
+ rbenv 설치  
~~~
brew install rbenv  
rbenv install 2.7.5   
rbenv global 2.7.5  
rbenv rehash  
gem install bundler  
~~~
+ Nodejs 설치  
~~~
brew install node
~~~

+ Watchman 설치  
~~~
brew install watchman
~~~

+ React Native CLI 설치  
~~~
npm install react-native-cli
~~~
+ Xcode 설치  
 https://apps.apple.com/us/app/xcode/id497799835?mt=12  

+ Cocoapods 설치  
 https://cocoapods.org/  
~~~
sudo gem install cocoapods
~~~
+ JDK 설치  
~~~
brew tap AdoptOpenJDK/openjdk  
brew cask install adoptopenjdk8
~~~
❗️window 사용시 참고해주세요  
https://dev-yakuza.posstree.com/ko/react-native/install-on-windows/  

# 레포지토리 클론
+ vscode를 이용해 git clone을 해주세요

# 해당 폴더로 이동 후 ios simulator 실행 
~~~
cd front  
react-native run-ios —simulator= “iPad Air (5th generation)”
~~~

