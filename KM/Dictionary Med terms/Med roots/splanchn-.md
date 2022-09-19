---
tags: [" #medroot"]
aliases: []
roots: [splanchn-]
forms: [combining]
alphabet:: S
definition: [internal organ, viscus]
---
>[!Note] DEFINITION of splanchn-
>internal organ, [[viscer-|viscus-]]
_____
>[!info]+ ETYMOLOGY of splanchn-
>#greek splanchnon
_____
>[!example]+ RELATED TERMS to splanchn-
>
>| [[splanchn-]] | internal organ | viscus |
|:-------------:|:--------------:|:------:|
|  [[viscer-]]  |      YES       | -       |
_____
>[!tip]+ DERIVATIONS of splanchn-
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