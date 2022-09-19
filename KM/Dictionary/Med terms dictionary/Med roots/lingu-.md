---
tags: [" #medroot"]
aliases: []
roots: [lingu-]
forms: [combining]
alphabet:: L
definition: [tongue]
---
>[!Note] DEFINITION of lingu-
>tongue
_____
>[!info]+ ETYMOLOGY of lingu-
>#latin lingua
_____
>[!example]+ RELATED TERMS to lingu-
>
>| [[lingu-]] | tongue |
|:----------:|:------:|
| [[gloss-]] | YES       |
_____
>[!tip]+ DERIVATIONS of lingu-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]