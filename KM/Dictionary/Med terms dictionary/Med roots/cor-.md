---
tags: [" #medroot"]
aliases: [core-]
roots: [cor-]
forms: [combining]
alphabet:: C
definition: [pupil]
---
>[!Note] DEFINITION of cor-
>pupil (of the eye)
_____
>[!info]+ ETYMOLOGY of cor-
>#greek kore (girl)
_____
>[!example]+ RELATED TERMS to cor-
>
_____
>[!tip]+ DERIVATIONS of cor-
>```dataview
>TABLE definition AS Definition 
>FROM -#medroot
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]