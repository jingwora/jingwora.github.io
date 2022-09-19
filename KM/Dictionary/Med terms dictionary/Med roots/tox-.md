---
tags: [" #medroot"]
aliases: [toxi-]
roots: [tox-, toxi-]
forms: [combining]
alphabet:: T
definition: [poison]
---
>[!Note] DEFINITION of tox-
>poison
_____
>[!info]+ ETYMOLOGY of tox-
>#greek toxon (bow, archery)
>toxicon pharmakon (archery drug) refers to when the Greeks used poisons to hunt, yielding "toxic"
_____
>[!example]+ RELATED TERMS to tox-
>
_____
>[!tip]+ DERIVATIONS of tox-
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