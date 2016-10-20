---
layout: post
title: APK whats in there?
categories: [Android]
tags: [Android]
description: Introduction
---  
Few days ago a friend of mine said, 'So you know android, then tell me how to get information about the application when you have only _apk_?'  
I thought for sometime and remembered a tool.

It is easy to get information about the application when you have the source code, information like _minSdkVersion_, _tagetSdkVersion_, _permissions_, _configurations_, _xmltree_, but what if someone gives you '_apk_' and asks you to tell same information?.

The common way to solve this problem is to convert `.apk` file to `.zip` file then open the files. Cool right?  
Not so cool, open `AndroidManifest.xml` file. It has data you need but you can't read it. It is something like -   
![AndroidManifest.xml](/assets/ico/androidmanifest.png)


There is a tool which can help you to do that - `aapt (Android Asset Packaging Tool)`  

**First thing first, Where is it?**  
```
<path_to_android_sdk>/build-tools/<build_tool_version>/aapt
```

#### What is aapt?  
It is a tool that can be used to list, add or remove files in an APK.  

#### What are its power?
```
aapt list - lists content of zip, apk.  
aapt dump - dumps specific information from a file.  
aapt package - packages android resources.  
aapt remove - removes file from zip, apk.  
aapt add - adds file to zip, apk.  
aapt crunch - crunches png files.  
```   

##### Now you have the try some commands -  
___  
To get basic information of the apk  
```
aapt dump badging weather.apk
```  
Output-  
```  
package: name='io.github.archbloom.weather' versionCode='1' versionName='1.0' platformBuildVersionName='6.0-2438415'
sdkVersion:'21'
targetSdkVersion:'23'
uses-permission: name='android.permission.INTERNET'
application-label:'Weather'
application-label-ca:'Weather'
application-label-da:'Weather'
application-label-fa:'Weather'
application-label-ja:'Weather'
application-label-nb:'Weather'
application-label-de:'Weather'
application-label-af:'Weather'
application-label-bg:'Weather'
application-label-th:'Weather'
application-label-fi:'Weather'
application-label-hi:'Weather'
application-label-vi:'Weather'
application-label-sk:'Weather'
application-label-uk:'Weather'
application-label-el:'Weather'
application-label-nl:'Weather'
application-label-pl:'Weather'
application-label-sl:'Weather'
application-label-tl:'Weather'
application-label-am:'Weather'
application-label-in:'Weather'
application-label-ko:'Weather'
application-label-ro:'Weather'
application-label-ar:'Weather'
application-label-fr:'Weather'
application-label-hr:'Weather'
application-label-sr:'Weather'
application-label-tr:'Weather'
application-label-cs:'Weather'
application-label-es:'Weather'
application-label-it:'Weather'
application-label-lt:'Weather'
application-label-pt:'Weather'
application-label-hu:'Weather'
application-label-ru:'Weather'
application-label-zu:'Weather'
application-label-lv:'Weather'
application-label-sv:'Weather'
application-label-iw:'Weather'
application-label-sw:'Weather'
application-label-fr-CA:'Weather'
application-label-lo-LA:'Weather'
application-label-en-GB:'Weather'
application-label-bn-BD:'Weather'
application-label-et-EE:'Weather'
application-label-ka-GE:'Weather'
application-label-ky-KG:'Weather'
application-label-km-KH:'Weather'
application-label-zh-HK:'Weather'
application-label-si-LK:'Weather'
application-label-mk-MK:'Weather'
application-label-ur-PK:'Weather'
application-label-sq-AL:'Weather'
application-label-hy-AM:'Weather'
application-label-my-MM:'Weather'
application-label-zh-CN:'Weather'
application-label-pa-IN:'Weather'
application-label-ta-IN:'Weather'
application-label-te-IN:'Weather'
application-label-ml-IN:'Weather'
application-label-en-IN:'Weather'
application-label-kn-IN:'Weather'
application-label-mr-IN:'Weather'
application-label-gu-IN:'Weather'
application-label-mn-MN:'Weather'
application-label-ne-NP:'Weather'
application-label-pt-BR:'Weather'
application-label-gl-ES:'Weather'
application-label-eu-ES:'Weather'
application-label-is-IS:'Weather'
application-label-es-US:'Weather'
application-label-pt-PT:'Weather'
application-label-en-AU:'Weather'
application-label-zh-TW:'Weather'
application-label-ms-MY:'Weather'
application-label-az-AZ:'Weather'
application-label-kk-KZ:'Weather'
application-label-uz-UZ:'Weather'
application-icon-120:'res/mipmap-mdpi-v4/ic_launcher.png'
application-icon-160:'res/mipmap-mdpi-v4/ic_launcher.png'
application-icon-240:'res/mipmap-hdpi-v4/ic_launcher.png'
application-icon-320:'res/mipmap-xhdpi-v4/ic_launcher.png'
application-icon-480:'res/mipmap-xxhdpi-v4/ic_launcher.png'
application-icon-640:'res/mipmap-xxxhdpi-v4/ic_launcher.png'
application-icon-65534:'res/mipmap-mdpi-v4/ic_launcher.png'
application: label='Weather' icon='res/mipmap-mdpi-v4/ic_launcher.png'
application-debuggable
launchable-activity: name='io.github.archbloom.weather.MainActivity'  label='Weather' icon=''
feature-group: label=''
  uses-feature: name='android.hardware.touchscreen'
  uses-implied-feature: name='android.hardware.touchscreen' reason='default feature for all apps'
main
supports-screens: 'small' 'normal' 'large' 'xlarge'
supports-any-density: 'true'
locales: '--_--' 'ca' 'da' 'fa' 'ja' 'nb' 'de' 'af' 'bg' 'th' 'fi' 'hi' 'vi' 'sk' 'uk' 'el' 'nl' 'pl' 'sl' 'tl' 'am' 'in' 'ko' 'ro' 'ar' 'fr' 'hr' 'sr' 'tr' 'cs' 'es' 'it' 'lt' 'pt' 'hu' 'ru' 'zu' 'lv' 'sv' 'iw' 'sw' 'fr-CA' 'lo-LA' 'en-GB' 'bn-BD' 'et-EE' 'ka-GE' 'ky-KG' 'km-KH' 'zh-HK' 'si-LK' 'mk-MK' 'ur-PK' 'sq-AL' 'hy-AM' 'my-MM' 'zh-CN' 'pa-IN' 'ta-IN' 'te-IN' 'ml-IN' 'en-IN' 'kn-IN' 'mr-IN' 'gu-IN' 'mn-MN' 'ne-NP' 'pt-BR' 'gl-ES' 'eu-ES' 'is-IS' 'es-US' 'pt-PT' 'en-AU' 'zh-TW' 'ms-MY' 'az-AZ' 'kk-KZ' 'uz-UZ'
densities: '120' '160' '240' '320' '480' '640' '65534'
```  

   
___  
```
aapt list weather.apk
```  
List contents of Zip-compatible archive.


http://crushingcode.co/whats-in-the-apk/
http://elinux.org/Android_aapt
-Bhushan Authankar
