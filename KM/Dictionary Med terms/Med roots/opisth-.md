---
tags: [" #medroot"]
aliases: []
roots: [opisth-]
forms: [combining]
alphabet:: O
definition: [located in the back]
---
>[!Note] DEFINITION of opisth-
>located in the back
>*see also: [[dors-]]*
_____
>[!info]+ ETYMOLOGY of opisth-
>#greek opisthen
_____
>[!example]+ RELATED TERMS to opisth-
>
_____
>[!tip]+ DERIVATIONS of opisth-
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