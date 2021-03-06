#### ReactNative Advertisement of Properties

**About**

- App made in React-Native that consumes an external API and display a listing of properties for rent <br/>

1. Using React-Navigation 5.0
2. Using Styled-Components
3. Using Redux, React-Redux and Redux-Toolkit


#### Apk Build Release 
- [Google Drive](https://drive.google.com/drive/folders/1enftQnjlWAjkX1sjRMbOokM8BhsnGM-a?usp=sharing)

#### Print Screens

**Icon and Splash Screen**
![iconAndSplash](https://user-images.githubusercontent.com/38052474/74075781-0bad2a80-49f3-11ea-9722-43a561e70723.jpg)

**Home and Details Page**
![homeAndDetails](https://user-images.githubusercontent.com/38052474/74075802-254e7200-49f3-11ea-83ea-c7ff49283f89.jpg)


#### Emulate Genymotion

1. install [https://www.genymotion.com/fun-zone/](https://www.genymotion.com/fun-zone/)
2. Create Devices and Start Emulator
3. Open `CMD` as Admin
4. Write `adb devices` and press `Enter`
5. If list of Devices, write `adb connect "device ip"`
6. Run `npx react-native run-android`

#### Debug for Chrome

1. Press `CTRL + M`
2. Select `Debug`
3. Open Chrome Debug [http://localhost:8081/debugger-ui./](http://localhost:8081/debugger-ui./)

#### Tutorial for Icons and Splash Screen

1. Generate automated icons - [https://apetools.webprofusion.com/#/tools/imagegorilla](https://apetools.webprofusion.com/#/tools/imagegorilla)
2. Open the folder `android/app/src/main/res/` and replace the folders with what was previously generated - `drawable`
3. Open the folder `android/app/src/main/res/values` and create file `colors.xml`
4. Edit file with the desired color :

```
<?xml version="1.0" encoding="utf-8" ?>
    <resources>
        <color name="primary" >#7159c1</color>
    </resources>
```

5. Open the folder `android/app/src/main/res/drawable`
6. Create file `background_splash.xml`
7. Edit file with:

```
<?xml version="1.0" encoding="utf-8" ?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@color/primary" />
    <item
        android:width="200dp"
        android:height="200dp"
        android:drawable="@drawable/icon"
        android:gravity="center"
    />
</layer-list>

```

8. Open the file `android/app/src/main/res/values/styles.xml`
9. inside the style tag insert the code:

```
    <item name="android:windowBackground">
        @drawable/background_splash
    </item>
    <item name="android:statusBarColor">
        @color/primary
    </item>

```

10. Open the file `android/app/src/main/res/values/strings.xml` and edit the name of your app

11. Open the file `android/app/src/main/AndroidManifest.xml` and edit the lines:

```
    android:icon="@drawable/icon"
    android:roundIcon="@drawable/icon"
```

12. Tutorial taken from the video - [https://www.youtube.com/watch?v=3Gf9yb53bJM](https://www.youtube.com/watch?v=3Gf9yb53bJM)


#### Generate Release Build

1. Open `CMD for administrator` and `cd C:\Program Files\Java\jdkx.x.x_x\bin`
2. Write `keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
3. Save your password for later use
4. Place the `my-upload-key.keystore` file under the `android/app` directory in your project folder
5. Edit the file `android/gradle.properties` and add :

```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=***
MYAPP_UPLOAD_KEY_PASSWORD=***

// replace *** for correct password

```

6. Edit the file `android/app/build.gradle` and add:

```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...

```

7. Open `CMD for administrator` and `cd android`
8. Write `gradlew bundleRelease`
9. The `.Apk` is in the folder `android/app/build/outputs/apk/release`
10. If you want to test on the emulator or USB, run `npx react-native run-android --variant=release`

