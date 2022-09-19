---
tags: [" #medroot"]
aliases: [-eum]
roots: [-ium]
forms: [suffix, noun]
alphabet:: I
definition: [membrane, connective tissue, body region]
---
>[!Note] DEFINITION of -ium
>1. forms nouns: membrane, connective tissue
>2. forms nouns: body region (occasional)
_____
>[!info]+ ETYMOLOGY of -ium
>#greek
_____
>[!example]+ RELATED TERMS to -ium
>
>|  [[-ium]]  | membrane | connective tissue | body region |    -     |
|:----------:|:--------:|:-----------------:|:-----------:|:--------:|
| [[desm-]]  |    -     |        YES        |      -      | ligament |
| [[hymen-]] |   YES    |         -         |      -      |  hymen   |
_____
>[!tip]+ DERIVATIONS of -ium
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]