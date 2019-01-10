# Trivia App

Maintenant que nous avons vue la théorie par rapport à l'utilisation du Framework Ionic,
il est temps de passer à la pratique !

Le projet que vous allez réaliser est une application de quizz, permettant aux utilisateurs de répondre à des questions,
chaque bonne réponse trouvée ajoutera des points à son score et chaque réponse fausse en retirera.

Il doit être possible de sélectionner un niveau de difficulté :

**Easy, Medium ou Hard.**

Le calcul des points se fera de la sorte en fonction du niveau de difficulté : 

**Easy** : 5 points par bonne réponse, -5 points par réponse fausse

**Medium** : 10 points par bonne réponse, -10 points par réponse fausse

**Hard** : 20 points par bonne réponse, -20 points par réponse fausse

Il est tout à fait possible d'obtenir un score négatif en fin de partie.

Une partie est composée de 20 questions, auxquelles il faut répondre le plus rapidement possible.

## Communication avec des APIs

Les questions doivent être récupérées sur https://opentdb.com/api_config.php.
 
À la fin de la partie, le score et le temps de la partie doivent pouvoir (soit automatiquement, soit au choix de l'utilisateur) être partagés sur le leaderboard global contenant l'ensemble des scores des joueurs identifiés par leur nickname et leur avatar **(l'URL d'une image)**.
Ce leaderboard est accessible sur https://leaderboard.lp1.eu.

À chaque nom d'utilisateur devra de base être associé un avatar **différent**, vous pouvez utiliser http://avatars.adorable.io/ pour générer des URLs d'avatars.

## Fonctionnalités Obligatoires

Il est nécessaire de pouvoir enregistrer son nom d'utilisateur (ou nickname) dans l'application.

Celui-ci doit être conservé au redémarrage de l'application.

Vous pouvez réaliser autant d'écrans que vous jugez nécessaire **tant que votre application est simple à utiliser**.

Les questions seront affichées à l'écran une par une, et les points, ainsi que le temps affichés et mis à jour en temps réel sur l'affichage.

Le type des questions selectionnées sera **ANY** (choix multiples + vrai/faux). 

Il doit également être possible de jouer en mode "hors-ligne" au jeu sur un nombre plus limité de questions.
Le score et le temps, en fin de partie doivent être sauvegardé malgré l'abscence de connexion et envoyés à la reconnexion.

Un affichage du leaderboard dans l'application est également nécessaire !

## Critères de notation

En premier lieu, la présence et la qualité de l'implémentation des fonctionnalités sera prise en compte.

**L'UI doit être simple à utiliser** et **cohérente visuellement**, les différentes vues que vous réaliserez se doivent également d'être fonctionnelles quel que soit le type d'appareil et la taille d'écran utilisée.

**L'architecture des fichiers et du code de** votre projet devra, même si elle ne doit pas coller parfaitement à un modèle architectural être **claire et représenter les fonctionnalités et leurs relations au sein de votre projet**.

**La présence, couverture de tests et leur pertinence seront également comptabilisés dans le barème.**

Il est **indispensable que chacun des rendus soit différent**, dans le cas où deux projets supposés être différents partageraient plus de 70% de leur code, le code mis en commun **ne sera pas compté dans la note finale**.

*Dans le cas où certaines parties de votre code ne seraient pas absolument explicites, je vous recommande de le commenter.*

**Votre dossier node_modules ne doit PAS faire partie du dépot rendu !**

## Bonus Possibles

En bonus, une fois que vous avez terminé l'ensemble des autres fonctionnalités vous pouvez ajouter : 

- Un choix du sujet du questionnaire
- De la lecture en text-to-speech des questions.

Il est également possible de vous interfacer avec d'autres APIs si vous avez des idées de nouvelles fonctionnalités intéréssantes.

