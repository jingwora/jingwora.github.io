---
tags: [" #medroot"]
aliases: [ento-, end-, ent-]
forms: [prefix]
roots: [endo-, ento-, end-, ent-]
alphabet:: E
definition: [within]
---
>[!Note] DEFINITION of endo-
>within (location)
_____
>[!info]+ ETYMOLOGY of endo-
>#greek
>- end- before {vowel}
>- ent- before {vowel}
_____
>[!example]+ RELATED TERMS to endo-
>
>| [[endo-]]  | within |   -   |   -    |
|:----------:|:------:|:-----:|:------:|
|  [[en-]]   |  YES   |  in   |  into  |
|  [[eso-]]  |  YES   | inner | inward |
| [[intra-]] |  YES   |   -   | -       |
_____
>[!tip]+ DERIVATIONS of endo-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]