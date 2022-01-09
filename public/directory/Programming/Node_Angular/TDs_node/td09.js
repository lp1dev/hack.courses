/* TD09

Il est maintenant temps de combiner tout 
ce que nous avons fait jusque là !

N'hésitez pas à copier-coller des parties 
de votre code des TDs précédents, cela vous fera
gagner du temps.

Le but de ce dernier TD est d'avoir un serveur
express possédant deux routes :

Sur votre route "/", vous devez afficher un *formulaire*
demandant à l'utilisateur une liste de hashs md5.

Ce formulaire doit être envoyé à votre route "/crack"
qui s'occupera de casser les hashs passés en paramètre avant
d'afficher les mots de passe correspondants !

Astuce : Relisez les TDs précédents si vous êtres perdus.
Un soucis pour reçevoir des données ? 
Lorsqu'on poste un *formulaire*, les données envoyées sont "urlencoded".

/* TD Part */

const PORT = 8083
const dictionary = 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10k-most-common.txt'

/* Testing Part */

// Ici le test sera fait manuellement
