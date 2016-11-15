---
layout: post
title: APK whats in there?
categories: [project]
tags: [Android]
description: Introduction
---   


Few days ago a friend of mine said, 'So you know android, then tell me how to get information about the application when you have only _apk_?'  
I thought for sometime and remembered a tool.

It is easy to get information about the application when you have the source code, information like _minSdkVersion_, _tagetSdkVersion_, _permissions_, _configurations_, _xmltree_, but what if someone gives you '_apk_' and asks you to tell same information?.

The common way to solve this problem is to convert `.apk` file to `.zip` file then open the files. Cool right?  
Not so cool, open `AndroidManifest.xml` file. It has data that you need but you can't read it. It is something like -  

![AndroidManifest.xml](/assets/ico/androidmanifest.png)


There is a tool which can help you to do that -  

### aapt (Android Asset Packaging Tool)    



**First thing first, Where is it?**  
```
<path_to_android_sdk>/build-tools/<build_tool_version>/aapt  

```

#### What is aapt?  
It is a tool that can be used to list, add or remove files in an APK.  


#### What are its powers?  

```
aapt list - lists content of zip, apk.  
aapt dump - dumps specific information from a file.  
aapt package - packages android resources.  
aapt remove - removes file from zip, apk.  
aapt add - adds file to zip, apk.  
aapt crunch - crunches png files.    

```   

##### Now you have some commands -  
___  
To get basic information of the apk  
```
aapt dump badging weather.apk
```  
Output -  
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
To get list of permissions in AndroidManifest  
```  
aapt dump permissions weather.apk  
```  
Output -   
```  
package: io.github.archbloom.weather
uses-permission: name='android.permission.INTERNET'
uses-permission: name='android.permission.WRITE_EXTERNAL_STORAGE'
uses-permission: name='android.permission.READ_EXTERNAL_STORAGE'

```  
____  
To get configuration files  
```  
aapt dump configurations weather.apk
```  
Output -   
```  
anydpi-v21
v21
v23
ldpi-v4
mdpi-v4
ldrtl-mdpi-v17
hdpi-v4
ldrtl-hdpi-v17
xhdpi-v4
ldrtl-xhdpi-v17
xxhdpi-v4
ldrtl-xxhdpi-v17
xxxhdpi-v4
ldrtl-xxxhdpi-v17
sw600dp-v13
ca
da
fa
ja
nb
de
...
tr
cs
es
it
lt
pt
hu
ru
zu
lv
sv
iw
sw
fr-rCA
lo-rLA
en-rGB
bn-rBD
et-rEE
ka-rGE
ky-rKG
km-rKH
zh-rHK
si-rLK
mk-rMK
...
uz-rUZ
large-v4
xlarge-v4
w480dp-v13
w720dp-v13
h320dp-v13
port
land
w600dp-v13
w820dp-v13
h720dp-v13
v18
xlarge-land-v4
v11
v12
v14
v17
ldltr-v21
v22
ldrtl-v23
w360dp-v13
w500dp-v13
```  
___  
To get resources of the apk  
```  
aapt dump resources weather.apk
```  
Output -  
```  
Package Groups (1)
Package Group 0 id=0x7f packageCount=1 name=io.github.archbloom.weather
  Package 0 id=0x7f name=io.github.archbloom.weather
    type 0 configCount=1 entryCount=272
      spec resource 0x7f010000 io.github.archbloom.weather:attr/drawerArrowStyle: flags=0x00000000
      spec resource 0x7f010001 io.github.archbloom.weather:attr/height: flags=0x00000000
      spec resource 0x7f010002 io.github.archbloom.weather:attr/isLightTheme: flags=0x00000000
      spec resource 0x7f010003 io.github.archbloom.weather:attr/title: flags=0x00000000
      spec resource 0x7f010004 io.github.archbloom.weather:attr/navigationMode: flags=0x00000000
      spec resource 0x7f010005 io.github.archbloom.weather:attr/displayOptions: flags=0x00000000
      spec resource 0x7f010006 io.github.archbloom.weather:attr/subtitle: flags=0x00000000
      spec resource 0x7f010007 io.github.archbloom.weather:attr/titleTextStyle: flags=0x00000000
      spec resource 0x7f010008 io.github.archbloom.weather:attr/subtitleTextStyle: flags=0x00000000
      spec resource 0x7f010009 io.github.archbloom.weather:attr/icon: flags=0x00000000  
      ...
      ...
      resource 0x7f0c0084 io.github.archbloom.weather:id/line1: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c0085 io.github.archbloom.weather:id/time: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c0086 io.github.archbloom.weather:id/chronometer: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c0087 io.github.archbloom.weather:id/text2: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c0088 io.github.archbloom.weather:id/line3: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c0089 io.github.archbloom.weather:id/text: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c008a io.github.archbloom.weather:id/info: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c008b io.github.archbloom.weather:id/end_padder: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
        resource 0x7f0c008c io.github.archbloom.weather:id/action_settings: t=0x12 d=0x00000000 (s=0x0008 r=0x00)
    type 12 configCount=1 entryCount=1
      spec resource 0x7f0d0000 io.github.archbloom.weather:menu/menu_main: flags=0x00000000
      config (default):
        resource 0x7f0d0000 io.github.archbloom.weather:menu/menu_main: t=0x03 d=0x00000000 (s=0x0008 r=0x00)
```  
___  

There are some other commands you can try -  
```  
# List contents of Zip-compatible archive.
aapt list -a -v weather.apk

# List compiled xmls in the given assets.
aapt dump xmltree app-debug.apk

# List strings of the given compiled xml assets.
aapt dump xmlstrings app-debug.apk

```   
Explore the other commands.   

Reference Link : [elinux.org/Android_aapt](http://elinux.org/Android_aapt)  
