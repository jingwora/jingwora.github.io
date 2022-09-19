---
tags: [" #medroot"]
aliases: [-arche]
roots: [arche-, -arche]
forms: [combining]
alphabet:: A
definition: [beginning, origin]
---
>[!Note] DEFINITION of arche-
>beginning, origin
>*see also: [[pro-]] (before), [[prot-]] (primitive)*
_____
>[!info]+ ETYMOLOGY of arche-
>#greek arche
_____
>[!example]+ RELATED TERMS to arche-
>
>| [[arche-]]   | beginning | origin | -   |
| ------------ | --------- | ------ | --- |
| [[-genesis]] | -         | YES    | formation    |
_____
>[!tip]+ DERIVATIONS of arche-
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