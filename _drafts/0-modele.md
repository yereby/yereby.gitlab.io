---
layout: post
title: Modèle d'article
date: 2015-05-08
---

Ce paragraphe sera utilisé en extrait de l'article dans la liste des
articles sur la home. Ainsi qu'en balises meta

## Metadatas
- `layout` correspond au style à appliquer pour un article ;
- `title` est le titre affiché dans la liste sur la home ainsi que sur
  l'article ;
- `date` est la date de publication affichée, ainsi que celle utilisée pour
  construire l'url. Si la date n'est pas définie, le
  jour en cours sera utilisé.

## Exemple de code

```js
const Boom = require('boom')
const Joi = require('joi')
const User = require('../models/user')

// ## Inscription d'un utilisateur

const signupConfig = {
  validate: {
    payload: {
      name: Joi.string().required(),
      email: Joi.string().email().required()
    }
  },
  handler: (request, reply) => {
    const newUser = new User(request.payload)

    newUser.create((err, response) => {
      if (err) {
        switch (err.code) {
          case 11000:
          case 11001:
            return reply(Boom.forbidden('Please provide another email, it already exist'))
          default:
            return reply(Boom.forbidden(err))
        }
      }

      reply(response).created(`/user/${response._id}`)
    })
  }
}
```

### Images

Les images doivent être fournies avec un texte alternatif au moins, et/ou un
titre affiché en tooltip.  
Avec la balise `figure`, l'image sera alignée au centre. Si on ne l'utilise pas
elle sera alignée à gauche du texte.  
Les images ont toutes une largeur max de 100%.

#### Avec une légende
<figure>
  <img src="/assets/2229-hutong.jpg" alt="texte alternatif" title="titre tooltip">
  <figcaption>Légende de la photo</figcaption>
</figure>

#### Sans légende
<figure>
  <img src="/assets/2229-hutong.jpg" alt="texte alternatif" title="titre tooltip">
</figure>

#### En dehors de la balise `figure`
![texte alternatif](/assets/2229-hutong.jpg "titre optionnel")

## Test de titre 2 un peu plus long parce que c'est sympa quand cc'est ^plus long bla bla bla

> Lorem ipsum Esse ullamco __sint sunt__ nostrud ad deserunt nulla irure quis do Excepteur
R
Lorem ipsum Ut nulla sit ea nulla labore minim veniam non in est et mollit id Duis eiusmod enim consectetur magna cillum cillum et et cupidatat laborum Ut sunt laborum adipisicing incididunt do consectetur quis veniam sunt pariatur proident commodo do laborum consectetur aute fugiat exercitation consectetur dolor eiusmod labore sed cupidatat et adipisicing aliquip nostrud ad ea id aliqua

Lorem **ipsum** *ÒEsse* _ullamco_ sint sunt [nostrud ad deserunt](http://pouet.com "Titre du lien") nulla irure quis do Excepteur


| Columns   | deuxieme |
| --------- | -------- |
| titre 1   | bla bla  |
| titre 2   | boulouuu |


tempor fugiat cillum id Duis quis sunt ex tempor reprehenderit anim sit et id velit sit id Excepteur elit et voluptate mollit elit cillum irure sunt culpa fugiat amet occaecat elit officia laboris cillum laborum exercitation dolor irure aliqua sint ut ut dolor amet proident minim dolor ea commodo cupidatat ex incididunt dolor exercitation proident velit veniam mollit aute ex est ullamco cupidatat tempor sint velit minim sint labore occaecat veniam ut ea mollit sed est laboris amet irure qui amet incididunt exercitation minim aute minim laborum ullamco pariatur occaecat in nisi nisi laborum nulla ea enim ullamco irure consequat aute reprehenderit aliqua irure enim Excepteur veniam enim tempor ex Duis sit non ex laboris qui proident laboris ea occaecat eiusmod eu ea elit aliquip mollit cupidatat eiusmod adipisicing velit non deserunt nulla reprehenderit est dolor veniam aute laboris labore laboris fugiat veniam dolore et irure laboris aliquip aute dolor ut minim enim consequat Excepteur anim adipisicing minim dolore labore occaecat dolore nisi ullamco ut dolor occaecat incididunt aliqua do proident esse laboris in id magna est deserunt sint consectetur nostrud veniam do ea quis aute dolore proident sunt aliquip quis Duis aute proident eu et minim ut.
