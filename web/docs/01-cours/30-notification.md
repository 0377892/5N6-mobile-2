---
description: Envoyer et recevoir des notifications push
hide_table_of_contents: true
---

# Notifications 🚨

<Row>

<Column>

:::tip Avant la séance :

Regardez la doc de [firebase](https://firebase.google.com/).

Dans les séances suivantes, nous allons utiliser plusieurs produits de firebase:

- [Cloud Messaging](https://firebase.google.com/docs/cloud-messaging?hl=fr) : envoyer et recevoir des notifications
- [Authentification](https://firebase.google.com/products/auth) : l'authentification
- [Cloud Firestore](https://firebase.google.com/products/firestore) : la "BD", avec une approche un peu différente de SQL
- [Cloud Storage](https://firebase.google.com/products/storage) : le stockage de fichier, principalement pour nos images

Finalement comme Flutter et Firebase sont 2 plateformes gérées par Google, elles sont assez bien intégrées.

### Étape 1 - Créer un projet Firebase

Pour la mise en place de Firebase, vous devez suivre les étapes décrites **[ici (Configuration de Firebase)](notice-firebase)**.

### Étape 2 - Configurer le serveur pour l'envoie de notifications

Le serveur KickMyB supporte déjà l'envoie de notifications. Par contre, il faut le configurer pour utiliser des clés sercrètes fournies par votre projet Firebase. Voyez comment faire **[ici](notice-firebase-messaging)**.

### Étape 3 - Recevoir les notifications sur Flutter

Maintenant que le serveur KickMyB est configuré pour envoyer des notifications, vous devez être capable de les recevoir sur votre projet Flutter.

Suivez les todos dans le [code suivant](https://github.com/departement-info-cem/projet-prog/tree/main/code/DemoNotifications/demo_notification_flutter)

Vous pouvez aussi vous référer à cette vidéo :

<Video url="https://www.youtube.com/watch?v=rUWRijgkx14" />

À noter que cette vidéo a été réalisée pour être utilisée avec un projet .NET Core, mais puisque les notifications sont déjà intégrées dans le serveur KickMyB, vous pouvez passer rapidement sur la partie .NET Core, pour vous concentrer sur la partie Flutter.

:::

</Column>

<Column>

:::info Séance :

Le but est de mettre en place le projet aujourd'hui et de compléter la configuration.

On regardera comment les notifications sont envoyées à partir du serveur, et comment un serveur de notification fait pour savoir à qui envoyer une notification.

Vous travaillerez sur l'implémentation des notifications sur votre travail pratique.

:::

</Column>

</Row>

:::note Exercices

Pas d'exercices, travaillez sur votre TP.

:::
