---
layout: post
title: Comment héberger un blog sur les Github Pages
---


- Il faut créer un nouveau projet qui s'appelera `username.example.io` où
  `username` est bien sûr votre nom d'utilisateur gitlab.

- On arrive sur la page du nouveau projet, qu'on peut cloner chez nous.
`git clone git@gitlab.com:yereby/yereby.gitlab.io.git`

- Il faut créer un fichier `.gitlab-ci.yml` que vous pourrez utiliser pour
  controller la phase de build, comme par exemple la possibilité de mettre à
  jour la prod depuis un peush de n'importe quelle branche, ou seulement de
  master.
  Le contenu de ce fichier est le suivant :

```yml
pages:
  script:
  - gem install jekyll
  - jekyll build -d public/
  artifacts:
    paths:
    - public
  only:
  - master
```

Ça y est, votre projet est en ligne, il ne nous reste qu'à y mettre du contenu.

Lorsqu'on pousse, on peut voir le build en cliquant sur le lien `running`

Et voilà c'est terminé, votre blog est en ligne et accessible depuis
http://yereby.net

- On va maintenant ajouter un nom de domaine

- Pour ça on va dans le menu "Pages"
  On ajoute un nouveau domaine en cliquant sur "New domain"

- On entre le nom de domaine et on y copie les clé du certificat

- On configure les dns de son hébergeur comme indiqué
