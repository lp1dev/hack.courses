<!-- $theme: default -->

# Cours Node.js

## Jour1
&nbsp;
&nbsp;
>*Vous n'avez pas les bases (pour le moment)*

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;Jérémie Amsellem <lp1.eu>

---

# Sommaire du cours
- Node.js c'est quoi ?
- Node.js et JavaScript
- Pourquoi utiliser Node.js plutôt que du PHP/Python/Ruby[...] ?
- Comment ça marche ?
- Comment on ecrit du Node.js ?

---

# Node.js c'est quoi ?

### Est-ce un framework, une bibliothèque, un serveur ?

Rien de tout ça, Node.js est un environnement d'éxecution (runtime) qui permet de lancer du JavaScript sur de nombreux environnements en dehors d'un navigateur.

Il est vastement utilisé pour la communication réseau (notamment pour créer des API HTTP avec Express.js) mais peut servir pour toutes sortes d'opérations, même plus bas-niveau.

---

# Node.js et JavaScript

Node.js est écrit sur une base de **C++**, il utilise le moteur JavaScript **V8** (crée par **Google** originellement pour **Chrome**).

Il supporte les syntaxes d'**ECMAScript** jusqu'à **ES8** !

Il **incorpore** et est basé sur les paradigmes de programmation évènementielle (**Event Driven Programming**) de JavaScript.

---

# Pourquoi Node.js plutôt qu'autre chose ?

&nbsp;

- Performances
- Gestion asynchrone des évènements sans multi-threading
- Un seul langage pour un front et un back-end

---
## Les performances

Node est particulièrement intéressant en terme de performances si on le compare à PHP, Python et Java (entre autres). 
C'est largement dû à la rapidité d'execution de V8 !

**Par exemple**, [un benchmark réalisé sur plusieurs architectures](https://medium.com/@mihaigeorge.c/web-rest-api-benchmark-on-a-real-life-application-ebb743a5d7a3) pour un simple Hello World (en nombre de requêtes gérées par seconde).

---

![perfs-node](https://cdn-images-1.medium.com/max/800/1*XGTOfo9taLfePZvL3-FZhg.png)

---

## Gestion asynchrone des évènements sans multi-threading

La gestion d'évènements asynchrones est un paradigme inhérent au langage JavaScript. C'est ce comportement qui permet à Node.js de gérer **plusieurs requêtes, en même temps** sans avoir à créer des threads enfants en plus du thread principal !

Sur de nombreuses architectures de **CPU** c'est un gain de performance certain.

---

## Un langage unifié pour le front et le back-end

Finalement, le fait d'avoir un seul et unique langage nécessaire au développement de votre front-end et de votre back-end est un avantage certain pour le coût de développement et le partage de schémas de donnés dans votre stack technique.

Par exemple la logique de vérfication des données d'un objet JavaScript contenant des informations utilisateur

---

# Comment ça marche ?

À la manière d'un runtime Python, Ruby, Perl [...] une fois Node.js installé vous disposez du binaire **node** qui vous permet d'éxecuter des fichier **.js** en lançant la commande
>$> node monfichier.js

Tous les fichiers **JavaScript** sont supportés, mais il est en revanche possible que certaines fonctionnalités et syntaxes propres à l'environnement d'un navigateur ne soient pas utilisables.

*Par exemple il est impossible d'accéder à **window**, car dans le contexte de Node.js il n'y a pas de fenêtre de navigateur !*

---

# Comment on ecrit du Node.js ?

Attaquons-nous maintenant aux principales différences entre les syntaxes **Node.js** et le **JavaScript orienté navigateur** :
- Les imports
- Les API navigateur
- Process
- Quelques modules Node.js
	- fs
	- express
	- ws

> **Note** : Ce contenu a été testé en prenant un environnement Node.js 8.11 en référence, il est possible qu'il y ait quelques différences avec les dernières versions

--- 
## Les imports

Vous vous souvenez peut-être du système d'imports implémenté en ES6, avec des syntaxes du type :

```
export Object
import Object from './file'
```

En Node.js, un système d'import est présent depuis sa création et implémente sa propre gestion des modules utilisant **module.export** et **require** :

*Par exemple :*

### Fichier hello.js :

```
module.exports = 'hello'
```

### Fichier main.js :

```
const hello = require('./hello'); console.log(hello) #prints 'hello'
```

---
### Les API navigateur
&nbsp;
Ça peut être quelque peu déroutant mais en Node.js vous ne pourrez pas accéder à **window, navigator, document**.

C'est en soit logique, ce sont des API présentes et utiles dans le contexte d'utilisation d'un **navigateur web**. 

Dans le cas de Node.js, le code est exécuté en "standalone", il n'est **pas lié à un navigateur** mais **directement exécuté sur votre machine**.

---
### Process
Process est une globale dans le contexte de Node. 
Elle contient des informations et des méthodes utilitaires concernant le processus courant !

Vous pouvez l'utiliser directement sans import dans votre script Node.js.

*Par exemple*

```
const firstArgument = process.argv[1] # affiche le premier argument passé au script
```

Plus d'infos sur [la documentation Node.js](https://nodejs.org/api/process.html#process_process)

--- 
### Le module fs
Le module Node **fs** permet d'intéragir avec le système de fichiers de votre machine.

Il permet (entre autres) de **créer, lire, écrire, supprimer, renommer** des fichiers.

La majorité de ses méthodes sont utilisables de manière **synchrone et asynchrone**.

*Par exemple pour lire le contenu d'un fichier de manière asynchrone:*
```
const fs = require('fs')
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Plus d'informations sur [la documentation Node.js](https://nodejs.org/api/fs.html)

---
### Express.js
---
### ws