---
tags: [" #medroot"]
aliases: [-syrinx]
roots: [syring-, -syrinx]
forms: [combining]
alphabet:: S
definition: [fistula, cavity, oviduct, sweat glands, syringe]
---
>[!Note] DEFINITION of syring-
>1. fistula, cavity
>2. oviduct
>3. sweat glands
>4. syringe
_____
>[!info]+ ETYMOLOGY of syring-
>#greek syrinx, syringos (pipe)
_____
>[!example]+ RELATED TERMS to syring-
>
>| [[syring-]] | fistula | cavity | oviduct | sweat glands | syringe |                 -                  |  -  |
|:-----------:|:-------:|:------:|:-------:|:------------:|:-------:|:----------------------------------:|:---:|
|  [[alve-]]  |    -    |  YES   |    -    |      -       |    -    |               hollow               |  -  |
| [[fistul-]] |   YES   |   -    |    -    |      -       |    -    | abnormal tube-like passage in body |  -  |
|  [[por-]]   |    -    |  YES   |    -    |      -       |    -    |        passage, duct, pore         | opening    |
_____
>[!tip]+ DERIVATIONS of syring-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]