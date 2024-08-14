---
slug: /solutions
---

# Solutions

## J'ai besoin d'aide pour installer des trucs à la maison...

- [Amazon Corretto](https://youtu.be/b7MgJDd1Iks)
- [IntelliJ Idea](https://youtu.be/aWd160BjRYE)
- [GitKraken](https://youtu.be/v10jAu1ELac)

## Flutter

### Aucun projet ne démarre

Vous ne devez pas avoir d'accent dans le nom de votre usager windows. 

Nous vous conseillons d'éviter les accents ou autres caractères spéciaux dans le chemin vers vos projets.

### Le projet démarre mais il y a du rouge partout

Essaie **File** > **Invalidate Cache / Restart** puis **Invalidate Cache / Restart**.

### Je roule flutter pub run build_runner build mais ça ne marche pas

Les vidéos date un peu, nous te recommandons de prendre les dernières versions de :
- [json_serializable](https://pub.dev/packages/json_serializable)
- [build_runner](https://pub.dev/packages/build_runner)
- [json_annotation](https://pub.dev/packages/json_annotation)

Essaie de rouler les commandes suivantes dans le terminal d'Android Studio
- flutter clean
- flutter pub cache repair (en dernier recours ... assez long)
- flutter pub run build_runner clean (en dernier recours)
- flutter pub get
- dart pub upgrade
- flutter pub run build_runner build --delete-conflicting-outputs

Si c'est toujours cassé, appelle le prof

### La commande flutter semble introuvable depuis le terminal

Des fois quand le script roule, la modification du PATH pour flutter se fait après le démarrage d'Android Studio.

La solution: ferme Android Studio et repars le. L'environnement va se recharger.

## Android

### Cannot sync project with gradle files

Essaie **File** > **Invalidate Cache / Restart** puis **Invalidate Cache / Restart**.

### Flutter Doctor ne trouve pas l'Installation d'Android Studio

Faire la commande "`flutter config --android-studio-dir`" suivi du dossier d'Installation **Exemple sous Windows avec le dossier d'installation par défaut**

`flutter config --android-studio-dir="C:\Program Files\Android\Android Studio"`

### *Do you want to uninstall the existing application?*

Vérifie que l'application n'est pas déjà sur le périphérique. Si c'est le cas supprime la.

Dans le dossier du projet, entre dans le dossier app, ensuite supprime le dossier **build**. Cela supprime tous les fichiers compilés et force à recompiler l'ensemble de l'application.

Essaie **File** > **Invalidate Cache / Restart** puis **Invalidate Cache / Restart**.

### Je ne vois pas mon périphérique au lancement de l'appli

Aller dans les options développeur de la tablette / telephone, désactiver Débogage USB, Annuler les autorisations relatives au …, réactiver Débogage USB

Essayer un autre câble, un autre appareil (demander à un collègue)

Redémarrer la tablette

Redémarrer votre environnement de dév

Dans de Gestionnaire des tâches (CTRL + SHIFT + ESCAPE), dans l’onglet Détails, arrêter tous les processus adb.exe

Redémarrer la machine de développement

## Mac

### Mon projet part sur PC mais pas sur MacOS sur un simulateur IOS

- Ouvrez le terminal dans Intellij et tapez "flutter clean"
- Supprimer le fichier Podfile.lock et le dossier Pods
- Assure toi d'ouvrir le module IOS dans Xcode en attachant ton compte
- Ouvrez le terminal dans Intellij et tapez "flutter run"

### "The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions"

Dans le fichier ios/Flutter/AppFrameworkInfo.plist, tu devrais avoir

```
MinimumOSVersion
  11.0
```

### "Error output from CocoaPods"

Il faut sans doute mettre à jours cocoapods pour la machine. Tape la commande "sudo gem install cocoapods"

### "failed to write" le fichier **.last_build_id**
1.  Ouvrir le projet IOS dans Xcode.
2.	Clic sur le nom du projet dans l'explorateur à gauche pour accéder aux réglages du projet.
3.	Sélectionne la bon target dans la section "Targets".
4.	Choisir l'onglet "Build Settings"
5.	Dans le champ de recherche tape "ENABLE_USER_SCRIPT_SANDBOXING".
6.	S'assurer que ﻿ENABLE_USER_SCRIPT_SANDBOXING est à "No".


### "Automatically assigning platform `iOS` with version `9.0` on target `Runner` because no platform was specified"

Verifie le fichier ios/Podfile. La 2ème ligne devrait être décommentée et dire `platform :ios, '11.0'`
