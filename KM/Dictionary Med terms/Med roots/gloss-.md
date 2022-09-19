---
tags: [" #medroot"]
aliases: []
roots: [gloss-, glot-]
forms: [combining]
alphabet:: G
definition: [tongue]
---
>[!Note] DEFINITION of gloss-
>tongue
_____
>[!info]+ ETYMOLOGY of gloss-
>#greek glossa
_____
>[!example]+ RELATED TERMS to gloss-
>
>| [[gloss-]] | tongue |
|:----------:|:------:|
| [[lingu-]] | YES       |
_____
>[!tip]+ DERIVATIONS of gloss-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]